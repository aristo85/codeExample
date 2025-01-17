"use strict";
exports.id = 6185;
exports.ids = [6185];
exports.modules = {

/***/ 20293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ BookingStatus)
/* harmony export */ });
var BookingStatus;
(function(BookingStatus) {
    BookingStatus["WAITING_PARTNER"] = "WAITING_PARTNER";
    BookingStatus["WAITING_PAYMENT"] = "WAITING_PAYMENT";
    BookingStatus["PARTNER_ACCEPTED"] = "PARTNER_ACCEPTED";
    BookingStatus["PAID"] = "PAID";
    BookingStatus["CANCELLED"] = "CANCELLED";
})(BookingStatus || (BookingStatus = {}));


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

/***/ 27709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ BookingCancellationModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_auth_components_ModalAuth_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84276);
/* harmony import */ var _modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42143);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28267);
/* harmony import */ var _modules_placement_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_4__]);
_styles__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const BookingCancellationModal = ({ closeButton , cancelBooking , isOpen , penaltyAmount  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .BookingCancellationModalWrapper */ .nN, {
        isOpen: isOpen,
        onClose: closeButton,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_auth_components_ModalAuth_styles__WEBPACK_IMPORTED_MODULE_2__/* .ModalTitle */ .r6, {
                children: "Вы уверены, что хотите отменить бронирование?"
            }),
            penaltyAmount ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .ModalSubtitle */ .l2, {
                children: `Сумма штрафа - ${penaltyAmount} ${(0,_modules_placement_constants__WEBPACK_IMPORTED_MODULE_5__/* .currencyNameFormatter */ .fd)(penaltyAmount || 0, _modules_placement_constants__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyEnum.rubles */ .Tl.rubles)}`
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .ButtonsContainer */ .YD, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        onClick: closeButton,
                        children: "Нет"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        dark: true,
                        onClick: cancelBooking,
                        children: "Да"
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 28267:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YD": () => (/* binding */ ButtonsContainer),
/* harmony export */   "l2": () => (/* binding */ ModalSubtitle),
/* harmony export */   "nN": () => (/* binding */ BookingCancellationModalWrapper)
/* harmony export */ });
/* harmony import */ var _modules_auth_components_ModalAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57681);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_auth_components_ModalAuth__WEBPACK_IMPORTED_MODULE_0__]);
_modules_auth_components_ModalAuth__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const BookingCancellationModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_modules_auth_components_ModalAuth__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).withConfig({
    componentId: "sc-df9bad11-0"
})``;
const ButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-df9bad11-1"
})`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  margin-top: 30px;
`;
const ModalSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h3.withConfig({
    componentId: "sc-df9bad11-2"
})`
  ${({ theme  })=>`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight};
    font-size: ${theme.font.size.subtitle3};
    text-align: center;
    margin-top: 16px;
  `}
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;