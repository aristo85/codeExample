"use strict";
exports.id = 2143;
exports.ids = [2143];
exports.modules = {

/***/ 42143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Buttons_ButtonBasic)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./modules/core/components/Buttons/styles.ts

const BtnStyled = external_styled_components_default().button.withConfig({
    componentId: "sc-571f0eec-0"
})`
  border: 2px solid #1d7abd;
  height: ${(props)=>props.small ? "auto" : "58px"};
  border-radius: ${(props)=>props.small ? "10px" : "16px"};
  background: ${(props)=>props.dark ? props.theme.colors.primary : "#ffffff"};
  font-size: ${(props)=>props.small ? "16px" : "24px"};
  line-height: ${(props)=>props.small ? "20px" : "27px"};
  color: ${(props)=>!props.dark ? props.theme.colors.primary : "#ffffff"};
  padding: ${(props)=>props.small ? "10px" : "0 24px"};
  width: 100%;
  cursor: pointer;
  font-family: ${({ theme  })=>theme.font.family.gothicDemi};

  &:disabled {
    background: ${(props)=>props.theme.colors.lightDefault};
    color: rgba(34, 33, 33, 0.32);
    border: none;
    cursor: not-allowed;

    &:active,
    &:hover {
      background: ${(props)=>props.theme.colors.lightDefault};
      color: rgba(34, 33, 33, 0.32);
    }
  }

  &:active {
    background: ${(props)=>props.dark ? "#fff" : props.theme.colors.primary};
    color: #fff;
  }

  transition: background-color 0.3s ease;

  ${({ theme , dark  })=>external_styled_components_.css`
    ${theme.media.up("sm")`
    &:hover {
      background: #c6e1f3;
      color: ${dark ? theme.colors.primary : ""};
    }
  `}
    ${theme.media.down("sm")`
      cursor: auto;
    `}
  `}
`;

;// CONCATENATED MODULE: ./modules/core/components/Buttons/ButtonBasic.tsx



const ButtonBasic = ({ children , dark , small , ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(BtnStyled, {
        dark: dark,
        small: small,
        ...props,
        children: children
    });
};
/* harmony default export */ const Buttons_ButtonBasic = (ButtonBasic);


/***/ })

};
;