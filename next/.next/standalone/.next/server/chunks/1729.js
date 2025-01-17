"use strict";
exports.id = 1729;
exports.ids = [1729];
exports.modules = {

/***/ 31729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ SelectCustomOption),
  "Z": () => (/* binding */ Filters_HomeSelect)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./modules/home/components/Filters/HomeSelect/styles.ts

const Root = external_styled_components_default().div.withConfig({
    componentId: "sc-71f60ab2-0"
})`
  position: relative;
  flex: 1;
`;
const SelectValue = external_styled_components_default().div.withConfig({
    componentId: "sc-71f60ab2-1"
})`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding: 0 10px;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  text-align: center;
  ${({ theme  })=>external_styled_components_.css`
    ${theme.media.down("md")`
      padding: 0 4px;
    `};
  `}
`;
const SelectValueInfo = external_styled_components_default().div.withConfig({
    componentId: "sc-71f60ab2-2"
})``;
const Title = external_styled_components_default().p.withConfig({
    componentId: "sc-71f60ab2-3"
})`
  ${({ theme , active  })=>external_styled_components_.css`
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.regular};
    white-space: nowrap;
    color: ${active ? theme.colors.secondary : "#222121"};
  `}
`;
const PlaceHolder = external_styled_components_default().div.withConfig({
    componentId: "sc-71f60ab2-4"
})`
  ${({ theme  })=>external_styled_components_.css`
    font-size: ${theme.font.size.subtitle3};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.default};
  `}
`;
const OptionsWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-71f60ab2-5"
})`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 254px;
  max-height: 340px;
  background: #fff;
  transform: scaleY(0);
  transform-origin: top;
  transition: 0.1s;
  z-index: 999;
  border: 3px solid ${(props)=>props.theme.colors.primary};
  border-radius: 16px;
  padding: 16px 0;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    margin: 6px 0;
  }

  ${(props)=>props.isOpen && external_styled_components_.css`
      transform: scaleY(1);
    `}
`;
const Option = external_styled_components_default().div.withConfig({
    componentId: "sc-71f60ab2-6"
})`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  width: 100%;
  padding: 8px 24px;

  font-weight: ${(props)=>props.theme.font.weight.semiBold};

  &:first-child {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 8px;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      right: 0;
      margin: 0 24px;
      border-bottom: 2px solid ${(props)=>props.theme.colors.default};
    }
  }

  &:nth-child(2) {
    margin-top: 18px;
  }

  &:hover {
    background-color: ${(props)=>props.theme.colors.lightBlue};
  }
`;

// EXTERNAL MODULE: ./modules/core/hooks/useCombinedRefs.ts
var useCombinedRefs = __webpack_require__(92730);
// EXTERNAL MODULE: ./modules/core/hooks/useOutsideClick.ts
var useOutsideClick = __webpack_require__(25140);
;// CONCATENATED MODULE: ./modules/home/components/Filters/HomeSelect/index.tsx





var SelectCustomOption;
(function(SelectCustomOption) {
    SelectCustomOption["POPULAR"] = "POPULAR";
})(SelectCustomOption || (SelectCustomOption = {}));
const HomeSelect = /*#__PURE__*/ (0,external_react_.forwardRef)(({ options , value , onChange , className , style , placeholder , notEmpty  }, ref)=>{
    const startOption = {
        value: SelectCustomOption.POPULAR,
        title: "Популярные"
    };
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const activeOptionData = options.find((option)=>option.value === value) ?? startOption;
    const innerRef = (0,external_react_.useRef)(null);
    const rootRef = (0,useCombinedRefs/* useCombinedRefs */.H)(ref, innerRef);
    const handleOptionClick = (optionValue)=>()=>{
            if (onChange && optionValue) {
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
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SelectValue, {
                tabIndex: 0,
                className: "selector",
                onClick: ()=>setIsOpen((val)=>!val),
                isOpen: isOpen,
                children: /*#__PURE__*/ jsx_runtime_.jsx(SelectValueInfo, {
                    children: activeOptionData.value ? /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                        children: activeOptionData.value === SelectCustomOption.POPULAR ? `${activeOptionData.title} направления` : activeOptionData.title
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(PlaceHolder, {
                        children: placeholder
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(OptionsWrapper, {
                isOpen: isOpen,
                className: "optionsMenu",
                children: (notEmpty ? [
                    ...options
                ] : [
                    {
                        value: SelectCustomOption.POPULAR,
                        title: "Популярное"
                    },
                    ...options
                ]).map((option)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(Option, {
                        onClick: handleOptionClick(option.value),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SelectValueInfo, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                                active: value === option.title,
                                children: option.titleOption ?? option.title
                            })
                        })
                    }, option.value);
                })
            })
        ]
    });
});
HomeSelect.displayName = "HomeSelect";
/* harmony default export */ const Filters_HomeSelect = (HomeSelect);


/***/ })

};
;