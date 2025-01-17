"use strict";
exports.id = 7295;
exports.ids = [7295];
exports.modules = {

/***/ 87295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_BusinessCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-number-format"
var external_react_number_format_ = __webpack_require__(93554);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./modules/core/components/BusinessCard/styles.ts



const CardContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-8c579864-0"
})`
  width: 300px;
  border-radius: 32px;
  background: #c6e1f3;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;
const CardPhoto = external_styled_components_default()((image_default())).withConfig({
    componentId: "sc-8c579864-1"
})`
  border-radius: ${(props)=>props.isRectangle ? "16px" : "50%"};
  object-fit: cover;
`;
const Names = external_styled_components_default().p.withConfig({
    componentId: "sc-8c579864-2"
})`
  font-size: 24px;
  color: #222121;
  text-align: center;
`;
const Age = external_styled_components_default().p.withConfig({
    componentId: "sc-8c579864-3"
})`
  font-size: 24px;
  color: #6c7a89;
`;
const JobTitle = external_styled_components_default().p.withConfig({
    componentId: "sc-8c579864-4"
})`
  font-size: 20px;
  color: #1d7abd;
`;
const Phone = external_styled_components_default()(external_react_number_format_.PatternFormat).withConfig({
    componentId: "sc-8c579864-5"
})`
  font-size: 20px;
  color: #4f4f4f;
  border: none;
  background: none;
  text-align: center;
`;

// EXTERNAL MODULE: ./modules/core/helpers/pluralizationFn.ts
var pluralizationFn = __webpack_require__(89882);
;// CONCATENATED MODULE: ./modules/core/components/BusinessCard/index.tsx




const BusinessCard = ({ phone , photo , names , age , jobTitle  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CardPhoto, {
                src: photo,
                alt: "profile image",
                width: 130,
                height: 130,
                isRectangle: jobTitle === "Гид"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Names, {
                children: names
            }),
            age !== undefined && /*#__PURE__*/ jsx_runtime_.jsx(Age, {
                children: `${age} ${(0,pluralizationFn/* pluralizationFn */.$)(age, [
                    "год",
                    "года",
                    "лет"
                ])}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(JobTitle, {
                children: jobTitle
            }),
            phone && /*#__PURE__*/ jsx_runtime_.jsx(Phone, {
                format: "+# (###) ### ## ##",
                value: phone
            })
        ]
    });
};
/* harmony default export */ const components_BusinessCard = (BusinessCard);


/***/ })

};
;