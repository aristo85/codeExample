"use strict";
exports.id = 9511;
exports.ids = [9511];
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

/***/ 8825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Select)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./modules/core/components/inputs/Select/styles.ts

const Root = external_styled_components_default().div.withConfig({
    componentId: "sc-a91c10b2-0"
})`
  position: relative;
  width: 100%;
  cursor: pointer;
  user-select: none;
  padding-bottom: 0;
  &:focus {
    background-color: #e7f2f8;
  }
  ${({ isDisabled  })=>isDisabled && external_styled_components_.css`
      pointer-events: none;
      opacity: 0.3;
    `}
  ${({ theme  })=>theme.media.down("xs")`
  cursor: none;
  `}
`;
const Label = external_styled_components_default().label.withConfig({
    componentId: "sc-a91c10b2-1"
})`
  display: block;
  margin-bottom: 4px;
  ${({ theme  })=>external_styled_components_.css`
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.semiBold};
  `}
`;
const SelectValue = external_styled_components_default().div.withConfig({
    componentId: "sc-a91c10b2-2"
})`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 30px;
  padding: 5px 0 5px 16px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 16px;
  height: 48px;
  border: 3px solid
    ${({ theme , isFilled , isError  })=>isFilled ? theme.colors.primary : isError ? "red" : theme.colors.secondary};

  ${({ theme  })=>theme.media.down("xs")`
  `}
  &:focus {
    border: 3px solid ${(props)=>props.theme.colors.primary};
  }

  ${(props)=>props.isOpen && external_styled_components_.css`
      border-radius: 16px 16px 0px 0px;
      border-bottom-width: 0px !important;
    `};
`;
const SelectValueInfo = external_styled_components_default().div.withConfig({
    componentId: "sc-a91c10b2-3"
})``;
const Title = external_styled_components_default().p.withConfig({
    componentId: "sc-a91c10b2-4"
})`
  ${({ theme , active  })=>external_styled_components_.css`
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    white-space: nowrap;
    color: ${active ? theme.colors.secondary : "#222121"};
  `}
`;
const PlaceHolder = external_styled_components_default().div.withConfig({
    componentId: "sc-a91c10b2-5"
})`
  ${({ theme  })=>external_styled_components_.css`
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.secondary};
  `}
`;
const Subtitle = external_styled_components_default().div.withConfig({
    componentId: "sc-a91c10b2-6"
})`
  margin-top: 4px;
  ${({ theme  })=>external_styled_components_.css`
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
  `}
`;
const StartAdornment = external_styled_components_default().div.withConfig({
    componentId: "sc-a91c10b2-7"
})`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
const DownArrowWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-a91c10b2-8"
})`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  transition: ${(props)=>props.theme.transition.fast};

  ${(props)=>props.isOpen && external_styled_components_.css`
      transform: translateY(-50%) rotate(180deg);
    `};
`;
const OptionsWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-a91c10b2-9"
})`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  transform: scaleY(0);
  transform-origin: top;
  transition: 0.1s;
  z-index: 10;
  border: 3px solid ${(props)=>props.theme.colors.primary};
  border-radius: 0 0 16px 16px;

  ${(props)=>props.isOpen && external_styled_components_.css`
      transform: scaleY(1);
    `}
`;
const Option = external_styled_components_default().div.withConfig({
    componentId: "sc-a91c10b2-10"
})`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 7px;
  box-sizing: border-box;
  border-bottom: 1px solid ${(props)=>props.theme.colors.primary};
  ${(props)=>props.theme.elevation[1]};
  font-weight: ${(props)=>props.theme.font.weight.semiBold};

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;
const ErrorMessage = external_styled_components_default().span.attrs({
    className: "error"
}).withConfig({
    componentId: "sc-a91c10b2-11"
})`
  position: absolute;
  bottom: -14px;
  left: 0;
  color: red;
  font-size: 14px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

// EXTERNAL MODULE: ./modules/core/hooks/useCombinedRefs.ts
var useCombinedRefs = __webpack_require__(92730);
// EXTERNAL MODULE: ./modules/core/hooks/useOutsideClick.ts
var useOutsideClick = __webpack_require__(25140);
// EXTERNAL MODULE: ./modules/core/components/icons/ArrowSelectUp.tsx
var ArrowSelectUp = __webpack_require__(24570);
;// CONCATENATED MODULE: ./modules/core/components/inputs/Select/index.tsx






const InputSelect = /*#__PURE__*/ (0,external_react_.forwardRef)(({ options , value , onChange , label , error , className , style , disabled =false , placeholder , notEmpty , emptyOption ={
    value: null,
    title: "Не выбрано"
}  }, ref)=>{
    // state
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const activeOptionData = options.find((option)=>option.value === value) ?? emptyOption;
    // refs
    const innerRef = (0,external_react_.useRef)(null);
    const rootRef = (0,useCombinedRefs/* useCombinedRefs */.H)(ref, innerRef);
    const handleOptionClick = (optionValue)=>()=>{
            if (onChange) {
                onChange(optionValue);
            }
            setIsOpen(false);
        };
    (0,useOutsideClick/* useOutsideClick */.O)({
        ref: rootRef,
        handler: ()=>setIsOpen(false)
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Root, {
        className: className,
        style: style,
        ref: rootRef,
        isDisabled: disabled,
        children: [
            label && /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SelectValue, {
                tabIndex: 0,
                className: "selector",
                onClick: ()=>setIsOpen((val)=>!val),
                isOpen: isOpen,
                isFilled: !!value || !!activeOptionData.value,
                isError: !!error,
                children: [
                    !!activeOptionData.startAdornment && /*#__PURE__*/ jsx_runtime_.jsx(StartAdornment, {
                        children: activeOptionData.startAdornment
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SelectValueInfo, {
                        children: [
                            activeOptionData.value ? /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                                children: activeOptionData.title
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(PlaceHolder, {
                                children: placeholder
                            }),
                            !!activeOptionData.subtitle && /*#__PURE__*/ jsx_runtime_.jsx(Subtitle, {
                                children: activeOptionData.subtitle
                            })
                        ]
                    }),
                    !disabled && /*#__PURE__*/ jsx_runtime_.jsx(DownArrowWrapper, {
                        isOpen: isOpen,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowSelectUp/* default */.Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(OptionsWrapper, {
                isOpen: isOpen,
                className: "optionsMenu",
                children: (notEmpty ? [
                    ...options
                ] : [
                    emptyOption,
                    ...options
                ]).map((option)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Option, {
                        onClick: handleOptionClick(option.value),
                        children: [
                            !!option.startAdornment && !option.selectedStartAdornment && /*#__PURE__*/ jsx_runtime_.jsx(StartAdornment, {
                                children: option.startAdornment
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SelectValueInfo, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                                        active: value === option.title,
                                        children: option.titleOption ?? option.title
                                    }),
                                    !!option.subtitle && /*#__PURE__*/ jsx_runtime_.jsx(Subtitle, {
                                        children: option.subtitle
                                    })
                                ]
                            })
                        ]
                    }, option.value);
                })
            }),
            typeof error === "string" && /*#__PURE__*/ jsx_runtime_.jsx(ErrorMessage, {
                children: error
            })
        ]
    });
});
InputSelect.displayName = "InputSelect";
/* harmony default export */ const Select = (InputSelect);


/***/ }),

/***/ 92730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useCombinedRefs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useCombinedRefs = (...refs)=>{
    const targetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        refs.forEach((ref)=>{
            if (!ref) return;
            if (typeof ref === "function") {
                ref(targetRef.current);
            } else {
                /*eslint-disable */ ref.current = targetRef.current;
            }
        });
    }, [
        refs
    ]);
    return targetRef;
};


/***/ }),

/***/ 25140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useOutsideClick)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useOutsideClick = ({ ref , handler  })=>{
    const handleOutsideClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        if (ref.current) {
            if (!ref.current.contains(e.target)) {
                handler();
            }
        }
    }, [
        handler,
        ref
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        document.addEventListener("mousedown", handleOutsideClick);
        return ()=>document.removeEventListener("mousedown", handleOutsideClick);
    }, [
        handleOutsideClick
    ]);
};


/***/ })

};
;