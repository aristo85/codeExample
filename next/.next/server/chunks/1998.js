"use strict";
exports.id = 1998;
exports.ids = [1998];
exports.modules = {

/***/ 32762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_StickyFormFooter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./modules/core/components/Buttons/ButtonBasic.tsx + 1 modules
var ButtonBasic = __webpack_require__(42143);
;// CONCATENATED MODULE: ./modules/core/components/StickyFormFooter/styles.ts


const FormFooter = external_styled_components_default().div.withConfig({
    componentId: "sc-e6ade91f-0"
})`
  border-top: 2px solid #1d7abd;
  padding-top: 32px;
  background: #fff;
  display: flex;
  direction: rtl;
  gap: 16px;
  max-width: 1440px;

  ${({ sticky , theme  })=>sticky && external_styled_components_.css`
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      max-width: 1180px;
      padding: 32px;
      z-index: 1001;

      ${theme.media.down("md")`
        margin: 0 ${theme.layouts.paddingMd};
      `}
    `}
  ${({ theme , sticky  })=>external_styled_components_.css`
    ${theme.media.down("sm")`
    margin: 0 ${theme.layouts.paddingSm};
    border:none;
    padding: 16px 0 16px 0;
    
    &.step3 {
      flex-direction: column;
    }
    `}
  `}
`;
const FooterBtn = external_styled_components_default()(ButtonBasic/* default */.Z).withConfig({
    componentId: "sc-e6ade91f-1"
})`
  width: 256px;
  min-width: fit-content;

  ${({ theme , hidden  })=>external_styled_components_.css`
    display: ${hidden ? "none" : "unset"};
    ${theme.media.down("sm")`
      width: 100%;
      font-size: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
    ${theme.media.down("xxs")`
        min-width: auto;
        padding: 8px;
        font-size: 16px;
    `}
  `}
`;

;// CONCATENATED MODULE: ./modules/core/components/StickyFormFooter/index.tsx



const StickyFormFooter = ({ totalSteps , currentStep , handleNextStep , handleBackStep , sticky , booking , className  })=>{
    const isLastStep = currentStep === totalSteps;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FormFooter, {
        sticky: sticky,
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(FooterBtn, {
                hidden: !isLastStep,
                dark: true,
                type: "submit",
                children: booking ? "Подтвердить бронирование" : "Далее"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FooterBtn, {
                hidden: isLastStep,
                dark: true,
                type: "button",
                onClick: handleNextStep,
                children: "Далее"
            }),
            currentStep > 1 && /*#__PURE__*/ jsx_runtime_.jsx(FooterBtn, {
                type: "button",
                onClick: handleBackStep,
                children: "Назад"
            })
        ]
    });
};
/* harmony default export */ const components_StickyFormFooter = (StickyFormFooter);


/***/ }),

/***/ 60268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ useFormStepsWithHistory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const useFormStepsWithHistory = (totalSteps, isFormEmpty, isResettable)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const setStep = (step)=>{
        const id = router.query.id;
        const url = id ? router.pathname.replace("[id]", `${id}`) : router.pathname;
        if (step <= totalSteps) {
            router.push(`${url}?step=${step}`, undefined, {
                shallow: true
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Check if step exists in URL and set it
        if (router.query.step) {
            setCurrentStep(Number(router.query.step));
        }
    }, [
        router.query.step
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const queryStep = router.query.step ?? 1;
        // Check if step exists in URL and set it
        if (isFormEmpty && +queryStep > 1 && isResettable) {
            const baseUrl = router.pathname.includes("[id]") ? router.asPath.split("?step")[0] : router.pathname;
            router.push(`${baseUrl}?step=1`);
        }
    }, [
        isFormEmpty,
        router,
        isResettable
    ]);
    return {
        currentStep,
        setStep
    };
};


/***/ })

};
;