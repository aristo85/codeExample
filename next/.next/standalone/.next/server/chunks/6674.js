exports.id = 6674;
exports.ids = [6674];
exports.modules = {

/***/ 90470:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__franklinGothicDemiRegular_0cf6ca', '__franklinGothicDemiRegular_Fallback_0cf6ca'"},
	"className": "__className_0cf6ca",
	"variable": "__variable_0cf6ca"
};


/***/ }),

/***/ 93247:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__franklinGothicBook_67608d', '__franklinGothicBook_Fallback_67608d'"},
	"className": "__className_67608d",
	"variable": "__variable_67608d"
};


/***/ }),

/***/ 87994:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__franklinGothicMedium_0d207a', '__franklinGothicMedium_Fallback_0d207a'"},
	"className": "__className_0d207a",
	"variable": "__variable_0d207a"
};


/***/ }),

/***/ 20114:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__interBold_d5281f', '__interBold_Fallback_d5281f'"},
	"className": "__className_d5281f",
	"variable": "__variable_d5281f"
};


/***/ }),

/***/ 55030:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__interRegular_e8a413', '__interRegular_Fallback_e8a413'"},
	"className": "__className_e8a413",
	"variable": "__variable_e8a413"
};


/***/ }),

/***/ 48359:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ModalAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57681);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19218);
/* harmony import */ var _core_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57441);
/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68270);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62759);
/* harmony import */ var _components_Registration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11386);
/* harmony import */ var _components_ForgottenPass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93289);
/* harmony import */ var _components_ResetPass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82910);
/* harmony import */ var _components_Registration_ConfirmEmailSuccess__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19300);
/* harmony import */ var _components_RegistrationForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25496);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ModalAuth__WEBPACK_IMPORTED_MODULE_2__, _components_Login__WEBPACK_IMPORTED_MODULE_6__, _components_ForgottenPass__WEBPACK_IMPORTED_MODULE_8__, _components_ResetPass__WEBPACK_IMPORTED_MODULE_9__, _components_RegistrationForm__WEBPACK_IMPORTED_MODULE_11__]);
([_components_ModalAuth__WEBPACK_IMPORTED_MODULE_2__, _components_Login__WEBPACK_IMPORTED_MODULE_6__, _components_ForgottenPass__WEBPACK_IMPORTED_MODULE_8__, _components_ResetPass__WEBPACK_IMPORTED_MODULE_9__, _components_RegistrationForm__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const AuthContainer = ({})=>{
    const dispatch = (0,_core_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const authModal = (0,_core_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.auth.authModal);
    const handleModalClose = ()=>{
        dispatch((0,_authSlice__WEBPACK_IMPORTED_MODULE_5__/* .setAuthModal */ .$_)(null));
    };
    const ModalContent = ()=>{
        switch(authModal){
            case _types__WEBPACK_IMPORTED_MODULE_3__/* .AuthType.LOGIN */ .G.LOGIN:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Login__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {});
            case _types__WEBPACK_IMPORTED_MODULE_3__/* .AuthType.REG */ .G.REG:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Registration__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {});
            case _types__WEBPACK_IMPORTED_MODULE_3__/* .AuthType.RECOVER */ .G.RECOVER:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ForgottenPass__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {});
            case _types__WEBPACK_IMPORTED_MODULE_3__/* .AuthType.REG_PARTNER */ .G.REG_PARTNER:
            case _types__WEBPACK_IMPORTED_MODULE_3__/* .AuthType.REG_TUR */ .G.REG_TUR:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RegistrationForm__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    authModalType: authModal
                });
            case _types__WEBPACK_IMPORTED_MODULE_3__/* .AuthType.RESET */ .G.RESET:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ResetPass__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {});
            case _types__WEBPACK_IMPORTED_MODULE_3__/* .AuthType.EMAIL_CONFIRM_SUCCESS */ .G.EMAIL_CONFIRM_SUCCESS:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Registration_ConfirmEmailSuccess__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {});
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModalAuth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        onClose: handleModalClose,
        isOpen: !!authModal,
        children: ModalContent()
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93289:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24062);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45641);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19218);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61908);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31733);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57441);
/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68270);
/* harmony import */ var _modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70220);
/* harmony import */ var _modules_core_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38445);
/* harmony import */ var _modules_core_components_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52901);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const ForgottenPass = ({})=>{
    const dispatch = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAppDispatch */ .T)();
    const [passRecovery, { isLoading , isError , error  }] = (0,_modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_10__/* .usePassRecoveryMutation */ .vU)();
    const [passRecoveryEmail, setPassRecoveryEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const validationSchema = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
            email: _modules_core_services__WEBPACK_IMPORTED_MODULE_11__/* .emailValidationSchema */ .Dp
        });
    }, []);
    const { register , handleSubmit , formState: { errors  } , setError  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__.yupResolver)(validationSchema),
        mode: "onChange"
    });
    const handleFormSubmit = async (data)=>{
        try {
            const result = await passRecovery(data).unwrap();
            result.success && setPassRecoveryEmail(data.email);
        } catch (error) {
            error?.data?.data?.forEach((item)=>{
                setError(item.field, item);
            });
        }
    };
    const handleFormSwitch = (authType)=>{
        dispatch((0,_authSlice__WEBPACK_IMPORTED_MODULE_9__/* .setAuthModal */ .$_)(authType));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Spinner__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                showSpinner: isLoading
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .FormWrapper */ .n5, {
                onSubmit: handleSubmit(handleFormSubmit),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ModalTitle */ .r6, {
                        children: "Восстановление пароля"
                    }),
                    !passRecoveryEmail ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                label: "Email",
                                placeholder: "Введите ваш email",
                                ...register("email"),
                                error: errors.email?.message
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ConfirmBtn */ .Ji, {
                                dark: true,
                                type: "submit",
                                disabled: !!errors.email,
                                children: "Отправить письмо"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .BackBtn */ .a5, {
                                onClick: ()=>handleFormSwitch(_types__WEBPACK_IMPORTED_MODULE_4__/* .AuthType.LOGIN */ .G.LOGIN)
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .RecoverySucceedWrapper */ .VO, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .RecoverySucceedTxt */ .Qc, {
                                children: "Письмо для восстановления пароля отправлено на почту"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .RecoverySucceedEmail */ .zl, {
                                children: passRecoveryEmail
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ConfirmBtn */ .Ji, {
                                dark: true,
                                type: "submit",
                                children: "Отправить письмо повторно"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgottenPass);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62759:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24062);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45641);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19218);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61908);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31733);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57441);
/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68270);
/* harmony import */ var _modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70220);
/* harmony import */ var _modules_core_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38445);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_core_components_icons_EyeIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20760);
/* harmony import */ var _modules_core_components_Spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52901);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(45567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const Login = ()=>{
    const dispatch = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const [login, { isLoading  }] = (0,_modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_10__/* .useLoginMutation */ .YA)();
    const validationSchema = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
            email: _modules_core_services__WEBPACK_IMPORTED_MODULE_11__/* .emailValidationSchema */ .Dp,
            password: _modules_core_services__WEBPACK_IMPORTED_MODULE_11__/* .passValidationSchema */ .qs
        });
    }, []);
    const { register , handleSubmit , setError , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__.yupResolver)(validationSchema),
        mode: "onChange"
    });
    const handleFormSubmit = async (data)=>{
        try {
            const result = await login(data).unwrap();
            const payload = result.data;
            const user = jwt_decode__WEBPACK_IMPORTED_MODULE_15___default()(payload.accessToken || "")?.user;
            const isAdmin = user?.roleType === _authSlice__WEBPACK_IMPORTED_MODULE_9__/* .RoleTypes.ADMIN */ .dC.ADMIN;
            if (isAdmin) {
                window.location.href = `https://admin.${window.location.hostname}`;
                return;
            }
            dispatch((0,_authSlice__WEBPACK_IMPORTED_MODULE_9__/* .setLogIn */ .qN)(payload));
        } catch (error) {
            console.error(error);
            error.data.data.forEach((item)=>{
                setError(item.field, item);
            });
        }
    };
    const handleFormSwitch = (authType)=>{
        dispatch((0,_authSlice__WEBPACK_IMPORTED_MODULE_9__/* .setAuthModal */ .$_)(authType));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const { modal  } = router.query;
        return ()=>{
            if (modal) {
                // Remove from the route
                const routeWithoutToken = router.asPath.replace(`?modal=login`, "");
                router.replace(routeWithoutToken);
            }
        };
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .FormWrapper */ .n5, {
        onSubmit: handleSubmit(handleFormSubmit),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Spinner__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                showSpinner: isLoading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ModalTitle */ .r6, {
                children: "Вход"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                label: "Email",
                placeholder: "Введите ваш email",
                ...register("email"),
                error: errors.email?.message
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                label: "Пароль",
                placeholder: "Введите ваш пароль",
                isPassword: true,
                ...register("password"),
                error: errors.password?.message,
                startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_EyeIcon__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ConfirmBtn */ .Ji, {
                dark: true,
                type: "submit",
                disabled: !!errors.email || !!errors.password,
                children: "Войти"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .FooterWrapper */ .V6, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .FooterInfo */ .Z2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .FooterTxt */ .kJ, {
                                children: "Нет аккаунта?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .FooterLink */ .SY, {
                                onClick: ()=>handleFormSwitch(_types__WEBPACK_IMPORTED_MODULE_4__/* .AuthType.REG */ .G.REG),
                                children: "Регистрация"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .FooterInfo */ .Z2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .FooterTxt */ .kJ, {
                                children: "Забыли пароль?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .FooterLink */ .SY, {
                                onClick: ()=>handleFormSwitch(_types__WEBPACK_IMPORTED_MODULE_4__/* .AuthType.RECOVER */ .G.RECOVER),
                                children: "Восстановить"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57681:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84276);
/* harmony import */ var _modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18618);
/* harmony import */ var _modules_core_hooks_useOverflowControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95517);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_4__]);
_modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ModalAuth = ({ isOpen , onClose , children  })=>{
    (0,_modules_core_hooks_useOverflowControl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(isOpen);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        className: `${_modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_4__/* .franklinGothicMedium.className */ .J7.className}`,
        disableEnforceFocus: true,
        disableAutoFocus: true,
        open: isOpen,
        "aria-labelledby": "server-modal-title",
        "aria-describedby": "server-modal-description",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .ModalContent */ .hz, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .CloseBtn */ .dg, {
                    onClick: onClose
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .MainMobileLogo */ .GN, {}),
                children
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalAuth);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GN": () => (/* binding */ MainMobileLogo),
/* harmony export */   "dg": () => (/* binding */ CloseBtn),
/* harmony export */   "hz": () => (/* binding */ ModalContent),
/* harmony export */   "r6": () => (/* binding */ ModalTitle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_components_icons_MainLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41593);
/* harmony import */ var _modules_core_components_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14649);



const ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-57e73fd3-0"
})`
  position: relative;
  width: 628px;
  background: #ffffff;
  border-radius: 32px;
  padding: 40px 32px 32px 32px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ theme  })=>theme.media.down("sm")`
    width: 100vw;
    height: 100%;
    border-radius: 0px;
  `}
`;
const ModalTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-57e73fd3-1"
})`
  font-size: 24px;
  line-height: 27px;
  color: #222121;
  text-align: center;
`;
const CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_modules_core_components_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-57e73fd3-2"
})`
  position: absolute;
  top: 17px;
  right: 20px;
  color: #1d7abd;
  cursor: pointer;
  background: #fff;
  z-index: 1;
`;
const MainMobileLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_modules_core_components_icons_MainLogo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-57e73fd3-3"
})`
  display: none;
  ${({ theme  })=>theme.media.down("sm")`
    display: block;
    margin: 0 auto 50px auto;
    // margin: 0 auto;
  `}
`;


/***/ }),

/***/ 19300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31733);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19218);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57441);
/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68270);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);







const ConfirmEmailSuccess = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const dispatch = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const { regtoken  } = router.query;
    const handleFormSwitch = ()=>{
        dispatch((0,_authSlice__WEBPACK_IMPORTED_MODULE_5__/* .setAuthModal */ .$_)(_types__WEBPACK_IMPORTED_MODULE_3__/* .AuthType.LOGIN */ .G.LOGIN));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return ()=>{
            if (regtoken) {
                // Remove the token from the route
                const routeWithoutToken = router.asPath.replace(`?regtoken=${regtoken}`, "");
                router.replace(routeWithoutToken);
            }
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .ModalTitle */ .r6, {
                children: "Подтверждение аккаунта"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .SucceedTxt */ .gv, {
                children: "Ваш аккаунт успешно подтвержден"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .ConfirmEamilSuccessBtn */ .B7, {
                onClick: handleFormSwitch,
                children: "Войти в аккаунт"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmEmailSuccess);


/***/ }),

/***/ 11386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31733);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19218);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57441);
/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68270);






const Registration = ()=>{
    const dispatch = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const handleFormSwitch = (authType)=>{
        dispatch((0,_authSlice__WEBPACK_IMPORTED_MODULE_5__/* .setAuthModal */ .$_)(authType));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .ModalTitle */ .r6, {
                children: "Регистрация"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RegOptionContainer */ .Rk, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RegOptionBtn */ .Jo, {
                        onClick: ()=>handleFormSwitch(_types__WEBPACK_IMPORTED_MODULE_3__/* .AuthType.REG_TUR */ .G.REG_TUR),
                        dark: true,
                        children: "Я турист"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RegOptionBtn */ .Jo, {
                        onClick: ()=>handleFormSwitch(_types__WEBPACK_IMPORTED_MODULE_3__/* .AuthType.REG_PARTNER */ .G.REG_PARTNER),
                        children: "Я партнёр"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Registration);


/***/ }),

/***/ 25496:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24062);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45641);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19218);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61908);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31733);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57441);
/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68270);
/* harmony import */ var _modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70220);
/* harmony import */ var _modules_core_components_Checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52962);
/* harmony import */ var _modules_core_components_inputs_PhoneInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(79461);
/* harmony import */ var _modules_core_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38445);
/* harmony import */ var _modules_core_components_icons_EyeIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20760);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _modules_core_components_Spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(52901);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__, _modules_core_components_inputs_PhoneInput__WEBPACK_IMPORTED_MODULE_12__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__, _modules_core_components_inputs_PhoneInput__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const touristValidationSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
    email: _modules_core_services__WEBPACK_IMPORTED_MODULE_13__/* .emailValidationSchema */ .Dp,
    password: _modules_core_services__WEBPACK_IMPORTED_MODULE_13__/* .passValidationSchema */ .qs,
    passwordRepeat: yup__WEBPACK_IMPORTED_MODULE_5__.string().oneOf([
        yup__WEBPACK_IMPORTED_MODULE_5__.ref("password")
    ], "Пароли не совпадают"),
    firstName: (0,_modules_core_services__WEBPACK_IMPORTED_MODULE_13__/* .nameValidationSchema */ .Fw)("Введите ваше имя"),
    lastName: (0,_modules_core_services__WEBPACK_IMPORTED_MODULE_13__/* .nameValidationSchema */ .Fw)("Введите вашу фамилию")
});
const partnerValidationSchema = (phoneLen)=>yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
        email: _modules_core_services__WEBPACK_IMPORTED_MODULE_13__/* .emailValidationSchema */ .Dp,
        password: _modules_core_services__WEBPACK_IMPORTED_MODULE_13__/* .passValidationSchema */ .qs,
        passwordRepeat: yup__WEBPACK_IMPORTED_MODULE_5__.string().oneOf([
            yup__WEBPACK_IMPORTED_MODULE_5__.ref("password")
        ], "Пароли не совпадают"),
        firstName: (0,_modules_core_services__WEBPACK_IMPORTED_MODULE_13__/* .nameValidationSchema */ .Fw)("Введите ваше имя"),
        lastName: (0,_modules_core_services__WEBPACK_IMPORTED_MODULE_13__/* .nameValidationSchema */ .Fw)("Введите вашу фамилию"),
        phone: (0,_modules_core_services__WEBPACK_IMPORTED_MODULE_13__/* .phoneValidationSchema */ .yV)(phoneLen),
        company: _modules_core_services__WEBPACK_IMPORTED_MODULE_13__/* .companyValidationSchema */ .Dt
    });
const RegistrationForm = ({ authModalType  })=>{
    const countryCode = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useSelector)(_authSlice__WEBPACK_IMPORTED_MODULE_9__/* .selectCountryCode */ .eV);
    const isTur = authModalType === _types__WEBPACK_IMPORTED_MODULE_4__/* .AuthType.REG_TUR */ .G.REG_TUR;
    const validationSchema = isTur ? touristValidationSchema : partnerValidationSchema(10 + countryCode.codeNum.length);
    const dispatch = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAppDispatch */ .T)();
    const [registeration, { isLoading: isRegistering , isError: isRegisterError , error: registerError  }] = (0,_modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_10__/* .useRegisterMutation */ .l4)();
    const [resendEmail, { isLoading: isResendingEmail , isError: isResendError , error: resendError  }] = (0,_modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_10__/* .useResendEmailMutation */ .BZ)();
    const [isAgreed, setIsAgreed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isFormSent, setIsFormSent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { register , handleSubmit , control , formState: { errors  } , getValues , watch , trigger , setError  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__.yupResolver)(validationSchema),
        mode: "onChange"
    });
    const handleFormSubmit = async (data)=>{
        const bodyData = isTur ? {
            ...data,
            role: "TOURIST"
        } : {
            ...data,
            role: "PARTNER"
        };
        try {
            const result = await registeration(bodyData).unwrap();
            result.success && setIsFormSent(true);
        } catch (error) {
            error?.data?.data?.forEach((item)=>{
                setError(item.field, item);
            });
        }
    };
    const handleFormSwitch = (authType)=>{
        dispatch((0,_authSlice__WEBPACK_IMPORTED_MODULE_9__/* .setAuthModal */ .$_)(authType));
    };
    const handleResendEmail = async ()=>{
        try {
            const result = await resendEmail({
                email: getValues("email")
            }).unwrap();
            result.success && setIsFormSent(true);
        } catch (error) {}
    };
    const password = watch("password");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        trigger("passwordRepeat");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        password
    ]);
    return isFormSent ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Spinner__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                showSpinner: isResendingEmail
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ModalTitle */ .r6, {
                children: "Подтверждение аккаунта"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .RegFormSentTxt */ .EH, {
                children: [
                    "Мы отправили вам письмо на",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .RegFormSentEmail */ .mc, {
                        children: getValues().email
                    }),
                    " со ссылкой. Пожалуйста, пройдите по этой ссылке, чтобы подтвердить свой аккаунт."
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ConfirmEamilSuccessBtn */ .B7, {
                onClick: handleResendEmail,
                children: "Отправить письмо еще раз"
            })
        ]
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .FormWrapper */ .n5, {
        onSubmit: handleSubmit(handleFormSubmit),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Spinner__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                showSpinner: isRegistering
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ModalTitle */ .r6, {
                children: [
                    "Регистрация ",
                    isTur ? "туриста" : "партнёра"
                ]
            }),
            !isTur && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .RegPartnerTxt */ .Rg, {
                children: "Создайте аккаунт, чтобы зарегистрировать ваш объект или услугу и управлять ими"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                label: "Имя",
                placeholder: "Введите ваше имя",
                ...register("firstName"),
                error: errors.firstName?.message
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                label: "Фамилия",
                placeholder: "Введите вашу фамилию",
                ...register("lastName"),
                error: errors.lastName?.message
            }),
            !isTur && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                label: "Название Компании",
                placeholder: "Введите название вашей компании",
                ...register("company"),
                error: errors?.company?.message
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                label: "Email",
                placeholder: "Введите ваш email",
                ...register("email"),
                autoComplete: "off",
                error: errors.email?.message
            }),
            !isTur && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                name: "phone",
                control: control,
                render: ({ field  })=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_inputs_PhoneInput__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        label: "Телефон",
                        placeholder: "Введите номер телефона",
                        error: errors?.phone?.message,
                        onChange: field.onChange
                    });
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                label: "Пароль",
                placeholder: "Введите ваш пароль",
                ...register("password"),
                isPassword: true,
                error: errors.password?.message,
                startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_EyeIcon__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
                autoComplete: "new-password"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                label: "Повторите пароль",
                placeholder: "Введите ваш пароль еще раз",
                isPassword: true,
                ...register("passwordRepeat"),
                error: errors.passwordRepeat?.message,
                startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_EyeIcon__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
                autoComplete: "new-password"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Checkbox__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                style: {
                    alignItems: "flex-start"
                },
                label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .CondTxt */ .Ns, {
                    children: [
                        "Я принимаю",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .CondLink */ .VB, {
                            href: "/agreement1",
                            target: "_blank",
                            children: "Пользовательское соглашение,"
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .CondLink */ .VB, {
                            href: "/agreement2",
                            target: "_blank",
                            children: "Политику конфиденциальности"
                        }),
                        " ",
                        "и даю",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .CondLink */ .VB, {
                            href: "/agreement3",
                            target: "_blank",
                            children: "Согласие на обработку персональных данных"
                        })
                    ]
                }),
                value: isAgreed,
                setValue: setIsAgreed
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ConfirmBtn */ .Ji, {
                dark: true,
                type: "submit",
                disabled: !!errors.email || !!errors.password || !!errors.passwordRepeat || !!errors.firstName || !!errors.lastName || !isAgreed,
                children: "Зарегистрироваться"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .FooterWrapper */ .V6, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .FooterInfo */ .Z2, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .FooterTxt */ .kJ, {
                            children: "Уже зарегистрированы?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .FooterLink */ .SY, {
                            onClick: ()=>handleFormSwitch(_types__WEBPACK_IMPORTED_MODULE_4__/* .AuthType.LOGIN */ .G.LOGIN),
                            children: "Войти"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistrationForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82910:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24062);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45641);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19218);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61908);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31733);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57441);
/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68270);
/* harmony import */ var _modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70220);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_core_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38445);
/* harmony import */ var _modules_core_components_icons_EyeIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20760);
/* harmony import */ var _modules_core_components_Spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52901);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const ResetPass = ()=>{
    const dispatch = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const [passReset, { isLoading  }] = (0,_modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_10__/* .usePassResetMutation */ .iy)();
    const [isResetSucceed, setIsResetSucceed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
        password: _modules_core_services__WEBPACK_IMPORTED_MODULE_12__/* .passValidationSchema */ .qs,
        passwordRepeat: yup__WEBPACK_IMPORTED_MODULE_5__.string().oneOf([
            yup__WEBPACK_IMPORTED_MODULE_5__.ref("password")
        ], "Пароли не совпадают")
    });
    const { register , handleSubmit , setError , formState: { errors  } , watch , trigger  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__.yupResolver)(validationSchema),
        mode: "onChange"
    });
    const handleFormSubmit = async (data)=>{
        try {
            const result = await passReset({
                ...data,
                confirmationToken: token
            }).unwrap();
            result.success && setIsResetSucceed(true);
        } catch (error) {
            error?.data?.data?.forEach((item)=>{
                setError(item.field, item);
            });
        }
    };
    const handleFormSwitch = (authType)=>{
        dispatch((0,_authSlice__WEBPACK_IMPORTED_MODULE_9__/* .setAuthModal */ .$_)(authType));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const { resettoken  } = router.query;
        if (resettoken) {
            setToken(resettoken);
        }
        return ()=>{
            if (resettoken) {
                // Remove the token from the route
                const routeWithoutToken = router.asPath.replace(`?resettoken=${resettoken}`, "");
                router.replace(routeWithoutToken);
            }
        };
    }, []);
    const password = watch("password");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        trigger("passwordRepeat");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        password
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .FormWrapper */ .n5, {
        onSubmit: handleSubmit(handleFormSubmit),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Spinner__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                showSpinner: isLoading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ModalTitle */ .r6, {
                children: "Установите новый пароль"
            }),
            !isResetSucceed ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        label: "Новый пароль",
                        placeholder: "Введите ваш новый пароль",
                        isPassword: true,
                        ...register("password"),
                        error: errors.password?.message,
                        startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_EyeIcon__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        label: "Повторите новый пароль",
                        placeholder: "Введите ваш новый пароль еще раз",
                        isPassword: true,
                        ...register("passwordRepeat"),
                        error: errors.passwordRepeat?.message,
                        startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_EyeIcon__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ConfirmBtn */ .Ji, {
                        dark: true,
                        type: "submit",
                        disabled: !!errors.passwordRepeat || !!errors.password,
                        children: "Установить пароль"
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .SucceedTxt */ .gv, {
                        children: "Новый пароль успешно установлен!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .ConfirmBtn */ .Ji, {
                        onClick: ()=>handleFormSwitch(_types__WEBPACK_IMPORTED_MODULE_4__/* .AuthType.LOGIN */ .G.LOGIN),
                        children: "Войти в аккаунт"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetPass);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B7": () => (/* binding */ ConfirmEamilSuccessBtn),
/* harmony export */   "EH": () => (/* binding */ RegFormSentTxt),
/* harmony export */   "Ji": () => (/* binding */ ConfirmBtn),
/* harmony export */   "Jo": () => (/* binding */ RegOptionBtn),
/* harmony export */   "Ns": () => (/* binding */ CondTxt),
/* harmony export */   "Qc": () => (/* binding */ RecoverySucceedTxt),
/* harmony export */   "Rg": () => (/* binding */ RegPartnerTxt),
/* harmony export */   "Rk": () => (/* binding */ RegOptionContainer),
/* harmony export */   "SY": () => (/* binding */ FooterLink),
/* harmony export */   "V6": () => (/* binding */ FooterWrapper),
/* harmony export */   "VB": () => (/* binding */ CondLink),
/* harmony export */   "VO": () => (/* binding */ RecoverySucceedWrapper),
/* harmony export */   "Z2": () => (/* binding */ FooterInfo),
/* harmony export */   "a5": () => (/* binding */ BackBtn),
/* harmony export */   "gv": () => (/* binding */ SucceedTxt),
/* harmony export */   "kJ": () => (/* binding */ FooterTxt),
/* harmony export */   "mc": () => (/* binding */ RegFormSentEmail),
/* harmony export */   "n5": () => (/* binding */ FormWrapper),
/* harmony export */   "r6": () => (/* binding */ ModalTitle),
/* harmony export */   "zl": () => (/* binding */ RecoverySucceedEmail)
/* harmony export */ });
/* harmony import */ var _modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42143);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4195);
/* harmony import */ var _mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_2__);



const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().form.withConfig({
    componentId: "sc-1b91817d-0"
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: calc(100vh - 170px);
  overflow-y: auto;
  padding-right: 5px;
  margin-right: -10px;

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
const ModalTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h4.withConfig({
    componentId: "sc-1b91817d-1"
})`
  font-size: 24px;
  line-height: 27px;
  color: #222121;
  text-align: center;
  margin-bottom: 24px;
  ${({ theme  })=>theme.media.down("sm")`
  text-align: left;
  margin-bottom: 16px;
  `}
`;
const ConfirmBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).withConfig({
    componentId: "sc-1b91817d-2"
})`
  margin: 10px 0;
  width: 100%;
  min-height: 63px;
  cursor: pointer;
  ${({ theme  })=>theme.media.down("sm")`
  height: 59px;
  min-height: 59px;
  font-size: 20px;
  line-height: 22px;
  padding: 0px;
  margin-top: 50px;
  `}
`;
const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-1b91817d-3"
})`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-top: 10px;
  align-items: center;
`;
const FooterInfo = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-1b91817d-4"
})`
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  ${({ theme  })=>theme.media.down("xs")`
    width: 80%;
    gap: 10px;
  `}
`;
const FooterTxt = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h6.withConfig({
    componentId: "sc-1b91817d-5"
})`
  font-size: 22px;
  line-height: 25px;
  color: #222121;
  ${({ theme  })=>theme.media.down("sm")`
  font-size: 16px;
  line-height: 18px;
  `}
`;
const FooterLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h6.withConfig({
    componentId: "sc-1b91817d-6"
})`
  font-size: 22px;
  line-height: 25px;
  color: #1d7abd;
  border-bottom: 3px solid #1d7abd;
  padding-bottom: 5px;
  cursor: pointer;
  ${({ theme  })=>theme.media.down("sm")`
  font-size: 16px;
  line-height: 18px;
  padding-bottom: 5px;
  `}
`;
const BackBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((_mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_2___default())).withConfig({
    componentId: "sc-1b91817d-7"
})`
  position: absolute;
  top: 35px;
  left: 35px;
  color: #1d7abd;
  font-size: 24px;
  cursor: pointer;
`;
const RecoverySucceedWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-1b91817d-8"
})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;
const RecoverySucceedTxt = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
    componentId: "sc-1b91817d-9"
})`
  font-size: 16px;
  line-height: 18px;
  color: #222121;
  text-align: center;
  ${({ theme  })=>theme.media.down("sm")`
  text-align: left;
  margin-bottom: 16px;
  `}
`;
const RecoverySucceedEmail = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h6.withConfig({
    componentId: "sc-1b91817d-10"
})`
  font-size: 20px;
  line-height: 23px;
  color: #222121;
  text-align: center;
  ${({ theme  })=>theme.media.down("sm")`
  text-align: left;
  `}
`;
const RegOptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-1b91817d-11"
})`
  display: flex;
  gap: 24px;
  justify-content: center;
  ${({ theme  })=>theme.media.down("sm")`
  flex-direction: column;
  `}
`;
const RegOptionBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).withConfig({
    componentId: "sc-1b91817d-12"
})`
  width: 270px;
  height: 63px;
  cursor: pointer;
  ${({ theme  })=>theme.media.down("sm")`
  font-size: 20px;
  line-height: 23px;
  padding: 0px;
  width: 100%;
  height: 59px;
  `}
`;
const CondTxt = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
    componentId: "sc-1b91817d-13"
})`
  font-size: 16px;
  line-height: 18px;
  ${({ theme  })=>theme.media.down("sm")`
  font-size: 14px;
  line-height: 16px;
  `}
`;
const CondLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
    componentId: "sc-1b91817d-14"
})`
  color: #1d7abd;
`;
const SucceedTxt = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
    componentId: "sc-1b91817d-15"
})`
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  ${({ theme  })=>theme.media.down("sm")`
    text-align: start;
  `}
`;
const ConfirmEamilSuccessBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).withConfig({
    componentId: "sc-1b91817d-16"
})`
  margin: 10px 0;
  width: 100%;
  min-height: 63px;
  margin-top: 24px;
  cursor: pointer;
  ${({ theme  })=>theme.media.down("sm")`
  height: 59px;
  min-height: 59px;
  font-size: 20px;
  line-height: 22px;
  padding: 0px;
  margin-top: 50px;
  `}
`;
const RegFormSentTxt = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
    componentId: "sc-1b91817d-17"
})`
  font-size: 16px;
  line-height: 18px;
`;
const RegPartnerTxt = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
    componentId: "sc-1b91817d-18"
})`
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  margin: -10px 0 10px 0;
`;
const RegFormSentEmail = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
    componentId: "sc-1b91817d-19"
})`
  color: ${(prosps)=>prosps.theme.colors.primary};
`;


/***/ }),

/***/ 4889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ UserStatus)
/* harmony export */ });
/**
 * Go2kavkaz Backend API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: hello@icerockdev.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */ const UserStatus = {
    ACTIVE: "ACTIVE",
    BLOCKED: "BLOCKED",
    AUTO_REGISTERED: "AUTO_REGISTERED",
    CHECKING_EMAIL: "CHECKING_EMAIL",
    CHECKING_CONTRACT: "CHECKING_CONTRACT"
};


/***/ }),

/***/ 52962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Checkbox)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
;// CONCATENATED MODULE: ./modules/core/components/Checkbox/styles.ts


const CheckboxContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-2bd72a7c-0"
})`
  display: flex;
  gap: 10px;
  align-items: center;
  max-height: 48px;
`;
const CheckboxStyled = external_styled_components_default()(material_.Checkbox).withConfig({
    componentId: "sc-2bd72a7c-1"
})`
  width: 20px;
  height: 20px;
`;
const CheckboxLabel = external_styled_components_default().p.withConfig({
    componentId: "sc-2bd72a7c-2"
})`
  ${({ theme  })=>external_styled_components_.css`
    font-family: ${theme.font.family.gothicMedium};
    color: ${theme.colors.default};
    font-weight: ${theme.font.weight.regular};
    font-size: 16px;
    font-style: normal;
    line-height: normal;

    &::first-letter {
      text-transform: capitalize;
    }
  `}
`;

;// CONCATENATED MODULE: ./modules/core/components/Checkbox/index.tsx



const Checkbox = ({ label , value , setValue , ...props })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CheckboxContainer, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CheckboxStyled, {
                checked: value,
                onChange: (e)=>setValue(e.target.checked),
                defaultValue: "checked"
            }),
            label && typeof label === "string" ? /*#__PURE__*/ jsx_runtime_.jsx(CheckboxLabel, {
                className: "checkboxLabel",
                children: label
            }) : label
        ]
    });
};
/* harmony default export */ const components_Checkbox = (Checkbox);


/***/ }),

/***/ 39717:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_core_components_MainNavigationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26577);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57441);
/* harmony import */ var _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68270);
/* harmony import */ var _modules_core_components_MainNavigationBar_MenuItem_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12888);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_core_hooks_useMatchMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40152);
/* harmony import */ var _modules_core_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80514);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_core_components_MainNavigationBar__WEBPACK_IMPORTED_MODULE_3__]);
_modules_core_components_MainNavigationBar__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const MenuItem = ({ name , url , dropDownLinks , accessAllowed , allowedDevices , closeDrawer  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const profile = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)(_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__/* .selectProfileData */ .NI);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const deviceType = (0,_modules_core_hooks_useMatchMedia__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(`(max-width: ${_modules_core_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_9__/* .breakpoints.sm */ .AV.sm}px)`) ? _modules_core_components_MainNavigationBar__WEBPACK_IMPORTED_MODULE_3__/* .Devices.MOBILE */ .u.MOBILE : _modules_core_components_MainNavigationBar__WEBPACK_IMPORTED_MODULE_3__/* .Devices.DESKTOP */ .u.DESKTOP;
    const isRoleAllowed = profile && accessAllowed.includes(profile.role) || !profile && accessAllowed.includes(_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__/* .Roles.guest */ .G7.guest);
    if (!dropDownLinks && isRoleAllowed && allowedDevices.includes(deviceType)) {
        const isActive = router.pathname === url;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: `${url}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_MainNavigationBar_MenuItem_styles__WEBPACK_IMPORTED_MODULE_6__/* .StyledLink */ .Fg, {
                active: isActive,
                onClick: closeDrawer,
                children: name
            })
        }, name);
    }
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fg": () => (/* binding */ StyledLink)
/* harmony export */ });
/* unused harmony exports MenuItemContainer, MenuItemHeader, DropDownMenu, DropDownLink */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const MenuItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-9a98014c-0"
})`
  ${({ theme , active  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    cursor: pointer;
    position: relative;
    z-index: 1;
    border-bottom: 2px solid ${active ? "white" : "transparent"};

    ${theme.media.down("sm")`
      display: flex;
      flex-direction: column;
      gap: 8px;
      border-bottom: none;
    `}
  `}
`;
const MenuItemHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-9a98014c-1"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
    ${theme.media.down("sm")`
      justify-content: flex-start;
    `}
  `}
`;
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-9a98014c-2"
})`
  ${({ theme , active  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.gothicMedium};
    cursor: pointer;
    font-size: 24px;
    border-bottom: 2px solid ${active ? "white" : "transparent"};
    ${theme.media.down("sm")`
      width: fit-content;
    `}
  `}
`;
const DropDownMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-9a98014c-3"
})`
  ${({ theme , open  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    position: absolute;
    top: 30px;
    display: ${open ? "flex" : "none"};
    white-space: nowrap;
    border-radius: 16px;
    padding: 16px;
    flex-direction: column;
    gap: 24px;
    border: 2px solid ${theme.colors.primary};
    background: ${theme.colors.white};
    z-index: 1;
    left: -40%;

    ${theme.media.down("sm")`
      position: relative;
      left: 0;
      top: 0;
      transform: unset;
      padding: 0;
      border: none;
      padding-left: 10px;
      background: transparent;
      overflow-wrap: anywhere;
      white-space: break-spaces;
    `}
  `}
`;
const DropDownLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-9a98014c-4"
})`
  ${({ theme , active  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.primary};
    font-family: ${theme.font.family.gothicMedium};
    cursor: pointer;
    font-size: ${theme.font.size.subtitle1};
    font-weight: 400;
    border-bottom: 2px solid ${active ? theme.colors.primary : "transparent"};
    ${theme.media.down("sm")`
       width: fit-content;
       color: ${theme.colors.white};
       border-bottom: 2px solid ${active ? theme.colors.white : "none"};
    `}
  `}
`;


/***/ }),

/***/ 26577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "u": () => (/* binding */ Devices)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52623);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_MainLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41593);
/* harmony import */ var _icons_ProfileIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85727);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57441);
/* harmony import */ var _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68270);
/* harmony import */ var _modules_auth_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19218);
/* harmony import */ var _icons_MenuIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58570);
/* harmony import */ var _icons_CloseIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14649);
/* harmony import */ var _containers_AppLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18618);
/* harmony import */ var _modules_core_components_MainNavigationBar_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39717);
/* harmony import */ var _modules_auth_AuthContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(48359);
/* harmony import */ var _modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90756);
/* harmony import */ var _modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(82741);
/* harmony import */ var _modules_guide_components_GuideFilter_guideFilterSlice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2982);
/* harmony import */ var _modules_core_helpers_guideQueryHandler__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(51667);
/* harmony import */ var _modules_excursion_components_ExcursionFilter_ExcursionFilterSlice__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(81985);
/* harmony import */ var _modules_core_helpers_excursionQueryHandler__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(26239);
/* harmony import */ var _modules_core_components_icons_EnterIcon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(17139);
/* harmony import */ var _api_model_user_userStatus__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(4889);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_AppLayout__WEBPACK_IMPORTED_MODULE_12__, _modules_core_components_MainNavigationBar_MenuItem__WEBPACK_IMPORTED_MODULE_13__, _modules_auth_AuthContainer__WEBPACK_IMPORTED_MODULE_14__]);
([_containers_AppLayout__WEBPACK_IMPORTED_MODULE_12__, _modules_core_components_MainNavigationBar_MenuItem__WEBPACK_IMPORTED_MODULE_13__, _modules_auth_AuthContainer__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

























var Devices;
(function(Devices) {
    Devices["MOBILE"] = "MOBILE";
    Devices["DESKTOP"] = "DESKTOP";
})(Devices || (Devices = {}));
const MainNavigationBar = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .T)();
    const isAuth = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .C)(_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .selectUserToken */ .vI);
    const refreshToken = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .C)(_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .selectRefreshToken */ .mr);
    const profile = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .C)(_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .selectProfileData */ .NI);
    const [login, setLogin] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [drawer, setDrawer] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLogin(!!isAuth);
    }, [
        isAuth
    ]);
    const toggleDrawer = (val)=>{
        setDrawer(val);
    };
    const handleLogin = (authType)=>{
        dispatch((0,_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .setAuthModal */ .$_)(authType));
    };
    const onProfileIconClickHandler = ()=>{
        if (!login) {
            handleLogin(_modules_auth_types__WEBPACK_IMPORTED_MODULE_9__/* .AuthType.LOGIN */ .G.LOGIN);
            return;
        }
        router.push("/profile");
    };
    // TODO need refactoring in the future. Can place placement store into queryHandler.
    const filterPlacementData = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .C)(_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_16__/* .selectFilterValues */ .N$);
    const { queriesString: placementQueryString  } = (0,_modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_15__/* .queryHandler */ .F)(filterPlacementData, _modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_15__/* .QueryLocation.list */ .v.list);
    const filterGuideData = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .C)(_modules_guide_components_GuideFilter_guideFilterSlice__WEBPACK_IMPORTED_MODULE_17__/* .selectGuideFilterValues */ .jn);
    const { queriesString: guideQueryString  } = (0,_modules_core_helpers_guideQueryHandler__WEBPACK_IMPORTED_MODULE_18__/* .guideQueryHandler */ .w)(filterGuideData, _modules_core_helpers_guideQueryHandler__WEBPACK_IMPORTED_MODULE_18__/* .GuideQueryLocation.list */ .a.list);
    const filterExcursionData = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAppSelector */ .C)(_modules_excursion_components_ExcursionFilter_ExcursionFilterSlice__WEBPACK_IMPORTED_MODULE_19__/* .selectExcursionFilterValues */ .tE);
    const { queriesString: excursionQueryString  } = (0,_modules_core_helpers_excursionQueryHandler__WEBPACK_IMPORTED_MODULE_20__/* .excursionQueryHandler */ .k)(filterExcursionData, _modules_core_helpers_excursionQueryHandler__WEBPACK_IMPORTED_MODULE_20__/* .ExcursionQueryLocation.list */ .y.list);
    const isPartnerCheckingStatus = profile?.status === _api_model_user_userStatus__WEBPACK_IMPORTED_MODULE_22__/* .UserStatus.CHECKING_CONTRACT */ .J.CHECKING_CONTRACT && profile?.role === _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .Roles.partner */ .G7.partner;
    const pages = [
        {
            name: "Панель управления",
            url: "/control-panel",
            accessAllowed: [
                _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .Roles.partner */ .G7.partner
            ],
            allowedDevices: [
                Devices.DESKTOP,
                Devices.MOBILE
            ]
        },
        {
            name: "Уведомления",
            url: "/notification",
            accessAllowed: [
                _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .Roles.partner */ .G7.partner
            ],
            allowedDevices: [
                Devices.MOBILE
            ]
        },
        {
            name: "Жильё",
            url: `/control-panel/placement`,
            accessAllowed: [
                _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .Roles.partner */ .G7.partner
            ],
            allowedDevices: [
                Devices.DESKTOP,
                Devices.MOBILE
            ]
        },
        {
            name: "Бронирования",
            url: `/control-panel/booking`,
            accessAllowed: [
                _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .Roles.partner */ .G7.partner
            ],
            allowedDevices: [
                Devices.DESKTOP,
                Devices.MOBILE
            ]
        },
        {
            name: "Экскурсии",
            url: `/control-panel/excursion`,
            accessAllowed: [
                _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .Roles.partner */ .G7.partner
            ],
            allowedDevices: [
                Devices.DESKTOP,
                Devices.MOBILE
            ]
        },
        {
            name: "Гиды",
            url: `/control-panel/guide`,
            accessAllowed: [
                _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .Roles.partner */ .G7.partner
            ],
            allowedDevices: [
                Devices.DESKTOP,
                Devices.MOBILE
            ]
        },
        {
            name: "Жилье",
            url: `/placement?${placementQueryString}`,
            accessAllowed: [
                _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .Roles.tourist */ .G7.tourist,
                _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .Roles.guest */ .G7.guest
            ],
            allowedDevices: [
                Devices.DESKTOP,
                Devices.MOBILE
            ]
        },
        {
            name: "Экскурсии",
            url: `/excursion?${excursionQueryString}`,
            accessAllowed: [
                _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .Roles.tourist */ .G7.tourist,
                _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .Roles.guest */ .G7.guest
            ],
            allowedDevices: [
                Devices.DESKTOP,
                Devices.MOBILE
            ]
        },
        {
            name: "Гиды",
            url: `/guide?${guideQueryString}`,
            accessAllowed: [
                _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .Roles.tourist */ .G7.tourist,
                _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .Roles.guest */ .G7.guest
            ],
            allowedDevices: [
                Devices.DESKTOP,
                Devices.MOBILE
            ]
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .HeaderContainer */ .gM, {
        isHomePage: router.pathname === "/",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .DesktopContainer */ .C5, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .HeaderMainLine */ .a2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                prefetch: false,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_MainLogo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                            }),
                            login ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .AuthContent */ .pg, {
                                login: login,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .UserName */ .vx, {
                                        children: `${profile?.firstName || ""} ${profile?.lastName || ""}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/profile",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .IconBtn */ .a5, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledLink */ .Fg, {
                                                style: {
                                                    paddingBottom: "0px",
                                                    height: "24px"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ProfileIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                            })
                                        })
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .AuthContent */ .pg, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .AuthBtn */ .LH, {
                                        onClick: ()=>handleLogin(_modules_auth_types__WEBPACK_IMPORTED_MODULE_9__/* .AuthType.REG */ .G.REG),
                                        children: "Регистрация"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .AuthBtn */ .LH, {
                                        onClick: ()=>handleLogin(_modules_auth_types__WEBPACK_IMPORTED_MODULE_9__/* .AuthType.LOGIN */ .G.LOGIN),
                                        children: "Войти в аккаунт"
                                    })
                                ]
                            })
                        ]
                    }),
                    !isPartnerCheckingStatus && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .HeaderMenuItems */ .I3, {
                        children: pages.map((page, index)=>{
                            return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_modules_core_components_MainNavigationBar_MenuItem__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                ...page,
                                key: `${page.name}-${index}`
                            });
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_auth_AuthContainer__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .MobileContainer */ .OJ, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .MenuContent */ .Dv, {
                        children: [
                            drawer ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .IconBtn */ .a5, {
                                onClick: ()=>toggleDrawer(false),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .IconBtn */ .a5, {
                                onClick: ()=>toggleDrawer(true),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_MenuIcon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .AppDrawer */ .GZ, {
                                className: `${_containers_AppLayout__WEBPACK_IMPORTED_MODULE_12__/* .franklinGothicMedium.className */ .J7.className}`,
                                anchor: "left",
                                open: drawer,
                                onClose: ()=>toggleDrawer(false),
                                onOpen: ()=>toggleDrawer(true),
                                slotProps: {
                                    root: {
                                        style: {
                                            maxHeight: "calc(100vh - 104px)",
                                            top: "104px"
                                        }
                                    },
                                    backdrop: {
                                        className: "backdrop"
                                    }
                                },
                                PaperProps: {
                                    className: "paper"
                                },
                                children: !isPartnerCheckingStatus && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledNavBox */ .ts, {
                                    children: pages.map((page, index)=>{
                                        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_modules_core_components_MainNavigationBar_MenuItem__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                            ...page,
                                            key: `${page.name}-${index}`,
                                            closeDrawer: ()=>toggleDrawer(false)
                                        });
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .StyledLink */ .Fg, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_MainLogo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .IconBtn */ .a5, {
                        onClick: onProfileIconClickHandler,
                        children: login ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ProfileIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_EnterIcon__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainNavigationBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C5": () => (/* binding */ DesktopContainer),
/* harmony export */   "Dv": () => (/* binding */ MenuContent),
/* harmony export */   "Fg": () => (/* binding */ StyledLink),
/* harmony export */   "GZ": () => (/* binding */ AppDrawer),
/* harmony export */   "I3": () => (/* binding */ HeaderMenuItems),
/* harmony export */   "LH": () => (/* binding */ AuthBtn),
/* harmony export */   "OJ": () => (/* binding */ MobileContainer),
/* harmony export */   "a2": () => (/* binding */ HeaderMainLine),
/* harmony export */   "a5": () => (/* binding */ IconBtn),
/* harmony export */   "gM": () => (/* binding */ HeaderContainer),
/* harmony export */   "pg": () => (/* binding */ AuthContent),
/* harmony export */   "ts": () => (/* binding */ StyledNavBox),
/* harmony export */   "vx": () => (/* binding */ UserName)
/* harmony export */ });
/* unused harmony exports HeaderMenu, Logout */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42143);



const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-2820e736-0"
})`
  ${({ theme , isHomePage  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    background: ${theme.colors.secondary};
    padding: 24px 0;
    height: ${isHomePage && "192px"};

    ${theme.media.down("sm")`
    position: fixed;
    top: 0;
    width: 100vw;
    padding: 16px 0px;
    height: 80px;
    z-index: 1001;
    `}
  `}
`;
const DesktopContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-2820e736-1"
})`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  max-width: 1180px;
  padding: 0 10px;
  ${(props)=>props.theme.media.down("lg")`
    width: 100%;
  `}
  ${({ theme  })=>theme.media.down("sm")`
   display: none;
  `}
`;
const MobileContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-2820e736-2"
})`
  display: none;
  ${({ theme  })=>theme.media.down("sm")`
   display: flex;
   justify-content: space-between;
   padding: 0 10px;
  `}
  ${({ theme  })=>theme.media.down("xs")`
   gap: 8px;
   `}
  ${({ theme  })=>theme.media.down("xxs")`
   gap: 0;
   `}
`;
const HeaderMainLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-2820e736-3"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AuthContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-2820e736-4"
})`
  display: flex;
  z-index: 1;
  align-items: center;
  gap: 24px;
`;
const UserName = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-2820e736-5"
})`
  white-space: nowrap;
  align-self: center;
  text-align: right;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.white};
    font-size: 24px;
    font-family: ${theme.font.family.gothicMedium};
  `};
`;
const HeaderMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-2820e736-6"
})`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const AuthBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-2820e736-7"
})`
  cursor: pointer;
  white-space: nowrap;
  height: 48px;
  font-size: 16px;
  padding: 0 18px;
  ${({ theme  })=>theme.media.down("sm")`
  height: 48px;
  width: 48px;
  padding: 0px;
  border-radius: 16px;
  font-size: 34px;
  `}
`;
const IconBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-2820e736-8"
})`
  cursor: pointer;
  padding: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  ${({ theme  })=>theme.media.down("sm")`
    height: 48px;
    width: 48px;
  `}
`;
const AppDrawer = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_mui_material__WEBPACK_IMPORTED_MODULE_1__.SwipeableDrawer).withConfig({
    componentId: "sc-2820e736-9"
})`
  .backdrop,
  .paper {
    max-height: calc(100vh - 80px);
    top: 80px;
  }
  .paper {
    box-shadow: 0 0 0 0 rgba(0, 0, 0);
    width: 300px;
    background: ${({ theme  })=>theme.colors.secondary};
    padding: 30px 0 0 16px;
  }
`;
const MenuContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-2820e736-10"
})``;
const StyledNavBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box).withConfig({
    componentId: "sc-2820e736-11"
})`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  ${({ theme  })=>theme.media.down("sm")`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: flex-start;
  `}
`;
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-2820e736-12"
})`
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-size: 26px;
  border-bottom: ${(props)=>props.active ? "white" : "none"} 2px solid;
  ${({ theme  })=>theme.media.down("sm")`
   width: fit-content;
  `}
`;
const Logout = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StyledLink).withConfig({
    componentId: "sc-2820e736-13"
})`
  position: absolute;
  bottom: 70px;
`;
const HeaderMenuItems = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-2820e736-14"
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 32px;
  row-gap: 16px;
  align-self: flex-start;
  align-items: flex-start;
  font-family: ${({ theme  })=>theme.font.family.gothicMedium};
`;


/***/ }),

/***/ 18618:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J7": () => (/* reexport default from dynamic */ next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_franklinGothicMedium_ttf_variable_font_franklin_variableName_franklinGothicMedium___WEBPACK_IMPORTED_MODULE_9___default.a),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ut": () => (/* reexport default from dynamic */ next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_franklinGothicBook_ttf_variable_font_franklin_book_variableName_franklinGothicBook___WEBPACK_IMPORTED_MODULE_11___default.a)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_franklinGothicMedium_ttf_variable_font_franklin_variableName_franklinGothicMedium___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87994);
/* harmony import */ var next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_franklinGothicMedium_ttf_variable_font_franklin_variableName_franklinGothicMedium___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_franklinGothicMedium_ttf_variable_font_franklin_variableName_franklinGothicMedium___WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_FranklinGothicDemiRegular_ttf_variable_font_franklin_demi_variableName_franklinGothicDemiRegular___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90470);
/* harmony import */ var next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_FranklinGothicDemiRegular_ttf_variable_font_franklin_demi_variableName_franklinGothicDemiRegular___WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_FranklinGothicDemiRegular_ttf_variable_font_franklin_demi_variableName_franklinGothicDemiRegular___WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_franklinGothicBook_ttf_variable_font_franklin_book_variableName_franklinGothicBook___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93247);
/* harmony import */ var next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_franklinGothicBook_ttf_variable_font_franklin_book_variableName_franklinGothicBook___WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_franklinGothicBook_ttf_variable_font_franklin_book_variableName_franklinGothicBook___WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_interRegular_ttf_variable_inter_regular_variableName_interRegular___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55030);
/* harmony import */ var next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_interRegular_ttf_variable_inter_regular_variableName_interRegular___WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_interRegular_ttf_variable_inter_regular_variableName_interRegular___WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_interBold_ttf_variable_inter_bold_variableName_interBold___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20114);
/* harmony import */ var next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_interBold_ttf_variable_inter_bold_variableName_interBold___WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_interBold_ttf_variable_inter_bold_variableName_interBold___WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MainNavigationBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26577);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68270);
/* harmony import */ var _modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70220);
/* harmony import */ var _modules_core_api_model_user_userStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4889);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_MainNavigationBar__WEBPACK_IMPORTED_MODULE_2__]);
_components_MainNavigationBar__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const LayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-dc49327-0"
})`
  ${({ theme  })=>theme.media.down("sm")`
      padding-top: 100px;
  `}
  ${({ theme  })=>theme.media.down("xs")`
      padding-top: 96px;
  `}
`;
const AppLayout = ({ children  })=>{
    // Put user's profile data into a store if there's empty
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__/* .selectUserToken */ .vI);
    const account = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__/* .selectProfileData */ .NI);
    const { data , isLoading  } = (0,_modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_6__/* .useGetProfileDataQuery */ .eU)(undefined, {
        skip: !account && !token
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const isProfile = router.pathname === "/profile";
        const isControlPanel = router.pathname.includes("control-panel");
        const isConfirmPage = router.pathname.includes("booking") || router.pathname.includes("confirm");
        if (!account && data) {
            const profileData = data.data;
            dispatch((0,_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__/* .setProfile */ .RG)(profileData));
            if (profileData?.role === _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__/* .Roles.tourist */ .G7.tourist) return;
            if (profileData?.role === _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__/* .Roles.admin */ .G7.admin) {
                dispatch((0,_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__/* .setLogOut */ .H0)());
                window.location.href = `https://admin.${window.location.hostname}`;
            }
            if (profileData?.role === _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__/* .Roles.partner */ .G7.partner && profileData?.status === _modules_core_api_model_user_userStatus__WEBPACK_IMPORTED_MODULE_7__/* .UserStatus.CHECKING_CONTRACT */ .J.CHECKING_CONTRACT) {
                void router.push("/profile");
            }
            if (profileData?.role === _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__/* .Roles.partner */ .G7.partner && profileData?.status !== _modules_core_api_model_user_userStatus__WEBPACK_IMPORTED_MODULE_7__/* .UserStatus.CHECKING_CONTRACT */ .J.CHECKING_CONTRACT && !isProfile && !isControlPanel && !isConfirmPage) {
                void router.push("/control-panel");
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        account,
        data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LayoutContainer, {
        className: `
      ${(next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_franklinGothicMedium_ttf_variable_font_franklin_variableName_franklinGothicMedium___WEBPACK_IMPORTED_MODULE_9___default().variable)} 
      ${(next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_FranklinGothicDemiRegular_ttf_variable_font_franklin_demi_variableName_franklinGothicDemiRegular___WEBPACK_IMPORTED_MODULE_10___default().variable)} 
      ${(next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_franklinGothicBook_ttf_variable_font_franklin_book_variableName_franklinGothicBook___WEBPACK_IMPORTED_MODULE_11___default().variable)} 
      ${(next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_interRegular_ttf_variable_inter_regular_variableName_interRegular___WEBPACK_IMPORTED_MODULE_12___default().variable)} 
      ${(next_font_local_target_css_path_modules_core_containers_AppLayout_tsx_import_arguments_src_path_public_fonts_interBold_ttf_variable_inter_bold_variableName_interBold___WEBPACK_IMPORTED_MODULE_13___default().variable)}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MainNavigationBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLayout);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useOverflowControl = (value)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (false) {}
        return ()=>{
            document.documentElement.style.overflow = "unset";
        };
    }, [
        value
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useOverflowControl);


/***/ })

};
;