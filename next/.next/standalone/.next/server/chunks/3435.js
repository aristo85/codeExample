"use strict";
exports.id = 3435;
exports.ids = [3435];
exports.modules = {

/***/ 13435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* binding */ HeaderWithSteps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./modules/core/components/HeaderWithSteps/styles.ts

const HeaderWithStepsContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-3b287813-0"
})`
  ${({ theme  })=>`
    display: flex;
    flex-direction: column;
    gap: 16px;
    ${theme.media.down("sm")`
        gap: 8px;
    `}
  `}
`;
const HeaderTitle = external_styled_components_default().h2.withConfig({
    componentId: "sc-3b287813-1"
})`
  ${({ theme  })=>`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.heading2};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down("sm")`
        font-size: ${theme.font.size.subtitle1};
    `}
  `}
`;
const HeaderStepsContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-3b287813-2"
})`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
const HeaderStep = external_styled_components_default().h2.withConfig({
    componentId: "sc-3b287813-3"
})`
  ${({ theme , currentStep  })=>`
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.subtitle1};
    color: ${currentStep ? theme.colors.default : "#8daec1"};
    ${theme.media.down("xs")`
        font-size: ${theme.font.size.subtitle2};
    `};
  `}
`;
const HeaderSubTitle = external_styled_components_default().h3.withConfig({
    componentId: "sc-3b287813-4"
})`
  ${({ theme  })=>`
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
  `}
`;

;// CONCATENATED MODULE: ./modules/core/components/HeaderWithSteps/index.tsx



const HeaderWithSteps = ({ currentStep , stepsAmount , subTitle , title  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderWithStepsContainer, {
        children: [
            title && typeof title === "string" ? /*#__PURE__*/ jsx_runtime_.jsx(HeaderTitle, {
                children: title
            }) : title,
            currentStep && stepsAmount && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderStepsContainer, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderStep, {
                        currentStep: true,
                        children: [
                            "Шаг ",
                            currentStep
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderStep, {
                        children: [
                            "/",
                            stepsAmount
                        ]
                    })
                ]
            }),
            subTitle && /*#__PURE__*/ jsx_runtime_.jsx(HeaderSubTitle, {
                children: subTitle
            })
        ]
    });
};


/***/ })

};
;