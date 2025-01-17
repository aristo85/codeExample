exports.id = 9461;
exports.ids = [9461];
exports.modules = {

/***/ 24062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ inputs_InputStyled)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./modules/core/components/inputs/InputStyled/styles.ts

const Root = external_styled_components_default().label.withConfig({
    componentId: "sc-a4685b61-0"
})`
  position: relative;
  display: block;
  width: 100%;
  padding-bottom: 17px;
  opacity: ${(props)=>props.isDisabled ? 0.3 : 1};
`;
const Label = external_styled_components_default().label.withConfig({
    componentId: "sc-a4685b61-1"
})`
  display: block;
  margin-bottom: 8px;
  line-height: 23px;
  ${({ theme  })=>external_styled_components_.css`
    font-size: ${theme.font.size.subtitle2};
    color: ${theme.colors.default};
  `}
`;
const InputFieldWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-a4685b61-2"
})`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid ${({ theme , isError  })=>isError ? "red" : "grey"};
  overflow: hidden;
  transition: ${(props)=>props.theme.transition.fast};

  height: 48px;
  background: #ffffff !important;
  border: 3px solid
    ${({ theme , isError , isFilled  })=>isFilled && !isError ? theme.colors.primary : isError ? "red" : theme.colors.secondary};
  border-radius: 16px;

  &::after {
    content: '';
    position: absolute;
    top: calc(100% - 1px);
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transition: ${(props)=>props.theme.transition.fast};
  }

  ${(props)=>props.isFocused && external_styled_components_.css`
      &::after {
        transform: scaleX(1);
      }
    `}
`;
const Adornment = external_styled_components_default().div.withConfig({
    componentId: "sc-a4685b61-3"
})`
  display: flex;

  ${(props)=>props.position === "left" && external_styled_components_.css`
      margin-left: 17px;
    `}

  ${(props)=>props.position === "right" && external_styled_components_.css`
      margin-left: 8px;
    `}

  ${(props)=>props.isPassword && external_styled_components_.css`
      cursor: pointer;
    `}
`;
const InputField = external_styled_components_default().input.withConfig({
    componentId: "sc-a4685b61-4"
})`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: ${(props)=>props.theme.font.size.body2};
  font-weight: ${(props)=>props.theme.font.weight.semiBold};
  padding-left: 17px;
  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }

  &:disabled {
    background-color: ${(props)=>props.theme.colors.lightDefault};
    color: ${(props)=>props.theme.colors.default};
  }

  &::placeholder {
    color: ${(props)=>props.theme.colors.secondary};
  }
`;
const ErrorMessage = external_styled_components_default().span.withConfig({
    componentId: "sc-a4685b61-5"
})`
  position: absolute;
  left: 0;
  color: red;
  font-size: 14px;
  width: 100%;
  white-space: break-spaces;

  ${({ theme  })=>theme.media.down("xs")`
    position: relative;
  `}
`;

// EXTERNAL MODULE: ./modules/core/hooks/useBoolean.ts
var useBoolean = __webpack_require__(62405);
;// CONCATENATED MODULE: ./modules/core/components/inputs/InputStyled/index.tsx




const InputStyled = /*#__PURE__*/ (0,external_react_.forwardRef)(({ name , label , placeholder , startAdornment , endAdornment , className , style , disabled =false , error , onFocus , onBlur , isPassword , completeDisable , ...props }, ref)=>{
    const [isFocused, setIsFocused] = (0,useBoolean/* useBoolean */.k)();
    const [isPassVis, setIsPassVis] = (0,external_react_.useState)(false);
    const [isFilled, setIsFilled] = (0,external_react_.useState)(false);
    const handleInputFocus = (0,external_react_.useCallback)((e)=>{
        onFocus && onFocus(e);
        setIsFocused.on();
    }, [
        onFocus,
        setIsFocused.on
    ]);
    const handleInputBlur = (0,external_react_.useCallback)((e)=>{
        onBlur && onBlur(e);
        setIsFocused.off();
        setIsFilled(true);
    }, [
        onBlur,
        setIsFocused.off
    ]);
    const handlePassWordVisibility = ()=>{
        setIsPassVis((val)=>!val);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Root, {
        isDisabled: !!completeDisable,
        className: className,
        style: style,
        children: [
            !!label && /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InputFieldWrapper, {
                className: "inputwrapper",
                isError: !!error,
                isFocused: isFocused,
                isFilled: isFilled,
                children: [
                    startAdornment && /*#__PURE__*/ jsx_runtime_.jsx(Adornment, {
                        isPassword: isPassword,
                        position: "left",
                        onClick: ()=>isPassword && handlePassWordVisibility(),
                        children: startAdornment
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputField, {
                        placeholder: placeholder,
                        name: name,
                        disabled: disabled || completeDisable,
                        ref: ref,
                        onFocus: handleInputFocus,
                        onBlur: handleInputBlur,
                        ...props,
                        type: isPassword ? isPassVis ? "text" : "password" : props.type
                    }),
                    endAdornment && /*#__PURE__*/ jsx_runtime_.jsx(Adornment, {
                        position: "right",
                        children: endAdornment
                    })
                ]
            }),
            !!error && /*#__PURE__*/ jsx_runtime_.jsx(ErrorMessage, {
                children: error
            })
        ]
    });
});
InputStyled.displayName = "InputStyled";
/* harmony default export */ const inputs_InputStyled = (InputStyled);


/***/ }),

/***/ 76099:
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71001);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_2__]);
_styles__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const FlagComp = ({ country  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            width: "24px",
            height: "24px"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FlagImg */ .Ih, {
            src: `https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`,
            alt: "image",
            width: 100,
            height: 100
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlagComp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79461:
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
/* harmony import */ var react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68680);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71001);
/* harmony import */ var _FlagComp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76099);
/* harmony import */ var react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80483);
/* harmony import */ var react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_phone_number_input_locale_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53445);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57441);
/* harmony import */ var _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68270);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _InputStyled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24062);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93554);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_core_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__, _styles__WEBPACK_IMPORTED_MODULE_3__, _FlagComp__WEBPACK_IMPORTED_MODULE_4__, react_phone_number_input_locale_en_json__WEBPACK_IMPORTED_MODULE_6__]);
([react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__, _styles__WEBPACK_IMPORTED_MODULE_3__, _FlagComp__WEBPACK_IMPORTED_MODULE_4__, react_phone_number_input_locale_en_json__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const PhoneInputNumber = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ onChange , phoneNumber , label , placeholder , error , from  }, ref)=>{
    const dispatch = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .T)();
    const [currentPhoneWithoutCode, setCurrentPhoneWithoutCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const countryCode = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .selectCountryCode */ .eV);
    const contDig = countryCode.codeNum;
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const currentPhoneWithoutCodeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(currentPhoneWithoutCode);
    const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__.getCountries)().map((cont)=>({
                value: cont,
                title: `+${(0,react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__.getCountryCallingCode)(cont)}`,
                titleOption: react_phone_number_input_locale_en_json__WEBPACK_IMPORTED_MODULE_6__["default"][cont],
                startAdornment: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FlagComp__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    country: cont
                }),
                selectedStartAdornment: true
            })).sort((a, b)=>a.titleOption.localeCompare(b.titleOption)), []);
    const handleSetCountryCode = (value)=>{
        const inNumber = (0,react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__.getCountryCallingCode)(value ?? "RU");
        dispatch((0,_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .setCountryCode */ .mY)({
            codeStr: value,
            codeNum: inNumber
        }));
        onChange && onChange(inNumber);
        setCurrentPhoneWithoutCode("");
    };
    const handleNationalPhoneChange = (data)=>{
        setCurrentPhoneWithoutCode(data);
        onChange && onChange(contDig + data);
    };
    const handleInitialInputValue = (initValue, currentValue)=>{
        const parsedInitialNumber = (0,react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__.parsePhoneNumber)(`+${initValue}`);
        if (parsedInitialNumber && !currentValue) {
            const { country , countryCallingCode , nationalNumber  } = parsedInitialNumber;
            dispatch((0,_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_8__/* .setCountryCode */ .mY)({
                codeStr: country ? country : countryCode.codeStr,
                codeNum: countryCallingCode
            }));
            setCurrentPhoneWithoutCode(nationalNumber);
            onChange && onChange(countryCallingCode + nationalNumber);
        }
    };
    const handlePaste = (event)=>{
        const pastedValue = event.clipboardData.getData("Text");
        const cleanValue = pastedValue.replace(/\D/g, "");
        if (cleanValue.length > 10) {
            handleInitialInputValue(cleanValue);
        }
    };
    const handleRawInputEvent = (event)=>{
        const target = event.target;
        const rawValue = target.value;
        const cleanValue = rawValue.replace(/\D/g, "");
        if (cleanValue.length > 10 && !currentPhoneWithoutCodeRef.current) {
            handleInitialInputValue(cleanValue, currentPhoneWithoutCodeRef.current);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        phoneNumber && handleInitialInputValue(phoneNumber, currentPhoneWithoutCodeRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        phoneNumber
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!inputRef.current) return;
        const inputElement = inputRef.current.querySelector("input");
        if (!inputElement) return;
        inputElement.addEventListener("input", handleRawInputEvent);
        return ()=>{
            inputElement.removeEventListener("input", handleRawInputEvent);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        currentPhoneWithoutCodeRef.current = currentPhoneWithoutCode;
    }, [
        currentPhoneWithoutCode
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .PhoneInputContainer */ .Mv, {
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .Label */ .__, {
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .InputWrapper */ .SP, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .CountrySelect */ .OP, {
                        options: options,
                        value: countryCode.codeStr,
                        onChange: handleSetCountryCode,
                        notEmpty: true,
                        from: from
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .PhoneWithoutCodeContainer */ .HJ, {
                        ref: inputRef,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_number_format__WEBPACK_IMPORTED_MODULE_11__.PatternFormat, {
                            name: "phone",
                            customInput: _InputStyled__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                            onValueChange: (value, source)=>source.event && handleNationalPhoneChange(value.value),
                            format: (0,_modules_core_services__WEBPACK_IMPORTED_MODULE_12__/* .formatPhoneNumber */ .un)(countryCode.codeNum),
                            value: currentPhoneWithoutCode,
                            placeholder: placeholder,
                            error: error,
                            onPaste: handlePaste
                        })
                    })
                ]
            })
        ]
    });
});
PhoneInputNumber.displayName = "PhoneInputNumber";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneInputNumber);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71001:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HJ": () => (/* binding */ PhoneWithoutCodeContainer),
/* harmony export */   "Ih": () => (/* binding */ FlagImg),
/* harmony export */   "Mv": () => (/* binding */ PhoneInputContainer),
/* harmony export */   "OP": () => (/* binding */ CountrySelect),
/* harmony export */   "SP": () => (/* binding */ InputWrapper),
/* harmony export */   "__": () => (/* binding */ Label)
/* harmony export */ });
/* unused harmony export ErrorMessage */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8825);
/* harmony import */ var react_phone_number_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68680);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_phone_number_input__WEBPACK_IMPORTED_MODULE_3__]);
react_phone_number_input__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default().label.withConfig({
    componentId: "sc-40afcf67-0"
})`
  display: block;
  line-height: 23px;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    font-size: ${theme.font.size.subtitle2};
    color: ${theme.colors.default};
  `}
`;
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-40afcf67-1"
})`
  display: flex;
  gap: 8px;
  width: 100%;
`;
const PhoneWithoutCodeContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-40afcf67-2"
})`
  width: 100%;
`;
const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-40afcf67-3"
})`
  color: red;
  font-size: 14px;
  width: 100%;
  margin-top: -20px;
`;
const FlagImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
    componentId: "sc-40afcf67-4"
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
const CountrySelect = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-40afcf67-5"
})`
  .selector {
    border: ${({ from  })=>from === "profile" ? "2px" : "3px"} solid
      ${(props)=>props.theme.colors.secondary};
  }
  .selector:focus {
    border-color: ${(props)=>props.theme.colors.primary};
  }
  max-width: ${(props)=>{
    const length = props.value ? (0,react_phone_number_input__WEBPACK_IMPORTED_MODULE_3__.getCountryCallingCode)(props.value).length : 1;
    return `${105 + length * 10}px`;
}};
  .optionsMenu {
    top: 70%;
    width: fit-content;
    overflow-y: auto;
    max-height: 200px;
    ${(props)=>props.theme.scrollbar.thinSecondary}
  }
`;
const PhoneInputContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-40afcf67-6"
})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useBoolean)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useBoolean = (config)=>{
    const [booleanValue, setBooleanValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!!config?.initialValue);
    const on = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setBooleanValue(true);
    }, []);
    const off = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setBooleanValue(false);
    }, []);
    const toggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setBooleanValue((value)=>!value);
    }, []);
    return [
        booleanValue,
        {
            on,
            off,
            toggle
        }
    ];
};


/***/ }),

/***/ 80483:
/***/ (() => {



/***/ })

};
;