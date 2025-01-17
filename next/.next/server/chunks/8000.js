"use strict";
exports.id = 8000;
exports.ids = [8000];
exports.modules = {

/***/ 88000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TextareaStyled)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./modules/core/components/inputs/TextareaStyled/styles.ts

const Root = external_styled_components_default().label.withConfig({
    componentId: "sc-9639c41f-0"
})`
  position: relative;
  display: block;
  width: 100%;
  padding-bottom: 17px;
`;
const Label = external_styled_components_default().label.withConfig({
    componentId: "sc-9639c41f-1"
})`
  display: block;
  margin-bottom: 8px;
  line-height: 23px;
  ${({ theme  })=>external_styled_components_.css`
    font-size: ${theme.font.size.subtitle2};
    color: ${theme.colors.default};
  `}
`;
const TextAreaWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-9639c41f-2"
})`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid ${({ theme , isError  })=>isError ? "red" : "grey"};
  overflow: hidden;
  transition: ${(props)=>props.theme.transition.fast};
  height: 88px;
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
    componentId: "sc-9639c41f-3"
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
const TextAreaField = external_styled_components_default().textarea.withConfig({
    componentId: "sc-9639c41f-4"
})`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: ${(props)=>props.theme.font.size.body2};
  font-weight: ${(props)=>props.theme.font.weight.semiBold};
  padding: 6px 16px;
  resize: none;
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
    componentId: "sc-9639c41f-5"
})`
  position: absolute;
  left: 0;
  color: red;
  font-size: 14px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

// EXTERNAL MODULE: ./modules/core/hooks/useBoolean.ts
var useBoolean = __webpack_require__(62405);
;// CONCATENATED MODULE: ./modules/core/components/inputs/TextareaStyled/index.tsx




const TextAreaStyled = /*#__PURE__*/ (0,external_react_.forwardRef)(({ name , label , placeholder , startAdornment , endAdornment , className , style , disabled =false , error , onFocus , onBlur , ...props }, ref)=>{
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
        className: className,
        style: style,
        children: [
            !!label && /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TextAreaWrapper, {
                className: "textarea",
                isError: !!error,
                isFocused: isFocused,
                isFilled: isFilled,
                children: [
                    startAdornment && /*#__PURE__*/ jsx_runtime_.jsx(Adornment, {
                        position: "left",
                        children: startAdornment
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TextAreaField, {
                        placeholder: placeholder,
                        name: name,
                        disabled: disabled,
                        ref: ref,
                        onFocus: handleInputFocus,
                        onBlur: handleInputBlur,
                        ...props
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
TextAreaStyled.displayName = "TextareaStyled";
/* harmony default export */ const TextareaStyled = (TextAreaStyled);


/***/ })

};
;