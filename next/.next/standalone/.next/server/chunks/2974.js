"use strict";
exports.id = 2974;
exports.ids = [2974];
exports.modules = {

/***/ 72974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_booking_apiBookingSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43180);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_payment_paymentSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37574);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




const usePayment = ()=>{
    const [reInitPayment] = (0,_modules_booking_apiBookingSlice__WEBPACK_IMPORTED_MODULE_0__/* .useReInitPaymentMutation */ .L$)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const paymentResponseHandler = async ({ bookingId , itemId , type , additionalQuery  })=>{
        const data = await reInitPayment(bookingId).unwrap();
        if (data.success) {
            await dispatch((0,_modules_payment_paymentSlice__WEBPACK_IMPORTED_MODULE_2__/* .setPaymentData */ .Ds)(data.data));
            await router.push(`/booking/${type.toLowerCase()}/${itemId}/payment?bookingId=${bookingId}${additionalQuery ? `&${additionalQuery}` : ""}`);
        }
    };
    return [
        paymentResponseHandler
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePayment);


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