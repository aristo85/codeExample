"use strict";
exports.id = 4443;
exports.ids = [4443];
exports.modules = {

/***/ 34443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Pagination)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowRight"
var ArrowRight_ = __webpack_require__(7902);
var ArrowRight_default = /*#__PURE__*/__webpack_require__.n(ArrowRight_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowLeft"
var ArrowLeft_ = __webpack_require__(1575);
var ArrowLeft_default = /*#__PURE__*/__webpack_require__.n(ArrowLeft_);
;// CONCATENATED MODULE: ./modules/core/components/icons/RewindIcon.tsx


const RewindIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 18,
        height: 18,
        fill: "none",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "#1D7ABD",
            d: "M14.538 17.308h2.77V.692h-2.77v16.616Zm-13.846 0L12.462 9 .691.692v16.616Z"
        })
    });
/* harmony default export */ const icons_RewindIcon = (RewindIcon);

;// CONCATENATED MODULE: ./modules/core/components/Pagination/styles.ts




const PaginationContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-30be90e-0"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
`;
const PaginationButton = external_styled_components_default().button.withConfig({
    componentId: "sc-30be90e-1"
})`
  background: #ffffff;
  border: 2px solid #8daec1;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;

  ${({ active , theme  })=>active ? `
        background-color: ${theme.colors.primary};
        border: 2px solid ${theme.colors.primary};
        color: ${theme.colors.white};
      ` : `
        background-color: transparent;
        border: 2px solid ${theme.colors.secondary};
      `};

  ${({ disabled  })=>disabled ? `
        opacity: 0.5;
        cursor: not-allowed;
      ` : `
        opacity: 1;
      `};

  ${({ theme  })=>theme.media.down("md")`
      height: 36px;
      width: 36px;
    `};
`;
const ButtonsPaginationBlock = external_styled_components_default().div.withConfig({
    componentId: "sc-30be90e-2"
})`
  display: flex;
  gap: 4px;
`;
const StyledArrowLeftIcon = external_styled_components_default()((ArrowLeft_default())).withConfig({
    componentId: "sc-30be90e-3"
})`
  color: ${({ theme  })=>theme.colors.primary};
  font-size: 36px;
  margin-right: 4px;
`;
const RewindRightIcon = external_styled_components_default()(icons_RewindIcon).withConfig({
    componentId: "sc-30be90e-4"
})`
  font-size: 36px;
`;
const RewindLeftIcon = external_styled_components_default()(icons_RewindIcon).withConfig({
    componentId: "sc-30be90e-5"
})`
  transform: rotate(180deg);
  font-size: 36px;
`;
const StyledArrowRightIcon = external_styled_components_default()((ArrowRight_default())).withConfig({
    componentId: "sc-30be90e-6"
})`
  color: ${({ theme  })=>theme.colors.primary};
  font-size: 36px;
`;
const PaginationItemsBlock = external_styled_components_default().div.withConfig({
    componentId: "sc-30be90e-7"
})`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

;// CONCATENATED MODULE: ./modules/core/components/Pagination/index.tsx



const Pagination = ({ currentPage , totalPages , onPageChange , visiblePages =4 , rightSideButtons =1 , leftSideButtons =1 , isRewindButtonsShown =false  })=>{
    const handlePageChange = (page)=>{
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };
    const renderNumberButtons = ()=>{
        const buttons = [];
        let startPage = 1;
        let endPage = totalPages;
        // If total pages exceed visible pages
        if (totalPages > visiblePages) {
            if (currentPage < visiblePages) {
                endPage = visiblePages;
            } else if (currentPage >= totalPages - rightSideButtons) {
                startPage = totalPages - visiblePages + leftSideButtons;
            } else {
                startPage = currentPage - leftSideButtons;
                endPage = currentPage + rightSideButtons;
            }
        }
        for(let page = startPage; page <= endPage; page++){
            buttons.push(/*#__PURE__*/ jsx_runtime_.jsx(PaginationButton, {
                type: "button",
                active: page === currentPage,
                onClick: ()=>handlePageChange(page),
                children: page
            }, page));
        }
        return buttons;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PaginationContainer, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ButtonsPaginationBlock, {
                children: [
                    isRewindButtonsShown && /*#__PURE__*/ jsx_runtime_.jsx(PaginationButton, {
                        type: "button",
                        disabled: currentPage === 1,
                        onClick: ()=>handlePageChange(1),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(RewindLeftIcon, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PaginationButton, {
                        type: "button",
                        disabled: currentPage === 1,
                        onClick: ()=>handlePageChange(currentPage - 1),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledArrowLeftIcon, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PaginationItemsBlock, {
                children: [
                    totalPages > visiblePages && currentPage > visiblePages - leftSideButtons && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(PaginationButton, {
                                type: "button",
                                onClick: ()=>handlePageChange(1),
                                children: "1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "…"
                            })
                        ]
                    }),
                    renderNumberButtons(),
                    totalPages > visiblePages && currentPage < totalPages - rightSideButtons && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "…"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(PaginationButton, {
                                type: "button",
                                onClick: ()=>handlePageChange(totalPages),
                                children: totalPages
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ButtonsPaginationBlock, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(PaginationButton, {
                        type: "button",
                        disabled: currentPage === totalPages,
                        onClick: ()=>handlePageChange(currentPage + 1),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledArrowRightIcon, {
                            disabled: currentPage === totalPages
                        })
                    }),
                    isRewindButtonsShown && /*#__PURE__*/ jsx_runtime_.jsx(PaginationButton, {
                        type: "button",
                        disabled: currentPage === totalPages,
                        onClick: ()=>handlePageChange(totalPages),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(RewindRightIcon, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Pagination = (Pagination);


/***/ })

};
;