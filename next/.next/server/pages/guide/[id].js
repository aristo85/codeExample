"use strict";
(() => {
var exports = {};
exports.id = 8473;
exports.ids = [8473];
exports.modules = {

/***/ 14649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CloseIcon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 18,
        height: 18,
        fill: "none",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fill: props.fill ?? "#1D7ABD",
            d: "M1.71.3A.987.987 0 00.293.3a1.04 1.04 0 000 1.447l7.305 7.465-6.89 7.04a1.04 1.04 0 000 1.448c.391.4 1.026.4 1.417 0l6.89-7.04 6.86 7.01c.391.4 1.026.4 1.417 0a1.04 1.04 0 000-1.447l-6.86-7.011 7.275-7.435a1.04 1.04 0 000-1.447.987.987 0 00-1.417 0L9.015 7.764 1.71.3z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloseIcon);


/***/ }),

/***/ 7423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./modules/core/containers/StoreProvider.tsx + 1 modules
var StoreProvider = __webpack_require__(24324);
// EXTERNAL MODULE: ./modules/core/components/Breadcrumbs/index.tsx + 1 modules
var Breadcrumbs = __webpack_require__(79417);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./modules/core/components/Buttons/ButtonBasic.tsx + 1 modules
var ButtonBasic = __webpack_require__(42143);
;// CONCATENATED MODULE: ./modules/guide/detail/styles.ts


const DetailGuideWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-dfd0fc2e-0"
})`
  ${({ theme  })=>external_styled_components_.css`
    align-items: flex-start;
    gap: 32px;
    position: relative;
    display: flex;
    flex-direction: column;
    ${theme.media.down("md")`
      gap: 16px;
    `};
    ${theme.media.down("xs")`
    `};
  `}
`;
const DetailHeaderBlock = external_styled_components_default().div.withConfig({
    componentId: "sc-dfd0fc2e-1"
})`
  ${({ theme  })=>external_styled_components_.css`
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 100%;
    ${theme.media.down("md")`
      flex-direction:column;
      gap: 16px;
    `};
    ${theme.media.down("xs")`
      align-items:center;
    `};
  `}
`;
const GuideTitle = external_styled_components_default().h3.withConfig({
    componentId: "sc-dfd0fc2e-2"
})`
  ${({ theme  })=>external_styled_components_.css`
    color: ${theme.colors.default};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.subtitle1};
    ${theme.media.down("xs")`
    `};
  `}
`;
const GuideValue = external_styled_components_default().h4.withConfig({
    componentId: "sc-dfd0fc2e-3"
})`
  ${({ theme  })=>external_styled_components_.css`
    color: #4f4f4f;
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.body2};
    ${theme.media.down("xs")`
    `};
  `}
`;
const GuideBookingButton = external_styled_components_default()(ButtonBasic/* default */.Z).withConfig({
    componentId: "sc-dfd0fc2e-4"
})`
  ${({ theme  })=>external_styled_components_.css`
    height: 63px;
    width: auto;
    ${theme.media.down("md")`
      
    `};
    ${theme.media.down("xs")`
    width: 100%;
    `};
  `}
`;
const InformationBlock = external_styled_components_default().div.withConfig({
    componentId: "sc-dfd0fc2e-5"
})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const InformationBlockContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-dfd0fc2e-6"
})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const GuideHeaderContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-dfd0fc2e-7"
})`
  ${({ theme  })=>external_styled_components_.css`
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 24px;
    justify-content: space-between;
    ${theme.media.down("xs")`
      flex-direction:column;
    `};
  `}
`;

// EXTERNAL MODULE: ./modules/guide/components/GuideFilter/guideFilterSlice.ts
var guideFilterSlice = __webpack_require__(2982);
// EXTERNAL MODULE: ./modules/placement/components/BookingImagesMap/index.tsx + 1 modules
var BookingImagesMap = __webpack_require__(81633);
// EXTERNAL MODULE: ./modules/placement/constants.ts
var constants = __webpack_require__(64468);
// EXTERNAL MODULE: ./modules/core/components/BusinessCard/index.tsx + 1 modules
var BusinessCard = __webpack_require__(87295);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./modules/core/helpers/guideQueryHandler.ts
var guideQueryHandler = __webpack_require__(51667);
// EXTERNAL MODULE: ./modules/core/constants.ts + 1 modules
var core_constants = __webpack_require__(96894);
;// CONCATENATED MODULE: ./modules/guide/detail/index.tsx












const DetailGuideComponent = ({ data  })=>{
    const { id , photos , name , costPerHour , travelMode , maxNumberOfParticipants , description , avatar , age  } = data;
    const guideFilterData = (0,StoreProvider/* useAppSelector */.CG)(guideFilterSlice/* selectGuideFilterValues */.jn);
    const { queriesString  } = (0,guideQueryHandler/* guideQueryHandler */.w)(guideFilterData, guideQueryHandler/* GuideQueryLocation.list */.a.list);
    const { queriesString: guideFormParams  } = (0,guideQueryHandler/* guideQueryHandler */.w)(guideFilterData, guideQueryHandler/* GuideQueryLocation.form */.a.form);
    const breadcrumbsItems = [
        {
            url: "/",
            label: "Главная"
        },
        {
            url: `/guide?${queriesString}`,
            label: "Результат поиска"
        },
        {
            label: `${name}`
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DetailGuideWrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumbs/* default */.Z, {
                paths: breadcrumbsItems
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DetailHeaderBlock, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(BusinessCard/* default */.Z, {
                        photo: avatar,
                        names: name,
                        age: age,
                        jobTitle: "Гид"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GuideHeaderContainer, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InformationBlockContainer, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InformationBlock, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(GuideTitle, {
                                                children: "Стоимость"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(GuideValue, {
                                                children: `${costPerHour} ${(0,constants/* currencyNameFormatter */.fd)(costPerHour, constants/* CurrencyEnum.rubles */.Tl.rubles)}/час`
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InformationBlock, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(GuideTitle, {
                                                children: "Способ передвижения"
                                            }),
                                            core_constants/* travelModeSelectorValues.find */.gG.find((mode)=>mode.value === travelMode)?.title || "Любой"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InformationBlock, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(GuideTitle, {
                                                children: "Максимальное количество участников"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(GuideValue, {
                                                children: maxNumberOfParticipants
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/booking/guide/${id}?step=1`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(GuideBookingButton, {
                                    dark: true,
                                    children: "Бронировать"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InformationBlock, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(GuideTitle, {
                        children: "Описание"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GuideValue, {
                        style: {
                            whiteSpace: "pre-wrap"
                        },
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BookingImagesMap/* default */.Z, {
                location: BookingImagesMap/* Location.GUIDE */.Y.GUIDE,
                images: photos
            })
        ]
    });
};

// EXTERNAL MODULE: ./modules/guide/apiGuideSlice.ts
var apiGuideSlice = __webpack_require__(31170);
// EXTERNAL MODULE: ./modules/core/helpers/withLogging.ts
var withLogging = __webpack_require__(77593);
;// CONCATENATED MODULE: ./pages/guide/[id]/index.tsx






const GuideDetailPage = ({ data , errorData  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(DetailGuideComponent, {
        data: data
    });
};
const getServerSideProps = StoreProvider/* wrapper.getServerSideProps */.YS.getServerSideProps((store)=>(0,withLogging/* withLogging */.o)(async (context)=>{
        const { id  } = context.query;
        const { data , error  } = await store.dispatch(apiGuideSlice/* getGuideByIdTourist.initiate */.dQ.initiate({
            id: Number(id)
        }));
        return {
            props: {
                data: data?.data || null,
                errorData: error || null
            }
        };
    }));
/* harmony default export */ const _id_ = (GuideDetailPage);


/***/ }),

/***/ 71913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 65692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 75184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 34335:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 14799:
/***/ ((module) => {

module.exports = require("graylog2");

/***/ }),

/***/ 45567:
/***/ ((module) => {

module.exports = require("jwt-decode");

/***/ }),

/***/ 35648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 53918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 45732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 64486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 99552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 71109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 87782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 82470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 73142:
/***/ ((module) => {

module.exports = require("notistack");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 93554:
/***/ ((module) => {

module.exports = require("react-number-format");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 57518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 75609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1050,5675,1664,7610,2143,8704,8413,6478,7499,679,1985,966,9417,838,3230,4324,1170,7295,3245,1633,7593], () => (__webpack_exec__(7423)));
module.exports = __webpack_exports__;

})();