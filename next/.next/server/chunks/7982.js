"use strict";
exports.id = 7982;
exports.ids = [7982];
exports.modules = {

/***/ 27982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FE": () => (/* binding */ PageWrapper),
/* harmony export */   "YF": () => (/* binding */ BookingPage),
/* harmony export */   "fk": () => (/* binding */ MapWrapper),
/* harmony export */   "u1": () => (/* binding */ BookingAddress),
/* harmony export */   "vA": () => (/* binding */ BookingEmptyBlock),
/* harmony export */   "vO": () => (/* binding */ PlacementButtonContainer),
/* harmony export */   "xJ": () => (/* binding */ BreadcrumbsBlock),
/* harmony export */   "xL": () => (/* binding */ FilterBlock),
/* harmony export */   "yr": () => (/* binding */ PartnerPlacementPageContainer),
/* harmony export */   "z3": () => (/* binding */ BookingMainBlock)
/* harmony export */ });
/* unused harmony export FilterSection */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const BookingPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-733451de-0"
})`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 44px;
`;
const BreadcrumbsBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-733451de-1"
})`
  padding-bottom: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme  })=>theme.media.down("sm")`
    padding-bottom: 16px;
    ${theme.media.down("xs")`
    `}
  `}
`;
const PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-733451de-2"
})`
  display: flex;
  gap: ${({ isMain  })=>isMain ? "32" : "24"}px;
  flex-direction: row;
  ${({ theme  })=>theme.media.down("md")`
    ${theme.media.down("sm")`
    `}
  `}
`;
const PartnerPlacementPageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-733451de-3"
})`
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${({ theme  })=>theme.media.down("md")`
    flex-direction: column;
    ${theme.media.down("sm")`
    `}
  `}
`;
const PlacementButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-733451de-4"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MapWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-733451de-5"
})`
  position: relative;
  height: 600px;
  ${({ theme  })=>theme.media.down("md")`
      max-height: 600px;
      min-height: 400px;
  `}
`;
const FilterBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-733451de-6"
})`
  width: 326px;
`;
const FilterSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-733451de-7"
})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-around;
`;
const BookingMainBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-733451de-8"
})`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 28px;
`;
const BookingEmptyBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-733451de-9"
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 300px);
`;
const BookingAddress = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-733451de-10"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down("xs")`
        font-size: ${theme.font.size.subtitle2};
    `};
  `}
`;


/***/ })

};
;