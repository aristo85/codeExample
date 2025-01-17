"use strict";
exports.id = 4473;
exports.ids = [4473];
exports.modules = {

/***/ 54473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PaymentSuccessComponent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./modules/core/components/PaymentSuccessComponent/styles.ts

const BreadcrumbsBlock = external_styled_components_default().div.withConfig({
    componentId: "sc-73ad8447-0"
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
const SuccessContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-73ad8447-1"
})`
  width: 100%;
  height: calc(100vh - 256px); // subtract header
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
const SuccessTitle = external_styled_components_default().h1.withConfig({
    componentId: "sc-73ad8447-2"
})`
  color: #232222;
  font-size: 34px;
  text-align: center;

  ${({ theme  })=>theme.media.down("sm")`
    font-size: 32px;
    ${theme.media.down("xs")`
    font-size: 32px;
    `}
  `}
`;
const SuccessSubTitle = external_styled_components_default().h2.withConfig({
    componentId: "sc-73ad8447-3"
})`
  color: #4f4f4f;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  max-width: 467px;
  white-space: pre-wrap;
`;

// EXTERNAL MODULE: ./modules/core/components/icons/BigCheckIcon.tsx
var BigCheckIcon = __webpack_require__(57898);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: ./modules/core/components/Buttons/ButtonBasic.tsx + 1 modules
var ButtonBasic = __webpack_require__(42143);
;// CONCATENATED MODULE: ./modules/core/components/PaymentSuccessComponent/index.tsx






const SuccessComponent = ({ icon , paymentTitle , paymentSubTitle , buttonInfo  })=>{
    const router = (0,router_.useRouter)();
    const { id  } = router.query;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SuccessContainer, {
        children: [
            icon ? icon : /*#__PURE__*/ jsx_runtime_.jsx(BigCheckIcon/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SuccessTitle, {
                children: paymentTitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SuccessSubTitle, {
                children: paymentSubTitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: buttonInfo.href(id),
                children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonBasic/* default */.Z, {
                    dark: true,
                    type: "button",
                    children: buttonInfo.title
                })
            })
        ]
    });
};
/* harmony default export */ const PaymentSuccessComponent = (SuccessComponent);


/***/ })

};
;