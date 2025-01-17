"use strict";
exports.id = 7610;
exports.ids = [7610];
exports.modules = {

/***/ 68270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* binding */ setAuthModal),
/* harmony export */   "G7": () => (/* binding */ Roles),
/* harmony export */   "H0": () => (/* binding */ setLogOut),
/* harmony export */   "NI": () => (/* binding */ selectProfileData),
/* harmony export */   "RG": () => (/* binding */ setProfile),
/* harmony export */   "W1": () => (/* binding */ cleanProfile),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dC": () => (/* binding */ RoleTypes),
/* harmony export */   "eV": () => (/* binding */ selectCountryCode),
/* harmony export */   "mY": () => (/* binding */ setCountryCode),
/* harmony export */   "mr": () => (/* binding */ selectRefreshToken),
/* harmony export */   "qN": () => (/* binding */ setLogIn),
/* harmony export */   "vI": () => (/* binding */ selectUserToken)
/* harmony export */ });
/* unused harmony exports authSlice, selectAuthModal */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38445);


var Roles;
(function(Roles) {
    Roles["partner"] = "PARTNER";
    Roles["tourist"] = "TOURIST";
    Roles["guest"] = "GUEST";
    Roles["admin"] = "ADMIN";
})(Roles || (Roles = {}));
var RoleTypes;
(function(RoleTypes) {
    RoleTypes[RoleTypes["PARTNER"] = 30] = "PARTNER";
    RoleTypes[RoleTypes["TOURIST"] = 20] = "TOURIST";
    RoleTypes[RoleTypes["ADMIN"] = 10] = "ADMIN";
})(RoleTypes || (RoleTypes = {}));
const tokens = (0,_core_services__WEBPACK_IMPORTED_MODULE_1__/* .getUserStorage */ .qn)(_core_services__WEBPACK_IMPORTED_MODULE_1__/* .KeyStorage.USER_TOKEN_KEY */ .hv.USER_TOKEN_KEY);
const userTokens = tokens && JSON.parse(tokens);
const initialState = {
    authModal: null,
    userAccessToken: userTokens?.accessToken || null,
    userRefreshToken: userTokens?.refreshToken || null,
    countryCode: {
        codeStr: "RU",
        codeNum: "7"
    },
    profileInfo: null
};
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState,
    reducers: {
        setCountryCode: (state, action)=>{
            state.countryCode = action.payload;
        },
        setAuthModal: (state, action)=>{
            state.authModal = action.payload;
        },
        setLogOut: (state)=>{
            state.profileInfo = null;
            state.userAccessToken = null;
            state.userRefreshToken = null;
            (0,_core_services__WEBPACK_IMPORTED_MODULE_1__/* .resetUserStorage */ .BU)(_core_services__WEBPACK_IMPORTED_MODULE_1__/* .KeyStorage.USER_TOKEN_KEY */ .hv.USER_TOKEN_KEY);
            (0,_core_services__WEBPACK_IMPORTED_MODULE_1__/* .deleteDataFromCookie */ .vA)(_core_services__WEBPACK_IMPORTED_MODULE_1__/* .KeyStorage.USER_TOKEN_KEY */ .hv.USER_TOKEN_KEY);
            (0,_core_services__WEBPACK_IMPORTED_MODULE_1__/* .deleteDataFromCookie */ .vA)(_core_services__WEBPACK_IMPORTED_MODULE_1__/* .KeyStorage.USER_STATUS_KEY */ .hv.USER_STATUS_KEY);
            const notReloadingOnThesePages = [
                "/booking/placement/",
                "/booking/excursion/",
                "/booking/guide/"
            ];
            if (!notReloadingOnThesePages.some((path)=>window.location.pathname.startsWith(path))) {
                window.location.reload();
            }
        },
        setLogIn: (state, action)=>{
            (0,_core_services__WEBPACK_IMPORTED_MODULE_1__/* .setUserStorage */ .__)(_core_services__WEBPACK_IMPORTED_MODULE_1__/* .KeyStorage.USER_TOKEN_KEY */ .hv.USER_TOKEN_KEY, JSON.stringify(action.payload));
            (0,_core_services__WEBPACK_IMPORTED_MODULE_1__/* .setTokenInCookie */ .Zd)(_core_services__WEBPACK_IMPORTED_MODULE_1__/* .KeyStorage.USER_TOKEN_KEY */ .hv.USER_TOKEN_KEY, action.payload.accessToken, 7);
            state.userAccessToken = action.payload.accessToken;
            state.userRefreshToken = action.payload.refreshToken;
            state.authModal = null;
        },
        setProfile: (state, action)=>{
            state.profileInfo = {
                ...action.payload
            };
            if (action.payload.role === Roles.partner) {
                (0,_core_services__WEBPACK_IMPORTED_MODULE_1__/* .setStatusInCookie */ .HI)(_core_services__WEBPACK_IMPORTED_MODULE_1__/* .KeyStorage.USER_STATUS_KEY */ .hv.USER_STATUS_KEY, action.payload.status, 7);
            }
        },
        cleanProfile: (state)=>{
            state.profileInfo = null;
        }
    }
});
const { setAuthModal , setLogOut , setLogIn , setCountryCode , setProfile , cleanProfile  } = authSlice.actions;
const selectAuthModal = (state)=>state.auth.authModal;
const selectUserToken = (state)=>state.auth.userAccessToken;
const selectRefreshToken = (state)=>state.auth.userRefreshToken;
const selectCountryCode = (state)=>state.auth.countryCode;
const selectProfileData = (state)=>state.auth.profileInfo;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);


/***/ }),

/***/ 57441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 38445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BU": () => (/* binding */ resetUserStorage),
/* harmony export */   "Dp": () => (/* binding */ emailValidationSchema),
/* harmony export */   "Dt": () => (/* binding */ companyValidationSchema),
/* harmony export */   "Fw": () => (/* binding */ nameValidationSchema),
/* harmony export */   "HI": () => (/* binding */ setStatusInCookie),
/* harmony export */   "JB": () => (/* binding */ validLenMessage),
/* harmony export */   "K3": () => (/* binding */ commentsValidationSchema),
/* harmony export */   "S9": () => (/* binding */ createEmotionCache),
/* harmony export */   "Zd": () => (/* binding */ setTokenInCookie),
/* harmony export */   "__": () => (/* binding */ setUserStorage),
/* harmony export */   "hv": () => (/* binding */ KeyStorage),
/* harmony export */   "qn": () => (/* binding */ getUserStorage),
/* harmony export */   "qs": () => (/* binding */ passValidationSchema),
/* harmony export */   "un": () => (/* binding */ formatPhoneNumber),
/* harmony export */   "vA": () => (/* binding */ deleteDataFromCookie),
/* harmony export */   "yV": () => (/* binding */ phoneValidationSchema)
/* harmony export */ });
/* unused harmony exports getTokenFromCookie, jwtCookieDecode, jwtUserStatusDecode */
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71913);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);



function createEmotionCache() {
    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({
        key: "css",
        prepend: true
    });
}
var KeyStorage;
(function(KeyStorage) {
    KeyStorage["USER_TOKEN_KEY"] = "userTokens";
    KeyStorage["USER_STATUS_KEY"] = "userStatus";
})(KeyStorage || (KeyStorage = {}));
const getUserStorage = (storageKey)=>{
    return  false && 0;
};
const setUserStorage = (storageKey, storageData)=>{
     false && 0;
};
const resetUserStorage = (storageKey)=>{
     false && 0;
};
// Validations
const validLenMessage = (min, max)=>`Длина должна быть от ${min} до ${max} символов`;
const emailValidationSchema = yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Введите ваш Email").email("Недопустимые символы/формат").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Недопустимые символы/формат").typeError("Недопустимое значение");
const passValidationSchema = yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Введите ваш пароль").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,50}$/, "Пароль должен состоять из заглавных и строчных букв латиницы и цифр, длиной от 8 до 50");
yup__WEBPACK_IMPORTED_MODULE_1__.addMethod(yup__WEBPACK_IMPORTED_MODULE_1__.string, "noOnlyDash", function(errorMessage) {
    return this.test(`no-only-dash-type`, errorMessage, function(value) {
        const { path , createError  } = this;
        const valueArray = (value?.split("") ?? []).filter((value, index, array)=>{
            return array.indexOf(value) === index;
        });
        if (valueArray.length === 1 && valueArray[0] === "-") return createError({
            path,
            message: errorMessage
        });
        return true;
    });
});
const commentsValidationSchema = yup__WEBPACK_IMPORTED_MODULE_1__.string().trim().min(0).max(200);
const nameValidationSchema = (requiredTxt)=>yup__WEBPACK_IMPORTED_MODULE_1__.string().trim().required(requiredTxt ?? "Введите ваше полное имя").min(2, validLenMessage(2, 100)).max(100, validLenMessage(2, 100));
const phoneValidationSchema = (length)=>yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Введите ваш номер телефона").min(6, "Недопустимое количество символов").max(15, "Недопустимое количество символов");
const companyValidationSchema = yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Введите название вашей компании").min(2, validLenMessage(2, 100)).max(100, validLenMessage(2, 100));
const formatPhoneNumber = (code)=>{
    return code.length === 1 ? "(###) ### #### ####" : code.length === 2 ? "(###) ### ### ####" : "(###) ### ### ###";
};
const setTokenInCookie = (name, value, exp)=>{
    const date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
};
const setStatusInCookie = (name, value, exp)=>{
    const date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
};
const getTokenFromCookie = (name, cookies)=>{
    return cookies?.split(";").find((row)=>row.trim().startsWith(name))?.split("=")[1];
};
const deleteDataFromCookie = (name)=>{
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};
const jwtCookieDecode = (cookie)=>{
    const token = getTokenFromCookie(KeyStorage.USER_TOKEN_KEY, cookie);
    if (token) return jwtDecode(token);
};
const jwtUserStatusDecode = (cookie)=>{
    const parts = cookie.split(`; ${KeyStorage.USER_STATUS_KEY}=`);
    if (parts.length === 2) {
        return parts.pop()?.split(";").shift();
    }
};


/***/ })

};
;