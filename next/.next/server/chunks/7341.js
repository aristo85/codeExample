"use strict";
exports.id = 7341;
exports.ids = [7341,6812,7593,1729];
exports.modules = {

/***/ 5213:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ DropdownMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_core_components_PeopleDropdown_components_DropdownMenu_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51048);
/* harmony import */ var _modules_core_components_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51527);
/* harmony import */ var _modules_core_components_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51489);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45641);
/* harmony import */ var _modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42143);
/* harmony import */ var _modules_core_hooks_useMatchMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40152);
/* harmony import */ var _modules_core_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80514);
/* harmony import */ var _modules_core_components_PeopleDropdown_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40059);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_5__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const DropdownMenu = ({ childAges , control , errors , handleSubmit , getValues , appendChild , removeChild , setValue , watch  })=>{
    const isMobile = (0,_modules_core_hooks_useMatchMedia__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(`(max-width: ${_modules_core_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_8__/* .breakpoints.xs */ .AV.xs}px)`);
    const childAgesNodes = childAges.map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, {
            name: `childAges.${index}.value`,
            control: control,
            render: ({ field  })=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PeopleDropdown_components_DropdownMenu_styles__WEBPACK_IMPORTED_MODULE_2__/* .ChildAgesSelect */ .D_, {
                    options: _modules_core_components_PeopleDropdown_constants__WEBPACK_IMPORTED_MODULE_9__/* .childAgeOptions */ .k,
                    value: field.value,
                    onChange: (value)=>{
                        field.onChange(value);
                    },
                    error: errors?.childAges?.[index]?.value?.message,
                    placeholder: "Возраст"
                });
            }
        }, index));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_core_components_PeopleDropdown_components_DropdownMenu_styles__WEBPACK_IMPORTED_MODULE_2__/* .DropdownMenuContainer */ ._1, {
        isMobile: isMobile,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_core_components_PeopleDropdown_components_DropdownMenu_styles__WEBPACK_IMPORTED_MODULE_2__/* .CountersBlock */ ._x, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_core_components_PeopleDropdown_components_DropdownMenu_styles__WEBPACK_IMPORTED_MODULE_2__/* .CounterContainer */ .DF, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PeopleDropdown_components_DropdownMenu_styles__WEBPACK_IMPORTED_MODULE_2__/* .CounterField */ .hP, {
                                children: "Взрослые"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_core_components_PeopleDropdown_components_DropdownMenu_styles__WEBPACK_IMPORTED_MODULE_2__/* .CounterBlock */ .n6, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PeopleDropdown_components_DropdownMenu_styles__WEBPACK_IMPORTED_MODULE_2__/* .CounterButton */ .lg, {
                                        type: "button",
                                        onClick: ()=>setValue("numOfAdult", getValues("numOfAdult") - 1),
                                        disabled: watch("numOfAdult") < 2,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PeopleDropdown_components_DropdownMenu_styles__WEBPACK_IMPORTED_MODULE_2__/* .CounterNumber */ .HI, {
                                        children: watch("numOfAdult")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PeopleDropdown_components_DropdownMenu_styles__WEBPACK_IMPORTED_MODULE_2__/* .CounterButton */ .lg, {
                                        type: "button",
                                        onClick: ()=>setValue("numOfAdult", getValues("numOfAdult") + 1),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_core_components_PeopleDropdown_components_DropdownMenu_styles__WEBPACK_IMPORTED_MODULE_2__/* .CounterContainer */ .DF, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PeopleDropdown_components_DropdownMenu_styles__WEBPACK_IMPORTED_MODULE_2__/* .CounterField */ .hP, {
                                children: "Дети"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_core_components_PeopleDropdown_components_DropdownMenu_styles__WEBPACK_IMPORTED_MODULE_2__/* .CounterBlock */ .n6, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PeopleDropdown_components_DropdownMenu_styles__WEBPACK_IMPORTED_MODULE_2__/* .CounterButton */ .lg, {
                                        type: "button",
                                        disabled: childAges.length === 0,
                                        onClick: ()=>removeChild(childAges.length - 1),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_MinusIcon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PeopleDropdown_components_DropdownMenu_styles__WEBPACK_IMPORTED_MODULE_2__/* .CounterNumber */ .HI, {
                                        children: childAges.length
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PeopleDropdown_components_DropdownMenu_styles__WEBPACK_IMPORTED_MODULE_2__/* .CounterButton */ .lg, {
                                        type: "button",
                                        onClick: ()=>appendChild({
                                                value: null
                                            }),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_PlusIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PeopleDropdown_components_DropdownMenu_styles__WEBPACK_IMPORTED_MODULE_2__/* .ChildAgesContainer */ .$x, {
                children: childAgesNodes
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                dark: true,
                onClick: handleSubmit,
                type: "button",
                children: "Готово"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$x": () => (/* binding */ ChildAgesContainer),
/* harmony export */   "DF": () => (/* binding */ CounterContainer),
/* harmony export */   "D_": () => (/* binding */ ChildAgesSelect),
/* harmony export */   "HI": () => (/* binding */ CounterNumber),
/* harmony export */   "_1": () => (/* binding */ DropdownMenuContainer),
/* harmony export */   "_x": () => (/* binding */ CountersBlock),
/* harmony export */   "hP": () => (/* binding */ CounterField),
/* harmony export */   "lg": () => (/* binding */ CounterButton),
/* harmony export */   "n6": () => (/* binding */ CounterBlock)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_components_inputs_Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8825);


const DropdownMenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-b0e14018-0"
})`
  ${({ theme , isMobile  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: 0;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border-radius: 16px;
    border: 3px solid ${theme.colors.primary};
    background: #fff;
    transition: ${theme.transition.fast};
    z-index: 2;

    ${isMobile ? styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
          bottom: 0;
          left: 0;
          margin: 8px;
          width: calc(100% - 16px);
          position: fixed;
        ` : styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
          top: 64px;
        `}
  `};
`;
const CountersBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-b0e14018-1"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  `};
`;
const CounterContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-b0e14018-2"
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
const CounterField = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-b0e14018-3"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    font-size: ${theme.font.size.body3};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.default};
    font-family: ${theme.font.family.gothicMedium};
  `};
`;
const CounterBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-b0e14018-4"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    border: 3px solid ${theme.colors.primary};
    height: 42px;
    width: 126px;
    padding: 11px 6px;
  `};
`;
const CounterButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
    componentId: "sc-b0e14018-5"
})`
  border-radius: 50%;
  align-items: center;
  display: flex;
  padding: 6px;
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
  &:disabled {
    border: none;
    cursor: not-allowed;
    background: none;

    &:hover {
      background: none;
    }
  }
  &:active,
  &:hover {
    background: ${(props)=>props.theme.colors.lightDefault};
  }
`;
const CounterNumber = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-b0e14018-6"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    font-size: ${theme.font.size.body3};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.default};
    font-family: ${theme.font.family.gothicMedium};
  `};
`;
const ChildAgesSelect = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_modules_core_components_inputs_Select__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b0e14018-7"
})`
  flex: 1;
  min-width: 108px;

  & .selector {
    height: 40px !important;
  }
  & .optionsMenu {
    height: 160px;
    overflow: scroll;
    z-index: 10;
  }
`;
const ChildAgesContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-b0e14018-8"
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 14px;
  width: 100%;
`;


/***/ }),

/***/ 22535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ PeopleHeaderSelector)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./modules/core/components/PeopleDropdown/components/Header/styles.ts

const PeopleHeaderSelectorContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-dceaad1b-0"
})`
  display: flex;
  width: 100%;
  padding: 16px;
  height: 48px;
  align-items: center;
  border-radius: 16px;
  border: 3px solid var(--main-accent, #1d7abd);
  background: var(--main-white, #fff);
`;
const PeopleHeaderContent = external_styled_components_default().div.withConfig({
    componentId: "sc-dceaad1b-1"
})`
  ${({ theme  })=>external_styled_components_.css`
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 16px;
    justify-content: space-between;
  `};
`;
const PeopleHeaderTitle = external_styled_components_default().h3.withConfig({
    componentId: "sc-dceaad1b-2"
})`
  ${({ theme  })=>external_styled_components_.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.default};
    font-family: ${theme.font.family.gothicMedium};
  `};
`;
const ArrowWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-dceaad1b-3"
})`
  position: absolute;
  top: 50%;
  right: 0;
  display: block;
  align-items: center;

  transform: translateY(-50%);
  transition: ${(props)=>props.theme.transition.fast};

  ${(props)=>props.isOpen && external_styled_components_.css`
      transform: translateY(-50%) rotate(180deg);
    `};
`;

// EXTERNAL MODULE: ./modules/core/components/icons/ArrowSelectUp.tsx
var ArrowSelectUp = __webpack_require__(24570);
// EXTERNAL MODULE: ./modules/core/helpers/pluralizationFn.ts
var pluralizationFn = __webpack_require__(89882);
;// CONCATENATED MODULE: ./modules/core/components/PeopleDropdown/components/Header/index.tsx





const PeopleHeaderSelector = ({ isOpenSelector , onClickHandler , watch  })=>{
    const numOfAdult = watch("numOfAdult");
    const childAges = watch("childAges")?.length;
    const counterTitle = `
  ${numOfAdult} ${(0,pluralizationFn/* pluralizationFn */.$)(numOfAdult, [
        "взрослый",
        "взрослых",
        "взрослых"
    ])}${childAges > 0 ? `, ${childAges}` : ""} ${childAges > 0 ? `${(0,pluralizationFn/* pluralizationFn */.$)(childAges, [
        "ребенок",
        "ребенка",
        "детей"
    ])}` : ""}`;
    return /*#__PURE__*/ jsx_runtime_.jsx(PeopleHeaderSelectorContainer, {
        onClick: onClickHandler,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PeopleHeaderContent, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(PeopleHeaderTitle, {
                    children: counterTitle
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ArrowWrapper, {
                    isOpen: isOpenSelector,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowSelectUp/* default */.Z, {})
                })
            ]
        })
    });
};


/***/ }),

/***/ 40059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ childAgeOptions)
/* harmony export */ });
const childAgeOptions = [
    {
        value: "0",
        title: "0 лет"
    },
    {
        value: "1",
        title: "1 год"
    },
    {
        value: "2",
        title: "2 года"
    },
    {
        value: "3",
        title: "3 года"
    },
    {
        value: "4",
        title: "4 года"
    },
    {
        value: "5",
        title: "5 лет"
    },
    {
        value: "6",
        title: "6 лет"
    },
    {
        value: "7",
        title: "7 лет"
    },
    {
        value: "8",
        title: "8 лет"
    },
    {
        value: "9",
        title: "9 лет"
    },
    {
        value: "10",
        title: "10 лет"
    },
    {
        value: "11",
        title: "11 лет"
    },
    {
        value: "12",
        title: "12 лет"
    },
    {
        value: "13",
        title: "13 лет"
    },
    {
        value: "14",
        title: "14 лет"
    },
    {
        value: "15",
        title: "15 лет"
    },
    {
        value: "16",
        title: "16 лет"
    },
    {
        value: "17",
        title: "17 лет"
    }
];


/***/ }),

/***/ 88226:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_components_PeopleDropdown_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22854);
/* harmony import */ var _modules_core_components_PeopleDropdown_components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22535);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_core_components_PeopleDropdown_components_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5213);
/* harmony import */ var _modules_core_hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25140);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_core_components_PeopleDropdown_components_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__]);
_modules_core_components_PeopleDropdown_components_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const PeopleSelector = ({ getValues , childAges , appendChild , removeChild , errors , control , setValue , watch , trigger , handleFormSubmit , isBookingDetail  })=>{
    const [isOpenSelector, setIsOpenSelector] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const selectorRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const isChildAgesValid = watch("childAges")?.every((child)=>child.value !== null);
    (0,_modules_core_hooks_useOutsideClick__WEBPACK_IMPORTED_MODULE_5__/* .useOutsideClick */ .O)({
        ref: selectorRef,
        handler: ()=>{
            if (isChildAgesValid) {
                setIsOpenSelector(false);
            }
        }
    });
    const submit = async ()=>{
        const isValidatedSuccessfully = await trigger("childAges");
        if (isValidatedSuccessfully) {
            setIsOpenSelector(false);
            !isBookingDetail && handleFormSubmit && handleFormSubmit();
        }
    };
    const DropDownComponent = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PeopleDropdown_components_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__/* .DropdownMenu */ .h, {
        watch: watch,
        handleSubmit: submit,
        errors: errors,
        control: control,
        childAges: childAges,
        setValue: setValue,
        removeChild: removeChild,
        appendChild: appendChild,
        getValues: getValues
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_core_components_PeopleDropdown_styles__WEBPACK_IMPORTED_MODULE_1__/* .PeopleSelectorContainer */ .y, {
        ref: selectorRef,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PeopleDropdown_components_Header__WEBPACK_IMPORTED_MODULE_2__/* .PeopleHeaderSelector */ .I, {
                watch: watch,
                isOpenSelector: isOpenSelector,
                onClickHandler: ()=>{
                    if (isOpenSelector && isChildAgesValid) {
                        setIsOpenSelector(false);
                    } else {
                        setIsOpenSelector(true);
                    }
                }
            }),
            isOpenSelector && DropDownComponent
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PeopleSelector);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ PeopleSelectorContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PeopleSelectorContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-d8d34b3b-0"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    position: relative;
    flex: 1;

    ${theme.media.down("xs")`
      width: 100%;
    `}
  `};
`;


/***/ }),

/***/ 51489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const PlusIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fill: "#0071C2",
            d: "M13.5 7.5h-5v-5a.5.5 0 1 0-1 0v5h-5a.5.5 0 1 0 0 1h5v5a.5.5 0 0 0 1 0v-5h5a.5.5 0 0 0 0-1Z"
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlusIcon);


/***/ }),

/***/ 77593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ withLogging)
/* harmony export */ });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83245);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


const withLogging = (getServerSideProps)=>{
    return async (ctx)=>{
        let serverSideProps;
        try {
            serverSideProps = await getServerSideProps(ctx);
        } catch (e) {
            _logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP?.error("Unexpected Error", "An error occurred during getServerSideProps", (0,_logger__WEBPACK_IMPORTED_MODULE_0__/* .getAdditionalFieldsError */ .sN)({
                LoggerName: path__WEBPACK_IMPORTED_MODULE_1___default().basename(__filename),
                headers: ctx.req?.headers,
                httpMethod: ctx.req?.method,
                originalUrl: ctx.req?.url,
                queryParameters: ctx.query,
                requestPath: ctx.resolvedUrl,
                responseStatus: ctx.res?.statusCode,
                responseHeaders: ctx.res?.getHeaders()
            }, e instanceof Error ? e : undefined));
            return {
                props: {
                    errorData: {
                        status: 500,
                        message: "An unexpected error occurred."
                    }
                }
            };
        }
        const props = serverSideProps.props;
        if (props.errorData) {
            _logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP?.error("Error", "An error returned from backend", (0,_logger__WEBPACK_IMPORTED_MODULE_0__/* .getAdditionalFieldsError */ .sN)({
                LoggerName: path__WEBPACK_IMPORTED_MODULE_1___default().basename(__filename),
                headers: ctx.req?.headers,
                httpMethod: ctx.req?.method,
                originalUrl: ctx.req?.url,
                queryParameters: ctx.query,
                requestPath: ctx.resolvedUrl,
                responseStatus: ctx.res?.statusCode,
                responseHeaders: ctx.res?.getHeaders(),
                responseBody: props.errorData
            }, props.errorData instanceof Error ? props.errorData : undefined));
        } else {
            _logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP?.info("Request", "Server side props request", (0,_logger__WEBPACK_IMPORTED_MODULE_0__/* .getAdditionalFieldsInfo */ .tr)({
                // logging details here
                LoggerName: path__WEBPACK_IMPORTED_MODULE_1___default().basename(__filename),
                headers: ctx.req?.headers,
                httpMethod: ctx.req?.method,
                originalUrl: ctx.req?.url,
                queryParameters: ctx.query,
                requestPath: ctx.resolvedUrl,
                responseStatus: ctx.res?.statusCode,
                responseHeaders: ctx.res?.getHeaders(),
                responseBody: props.data
            }));
        }
        return serverSideProps;
    };
};


/***/ }),

/***/ 85601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ useCitySelectorOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_filterSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82741);


const useCitySelectorOptions = ()=>{
    const { data  } = (0,_api_filterSlice__WEBPACK_IMPORTED_MODULE_1__/* .useGetCitiesQuery */ .tu)();
    const cities = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>data?.data.cityList.map((city)=>{
            return {
                title: city.name,
                value: String(city.id)
            };
        }) || [], [
        data
    ]);
    return [
        cities
    ];
};


/***/ }),

/***/ 16812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useFilterDataFromQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_hooks_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57441);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82741);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_core_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96894);






const useFilterDataFromQuery = ()=>{
    const dispatch = (0,_modules_core_hooks_index__WEBPACK_IMPORTED_MODULE_1__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const filterData = (0,_modules_core_hooks_index__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)(_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_3__/* .selectFilterValues */ .N$);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const { numOfAdult , cityId , childAges , placementType , rating , offset , roomId , ratePlanId , specialOffer , breakfast , amenityCodes  } = router.query;
        let { arrivalDate , departureDate  } = router.query;
        const countChildAges = (childAges)=>{
            if (Array.isArray(childAges)) {
                return childAges;
            } else {
                return [
                    childAges
                ];
            }
        };
        if (dayjs__WEBPACK_IMPORTED_MODULE_4___default()(arrivalDate).format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_DATE_FORMAT */ .K_) < dayjs__WEBPACK_IMPORTED_MODULE_4___default()().format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_DATE_FORMAT */ .K_)) {
            arrivalDate = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_DATE_FORMAT */ .K_);
            departureDate = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().add(1, "day").format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_DATE_FORMAT */ .K_);
        }
        dispatch((0,_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_3__/* .setFilterValue */ .hL)({
            arrivalDate: arrivalDate ? String(arrivalDate) : filterData.arrivalDate,
            departureDate: departureDate ? String(departureDate) : filterData.departureDate,
            cityId: cityId && cityId !== "null" ? String(cityId) : filterData.cityId,
            rating: rating === "true",
            // TODO: Uncomment if needed add placementType to store, from query params
            // placementType: placementType
            //   ? (placementType as PlacementType)
            //   : filterData.placementType,
            numOfAdult: numOfAdult ? Number(numOfAdult) : filterData.numOfAdult,
            childAges: childAges ? countChildAges(childAges) : filterData.childAges,
            offset: offset ? Number(offset) : filterData.offset,
            roomId: roomId ? Number(roomId) : filterData.roomId,
            ratePlanId: ratePlanId ? Number(ratePlanId) : filterData.ratePlanId,
            popular: filterData.popular && !filterData.cityId,
            specialOffer: specialOffer === "true",
            breakfast: breakfast === "true",
            amenityCodes: amenityCodes ? amenityCodes.split(",") : []
        }));
    }, [
        router
    ]);
};


/***/ }),

/***/ 51949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useNotification)
/* harmony export */ });
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_0__);

function useNotification() {
    const { enqueueSnackbar  } = (0,notistack__WEBPACK_IMPORTED_MODULE_0__.useSnackbar)();
    const handleClickVariant = (message, variant)=>{
        // variant could be success, error, warning, info, or default
        enqueueSnackbar(message, {
            variant
        });
    };
    return handleClickVariant;
}


/***/ }),

/***/ 602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useToast)
/* harmony export */ });
/* harmony import */ var _modules_core_hooks_useNotification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51949);

var ToastMessages;
(function(ToastMessages) {
    ToastMessages["serverError"] = "Ошибка сервера";
})(ToastMessages || (ToastMessages = {}));
const useToast = (error)=>{
    const toast = (0,_modules_core_hooks_useNotification__WEBPACK_IMPORTED_MODULE_0__/* .useNotification */ .l)();
    if (!error) return;
    if (error.status.toString().startsWith("5")) {
        toast(ToastMessages.serverError, "error");
    } else {
        toast(error.data.message, "error");
    }
};


/***/ }),

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


/***/ }),

/***/ 91591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_BookingMapButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./modules/placement/components/BookingMapButton/styles.ts


const BookingButtonWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-e7e9799f-0"
})`
  position: relative;
  min-width: 234px;
  min-height: 88px;
  height: ${({ isPlacement , isBookingDetail  })=>isPlacement || isBookingDetail ? "88px" : "100%"};

  ${({ theme  })=>theme.media.down("xs")`
    width: 100%;
  `}
`;
const BookingMapImage = external_styled_components_default()((image_default())).withConfig({
    componentId: "sc-e7e9799f-1"
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;
const BookingMapLinkButton = external_styled_components_default().button.withConfig({
    componentId: "sc-e7e9799f-2"
})`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 24px;
  gap: 10px;
  width: ${({ isMapOpened , isPlacement , isBookingDetail  })=>isMapOpened ? "100%" : isPlacement ? "260px" : isBookingDetail ? "300px" : "auto"};
  white-space: nowrap;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 56px;
  border-radius: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #1d7abd;

  ${({ theme , isPlacement  })=>external_styled_components_.css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${isPlacement ? theme.font.size.subtitle4 : theme.font.size.subtitle2};
    font-family: ${theme.font.family.gothicDemi};

    ${({ theme  })=>theme.media.up("sm")`
    &:hover {
      background: #c6e1f3;
      color: #1d7abd;
    }
  `}

    ${theme.media.down("md")`
    width: 90%;
    `}
  `}
`;

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./modules/placement/components/BookingMapButton/index.tsx




const BookingMapButton = ({ mapOpenFn , isMapOpened , isLink , link , isPlacement , isBookingDetail  })=>{
    if (isLink) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BookingButtonWrapper, {
            isBookingDetail: !!isBookingDetail,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(BookingMapImage, {
                    src: "/images/map-background2.png",
                    layout: "fill",
                    alt: "map-image"
                }),
                link && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: link,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(BookingMapLinkButton, {
                        isBookingDetail: !!isBookingDetail,
                        children: "Показать на карте"
                    })
                }),
                !link && /*#__PURE__*/ jsx_runtime_.jsx(BookingMapLinkButton, {
                    children: "Показать на карте"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BookingButtonWrapper, {
        onClick: ()=>mapOpenFn(),
        isPlacement: !!isPlacement,
        children: [
            !isMapOpened && /*#__PURE__*/ jsx_runtime_.jsx(BookingMapImage, {
                src: "/images/map-background2.png",
                layout: "fill",
                alt: "map-image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BookingMapLinkButton, {
                isMapOpened: isMapOpened,
                isPlacement: !!isPlacement,
                children: isMapOpened ? "Списком" : "Показать на карте"
            })
        ]
    });
};
/* harmony default export */ const components_BookingMapButton = (BookingMapButton);


/***/ }),

/***/ 14281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_NameRatingTitle)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./modules/placement/components/NameRatingTitle/styles.ts


const BookingTitleBlock = external_styled_components_default().p.withConfig({
    componentId: "sc-20ba3a6e-0"
})`
  align-items: center;
  display: inline-flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 4px;
  ${(props)=>props.theme.media.down("xxs")`
  `}
`;
const BookingName = external_styled_components_default().span.withConfig({
    componentId: "sc-20ba3a6e-1"
})`
  display: inline-block;
  text-align: left;
  ${({ theme  })=>external_styled_components_.css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.heading3};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
  `};
`;
const ItemRating = external_styled_components_default()(material_.Rating).withConfig({
    componentId: "sc-20ba3a6e-2"
})`
  display: inline-flex;
  svg {
    font-size: 32px;
  }
`;

;// CONCATENATED MODULE: ./modules/placement/components/NameRatingTitle/index.tsx



const NameRatingTitle = ({ name , rating  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BookingTitleBlock, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(BookingName, {
                children: name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ItemRating, {
                name: "read-only",
                value: rating,
                readOnly: true,
                sx: {
                    fontSize: "34px",
                    color: "#F0CA2C"
                },
                emptyIcon: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
            })
        ]
    });
};
/* harmony default export */ const components_NameRatingTitle = (NameRatingTitle);


/***/ }),

/***/ 61618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63710);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57441);
/* harmony import */ var _modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82741);





const AmenitiesFilter = ({ isCollapsed , amenitiesData , handleAmenitiesFilter  })=>{
    const dispatch = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    const amenitiesState = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)(_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_4__/* .selectFilterValues */ .N$).amenityCodes;
    const setAmenitiesFilter = (data)=>{
        const updatedAmenities = data.add ? [
            ...amenitiesState,
            data.filterName
        ] : amenitiesState.filter((el)=>el !== data.filterName);
        dispatch((0,_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_4__/* .setFilterValue */ .hL)({
            amenityCodes: updatedAmenities
        }));
        handleAmenitiesFilter && handleAmenitiesFilter(updatedAmenities);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: amenitiesData?.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterParamsItem */ .CR, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterParamsCheckboxContainer */ .aU, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterParamsCheckbox */ .wk, {
                            isCollapsed: isCollapsed,
                            label: item.name,
                            value: !!amenitiesState.find((el)=>el === item.code),
                            setValue: (value)=>{
                                setAmenitiesFilter({
                                    filterName: item.code,
                                    add: value
                                });
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterParamsCount */ .YL, {
                        children: item.count
                    })
                ]
            }, item.code))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AmenitiesFilter);


/***/ }),

/***/ 57615:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63710);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45641);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57441);
/* harmony import */ var _modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82741);
/* harmony import */ var _modules_core_components_icons_ArrowSelectUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24570);
/* harmony import */ var _AmenitiesFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61618);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const PlacementFilterParams = ({ control , filterData , handleFormSubmit , isCollapsed , amenitiesData , isTablet  })=>{
    const dispatch = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const [isParamsOpen, setIsParamsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handlerOpenParams = ()=>{
        setIsParamsOpen((prev)=>!prev);
    };
    const FilterParams = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                control: control,
                name: "specialOffer",
                render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterParamsItem */ .CR, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterParamsCheckboxContainer */ .aU, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterParamsCheckbox */ .wk, {
                                isCollapsed: isCollapsed,
                                label: "спецпредложения",
                                value: filterData?.specialOffer || !!field.value,
                                setValue: (value)=>{
                                    dispatch((0,_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_5__/* .setFilterValue */ .hL)({
                                        popular: value
                                    }));
                                    field.onChange(value);
                                    handleFormSubmit && handleFormSubmit();
                                }
                            })
                        })
                    })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                control: control,
                name: "breakfast",
                render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterParamsItem */ .CR, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterParamsCheckboxContainer */ .aU, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterParamsCheckbox */ .wk, {
                                isCollapsed: isCollapsed,
                                label: "Завтрак включён",
                                value: filterData?.breakfast || field.value,
                                setValue: (value)=>{
                                    dispatch((0,_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_5__/* .setFilterValue */ .hL)({
                                        breakfast: value
                                    }));
                                    field.onChange(value);
                                    handleFormSubmit && handleFormSubmit();
                                }
                            })
                        })
                    })
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterParamsWrapper */ .aA, {
        isCollapsed: isCollapsed,
        $isTablet: isTablet,
        children: [
            !isCollapsed ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterParamsTitle */ .tE, {
                children: "Фильтры"
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterParamsTitleButton */ .ku, {
                onClick: handlerOpenParams,
                children: [
                    "Фильтры",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .ArrowWrapper */ .nR, {
                        isOpen: isParamsOpen,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_ArrowSelectUp__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                    })
                ]
            }),
            (!isCollapsed || isParamsOpen) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterParamsItemsContainer */ .Zf, {
                isCollapsed: isCollapsed,
                children: [
                    FilterParams,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                        control: control,
                        name: "amenityCodes",
                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AmenitiesFilter__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                amenitiesData: amenitiesData,
                                isCollapsed: isCollapsed,
                                handleAmenitiesFilter: (value)=>{
                                    field.onChange(value);
                                    handleFormSubmit && handleFormSubmit();
                                }
                            })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlacementFilterParams);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CR": () => (/* binding */ FilterParamsItem),
/* harmony export */   "YL": () => (/* binding */ FilterParamsCount),
/* harmony export */   "Zf": () => (/* binding */ FilterParamsItemsContainer),
/* harmony export */   "aA": () => (/* binding */ FilterParamsWrapper),
/* harmony export */   "aU": () => (/* binding */ FilterParamsCheckboxContainer),
/* harmony export */   "iz": () => (/* binding */ Divider),
/* harmony export */   "ku": () => (/* binding */ FilterParamsTitleButton),
/* harmony export */   "nR": () => (/* binding */ ArrowWrapper),
/* harmony export */   "tE": () => (/* binding */ FilterParamsTitle),
/* harmony export */   "wk": () => (/* binding */ FilterParamsCheckbox)
/* harmony export */ });
/* unused harmony export FilterParamsCheckboxSubtitle */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_components_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52962);


const FilterParamsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-efa58deb-0"
})`
  width: 100%;
  border-radius: 24px;
  margin-bottom: 2rem;
  ${({ theme , isCollapsed , $isTablet  })=>{
    const isBorder = !isCollapsed || $isTablet;
    return styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${isCollapsed ? 0 : "16px 0"};
      border: ${isCollapsed ? 0 : "1px solid #bdbdbd"};
      color: ${theme.colors.default};

      ${theme.media.down("md")`
      padding: ${!isBorder ? 0 : "16px"};
      border: ${!isBorder ? 0 : "1px solid #bdbdbd"};
      `}
      ${theme.media.down("xs")`
      padding: 0 5px;
      `}
    `;
}}
`;
const FilterParamsTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-efa58deb-1"
})`
  font-size: 24px;
  border-bottom: 1px solid #bdbdbd;
  padding: 0 16px;
  padding-bottom: 16px;
`;
const FilterParamsTitleButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
    componentId: "sc-efa58deb-2"
})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  font-size: 20px;
  padding: 6px 0;
`;
const ArrowWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-efa58deb-3"
})`
  transition: ${(props)=>props.theme.transition.fast};

  ${(props)=>props.isOpen && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      transform: rotate(180deg);
    `};
`;
const FilterParamsItemsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-efa58deb-4"
})`
  display: flex;
  flex-direction: column;
  gap: ${(props)=>props.isCollapsed ? 0 : "16px"};
  padding: ${(props)=>props.isCollapsed ? 0 : "0 16px 0 20px"};
  padding-top: ${(props)=>props.isCollapsed ? "8px" : "24px"};
  ${(props)=>props.theme.media.up("md")`
    overflow-y: auto;
    max-height: 320px;
  `}
`;
const FilterParamsItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-efa58deb-5"
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  ${(props)=>props.theme.media.down("md")`
    padding: 8px 0;
  `}
`;
const FilterParamsCheckboxContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-efa58deb-6"
})``;
const FilterParamsCheckboxSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-efa58deb-7"
})`
  color: #4f4f4f;
  font-family: ${({ theme  })=>theme.font.family.gothicBook};
  padding-left: 30px;
`;
const FilterParamsCount = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-efa58deb-8"
})`
  line-height: 24px;
  color: #4f4f4f;
  font-family: ${({ theme  })=>theme.font.family.gothicBook};
`;
const FilterParamsCheckbox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_modules_core_components_Checkbox__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-efa58deb-9"
})`
  .Mui-checked {
    border-radius: 0px;
    background: #fff;
    border-radius: 4px;
  }

  ${(props)=>props.value ? styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
          input {
            background: #fff;
          }
          svg {
            fill: ${props.theme.colors.primary};
            width: 26px;
            height: 26px;
          }
        ` : styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
          svg {
            fill: #fff;
            background: white;
            border: ${props.isCollapsed ? "0" : "2px solid #8daec1"};
            width: 20px;
            height: 20px;
            border-radius: 4px;
          }

          ${(props)=>props.theme.media.down("md")`
            svg {
              border: 2px solid #8daec1;
            }
          `}
        `}
`;
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-efa58deb-10"
})`
  height: 1px;
  background: #bdbdbd;
  margin: 10px -16px 0 -16px;
`;


/***/ }),

/***/ 89623:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92068);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45641);
/* harmony import */ var _modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82741);
/* harmony import */ var _modules_core_hooks_useFilterDataFromParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16812);
/* harmony import */ var _modules_core_components_PeopleDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88226);
/* harmony import */ var _PlacementFilterParams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57615);
/* harmony import */ var _modules_core_hooks_useCitySelectorOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85601);
/* harmony import */ var _modules_home_components_Filters_HomeSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31729);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _modules_core_components_PeopleDropdown__WEBPACK_IMPORTED_MODULE_7__, _PlacementFilterParams__WEBPACK_IMPORTED_MODULE_8__]);
([_styles__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _modules_core_components_PeopleDropdown__WEBPACK_IMPORTED_MODULE_7__, _PlacementFilterParams__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const PlacementMobileFilter = ({ handleSubmit , handleFormSubmit , isValid , childAges , getValues , appendChild , removeChild , errors , control , setValue , watch , trigger , amenitiesData  })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const [cities] = (0,_modules_core_hooks_useCitySelectorOptions__WEBPACK_IMPORTED_MODULE_9__/* .useCitySelectorOptions */ .B)();
    (0,_modules_core_hooks_useFilterDataFromParams__WEBPACK_IMPORTED_MODULE_6__/* .useFilterDataFromQuery */ .x)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FilterWrapper */ .kI, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FilterForm */ .SI, {
            onSubmit: handleSubmit(handleFormSubmit),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_4__.Controller, {
                    name: "cityId",
                    control: control,
                    render: ({ field  })=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FilterSelect */ .zE, {
                            label: "Место / объект размещения",
                            options: cities,
                            ...field,
                            value: field.value,
                            emptyOption: {
                                value: _modules_home_components_Filters_HomeSelect__WEBPACK_IMPORTED_MODULE_10__/* .SelectCustomOption.POPULAR */ .c.POPULAR,
                                title: "Популярное"
                            },
                            onChange: (value)=>{
                                if (value === _modules_home_components_Filters_HomeSelect__WEBPACK_IMPORTED_MODULE_10__/* .SelectCustomOption.POPULAR */ .c.POPULAR) {
                                    field.onChange(null);
                                    setValue("popular", true);
                                    dispatch((0,_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_5__/* .setFilterValue */ .hL)({
                                        popular: true,
                                        cityId: null
                                    }));
                                } else {
                                    setValue("popular", false);
                                    field.onChange(value);
                                    dispatch((0,_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_5__/* .setFilterValue */ .hL)({
                                        popular: false,
                                        cityId: value
                                    }));
                                }
                                void trigger();
                            },
                            placeholder: "Укажите населенный пункт"
                        });
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FilterDateWrapper */ .VD, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_4__.Controller, {
                            control: control,
                            name: "arrivalDate",
                            render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FilterDateInput */ .dz, {
                                    label: "Дата заезда",
                                    value: field.value,
                                    format: "dddd DD.MM.YYYY",
                                    setValue: (value)=>{
                                        const currentDepartureDate = getValues("departureDate");
                                        if (value && (value.isAfter(currentDepartureDate) || value.isSame(currentDepartureDate))) {
                                            setValue("departureDate", value.add(1, "day"));
                                        }
                                        field.onChange(value);
                                    },
                                    placeholder: "Выберите дату заезда"
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_4__.Controller, {
                            control: control,
                            name: "departureDate",
                            render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FilterDateInput */ .dz, {
                                    label: "Дата отъезда",
                                    value: field.value,
                                    format: "dddd DD.MM.YYYY",
                                    setValue: (value)=>{
                                        field.onChange(value);
                                    },
                                    placeholder: "Выберите дату отъезда",
                                    minDate: watch("arrivalDate")?.add(1, "day") || undefined
                                })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PeopleDropdown__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    childAges: childAges,
                    getValues: getValues,
                    appendChild: appendChild,
                    removeChild: removeChild,
                    errors: errors,
                    control: control,
                    setValue: setValue,
                    watch: watch,
                    trigger: trigger
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PlacementFilterParams__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    isCollapsed: true,
                    control: control,
                    amenitiesData: amenitiesData
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FilterBTn */ .L5, {
                    type: "submit",
                    dark: true,
                    disabled: !isValid,
                    children: "Посмотреть"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlacementMobileFilter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92068:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L5": () => (/* binding */ FilterBTn),
/* harmony export */   "SI": () => (/* binding */ FilterForm),
/* harmony export */   "VD": () => (/* binding */ FilterDateWrapper),
/* harmony export */   "dz": () => (/* binding */ FilterDateInput),
/* harmony export */   "kI": () => (/* binding */ FilterWrapper),
/* harmony export */   "zE": () => (/* binding */ FilterSelect)
/* harmony export */ });
/* unused harmony export FilterCheckbox */
/* harmony import */ var _modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42143);
/* harmony import */ var _modules_core_components_datePickers_DateInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(512);
/* harmony import */ var _modules_core_components_inputs_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8825);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_core_components_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52962);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_core_components_datePickers_DateInput__WEBPACK_IMPORTED_MODULE_1__]);
_modules_core_components_datePickers_DateInput__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const FilterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-85150106-0"
})`
  background: white;
  display: block;
  z-index: 1;
  width: 100%;
  padding: 24px 0 24px 0;
  margin-right: 16px;
`;
const FilterForm = styled_components__WEBPACK_IMPORTED_MODULE_3___default().form.withConfig({
    componentId: "sc-85150106-1"
})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const FilterSelect = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_modules_core_components_inputs_Select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-85150106-2"
})`
  & .optionsMenu {
    max-height: 400px;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar-track {
      margin: 0 0 6px 0;
    }
  }
`;
const FilterDateWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-85150106-3"
})`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
const FilterDateInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_modules_core_components_datePickers_DateInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-85150106-4"
})`
  input {
    min-width: 180px;
    padding: 3px 0 0 16px;
  }
`;
const FilterBTn = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).withConfig({
    componentId: "sc-85150106-5"
})`
  height: 56px;
  font-size: 20px;
`;
const FilterCheckbox = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_modules_core_components_Checkbox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-85150106-6"
})`
  ${(props)=>props.value ? styled_components__WEBPACK_IMPORTED_MODULE_3__.css`
          svg {
            fill: ${props.theme.colors.primary};
          }
        ` : styled_components__WEBPACK_IMPORTED_MODULE_3__.css`
          svg {
            fill: ${props.theme.colors.secondary};
          }
        `}
  border-radius: 4px;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29428:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46263);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57441);
/* harmony import */ var _modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82741);
/* harmony import */ var _modules_placement_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64468);
/* harmony import */ var _modules_core_hooks_useFilterDataFromParams__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16812);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61908);
/* harmony import */ var _modules_core_components_PeopleDropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88226);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(46555);
/* harmony import */ var _PlacementMobileFilter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(89623);
/* harmony import */ var _modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90756);
/* harmony import */ var _modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(89882);
/* harmony import */ var _modules_core_hooks_useGetDaysAndNights__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(42326);
/* harmony import */ var _PlacementFilterParams__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(57615);
/* harmony import */ var _modules_core_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(80514);
/* harmony import */ var _modules_core_hooks_useCitySelectorOptions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(85601);
/* harmony import */ var _modules_home_components_Filters_HomeSelect__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(31729);
/* harmony import */ var _modules_core_constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(96894);
/* harmony import */ var _BookingMapButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(91591);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__, _modules_core_components_PeopleDropdown__WEBPACK_IMPORTED_MODULE_11__, uuid__WEBPACK_IMPORTED_MODULE_12__, _PlacementMobileFilter__WEBPACK_IMPORTED_MODULE_13__, _PlacementFilterParams__WEBPACK_IMPORTED_MODULE_16__]);
([_styles__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__, _modules_core_components_PeopleDropdown__WEBPACK_IMPORTED_MODULE_11__, uuid__WEBPACK_IMPORTED_MODULE_12__, _PlacementMobileFilter__WEBPACK_IMPORTED_MODULE_13__, _PlacementFilterParams__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























const PlacementFilter = ({ handler , locationForParamsString , amenitiesData , isWithoutFilterParams , isBookingDetail , isPlacement , mapLink , isLink , isMapOpened , handleMap  })=>{
    (0,_modules_core_hooks_useFilterDataFromParams__WEBPACK_IMPORTED_MODULE_9__/* .useFilterDataFromQuery */ .x)();
    const dispatch = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .T)();
    const filterData = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .C)(_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_7__/* .selectFilterValues */ .N$);
    const [cities] = (0,_modules_core_hooks_useCitySelectorOptions__WEBPACK_IMPORTED_MODULE_18__/* .useCitySelectorOptions */ .B)();
    const smallScreen = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)(`(max-width: ${_modules_core_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_17__/* .breakpoints.xs */ .AV.xs}px)`);
    const largeScreen = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)(`(min-width: ${_modules_core_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_17__/* .breakpoints.md */ .AV.md + 1}px)`);
    const tabletScreen = !smallScreen && !largeScreen;
    const { formState: { errors , isValid  } , handleSubmit , control , watch , reset , getValues , setValue , trigger  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_10__.yupResolver)(_modules_placement_constants__WEBPACK_IMPORTED_MODULE_8__/* .placementFormValidationSchema */ .SU),
        mode: "onChange"
    });
    const { fields: childAges , append: appendChild , remove: removeChild  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFieldArray)({
        control,
        name: "childAges"
    });
    const handleFormSubmit = ()=>{
        const data = {
            ...getValues(),
            arrivalDate: getValues("arrivalDate")?.format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_20__/* .DEFAULT_DATE_FORMAT */ .K_),
            departureDate: getValues("departureDate")?.format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_20__/* .DEFAULT_DATE_FORMAT */ .K_),
            childAges: getValues("childAges").map((value)=>value.value).filter((value)=>value !== null)
        };
        dispatch((0,_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_7__/* .setFilterValue */ .hL)(data));
        const { queriesString  } = (0,_modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_14__/* .queryHandler */ .F)(data, locationForParamsString);
        handler(queriesString);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        reset({
            ...filterData,
            departureDate: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(filterData.departureDate),
            arrivalDate: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(filterData.arrivalDate),
            childAges: filterData.childAges.map((value)=>({
                    value,
                    id: (0,uuid__WEBPACK_IMPORTED_MODULE_12__.v4)()
                }))
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        filterData
    ]);
    const arrivalDate = watch("arrivalDate")?.format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_20__/* .DEFAULT_DATE_FORMAT */ .K_);
    const departureDate = watch("departureDate")?.format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_20__/* .DEFAULT_DATE_FORMAT */ .K_);
    const { nights  } = (0,_modules_core_hooks_useGetDaysAndNights__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)({
        arrivalDate: arrivalDate || null,
        departureDate: departureDate || null
    });
    return smallScreen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PlacementMobileFilter__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        handleSubmit: handleSubmit,
        handleFormSubmit: handleFormSubmit,
        isValid: isValid,
        trigger: trigger,
        watch: watch,
        setValue: setValue,
        control: control,
        errors: errors,
        childAges: childAges,
        getValues: getValues,
        appendChild: appendChild,
        removeChild: removeChild,
        amenitiesData: amenitiesData
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FiltersNavbar */ .dp, {
        isBookingDetail: !!isBookingDetail,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterWrapper */ .kI, {
                isBookingDetail: !!isBookingDetail,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterForm */ .SI, {
                    onSubmit: handleSubmit(handleFormSubmit),
                    isBookingDetail: !!isBookingDetail,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterTitle */ .Ux, {
                            children: "Найти"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterFieldContainer */ .Uv, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                                    name: "cityId",
                                    control: control,
                                    render: ({ field  })=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterSelect */ .zE, {
                                            label: "Место / объект размещения",
                                            options: cities,
                                            ...field,
                                            value: field.value,
                                            emptyOption: {
                                                value: _modules_home_components_Filters_HomeSelect__WEBPACK_IMPORTED_MODULE_19__/* .SelectCustomOption.POPULAR */ .c.POPULAR,
                                                title: "Популярное"
                                            },
                                            onChange: (value)=>{
                                                if (value === _modules_home_components_Filters_HomeSelect__WEBPACK_IMPORTED_MODULE_19__/* .SelectCustomOption.POPULAR */ .c.POPULAR) {
                                                    field.onChange(null);
                                                    setValue("popular", true);
                                                    dispatch((0,_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_7__/* .setFilterValue */ .hL)({
                                                        popular: true,
                                                        cityId: null,
                                                        amenityCodes: []
                                                    }));
                                                } else {
                                                    setValue("popular", false);
                                                    field.onChange(value);
                                                    dispatch((0,_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_7__/* .setFilterValue */ .hL)({
                                                        popular: false,
                                                        cityId: value,
                                                        amenityCodes: []
                                                    }));
                                                }
                                                // clear amenityCodes, because the list of amenities may change when we change cities
                                                setValue("amenityCodes", []);
                                                !isBookingDetail && handleFormSubmit();
                                                void trigger();
                                            },
                                            error: errors.cityId?.message,
                                            placeholder: "Укажите населенный пункт"
                                        });
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterDateWrapper */ .VD, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterDateContainer */ .JH, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                                                    control: control,
                                                    name: "arrivalDate",
                                                    defaultValue: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(filterData.arrivalDate),
                                                    render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterDateInput */ .dz, {
                                                            label: "Дата заезда",
                                                            value: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(field.value),
                                                            format: "dddd DD.MM.YYYY",
                                                            setValue: (value)=>{
                                                                const currentDepartureDate = getValues("departureDate");
                                                                if (value && (value.isAfter(currentDepartureDate) || value.isSame(currentDepartureDate))) {
                                                                    setValue("departureDate", value.add(1, "day"));
                                                                }
                                                                field.onChange(value);
                                                                !isBookingDetail && handleFormSubmit();
                                                            },
                                                            placeholder: "Выберите дату заезда"
                                                        })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                                                    control: control,
                                                    name: "departureDate",
                                                    render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterDateInput */ .dz, {
                                                            label: "Дата отъезда",
                                                            value: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(field.value),
                                                            format: "dddd DD.MM.YYYY",
                                                            setValue: (value)=>{
                                                                field.onChange(value);
                                                                !isBookingDetail && handleFormSubmit();
                                                            },
                                                            placeholder: "Выберите дату отъезда",
                                                            minDate: watch("arrivalDate")?.add(1, "day") || undefined
                                                        })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .DaysLabel */ .q0, {
                                            children: `${nights || 1} ${(0,_modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_22__/* .pluralizationFn */ .$)(nights || 1, [
                                                "ночь",
                                                "ночи",
                                                "ночей"
                                            ])}`
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PeopleDropdown__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    trigger: trigger,
                                    watch: watch,
                                    setValue: setValue,
                                    control: control,
                                    errors: errors,
                                    childAges: childAges,
                                    getValues: getValues,
                                    appendChild: appendChild,
                                    removeChild: removeChild,
                                    handleFormSubmit: handleFormSubmit,
                                    isBookingDetail: !!isBookingDetail
                                }),
                                smallScreen && !isWithoutFilterParams && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PlacementFilterParams__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                    amenitiesData: amenitiesData,
                                    isCollapsed: true,
                                    control: control,
                                    filterData: filterData,
                                    handleFormSubmit: handleFormSubmit
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FilterBTn */ .L5, {
                            type: "submit",
                            dark: true,
                            disabled: !isValid,
                            isBookingDetail: !!isBookingDetail,
                            children: "Посмотреть"
                        })
                    ]
                })
            }),
            handleMap && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BookingMapButton__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                link: mapLink,
                isLink: !!isLink,
                isMapOpened: !!isMapOpened,
                mapOpenFn: handleMap,
                isBookingDetail: !!isBookingDetail,
                isPlacement: !!isPlacement
            }),
            !smallScreen && !isWithoutFilterParams && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PlacementFilterParams__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                amenitiesData: amenitiesData,
                control: control,
                filterData: filterData,
                handleFormSubmit: handleFormSubmit,
                isCollapsed: tabletScreen,
                isTablet: tabletScreen
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlacementFilter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46263:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JH": () => (/* binding */ FilterDateContainer),
/* harmony export */   "L5": () => (/* binding */ FilterBTn),
/* harmony export */   "SI": () => (/* binding */ FilterForm),
/* harmony export */   "Uv": () => (/* binding */ FilterFieldContainer),
/* harmony export */   "Ux": () => (/* binding */ FilterTitle),
/* harmony export */   "VD": () => (/* binding */ FilterDateWrapper),
/* harmony export */   "dp": () => (/* binding */ FiltersNavbar),
/* harmony export */   "dz": () => (/* binding */ FilterDateInput),
/* harmony export */   "kI": () => (/* binding */ FilterWrapper),
/* harmony export */   "q0": () => (/* binding */ DaysLabel),
/* harmony export */   "zE": () => (/* binding */ FilterSelect)
/* harmony export */ });
/* unused harmony exports DateCounterWrapper, StepperWrapper */
/* harmony import */ var _modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42143);
/* harmony import */ var _modules_core_components_datePickers_DateInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(512);
/* harmony import */ var _modules_core_components_inputs_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8825);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_core_components_datePickers_DateInput__WEBPACK_IMPORTED_MODULE_1__]);
_modules_core_components_datePickers_DateInput__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const FiltersNavbar = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-ab1f40d-0"
})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${({ isBookingDetail  })=>isBookingDetail && "height: 100%;"}
`;
const submitBtnWidth = "200px";
const FilterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-ab1f40d-1"
})`
  position: relative;
  padding: 16px;
  gap: 24px;
  max-width: 1180px;
  min-height: 158px;
  background: ${({ theme  })=>theme.colors.secondary};
  border-radius: 24px;
  min-width: 300px;
  ${({ isBookingDetail  })=>isBookingDetail && "flex: 1;"}

  ${(props)=>props.theme.media.down("lg")`
    width: 100%;
  `}
`;
const FilterForm = styled_components__WEBPACK_IMPORTED_MODULE_3___default().form.withConfig({
    componentId: "sc-ab1f40d-2"
})`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
  color: ${({ theme  })=>theme.colors.default};
  ${({ isBookingDetail  })=>isBookingDetail && "height: 100%;"}
`;
const FilterFieldContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-ab1f40d-3"
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
`;
const FilterDateWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-ab1f40d-4"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const FilterDateContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-ab1f40d-5"
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  label {
    margin-bottom: 8px;
  }
`;
const FilterTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-ab1f40d-6"
})`
  font-size: 24px;
  font-weight: 400;
`;
const FilterSelect = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_modules_core_components_inputs_Select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ab1f40d-7"
})`
  label {
    margin-bottom: 8px;
  }
  & .optionsMenu {
    max-height: 400px;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar-track {
      margin: 0 0 6px 0;
    }
  }
`;
const FilterDateInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_modules_core_components_datePickers_DateInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ab1f40d-8"
})`
  input {
    min-width: 180px;
    padding: 3px 0 0 16px;
  }
`;
const FilterBTn = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).withConfig({
    componentId: "sc-ab1f40d-9"
})`
  margin-top: auto;
  height: 56px !important;
  font-size: 18px;
  line-height: 24px;

  ${(props)=>props.theme.media.down("md")`
    width: ${!props.isBookingDetail && submitBtnWidth};
    align-self: flex-start;
  `}
`;
const DateCounterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-ab1f40d-10"
})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const StepperWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-ab1f40d-11"
})`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  gap: 16px;
  height: 95px;
  background: #ffffff;
  border: 3px solid #1d7abd;
  border-radius: 16px;
`;
const DaysLabel = styled_components__WEBPACK_IMPORTED_MODULE_3___default().p.withConfig({
    componentId: "sc-ab1f40d-12"
})`
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;