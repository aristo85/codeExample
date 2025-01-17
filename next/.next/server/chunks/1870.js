"use strict";
exports.id = 1870;
exports.ids = [1870];
exports.modules = {

/***/ 19218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ AuthType)
/* harmony export */ });
var AuthType;
(function(AuthType) {
    AuthType["LOGIN"] = "LOGIN";
    AuthType["REG"] = "REG";
    AuthType["RECOVER"] = "RECOVER";
    AuthType["RESET"] = "RESET";
    AuthType["REG_TUR"] = "REG_TUR";
    AuthType["REG_PARTNER"] = "REG_PARTNER";
    AuthType["EMAIL_CONFIRM_SUCCESS"] = "EMAIL_CONFIRM_SUCCESS";
})(AuthType || (AuthType = {}));


/***/ }),

/***/ 58060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_AutoAuthorizedBooking)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./modules/core/components/AutoAuthorizedBooking/styles.ts

const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-cf7b2e61-0"
})`
  width: 100%;
  height: calc(100vh - 256px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
const Title = external_styled_components_default().h1.withConfig({
    componentId: "sc-cf7b2e61-1"
})`
  color: #232222;
  font-size: 34px;
  text-align: center;

  ${({ theme  })=>theme.media.down("sm")`
    font-size: 32px;
    ${theme.media.down("xs")`
    font-size: 32px;
    `}
  `}
`;
const SubTitle = external_styled_components_default().h2.withConfig({
    componentId: "sc-cf7b2e61-2"
})`
  color: #4f4f4f;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  max-width: 467px;
  white-space: pre-wrap;
  a,
  p {
    color: ${(props)=>props.theme.colors.secondary};
    text-decoration: underline;
    font-weight: 400;
    cursor: pointer;
  }
`;

// EXTERNAL MODULE: ./modules/core/hooks/index.ts
var hooks = __webpack_require__(57441);
// EXTERNAL MODULE: ./modules/auth/authSlice.ts
var authSlice = __webpack_require__(68270);
// EXTERNAL MODULE: ./modules/auth/types.ts
var types = __webpack_require__(19218);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
;// CONCATENATED MODULE: ./modules/core/components/AutoAuthorizedBooking/index.tsx







const AutoAuthorizedBooking = ()=>{
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const userProfile = (0,hooks/* useAppSelector */.C)(authSlice/* selectProfileData */.NI);
    const router = (0,router_.useRouter)();
    const url = `/profile${router.pathname.split("[id]")[0]}${router.query.bookingId}`;
    const handleLogin = (authType)=>{
        dispatch((0,authSlice/* setAuthModal */.$_)(authType));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                children: "Бронирование создано"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SubTitle, {
                children: [
                    "вы можете посмотреть свое бронирование по",
                    " ",
                    userProfile ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: url,
                        children: "ссылке"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        onClick: ()=>handleLogin(types/* AuthType.LOGIN */.G.LOGIN),
                        children: "ссылке"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_AutoAuthorizedBooking = (AutoAuthorizedBooking);


/***/ })

};
;