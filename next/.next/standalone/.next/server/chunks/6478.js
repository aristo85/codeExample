"use strict";
exports.id = 6478;
exports.ids = [6478];
exports.modules = {

/***/ 89882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ pluralizationFn)
/* harmony export */ });
const pluralizationFn = (n, option)=>{
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) {
        return option[2];
    }
    if (n1 > 1 && n1 < 5) {
        return option[1];
    }
    if (n1 == 1) {
        return option[0];
    }
    return option[2];
};


/***/ }),

/***/ 40152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useMatchMedia = (query)=>{
    const [isMatch, setMatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{
        const mediaQuery = window.matchMedia(query);
        const handleMatchChange = (event)=>{
            setMatch(event.matches);
        };
        setMatch(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleMatchChange);
        return ()=>{
            mediaQuery.removeEventListener("change", handleMatchChange);
        };
    }, [
        query
    ]);
    return isMatch;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMatchMedia);


/***/ }),

/***/ 80514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AV": () => (/* binding */ breakpoints),
/* harmony export */   "up": () => (/* binding */ up),
/* harmony export */   "vX": () => (/* binding */ between),
/* harmony export */   "zN": () => (/* binding */ down)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const breakpoints = {
    xxs: 375,
    xs: 480,
    sm: 680,
    smTab: 769,
    md: 960,
    screen1000: 1000,
    screen1200: 1200,
    screen1270: 1270,
    lg: 1439,
    xl: 1920
};
const up = (breakpoint)=>{
    return (...args)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    @media (min-width: ${breakpoints[breakpoint]}px) {
      ${(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(...args)}
    }
  `;
};
const down = (breakpoint)=>{
    return (...args)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    @media (max-width: ${breakpoints[breakpoint]}px) {
      ${(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(...args)}
    }
  `;
};
const between = (fromBreakpoint, toBreakpoint)=>{
    return (...args)=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    @media (min-width: ${breakpoints[fromBreakpoint] + 1}px) and (max-width: ${breakpoints[toBreakpoint]}px) {
      ${(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(...args)}
    }
  `;
};


/***/ })

};
;