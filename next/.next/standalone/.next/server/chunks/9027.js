"use strict";
exports.id = 9027;
exports.ids = [9027];
exports.modules = {

/***/ 39027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FE": () => (/* binding */ PageWrapper),
/* harmony export */   "UP": () => (/* binding */ CarouselTabletAndDown),
/* harmony export */   "V1": () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-401accef-0"
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  ${({ theme  })=>theme.media.down("xs")`
    gap: 16px;
    padding-bottom: 16px;
  `}
`;
const PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
    componentId: "sc-401accef-1"
})`
  width: 100%;
  max-width: 1180px;
  font-size: 48px;
  line-height: 64px;
  color: ${({ theme  })=>theme.colors.default};
  font-weight: 400;
  margin-top: 16px;
  text-align: left;

  ${({ theme  })=>theme.media.down("md")`
    font-size: 48px;
    line-height: 56px;
    margin-top: 0; 
  `}

  ${({ theme  })=>theme.media.down("xs")`
    font-size: 34px;
    line-height: 46px;
  `};
`;
const CarouselTabletAndDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-401accef-2"
})`
  position: absolute;
  padding: 24px 0;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("md")`
      width: calc(100% - ${theme.layouts.paddingMd});
    `};
    ${theme.media.down("sm")`
      width: calc(100% - ${theme.layouts.paddingSm});
    `};
  `}
`;


/***/ })

};
;