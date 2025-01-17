"use strict";
exports.id = 9417;
exports.ids = [9417];
exports.modules = {

/***/ 79417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Breadcrumbs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./modules/core/components/Breadcrumbs/styles.ts


const Nav = external_styled_components_default().nav.withConfig({
    componentId: "sc-39019b6d-0"
})``;
const List = external_styled_components_default().ul.withConfig({
    componentId: "sc-39019b6d-1"
})`
  display: flex;
  flex-direction: row;
  gap: 10px;
  list-style-type: none;
  align-items: center;
  flex-wrap: wrap;

  ${({ theme  })=>theme.media.down("xs")`
     align-items: center;
  `}
`;
const ListItem = external_styled_components_default().li.withConfig({
    componentId: "sc-39019b6d-2"
})`
  display: flex;
  gap: 8px;
`;
const BreadcrumbLabel = external_styled_components_default().span.withConfig({
    componentId: "sc-39019b6d-3"
})`
  ${({ theme  })=>external_styled_components_.css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight};
    font-size: ${theme.font.size.subtitle1};
    ${theme.media.down("xs")`
      font-size: ${theme.font.size.body2}
    `};
  `}
`;
const BreadcrumbCurrentPath = external_styled_components_default().span.withConfig({
    componentId: "sc-39019b6d-4"
})`
  ${({ theme  })=>external_styled_components_.css`
    color: ${theme.colors.default};
    font-weight: ${theme.font.weight};
    font-size: ${theme.font.size.subtitle1};
    max-width: 26vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${theme.media.down("md")`
      max-width: 34vw;
    `}

    ${theme.media.down("xs")`
      font-size: ${theme.font.size.body2}
    `}
  `}
`;
const BreadcrumbLink = external_styled_components_default()((link_default())).withConfig({
    componentId: "sc-39019b6d-5"
})`
  ${({ theme  })=>external_styled_components_.css`
    max-width: 26vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${theme.media.down("md")`
      max-width: 34vw;
    `}

    ${theme.media.down("xs")`
      font-size: ${theme.font.size.body2}
    `}
  `}
`;

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./modules/core/components/icons/LeftArrowIcon.tsx
var LeftArrowIcon = __webpack_require__(34956);
;// CONCATENATED MODULE: ./modules/core/components/Breadcrumbs/index.tsx




const Breadcrumbs = ({ paths , isMobile  })=>{
    let displayedPaths = paths;
    let shouldShowDots = false;
    if (isMobile && paths.length > 2) {
        displayedPaths = paths.slice(-2);
        shouldShowDots = true;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Nav, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(List, {
            children: [
                shouldShowDots && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListItem, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "..."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LeftArrowIcon/* default */.Z, {})
                    ]
                }),
                displayedPaths.map((path, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ListItem, {
                                children: path.url && index !== displayedPaths.length - 1 ? /*#__PURE__*/ jsx_runtime_.jsx(BreadcrumbLink, {
                                    href: path.url,
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(BreadcrumbLabel, {
                                        children: path.label
                                    })
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(BreadcrumbCurrentPath, {
                                    children: path.label
                                })
                            }),
                            displayedPaths.length - 1 > index && /*#__PURE__*/ jsx_runtime_.jsx(ListItem, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(LeftArrowIcon/* default */.Z, {})
                            })
                        ]
                    }, index))
            ]
        })
    });
};
/* harmony default export */ const components_Breadcrumbs = (Breadcrumbs);


/***/ }),

/***/ 34956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LeftArrowIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 10,
        height: 20,
        fill: "none",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            stroke: props.stroke ? props.stroke : "#222121",
            strokeLinecap: "round",
            strokeWidth: 2,
            d: "m1 1 7.293 7.293a1 1 0 0 1 0 1.414L1 17"
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftArrowIcon);


/***/ })

};
;