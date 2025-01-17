"use strict";
exports.id = 5540;
exports.ids = [5540];
exports.modules = {

/***/ 85540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TableComponents_TableStatus)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./modules/excursion/excursion.types.ts
var excursion_types = __webpack_require__(12439);
;// CONCATENATED MODULE: ./modules/core/components/TableComponents/TableStatus/styles.ts


const TableStatusContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-5c8e8913-0"
})`
  ${({ $width  })=>external_styled_components_.css`
    width: ${$width ? `${$width}px` : `100px`};
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
  `}
`;
const getStatusColor = (status)=>{
    switch(status){
        case excursion_types/* TableStatusEnum.ACTIVE */.p.ACTIVE:
            return "#6FCF97";
        case excursion_types/* TableStatusEnum.CHECK */.p.CHECK:
            return "#EFAA40";
        case excursion_types/* TableStatusEnum.DISABLED */.p.DISABLED:
            return "#EB5757";
        default:
            return "transparent";
    }
};
const StatusPin = external_styled_components_default().span.withConfig({
    componentId: "sc-5c8e8913-1"
})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ status  })=>getStatusColor(status)};
`;
const StatusText = external_styled_components_default().h3.withConfig({
    componentId: "sc-5c8e8913-2"
})`
  ${({ theme  })=>external_styled_components_.css`
    color: ${theme.colors.default};
    font-family: ${theme.font.family.gothicBook};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-style: normal;
    line-height: normal;
  `}
`;

;// CONCATENATED MODULE: ./modules/core/components/TableComponents/TableStatus/index.tsx




const TableStatusText = {
    [excursion_types/* TableStatusEnum.ACTIVE */.p.ACTIVE]: "Активный",
    [excursion_types/* TableStatusEnum.CHECK */.p.CHECK]: "Проверка",
    [excursion_types/* TableStatusEnum.DISABLED */.p.DISABLED]: "Отключен"
};
const TableStatus = ({ width , status  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TableStatusContainer, {
        $width: width,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StatusPin, {
                status: status
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StatusText, {
                children: TableStatusText[status]
            })
        ]
    });
};
/* harmony default export */ const TableComponents_TableStatus = (TableStatus);


/***/ }),

/***/ 12439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ ExcursionTypes),
/* harmony export */   "p": () => (/* binding */ TableStatusEnum)
/* harmony export */ });
var TableStatusEnum;
(function(TableStatusEnum) {
    TableStatusEnum["ACTIVE"] = "ACTIVE";
    TableStatusEnum["DISABLED"] = "DISABLED";
    TableStatusEnum["CHECK"] = "CHECK";
})(TableStatusEnum || (TableStatusEnum = {}));
var ExcursionTypes;
(function(ExcursionTypes) {
    ExcursionTypes["GROUP"] = "GROUP";
    ExcursionTypes["INDIVIDUAL"] = "INDIVIDUAL";
})(ExcursionTypes || (ExcursionTypes = {}));


/***/ })

};
;