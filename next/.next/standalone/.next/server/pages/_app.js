"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 52292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ containers_GlobalThemeProvider)
});

// UNUSED EXPORTS: theme

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
;// CONCATENATED MODULE: ./modules/core/styles/globalStyles.tsx

const scrollbarStyles = external_styled_components_.css`
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #8daec1;
    border-radius: 10px;
    height: 50px !important;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;
const GlobalStyle = external_styled_components_.createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: ${({ theme  })=>theme.font.family.gothicMedium};
  ${scrollbarStyles};
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

button {
  font-family: ${({ theme  })=>theme.font.family.gothicMedium};
}

body {
  color: rgb(0, 0, 0);
}

a {
  color: inherit;
  text-decoration: none;
}
`;

// EXTERNAL MODULE: ./modules/core/styles/mediaQueries.ts
var mediaQueries = __webpack_require__(80514);
;// CONCATENATED MODULE: ./modules/core/containers/GlobalThemeProvider.tsx





const theme = {
    colors: {
        foregroundRgb: "0, 0, 0",
        primary: "#1D7ABD",
        secondary: "#8DAEC1",
        default: "#222121",
        lightDefault: "rgba(34, 33, 33, 0.16)",
        white: "#FFFFFF",
        black: "#000000",
        lightBlue: "#C6E1F3"
    },
    font: {
        weight: {
            regular: "400",
            semiBold: "500",
            bold: "600"
        },
        size: {
            heading1: "36px",
            heading2: "34px",
            heading3: "32px",
            subtitle1: "24px",
            subtitle2: "20px",
            subtitle3: "22px",
            subtitle4: "18px",
            subtitle5: "16px",
            body1: "18px",
            body2: "16px",
            body3: "14px",
            auxiliary1: "12px",
            auxiliary2: "10px",
            auxiliary3: "8px"
        },
        family: {
            gothicMedium: "var(--font-franklin), sans-serif",
            gothicDemi: "var(--font-franklin-demi), sans-serif",
            gothicBook: "var(--font-franklin-book), sans-serif",
            interRegular: "var(--inter-regular), sans-serif",
            interBold: "var(--inter-bold), sans-serif"
        }
    },
    transition: {
        fast: "all 0.25s ease-in-out",
        middle: "all 0.5s ease-in-out",
        slow: "all 0.8s ease-in-out"
    },
    elevation: {
        0: "box-shadow: none;",
        1: "box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);",
        2: "box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);",
        3: "box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);"
    },
    media: {
        breakpoints: mediaQueries/* breakpoints */.AV,
        up: mediaQueries.up,
        down: mediaQueries/* down */.zN,
        between: mediaQueries/* between */.vX
    },
    scrollbar: {
        thinSecondary: ()=>scrollbarStyles
    },
    layouts: {
        paddingLg: "10.6%",
        paddingMd: "10px",
        paddingSm: "10px"
    }
};
const GlobalThemeProvider = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyle, {}),
            children
        ]
    });
};
/* harmony default export */ const containers_GlobalThemeProvider = (GlobalThemeProvider);


/***/ }),

/***/ 43734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_2__);



const ToastProvider = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(notistack__WEBPACK_IMPORTED_MODULE_2__.SnackbarProvider, {
        maxSnack: 3,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastProvider);


/***/ }),

/***/ 82390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useHasMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useHasMounted = ()=>{
    const [hasMounted, setHasMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setHasMounted(true);
    }, []);
    return hasMounted;
};


/***/ }),

/***/ 44178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18618);
/* harmony import */ var _modules_core_containers_StoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24324);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38445);
/* harmony import */ var _modules_core_containers_GlobalThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52292);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43349);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_core_containers_ToastProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43734);
/* harmony import */ var _modules_core_components_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dayjs_locale_ru__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19161);
/* harmony import */ var dayjs_locale_ru__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_ru__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36619);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _modules_core_hooks_useHasMounted__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(82390);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_1__]);
_modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










 // Import the Russian locale and set it up







dayjs__WEBPACK_IMPORTED_MODULE_9___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_11___default())).locale("ru");
const clientSideEmotionCache = (0,_modules_core_services__WEBPACK_IMPORTED_MODULE_4__/* .createEmotionCache */ .S9)();
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_17___default().div.withConfig({
    componentId: "sc-e3b50e31-0"
})`
  align-items: center;
  max-width: 1180px;
  margin: 32px auto;
  padding: 0 10px;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_17__.css`
    ${theme.media.down("sm")`
      margin: 0 auto; 
    `};
  `}
`;
function App(props) {
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    const [loaderIsShown, setLoaderIsShown] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false);
    const hasMounted = (0,_modules_core_hooks_useHasMounted__WEBPACK_IMPORTED_MODULE_15__/* .useHasMounted */ .f)();
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        if (props.pageProps.error) {
            const message = props.pageProps.error.status === 422 ? props.pageProps.error.data.message : "Произошла ошибка!";
            (0,notistack__WEBPACK_IMPORTED_MODULE_12__.enqueueSnackbar)(message, {
                variant: "error"
            });
        }
    }, [
        props.pageProps.error
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        next_router__WEBPACK_IMPORTED_MODULE_14__.Router.events.on("routeChangeStart", ()=>{
            setLoaderIsShown(true);
        });
        next_router__WEBPACK_IMPORTED_MODULE_14__.Router.events.on("routeChangeComplete", ()=>{
            setLoaderIsShown(false);
        });
        return ()=>{
            next_router__WEBPACK_IMPORTED_MODULE_14__.Router.events.off("routeChangeStart", ()=>{
                setLoaderIsShown(true);
            });
            next_router__WEBPACK_IMPORTED_MODULE_14__.Router.events.off("routeChangeComplete", ()=>{
                setLoaderIsShown(false);
            });
        };
    }, []);
    if (!hasMounted) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Spinner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        showSpinner: !hasMounted
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_core_containers_StoreProvider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_16___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Go2Kavkaz"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_containers_ToastProvider__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.CacheProvider, {
                    value: emotionCache,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_containers_GlobalThemeProvider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__.StylesProvider, {
                            injectFirst: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                children: [
                                    loaderIsShown && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Spinner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        showSpinner: loaderIsShown
                                    }),
                                    !loaderIsShown && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContentWrapper, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                            ...pageProps
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 72805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 43349:
/***/ ((module) => {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 4195:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowBackIos");

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

/***/ 19161:
/***/ ((module) => {

module.exports = require("dayjs/locale/ru");

/***/ }),

/***/ 36619:
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

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

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ 61908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 45641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 68680:
/***/ ((module) => {

module.exports = import("react-phone-number-input");;

/***/ }),

/***/ 53445:
/***/ ((module) => {

module.exports = import("react-phone-number-input/locale/en.json");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1050,5675,1664,7610,2143,8704,8413,6478,7499,679,1985,9511,756,966,9461,6239,347,6674,838,3230,4324], () => (__webpack_exec__(44178)));
module.exports = __webpack_exports__;

})();