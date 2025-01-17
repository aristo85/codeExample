"use strict";
exports.id = 3968;
exports.ids = [3968];
exports.modules = {

/***/ 15442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SZ": () => (/* binding */ ExcursionTableRow),
  "St": () => (/* binding */ FilterArrowIconDown),
  "xk": () => (/* binding */ FilterArrowIconUp),
  "NF": () => (/* binding */ HeaderCellWithSort),
  "ZR": () => (/* binding */ PlacementTitle),
  "iA": () => (/* binding */ Table),
  "RM": () => (/* binding */ TableBody),
  "pj": () => (/* binding */ TableCell),
  "j5": () => (/* binding */ TableCellValue),
  "Ll": () => (/* binding */ TableCellValueWithCopyIcon),
  "xJ": () => (/* binding */ TableContainer),
  "ss": () => (/* binding */ TableHead),
  "xs": () => (/* binding */ TableHeaderCell),
  "SC": () => (/* binding */ TableRow),
  "G9": () => (/* binding */ TableTitleWithPointer)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./modules/core/components/icons/FilterArrowIcon.tsx


const FilterArrowIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 20,
        viewBox: "2 2 20 20",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "#fff",
            d: "M13 6.5h-2v8H8l4 4 4-4h-3v-8Z"
        })
    });
/* harmony default export */ const icons_FilterArrowIcon = (FilterArrowIcon);

;// CONCATENATED MODULE: ./modules/core/components/TableComponents/tableStyles.ts


const TableContainer = external_styled_components_default().h2.withConfig({
    componentId: "sc-350e87ba-0"
})`
  ${({ theme  })=>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 100px;
    overflow-x: auto;
  `}
`;
const Table = external_styled_components_default().table.withConfig({
    componentId: "sc-350e87ba-1"
})`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #1d7abd;
`;
const TableHead = external_styled_components_default().thead.withConfig({
    componentId: "sc-350e87ba-2"
})`
  border-bottom: 1px solid #1d7abd;
  background: #8daec1;
  color: white;
  height: 65px;
`;
const TableHeaderCell = external_styled_components_default().th.withConfig({
    componentId: "sc-350e87ba-3"
})`
  text-align: center;
  padding: 8px;
  cursor: default;
  justify-content: center;
  &:not(:last-child) {
    border-right: 1px solid #1d7abd; /* Add border between columns in header */
  }
  ${({ theme  })=>`
    width: 100%;
    padding: 16px;
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
    font-size: 14px;
  `}

  ${({ theme  })=>theme.media.down("xs")`
     padding: 8px;;
  `}
`;
const TableBody = external_styled_components_default().tbody.withConfig({
    componentId: "sc-350e87ba-4"
})``;
const TableRow = external_styled_components_default().tr.withConfig({
    componentId: "sc-350e87ba-5"
})`
  height: 56px;
  cursor: pointer;

  &:hover {
    background: rgba(141, 174, 193, 0.2);
  }
`;
const ExcursionTableRow = external_styled_components_default().tr.withConfig({
    componentId: "sc-350e87ba-6"
})`
  height: 56px;
`;
const HeaderCellWithSort = external_styled_components_default().div.withConfig({
    componentId: "sc-350e87ba-7"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;

  ${({ theme  })=>`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.gothicDemi};
    font-size: ${theme.font.size.body3};
    font-weight: ${theme.font.weight.semiBold};
  `}
`;
const TableCell = external_styled_components_default().td.withConfig({
    componentId: "sc-350e87ba-8"
})`
  border-bottom: 1px solid #1d7abd; /* Add border at the bottom of each cell */
  &:not(:last-child) {
    border-right: 1px solid #1d7abd; /* Add border between columns */
  }
  ${({ theme  })=>`
    width: 100%;
    padding: 16px;
    color: ${theme.colors.default};
    font-family: ${theme.font.family.gothicBook};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};   
  `}

  ${({ theme  })=>theme.media.down("xs")`
     padding: 8px;;
  `}
`;
const PlacementTitle = external_styled_components_default().h3.withConfig({
    componentId: "sc-350e87ba-9"
})`
  ${({ theme  })=>`
    width: 100%;
    color: ${theme.colors.primary};
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
  `}
`;
const FilterArrowIconUp = external_styled_components_default()(icons_FilterArrowIcon).withConfig({
    componentId: "sc-350e87ba-10"
})`
  transform: rotate(180deg);
  float: right;
`;
const FilterArrowIconDown = external_styled_components_default()(icons_FilterArrowIcon).withConfig({
    componentId: "sc-350e87ba-11"
})`
  float: right;
`;
const TableTitleWithPointer = external_styled_components_default().h3.withConfig({
    componentId: "sc-350e87ba-12"
})`
  ${({ theme  })=>`
    color: ${theme.colors.primary};
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    cursor: pointer;
  `}
`;
const TableCellValue = external_styled_components_default().h4.withConfig({
    componentId: "sc-350e87ba-13"
})`
  ${({ theme , oneLine  })=>`
    width: 100%;
    white-space: ${oneLine ? "nowrap" : "normal"};
    font-family: ${theme.font.family.gothicBook};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.body2};
  `}
`;
const TableCellValueWithCopyIcon = external_styled_components_default().div.withConfig({
    componentId: "sc-350e87ba-14"
})`
  ${({ theme  })=>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    align-items: center;
    font-family: ${theme.font.family.gothicBook};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.body2};
  `}
`;


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


/***/ })

};
;