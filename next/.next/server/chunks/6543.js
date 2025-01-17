"use strict";
exports.id = 6543;
exports.ids = [6543];
exports.modules = {

/***/ 81489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RS": () => (/* binding */ termsOfDataUseText),
/* harmony export */   "gD": () => (/* binding */ cancelReservationText),
/* harmony export */   "uV": () => (/* binding */ privacyPolicyText)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

const privacyPolicyText = "Оформляя заказ, вы соглашаетесь с нашей политикой конфиденциальности. Мы защищаем ваши данные и используем их только для обработки заказа и обеспечения качественного обслуживания. Мы не передаем вашу информацию третьим лицам без вашего согласия. Если у вас есть вопросы, свяжитесь с нами.";
const termsOfDataUseText = "Соглашаясь с условиями использования данных, вы разрешаете нам использовать их в соответствии с нашей политикой конфиденциальности. Мы не передаем данные третьим лицам без вашего согласия, кроме случаев, когда это необходимо для выполнения наших обязательств или по закону. Если у вас есть вопросы, свяжитесь с нами.";
const cancelReservationText = (cancellationPolicy)=>{
    const cancellationLocalDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(cancellationPolicy?.freeCancellationDeadlineLocal).format("DD.MM.YYYY HH:mm");
    const initialMessage = "В случае отмены бронирования";
    if (cancellationPolicy?.freeCancellationPossible) {
        return cancellationPolicy?.freeCancellationDeadlineLocal ? `${initialMessage} до ${cancellationLocalDate} (по местному времени отеля) вам возвращается вся оплаченная сумма. При отмене после ${cancellationLocalDate}
      с вас будет удержан штраф в размере ${cancellationPolicy.penaltyAmount} ₽.` : `${initialMessage}  вам возвращается оплаченная сумма.`;
    }
    return `${initialMessage} вам возвращается оплаченная сумма с удержанием штрафа в размере ${cancellationPolicy?.penaltyAmount} ₽.`;
};


/***/ }),

/***/ 54952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_DataTermsAndPrivacyPolicy)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./modules/core/components/icons/CheckMark.tsx
var CheckMark = __webpack_require__(96910);
;// CONCATENATED MODULE: ./modules/core/components/DataTermsAndPrivacyPolicy/styles.ts


const DataTermsAndPrivacyPolicyBlock = external_styled_components_default().div.withConfig({
    componentId: "sc-c99a7ba-0"
})`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  border-radius: 32px;
  ${({ theme  })=>`
    border: 2px solid ${theme.colors.secondary};
  `};
`;
const InfoBlock = external_styled_components_default().div.withConfig({
    componentId: "sc-c99a7ba-1"
})`
  display: grid;
  grid-template-columns: 5% 95%;
  grid-column-gap: 15px;
  grid-row-gap: 4px;
  grid-row: 2;
`;
const CheckMarkContainer = external_styled_components_default()(CheckMark/* default */.Z).withConfig({
    componentId: "sc-c99a7ba-2"
})`
  align-self: center;
`;
const InfoBlockTitle = external_styled_components_default().h3.withConfig({
    componentId: "sc-c99a7ba-3"
})`
  white-space: nowrap;
  grid-column: 2;
  ${({ theme  })=>`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
  `};
`;
const InfoBlockDescription = external_styled_components_default().h4.withConfig({
    componentId: "sc-c99a7ba-4"
})`
  grid-column: 2;
  ${({ theme  })=>`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.size.body3};
    font-weight: ${theme.font.weight.regular};
  `};
`;

;// CONCATENATED MODULE: ./modules/core/components/DataTermsAndPrivacyPolicy/index.tsx



const DataTermsAndPrivacyPolicy = ({ items  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(DataTermsAndPrivacyPolicyBlock, {
        children: items.map((item, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InfoBlock, {
                children: [
                    item.icon ? item.icon : /*#__PURE__*/ jsx_runtime_.jsx(CheckMarkContainer, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(InfoBlockTitle, {
                        children: item.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InfoBlockDescription, {
                        children: item.text
                    })
                ]
            }, index);
        })
    });
};
/* harmony default export */ const components_DataTermsAndPrivacyPolicy = (DataTermsAndPrivacyPolicy);


/***/ }),

/***/ 44643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_PriceComponent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./modules/core/components/PriceComponent/styles.ts

const PriceMainTitle = external_styled_components_default().h3.withConfig({
    componentId: "sc-5c378-0"
})`
  ${({ theme  })=>`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle1};
    font-weight: ${theme.font.weight.regular};
  `};
`;
const PriceDataBlock = external_styled_components_default().div.withConfig({
    componentId: "sc-5c378-1"
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`;
const PriceDataTitle = external_styled_components_default().h4.withConfig({
    componentId: "sc-5c378-2"
})`
  ${({ theme  })=>`
    color: #4F4F4F;
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.regular};
  `};
`;
const PriceDataValue = external_styled_components_default().h4.withConfig({
    componentId: "sc-5c378-3"
})`
  ${({ theme  })=>`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.regular};
  `};
`;
const PriceLine = external_styled_components_default().span.withConfig({
    componentId: "sc-5c378-4"
})`
  width: 100%;
  height: 1px;
  background: #8daec1;
`;
const PriceBlock = external_styled_components_default().div.withConfig({
    componentId: "sc-5c378-5"
})`
  display: flex;
  padding: 24px;
  border-radius: 32px;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  background: #c6e1f3;
  height: auto;
`;

;// CONCATENATED MODULE: ./modules/core/components/PriceComponent/index.tsx



const PriceComponent = ({ upSection , downSection  })=>{
    const total = downSection?.list.reduce((acc, curr)=>acc + curr?.price, 0);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceBlock, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(PriceMainTitle, {
                        children: "Стоимость"
                    }),
                    upSection.list.map((el)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceDataBlock, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceDataTitle, {
                                    children: [
                                        el.listTitle,
                                        ":"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceDataValue, {
                                    children: [
                                        el.price,
                                        " ₽"
                                    ]
                                })
                            ]
                        }, el.listTitle))
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PriceLine, {}),
            downSection && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceDataBlock, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(PriceMainTitle, {
                                children: "Итого"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceMainTitle, {
                                children: [
                                    total,
                                    " ₽"
                                ]
                            })
                        ]
                    }),
                    downSection?.list.map((el)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceDataBlock, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceDataTitle, {
                                    children: [
                                        el.listTitle,
                                        ":"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceDataValue, {
                                    children: [
                                        el.price,
                                        " ₽"
                                    ]
                                })
                            ]
                        }, el.listTitle))
                ]
            })
        ]
    });
};
/* harmony default export */ const components_PriceComponent = (PriceComponent);


/***/ }),

/***/ 96910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CheckMark = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 12,
        height: 12,
        fill: "none",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            stroke: "#8DAEC1",
            strokeLinecap: "round",
            strokeWidth: 2,
            d: "m11 1-5.43 9.05a1 1 0 0 1-1.457.285L1 8"
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckMark);


/***/ })

};
;