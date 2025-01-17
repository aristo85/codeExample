"use strict";
exports.id = 8248;
exports.ids = [8248];
exports.modules = {

/***/ 82390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useHasMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useHasMounted = ()=>{
    const [hasMounted, setHasMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setHasMounted(true);
    }, []);
    return hasMounted;
};


/***/ }),

/***/ 51949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useNotification)
/* harmony export */ });
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_0__);

function useNotification() {
    const { enqueueSnackbar  } = (0,notistack__WEBPACK_IMPORTED_MODULE_0__.useSnackbar)();
    const handleClickVariant = (message, variant)=>{
        // variant could be success, error, warning, info, or default
        enqueueSnackbar(message, {
            variant
        });
    };
    return handleClickVariant;
}


/***/ }),

/***/ 98726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_booking_apiBookingSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43180);
/* harmony import */ var _modules_payment_paymentSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37574);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57441);
/* harmony import */ var _useHasMounted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82390);
/* harmony import */ var _useNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51949);







const useYooKassaPayment = ()=>{
    const dispatch = (0,___WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const { confirmationToken , returnUrl  } = (0,_modules_payment_paymentSlice__WEBPACK_IMPORTED_MODULE_2__/* .useAppPaymentSelector */ .hH)();
    const [reInitPayment, { isLoading  }] = (0,_modules_booking_apiBookingSlice__WEBPACK_IMPORTED_MODULE_1__/* .useReInitPaymentMutation */ .L$)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { bookingId  } = router.query;
    const isMount = (0,_useHasMounted__WEBPACK_IMPORTED_MODULE_5__/* .useHasMounted */ .f)();
    const toast = (0,_useNotification__WEBPACK_IMPORTED_MODULE_6__/* .useNotification */ .l)();
    const onLoadYooKassa = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        const checkout = new window.YooMoneyCheckoutWidget({
            confirmation_token: confirmationToken ?? "",
            return_url: returnUrl ?? "",
            error_callback: (e)=>{
                const message = e.error === "token_expired" ? "Истекло время оплаты" : "Что-то пошло не так";
                toast(message, "error");
            }
        });
        checkout.render("payment-form");
    }, [
        toast,
        confirmationToken,
        returnUrl
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!confirmationToken && bookingId) {
            (async ()=>{
                try {
                    const result = await reInitPayment(Number(bookingId)).unwrap();
                    if (result.data && result.data.confirmationToken) {
                        dispatch((0,_modules_payment_paymentSlice__WEBPACK_IMPORTED_MODULE_2__/* .setPaymentData */ .Ds)(result.data));
                    } else {
                        throw new Error("Failed to fetch confirmationToken.");
                    }
                } catch (error) {
                    console.error("error==>", error);
                }
            })();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        bookingId,
        confirmationToken
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (confirmationToken && isMount) {
            const script = document.createElement("script");
            script.src = "https://yookassa.ru/checkout-widget/v1/checkout-widget.js";
            script.async = true;
            script.onload = ()=>onLoadYooKassa();
            document.body.appendChild(script);
            return ()=>{
                document.body.removeChild(script);
            };
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isMount,
        confirmationToken
    ]);
    return {
        confirmationToken,
        returnUrl,
        isLoading
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useYooKassaPayment);


/***/ }),

/***/ 36788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ payment)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(40968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./modules/core/components/Spinner/index.tsx
var Spinner = __webpack_require__(52901);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./modules/payment/styles.ts

const PaymentContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-ccba93-0"
})`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const PaymentButtonBack = external_styled_components_default().div.withConfig({
    componentId: "sc-ccba93-1"
})`
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  width: 80px;
  color: ${({ theme  })=>theme.colors.primary};
`;
const PaymentButtonBackTitle = external_styled_components_default().h3.withConfig({
    componentId: "sc-ccba93-2"
})`
  color: ${({ theme  })=>theme.colors.primary};
  font-size: 20px;
  cursor: pointer;
`;
const BreadcrumbsBlock = external_styled_components_default().div.withConfig({
    componentId: "sc-ccba93-3"
})`
  padding-bottom: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme  })=>theme.media.down("sm")`
    display: none;
    padding-bottom: 16px;
  `}
`;
const TextInfo = external_styled_components_default().p.withConfig({
    componentId: "sc-ccba93-4"
})`
  color: #4f4f4f;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  max-width: 460px;
  align-self: center;
  ${({ theme  })=>external_styled_components_.css`
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.body2};
  `}
`;

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: ./modules/core/components/FilterCalendar/styles.ts
var styles = __webpack_require__(33983);
;// CONCATENATED MODULE: ./modules/payment/index.tsx







const Payment = ({ isLoading  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Go2Kavkaz : Оплата"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Spinner/* default */.Z, {
                showSpinner: isLoading
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PaymentContainer, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PaymentButtonBack, {
                        onClick: ()=>{
                            void router.back();
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(styles/* ArrowLeftButton */.Ag, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(PaymentButtonBackTitle, {
                                children: "Назад"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TextInfo, {
                        children: "Если у вас включен VPN, то вы можете столкнуться с проблемами при оплате. Рекомендуем выключить VPN сервисы."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "payment-form"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const payment = (Payment);


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