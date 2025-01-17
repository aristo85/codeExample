"use strict";
exports.id = 9043;
exports.ids = [9043];
exports.modules = {

/***/ 49043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useCancelBooking)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_booking_apiBookingSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43180);
/* harmony import */ var _useNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51949);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68270);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);






const useCancelBooking = ()=>{
    const toast = (0,_useNotification__WEBPACK_IMPORTED_MODULE_2__/* .useNotification */ .l)();
    const [cancellationId, setCancellationId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [penaltyAmount, setPenaltyAmount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [isCancellationModalOpen, setIsCancellationModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_4__/* .selectUserToken */ .vI);
    const [calculatePenalty, { isLoading: isCalculatePenaltyLoading  }] = (0,_modules_booking_apiBookingSlice__WEBPACK_IMPORTED_MODULE_1__/* .useCalculatePenaltyMutation */ .f4)();
    const [cancel, { isLoading: isLoadingCancel  }] = (0,_modules_booking_apiBookingSlice__WEBPACK_IMPORTED_MODULE_1__/* .useCancelBookingMutation */ .xg)();
    const modalCancelButtonClickFunction = ()=>{
        setCancellationId(null);
        setIsCancellationModalOpen(false);
    };
    const user = jwt_decode__WEBPACK_IMPORTED_MODULE_5___default()(token)?.user;
    const isTourist = user.roleType === _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_4__/* .RoleTypes.TOURIST */ .dC.TOURIST;
    const onCancelButtonClick = async (id)=>{
        if (isTourist) {
            try {
                setCancellationId(id);
                const response = await calculatePenalty(id).unwrap();
                setPenaltyAmount(response.data.amount);
                setIsCancellationModalOpen(true);
            } catch (error) {
                setCancellationId(null);
                setIsCancellationModalOpen(false);
            }
        } else {
            setCancellationId(id);
            setIsCancellationModalOpen(true);
        }
    };
    const onCancelButtonWithoutCalculatePenaltyClick = (id)=>{
        setCancellationId(id);
        setIsCancellationModalOpen(true);
    };
    const modalAcceptButtonClickFunction = async ()=>{
        if (!cancellationId) return;
        try {
            const response = await cancel({
                id: cancellationId
            }).unwrap();
            response.success && toast("Вы успешно отменили бронирование", "success");
        } catch (error) {
            console.error(error);
        } finally{
            setIsCancellationModalOpen(false);
            setCancellationId(null);
        }
    };
    return {
        cancellationId,
        penaltyAmount,
        isCancellationModalOpen,
        isCalculatePenaltyLoading,
        isLoadingCancel,
        onCancelButtonClick,
        modalCancelButtonClickFunction,
        modalAcceptButtonClickFunction,
        onCancelButtonWithoutCalculatePenaltyClick
    };
};


/***/ })

};
;