"use strict";
exports.id = 2092;
exports.ids = [2092];
exports.modules = {

/***/ 19656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TableComponents_ActionBlock)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./modules/core/components/icons/OpenEyeIcon.tsx
var OpenEyeIcon = __webpack_require__(88159);
// EXTERNAL MODULE: ./modules/core/components/icons/ClosedEyeIcon.tsx
var ClosedEyeIcon = __webpack_require__(2749);
// EXTERNAL MODULE: ./modules/core/components/icons/DeleteIcon.tsx
var DeleteIcon = __webpack_require__(32820);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./modules/core/components/TableComponents/ActionBlock/styles.ts

const ActionBlockContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-e87dff9c-0"
})`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./modules/core/components/icons/PenIcon.tsx
var PenIcon = __webpack_require__(43795);
;// CONCATENATED MODULE: ./modules/core/components/TableComponents/ActionBlock/index.tsx









const ActionBlock = ({ width , isHideValue , onHideShowButtonClickFn , onDeleteClickFn , id , editLink  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ActionBlockContainer, {
        style: {
            width: width
        },
        children: [
            !isHideValue && /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                title: "Скрыть отображение",
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                    onClick: ()=>onHideShowButtonClickFn(id, isHideValue),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(OpenEyeIcon/* default */.Z, {
                        fill: "#8DAEC1"
                    })
                })
            }),
            isHideValue && /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                title: "Открыть отображение",
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                    onClick: ()=>onHideShowButtonClickFn(id, isHideValue),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ClosedEyeIcon/* default */.Z, {
                        fill: "#8DAEC1"
                    })
                })
            }),
            editLink && /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                title: "Редактировать",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: editLink,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(PenIcon/* default */.Z, {})
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                title: "Удалить",
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                    onClick: ()=>onDeleteClickFn(id),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(DeleteIcon/* default */.Z, {})
                })
            })
        ]
    });
};
/* harmony default export */ const TableComponents_ActionBlock = (ActionBlock);


/***/ }),

/***/ 7996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ DeleteModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_auth_components_ModalAuth_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84276);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7119);
/* harmony import */ var _modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42143);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_3__]);
_styles__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const DeleteModal = ({ closeButtonFn , deletePlacementFn , deletingText  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .DeleteModalWrapper */ .v, {
        isOpen: true,
        onClose: closeButtonFn,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_auth_components_ModalAuth_styles__WEBPACK_IMPORTED_MODULE_2__/* .ModalTitle */ .r6, {
                children: deletingText
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .ButtonsContainer */ .Y, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        onClick: closeButtonFn,
                        children: "Нет"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        dark: true,
                        onClick: deletePlacementFn,
                        children: "Да"
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7119:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ButtonsContainer),
/* harmony export */   "v": () => (/* binding */ DeleteModalWrapper)
/* harmony export */ });
/* harmony import */ var _modules_auth_components_ModalAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57681);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_auth_components_ModalAuth__WEBPACK_IMPORTED_MODULE_0__]);
_modules_auth_components_ModalAuth__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const DeleteModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_modules_auth_components_ModalAuth__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).withConfig({
    componentId: "sc-5c51a4ad-0"
})``;
const ButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-5c51a4ad-1"
})`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  margin-top: 30px;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;