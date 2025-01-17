(() => {
var exports = {};
exports.id = 8551;
exports.ids = [8551];
exports.modules = {

/***/ 22865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95566);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);



const ErrorCustomPage = ({ status , message  })=>{
    const title = status?.toString().startsWith("5") ? "Сервис недоступен" : message;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_error__WEBPACK_IMPORTED_MODULE_2___default()), {
        title: title,
        statusCode: status ?? 500
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorCustomPage);


/***/ }),

/***/ 84409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_PhotoGallery)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./modules/core/components/PhotoGallery/styles.ts


const templateArea3Items = external_styled_components_.css`
  grid-template-areas:
    'main main'
    'second third';
  grid-template-columns: 1fr 1fr;
`;
const templateArea4Items = external_styled_components_.css`
  grid-template-areas:
    'main main main'
    'second third fourth';
  grid-template-columns: 1fr 1fr 1fr;
`;
const GridContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-25ccc792-0"
})`
  width: 100%;
  display: grid;
  grid-gap: 10px;

  ${({ theme , isOptionsType  })=>external_styled_components_.css`
    max-width: ${isOptionsType ? "560" : "848"}px;
    grid-template-columns: ${isOptionsType ? "repeat(4, 1fr)" : "39% 1fr 1fr"};
    ${theme.media.down("md")`
        max-width: ${isOptionsType ? "436" : "612"}px;
    `}
    ${theme.media.down("sm")`
        max-width: 100%;
    `}
  `}

  ${({ length , theme , isOptionsType  })=>{
    if (isOptionsType) {
        return external_styled_components_.css`
        grid-template-areas:
          'main main main main'
          'second third fourth fifth';
        ${theme.media.between("sm", "md")`
          ${templateArea4Items}
        `}
        ${theme.media.down("xs")`
          ${templateArea4Items}
        `}
        ${theme.media.down("xxs")`
          ${templateArea3Items}
        `}
      `;
    } else {
        switch(length){
            case 1:
            case 2:
            case 3:
                return templateArea3Items;
            case 4:
                return external_styled_components_.css`
            ${templateArea4Items}
            ${theme.media.down("md")`
                ${templateArea3Items}
              `}
          `;
            case 5:
                return external_styled_components_.css`
            grid-template-areas:
              'second main main'
              'third main main'
              'fourth fifth fifth';
            ${theme.media.down("md")`
                ${templateArea3Items}
              `}
          `;
            default:
                return external_styled_components_.css`
            grid-template-areas:
              'second main main'
              'third main main'
              'fourth fifth sixth';
            ${theme.media.down("md")`
                ${templateArea3Items}
              `}
          `;
        }
    }
}};
`;
const ImageContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-25ccc792-1"
})`
  position: relative;
  cursor: pointer;
  height: 188px;
  ${({ theme , isOptionsType  })=>{
    return isOptionsType ? external_styled_components_.css`
          height: 80px;
        ` : external_styled_components_.css`
          ${theme.media.down("md")`
            height: 164px;
          `}
          ${theme.media.down("xs")`
            height: 156px;
          `}
        `;
}}
`;
const MainImageContainer = external_styled_components_default()(ImageContainer).withConfig({
    componentId: "sc-25ccc792-2"
})`
  grid-area: main;
  ${({ theme , isOptionsType  })=>external_styled_components_.css`
    height: ${isOptionsType ? "248" : "392"}px;
    ${theme.media.down("xs")`
        height: ${isOptionsType ? "164" : "156"}px;
    `}
  `}
`;
const SecondImageContainer = external_styled_components_default()(ImageContainer).withConfig({
    componentId: "sc-25ccc792-3"
})`
  grid-area: second;
`;
const ThirdImageContainer = external_styled_components_default()(ImageContainer).withConfig({
    componentId: "sc-25ccc792-4"
})`
  grid-area: third;
`;
const FourthImageContainer = external_styled_components_default()(ImageContainer).withConfig({
    componentId: "sc-25ccc792-5"
})`
  grid-area: fourth;
`;
const FifthImageContainer = external_styled_components_default()(ImageContainer).withConfig({
    componentId: "sc-25ccc792-6"
})`
  grid-area: fifth;
`;
const SixthImageContainer = external_styled_components_default()(ImageContainer).withConfig({
    componentId: "sc-25ccc792-7"
})`
  grid-area: sixth;
`;
const StyledImage = external_styled_components_default()((image_default())).withConfig({
    componentId: "sc-25ccc792-8"
})`
  border-radius: ${({ $isOptionsType , $mainImage  })=>$isOptionsType && !$mainImage ? "16" : "30"}px;
  ${(props)=>props.$isSeeMore && "filter: brightness(50%);"}
`;
const SeeAllImagesText = external_styled_components_default().h2.withConfig({
    componentId: "sc-25ccc792-9"
})`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
  cursor: pointer;
  ${({ theme  })=>`
    color: ${theme.colors.white};
    font-size: ${theme.font.size.subtitle1};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
  `};
`;
const NoImagesLengthBlock = external_styled_components_default().div.withConfig({
    componentId: "sc-25ccc792-10"
})`
  ${({ theme , cursor  })=>external_styled_components_.css`
    cursor: ${cursor};
    height: 248px;
    width: 100%;
    display: flex;
    flex-direction: column;

    ${theme.media.down("sm")`
        height: 200px;
    `}

    ${theme.media.down("xs")`
        height: 156px;
    `}
  `}
`;
const DefaultIconContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-25ccc792-11"
})`
  ${({ theme  })=>external_styled_components_.css`
    height: 100%;
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    border: 2px solid ${theme.colors.primary};
    border-radius: 32px;
    ${theme.media.down("sm")`
      border: none;
    `};
  `}
`;
const NoImageDefaultText = external_styled_components_default().h3.withConfig({
    componentId: "sc-25ccc792-12"
})`
  ${({ theme  })=>`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body1};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
  `};
`;

// EXTERNAL MODULE: ./modules/placement/components/BookingImageGallery/index.tsx + 1 modules
var BookingImageGallery = __webpack_require__(54554);
// EXTERNAL MODULE: ./modules/core/hooks/useMatchMedia.ts
var useMatchMedia = __webpack_require__(40152);
// EXTERNAL MODULE: ./modules/core/styles/mediaQueries.ts
var mediaQueries = __webpack_require__(80514);
// EXTERNAL MODULE: ./modules/core/components/icons/DefaultHotelIcon.tsx
var DefaultHotelIcon = __webpack_require__(31786);
;// CONCATENATED MODULE: ./modules/core/components/PhotoGallery/index.tsx







const PhotoGallery = ({ images , isOptionsType , isModalOpened , setIsModalOpened  })=>{
    const imagesLength = images.length ?? 0;
    const [mainImage, secondImage, thirdImage, fourthImage, fifthImage, sixthImage, ...rest] = images;
    const [currentImageIndex, setCurrentImageIndex] = (0,external_react_.useState)(0);
    const isScreenMd = (0,useMatchMedia/* default */.Z)(`(max-width: ${mediaQueries/* breakpoints.md */.AV.md}px)`);
    const isScreenSm = (0,useMatchMedia/* default */.Z)(`(max-width: ${mediaQueries/* breakpoints.sm */.AV.sm}px)`);
    const isScreenXs = (0,useMatchMedia/* default */.Z)(`(max-width: ${mediaQueries/* breakpoints.xs */.AV.xs}px)`);
    const isScreenXxs = (0,useMatchMedia/* default */.Z)(`(max-width: 376px)`);
    const isFifthOptions = isScreenMd && (!isScreenSm || isScreenXs) && fifthImage;
    const modalToggleHandler = ()=>{
        setIsModalOpened(!isModalOpened);
    };
    const onImageClickHandler = (index)=>{
        setCurrentImageIndex(index);
        modalToggleHandler();
    };
    const imageComponent = (url, seeMore, mainImage)=>{
        const isSeeMore = !!seeMore;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(StyledImage, {
                    src: url,
                    alt: "gallery-image",
                    layout: "fill",
                    objectFit: "cover",
                    $isSeeMore: !!isSeeMore,
                    $isOptionsType: !!isOptionsType,
                    $mainImage: !!mainImage
                }),
                isSeeMore && /*#__PURE__*/ jsx_runtime_.jsx(SeeAllImagesText, {
                    children: isScreenSm || isOptionsType ? `+${seeMore}` : "Смотреть все фото"
                })
            ]
        });
    };
    if (!imagesLength) {
        return /*#__PURE__*/ jsx_runtime_.jsx(NoImagesLengthBlock, {
            cursor: "not-allowed",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DefaultIconContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DefaultHotelIcon/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(NoImageDefaultText, {
                        children: "Фото отсутствует"
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            isOptionsType ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer, {
                length: imagesLength,
                isOptionsType: !!isOptionsType,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MainImageContainer, {
                        onClick: ()=>onImageClickHandler(0),
                        isOptionsType: !!isOptionsType,
                        children: imageComponent(mainImage, undefined, true)
                    }),
                    secondImage && /*#__PURE__*/ jsx_runtime_.jsx(SecondImageContainer, {
                        onClick: ()=>onImageClickHandler(1),
                        isOptionsType: !!isOptionsType,
                        children: imageComponent(secondImage)
                    }),
                    thirdImage && /*#__PURE__*/ jsx_runtime_.jsx(ThirdImageContainer, {
                        onClick: ()=>onImageClickHandler(2),
                        isOptionsType: !!isOptionsType,
                        children: imageComponent(thirdImage, isScreenXxs ? imagesLength - 3 : 0)
                    }),
                    !isScreenXxs && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            fourthImage && /*#__PURE__*/ jsx_runtime_.jsx(FourthImageContainer, {
                                onClick: ()=>onImageClickHandler(3),
                                isOptionsType: !!isOptionsType,
                                children: imageComponent(fourthImage, isScreenMd && (!isScreenSm || isScreenXs) ? imagesLength - 4 : 0)
                            }),
                            fifthImage && !isFifthOptions && /*#__PURE__*/ jsx_runtime_.jsx(FifthImageContainer, {
                                onClick: ()=>onImageClickHandler(4),
                                isOptionsType: !!isOptionsType,
                                children: imageComponent(fifthImage, imagesLength - 5)
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer, {
                length: imagesLength,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MainImageContainer, {
                        onClick: ()=>onImageClickHandler(0),
                        children: imageComponent(mainImage)
                    }),
                    secondImage && /*#__PURE__*/ jsx_runtime_.jsx(SecondImageContainer, {
                        onClick: ()=>onImageClickHandler(1),
                        children: imageComponent(secondImage)
                    }),
                    thirdImage && /*#__PURE__*/ jsx_runtime_.jsx(ThirdImageContainer, {
                        onClick: ()=>onImageClickHandler(2),
                        children: imageComponent(thirdImage, isScreenMd ? imagesLength - 3 : 0)
                    }),
                    !isScreenMd && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            fourthImage && /*#__PURE__*/ jsx_runtime_.jsx(FourthImageContainer, {
                                onClick: ()=>onImageClickHandler(3),
                                children: imageComponent(fourthImage)
                            }),
                            fifthImage && /*#__PURE__*/ jsx_runtime_.jsx(FifthImageContainer, {
                                onClick: ()=>onImageClickHandler(4),
                                children: imageComponent(fifthImage)
                            }),
                            sixthImage && /*#__PURE__*/ jsx_runtime_.jsx(SixthImageContainer, {
                                onClick: ()=>onImageClickHandler(5),
                                children: imageComponent(sixthImage, imagesLength - 6)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BookingImageGallery/* default */.Z, {
                currentImageIndex: currentImageIndex,
                images: images,
                isOpen: isModalOpened,
                onClose: modalToggleHandler,
                setCurrentImage: setCurrentImageIndex
            })
        ]
    });
};
/* harmony default export */ const components_PhotoGallery = (PhotoGallery);


/***/ }),

/***/ 34540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ serviceHandler)
/* harmony export */ });
const serviceHandler = (allServices)=>{
    const mealService = allServices?.find((service)=>service.kind === "Meal");
    // We don't know how to understand that we have transport service so there is only one method we can try
    const transportService = allServices?.find((service)=>service.description.toLowerCase().includes("transport") || service.description.toLowerCase().includes("транспорт"));
    const anotherServices = allServices?.filter((service)=>service?.id !== mealService?.id && service?.id !== transportService?.id && !service.mealPlanCode);
    return {
        mealService,
        transportService,
        anotherServices
    };
};


/***/ }),

/***/ 75399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "YG": () => (/* binding */ getAmenitiesWithIcon),
  "yA": () => (/* binding */ getIconTravelLine)
});

// UNUSED EXPORTS: getIcon

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/BunkBedsIcon.tsx
var amenities_BunkBedsIcon = __webpack_require__(58226);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/ChairsIcon.tsx
var amenities_ChairsIcon = __webpack_require__(96334);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/HairdryerIcon.tsx
var HairdryerIcon = __webpack_require__(5596);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/RefrigeratorIcon.tsx
var amenities_RefrigeratorIcon = __webpack_require__(54978);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/HangersIcon.tsx
var amenities_HangersIcon = __webpack_require__(12876);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/WifiIcon.tsx
var amenities_WifiIcon = __webpack_require__(85427);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/SlippersIcon.tsx
var amenities_SlippersIcon = __webpack_require__(99181);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/BathWithWCIcon.tsx
var amenities_BathWithWCIcon = __webpack_require__(91286);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/HygienicAids.tsx
var amenities_HygienicAids = __webpack_require__(26563);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/ToiletBowlIcon.tsx
var amenities_ToiletBowlIcon = __webpack_require__(26673);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/ClosetsIcon.tsx
var amenities_ClosetsIcon = __webpack_require__(70488);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/ShowerIcon.tsx
var amenities_ShowerIcon = __webpack_require__(21789);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/CityViewIcon.tsx
var amenities_CityViewIcon = __webpack_require__(79634);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/DishesIcon.tsx
var DishesIcon = __webpack_require__(15867);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/TeaSetIcon.tsx
var amenities_TeaSetIcon = __webpack_require__(78308);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/DrinkingWaterIcon.tsx
var amenities_DrinkingWaterIcon = __webpack_require__(75752);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/HighCeilingsIcon.tsx
var amenities_HighCeilingsIcon = __webpack_require__(59956);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./modules/core/components/icons/amenities/DefaultIcon.tsx


const DefaultIcon_EmptySpaceIcon = (props)=>/*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ _jsx("circle", {
            cx: "12",
            cy: "12",
            r: "3",
            fill: "#8DAEC1"
        })
    });
/* harmony default export */ const DefaultIcon = ((/* unused pure expression or super */ null && (DefaultIcon_EmptySpaceIcon)));

// EXTERNAL MODULE: ./modules/core/components/icons/amenities/GlassesIcon.tsx
var amenities_GlassesIcon = __webpack_require__(17285);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/BalconyIcon.tsx
var amenities_BalconyIcon = __webpack_require__(41962);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/WarmFloorIcon.tsx
var amenities_WarmFloorIcon = __webpack_require__(36432);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/SofaBedIcon.tsx
var amenities_SofaBedIcon = __webpack_require__(65923);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/InternetIcon.tsx
var amenities_InternetIcon = __webpack_require__(32941);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/NightstandIcon.tsx
var amenities_NightstandIcon = __webpack_require__(27765);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/MaidServiceIcon.tsx
var amenities_MaidServiceIcon = __webpack_require__(53230);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/OttomanChairIcon.tsx
var amenities_OttomanChairIcon = __webpack_require__(51556);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/TVIcon.tsx
var amenities_TVIcon = __webpack_require__(3851);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/SatelliteIcon.tsx
var amenities_SatelliteIcon = __webpack_require__(74742);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/SinkIcon.tsx
var amenities_SinkIcon = __webpack_require__(98061);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/WebTVIcon.tsx
var amenities_WebTVIcon = __webpack_require__(72637);
// EXTERNAL MODULE: ./modules/core/components/icons/amenities/TowelsIcon.tsx
var amenities_TowelsIcon = __webpack_require__(12487);
// EXTERNAL MODULE: ./modules/core/components/icons/travelLineAmenities/index.tsx + 102 modules
var travelLineAmenities = __webpack_require__(29391);
;// CONCATENATED MODULE: ./modules/placement/components/Amenities/constants.tsx

































const standardDimensions = {
    width: 32,
    height: 32
};
const getIconTravelLine = (code, sizes)=>{
    const dimensions = sizes ?? standardDimensions;
    switch(code){
        case "wifi_internet":
        case "internet":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Wifi */.kF, {
                ...dimensions
            });
        case "air_conditioning":
        case "central_air_conditioning":
        case "air_conditioning_individually_controlled_in_room":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* AirConditioner */.LP, {
                ...dimensions
            });
        case "single_bed":
        case "orthopedic_mattress":
        case "bunk_beds":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Single */.oV, {
                ...dimensions
            });
        case "two_double_beds":
        case "two_full_beds":
        case "two_single_beds":
        case "two_single_or_big_double_bed":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Twin */.PX, {
                ...dimensions
            });
        case "king_bed":
        case "queen_bed":
        case "double_bed":
        case "full_bed":
        case "three_double_beds":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Double */.bh, {
                ...dimensions
            });
        case "tv":
        case "two_tv":
        case "satellite_television":
        case "cable_television":
        case "interactive_web_tv":
        case "home_cinema":
        case "hbo":
        case "chinese_channel":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities.Tv, {
                ...dimensions
            });
        case "phone":
        case "telephone":
        case "ip_telephone":
        case "two_line_phone":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* GrandpaPhone */.P1, {
                ...dimensions
            });
        case "hairdryer":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Hairdryer */.Xm, {
                ...dimensions
            });
        case "dvd_player":
        case "movies":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Multimedia */.Oh, {
                ...dimensions
            });
        case "karaoke":
        case "media_center":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Karaoke */.EK, {
                ...dimensions
            });
        case "alarm_clock":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Alarm */.jB, {
                ...dimensions
            });
        case "fan":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Fan */.XG, {
                ...dimensions
            });
        case "fan_coil":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* FanCoil */.xP, {
                ...dimensions
            });
        case "scales":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Scales */.C2, {
                ...dimensions
            });
        case "coffee_machine":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* CoffeeMachine */.Li, {
                ...dimensions
            });
        case "cooler":
        case "cooler_on_the_floor":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Cooler */.ww, {
                ...dimensions
            });
        case "microwave":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Microwave */.Rg, {
                ...dimensions
            });
        case "lamp":
        case "desk_lamps":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Lamp */.d8, {
                ...dimensions
            });
        case "pc":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Laptop */.Iz, {
                ...dimensions
            });
        case "stove":
        case "kitchen":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* KitchenStove */.mo, {
                ...dimensions
            });
        case "radio":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Radio */.Y8, {
                ...dimensions
            });
        case "security_system":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* SecuritySystem */.l1, {
                ...dimensions
            });
        case "iron":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Iron */.HX, {
                ...dimensions
            });
        case "fax":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Fax */.nY, {
                ...dimensions
            });
        case "refrigerator":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Refrigerator */.g2, {
                ...dimensions
            });
        case "electronic_locks":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* ElectronicLock */.DN, {
                ...dimensions
            });
        case "luggage_stand":
        case "commode":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* BedsideTable */.Bm, {
                ...dimensions
            });
        case "hangers":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Hanger */.UV, {
                ...dimensions
            });
        case "closet_for_clothes":
        case "wardrobe":
        case "furniture set":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Cupboard */.bH, {
                ...dimensions
            });
        case "sofa_bed":
        case "living_area":
        case "soft_furniture":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Sofa */.j8, {
                ...dimensions
            });
        case "work_table":
        case "journal_table":
        case "desk":
        case "cabinet":
        case "conference_table":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Desk */.nk, {
                ...dimensions
            });
        case "cosmetic_mirror":
        case "mirror":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Mirror */.WC, {
                ...dimensions
            });
        case "armchairs":
        case "exclusive_furniture":
        case "armchair":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Armchair */.nL, {
                ...dimensions
            });
        case "dinner_table":
        case "dinner_zone":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Table */.iA, {
                ...dimensions
            });
        case "padded_stools":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Poof */.Xh, {
                ...dimensions
            });
        case "chairs":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Chair */.Hs, {
                ...dimensions
            });
        case "carpet":
        case "carpet_covering":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Carpet */.GT, {
                ...dimensions
            });
        case "bathroom":
        case "bathtub":
        case "jacuzzi_bathroom":
        case "aeromassage_bath":
        case "hydromassage_bath":
        case "additional_bathroom":
        case "shared_bathroom":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Bathroom */.ZS, {
                ...dimensions
            });
        case "shower_cabin":
        case "hydromassage_shower":
        case "shower":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Shower */.Gq, {
                ...dimensions
            });
        case "bath_towels":
        case "beach_towels":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Towel */.hM, {
                ...dimensions
            });
        case "bathroom_amenities":
        case "sauna":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Sauna */.w3, {
                ...dimensions
            });
        case "bathroom_with_wc":
        case "additional_bathroom_with_wc":
        case "bidet":
        case "toilet":
        case "toilet_bowl":
        case "separate_closet":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Toilet */.qc, {
                ...dimensions
            });
        case "hygienic_aids":
        case "beauty_aids":
        case "toiletry":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Cosmetics */.yu, {
                ...dimensions
            });
        case "slippers":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Slippers */.lD, {
                ...dimensions
            });
        case "bathrobe":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Bathrobe */.VM, {
                ...dimensions
            });
        case "safe":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Safe */.Wf, {
                ...dimensions
            });
        case "balcony":
        case "balcony_with_view":
        case "balcony_with_deck_chairs":
        case "loggia":
        case "terrace":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Balcony */.Pp, {
                ...dimensions
            });
        case "ironing_board":
        case "trouser_press":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* IroningBoard */.Cj, {
                ...dimensions
            });
        case "daily_press":
        case "information_card":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Newspaper */.$U, {
                ...dimensions
            });
        case "fireplace":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Fireplace */.P, {
                ...dimensions
            });
        case "drinking_water":
        case "mineral_water":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* BottledWater */.cC, {
                ...dimensions
            });
        case "minibar":
        case "bar":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* MiniBar */.eP, {
                ...dimensions
            });
        case "cookware":
        case "set_of_dishes":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Cookware */.cf, {
                ...dimensions
            });
        case "maid_service":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Service */.t6, {
                ...dimensions
            });
        case "writing_utensils":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* WritingMaterials */.tP, {
                ...dimensions
            });
        case "dishwasher":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Dishwasher */.Tk, {
                ...dimensions
            });
        case "washing_machine":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Washer */.O, {
                ...dimensions
            });
        case "kettle":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Kettle */.oC, {
                ...dimensions
            });
        case "tea_set":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* TeaSet */.jA, {
                ...dimensions
            });
        case "sink":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Sink */.cR, {
                ...dimensions
            });
        case "heating":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Heating */.Dn, {
                ...dimensions
            });
        case "water_heater":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Boiler */.d7, {
                ...dimensions
            });
        case "sea_view":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* SeaView */.w_, {
                ...dimensions
            });
        case "city_view":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* CityView */.Qq, {
                ...dimensions
            });
        case "river_view":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* RiverView */.G9, {
                ...dimensions
            });
        case "garden_view":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* GardenView */.we, {
                ...dimensions
            });
        case "court_view":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* CourtView */.v7, {
                ...dimensions
            });
        case "pool_view":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* PoolView */.Oz, {
                ...dimensions
            });
        case "mountain_view":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* MountainView */.wQ, {
                ...dimensions
            });
        case "forest_view":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* ForestView */.zR, {
                ...dimensions
            });
        case "view_to_stadium":
        case "stadium_view":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* StadiumView */.ij, {
                ...dimensions
            });
        case "park_view":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* ParkView */.lO, {
                ...dimensions
            });
        case "no_window":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* NoWindow */.Km, {
                ...dimensions
            });
        case "two_rooms":
        case "two_bedrooms":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Room2 */.qB, {
                ...dimensions
            });
        case "three_rooms":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Room3 */.Q_, {
                ...dimensions
            });
        case "four_rooms":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Room4 */.bb, {
                ...dimensions
            });
        case "tile_covering":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Tile */.n9, {
                ...dimensions
            });
        case "bath_or_shower":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* BathOrShower */.tn, {
                ...dimensions
            });
        case "three_single_beds":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* ThreeSingleBeds */.yn, {
                ...dimensions
            });
        case "warm_floor":
        case "hardwood_floors":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* WarmFloor */.v3, {
                ...dimensions
            });
        case "heater":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Heater */.Y6, {
                ...dimensions
            });
        case "hypoallergenic_linen":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* HypoallergenicLinen */.Qi, {
                ...dimensions
            });
        case "private_room_entrance":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* PrivateRoomEntrance */.f9, {
                ...dimensions
            });
        case "floor_to_ceiling_windows":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* PanoramicWindows */.wx, {
                ...dimensions
            });
        case "soundproofed_room":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* SoundproofedRoom */.FC, {
                ...dimensions
            });
        case "window_to_hotel_atrium":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* WindowToHotelAtrium */.RU, {
                ...dimensions
            });
        case "window_leaf":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* WindowLeaf */.Rc, {
                ...dimensions
            });
        case "smoking":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Smoking */._l, {
                ...dimensions
            });
        case "non_smoking_room":
        case "no_smoking":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* NoSmoking */.QC, {
                ...dimensions
            });
        case "two_king_size_beds":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* TwoKingSizeBeds */.Jp, {
                ...dimensions
            });
        case "two_queen_size_beds":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* TwoQueenSizeBeds */.Xd, {
                ...dimensions
            });
        case "pillows_menu":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* PillowsMenu */.fs, {
                ...dimensions
            });
        case "child_rollaway":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* ChildRollaway */.YG, {
                ...dimensions
            });
        case "view_race_track":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* ViewRaceTrack */.XI, {
                ...dimensions
            });
        case "usb":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Usb */.dW, {
                ...dimensions
            });
        case "studio_couch":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Couch */.vl, {
                ...dimensions
            });
        case "nightstand":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Nightstand */.DV, {
                ...dimensions
            });
        case "window_screen":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* MosquitoNet */.ld, {
                ...dimensions
            });
        case "glasses":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Glasses */.T6, {
                ...dimensions
            });
        case "pool":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* Pool */.Kg, {
                ...dimensions
            });
        case "smart_home_system":
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* SmartHouse */.$x, {
                ...dimensions
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(travelLineAmenities/* NoIcon */.Sv, {
                ...dimensions
            });
    }
};
const getIcon = (code, sizes)=>{
    const dimensions = sizes ?? standardDimensions;
    switch(code){
        case "bunk_beds":
        case "king_bed":
        case "two_single_beds":
        case "orthopedic_mattress":
        case "three_single_beds":
        case "double_bed":
        case "two_full_beds":
        case "single_bed":
        case "two_single_or_big_double_bed":
        case "two_queen_size_beds":
        case "queen_bed":
        case "three_double_beds":
        case "three_full_beds":
        case "two_double_beds":
        case "full_bed":
        case "child_rollaway":
        case "six_beds":
        case "two_king_size_beds":
        case "krovatka":
        case "five_single_beds":
        case "four_beds":
            return /*#__PURE__*/ _jsx(BunkBedsIcon, {
                ...dimensions
            });
        case "refrigerator":
        case "mini_fridge":
            return /*#__PURE__*/ _jsx(RefrigeratorIcon, {
                ...dimensions
            });
        case "hairdryer":
            return /*#__PURE__*/ _jsx(HairDryerIcon, {
                ...dimensions
            });
        case "chairs":
        case "chair":
            return /*#__PURE__*/ _jsx(ChairsIcon, {
                ...dimensions
            });
        case "closet_for_clothes":
        case "sliding_door_wardrobe":
            return /*#__PURE__*/ _jsx(ClosetsIcon, {
                ...dimensions
            });
        case "hangers":
        case "veshalka":
            return /*#__PURE__*/ _jsx(HangersIcon, {
                ...dimensions
            });
        case "wifi_internet":
            return /*#__PURE__*/ _jsx(WifiIcon, {
                ...dimensions
            });
        case "slippers":
            return /*#__PURE__*/ _jsx(SlippersIcon, {
                ...dimensions
            });
        case "bathroom_with_wc":
        case "separate_closet":
        case "bathroom":
        case "two_bathrooms":
        case "additional_bathroom_with_wc":
        case "bathroom_amenities":
        case "three_bathrooms":
        case "shared_bathroom":
            return /*#__PURE__*/ _jsx(BathWithWCIcon, {
                ...dimensions
            });
        case "hygienic_aids":
            return /*#__PURE__*/ _jsx(HygienicAids, {
                ...dimensions
            });
        case "toilet_bowl":
            return /*#__PURE__*/ _jsx(ToiletBowlIcon, {
                ...dimensions
            });
        case "shower":
        case "bath_or_shower":
        case "shower_cabin":
            return /*#__PURE__*/ _jsx(ShowerIcon, {
                ...dimensions
            });
        case "city_view":
            return /*#__PURE__*/ _jsx(CityViewIcon, {
                ...dimensions
            });
        case "kitchen":
        case "set_of_dishes":
            return /*#__PURE__*/ _jsx(KitchenIcon, {
                ...dimensions
            });
        case "tea_set":
        case "kettle":
            return /*#__PURE__*/ _jsx(TeaSetIcon, {
                ...dimensions
            });
        case "drinking_water":
            return /*#__PURE__*/ _jsx(DrinkingWaterIcon, {
                ...dimensions
            });
        case "high_ceilings":
            return /*#__PURE__*/ _jsx(HighCeilingsIcon, {
                ...dimensions
            });
        case "glasses":
            return /*#__PURE__*/ _jsx(GlassesIcon, {
                ...dimensions
            });
        case "balcony":
        case "balcony_with_view":
        case "balcony_with_deck_chairs":
            return /*#__PURE__*/ _jsx(BalconyIcon, {
                ...dimensions
            });
        case "warm_floor":
            return /*#__PURE__*/ _jsx(WarmFloorIcon, {
                ...dimensions
            });
        case "sofa_bed":
        case "studio_couch":
        case "folding_sofa":
            return /*#__PURE__*/ _jsx(SofaBedIcon, {
                ...dimensions
            });
        case "internet":
            return /*#__PURE__*/ _jsx(InternetIcon, {
                ...dimensions
            });
        case "nightstands":
        case "luggage_stand":
        case "nightstand":
            return /*#__PURE__*/ _jsx(NightstandIcon, {
                ...dimensions
            });
        case "maid_service":
            return /*#__PURE__*/ _jsx(MaidServiceIcon, {
                ...dimensions
            });
        case "padded_stools":
            return /*#__PURE__*/ _jsx(OttomanChairIcon, {
                ...dimensions
            });
        case "flat_screen_TV":
        case "tv":
            return /*#__PURE__*/ _jsx(TVIcon, {
                ...dimensions
            });
        case "interactive_web_tv":
            return /*#__PURE__*/ _jsx(WebTVIcon, {
                ...dimensions
            });
        case "satellite_television":
        case "cable_television":
        case "hbo":
            return /*#__PURE__*/ _jsx(SatelliteIcon, {
                ...dimensions
            });
        case "sink":
            return /*#__PURE__*/ _jsx(SinkIcon, {
                ...dimensions
            });
        case "bath_towels":
        case "beach_towels":
            return /*#__PURE__*/ _jsx(TowelsIcon, {
                ...dimensions
            });
        default:
            return /*#__PURE__*/ _jsx(EmptySpaceIcon, {
                ...dimensions,
                fill: "red",
                ...dimensions
            });
    }
};
const getAmenitiesWithIcon = (amenitiesWithCategory, sizes)=>{
    return amenitiesWithCategory?.map((item)=>{
        const amenitiesByCategoriesWithIcon = item.amenities.map((amn)=>{
            const foundIcon = getIconTravelLine(amn.code, sizes);
            return {
                ...amn,
                icon: foundIcon
            };
        });
        return {
            ...item,
            amenities: [
                ...amenitiesByCategoriesWithIcon
            ]
        };
    });
};


/***/ }),

/***/ 61766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yo": () => (/* binding */ AmenityItem),
/* harmony export */   "m5": () => (/* binding */ AmenityTxt)
/* harmony export */ });
/* unused harmony exports AmenitiesContainer, CategoryName, AmenityBlock, AmenitiesWrapper, AmenitiesGroup, DetailWrapper, DetailDescription, DetailLabel */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const AmenitiesContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-917725ae-0"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
    gap: 16px;

    ${theme.media.down("xs")`
      max-height: 100%;
      font-weight: 400;
      font-size: ${theme.font.size.subtitle1};
    `}
  `}
`;
const CategoryName = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
    componentId: "sc-917725ae-1"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: 20px 0 0;
    font-size: ${theme.font.size.body1};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.default};

    ${theme.media.down("xs")`
      
    `}
  `}
`;
const AmenityItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-917725ae-2"
})`
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("xs")`
      
    `}
  `}
`;
const AmenityTxt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-917725ae-3"
})`
  font-size: 16px;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    font-family: ${theme.font.family.gothicBook};

    ${theme.media.down("xs")`
    `}
  `}
  &:first-letter {
    text-transform: capitalize;
  }
`;
const AmenityBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-917725ae-4"
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const AmenitiesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-917725ae-5"
})`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
const AmenitiesGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-917725ae-6"
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const DetailWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-917725ae-7"
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const DetailDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-917725ae-8"
})`
  color: #222121;
  font-size: 16px;
`;
const DetailLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-917725ae-9"
})`
  color: #222121;
  font-size: 18px;
`;


/***/ }),

/***/ 54554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ BookingImageGallery)
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
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./modules/placement/components/BookingImageGallery/styles.ts


const ModalContent = external_styled_components_default().div.withConfig({
    componentId: "sc-df6eb748-0"
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 10px), -50%);
  width: calc(100% - 112px);
  height: calc(100% - 130px);
  padding: 32px;

  ${({ theme , isHorizontalImage  })=>external_styled_components_.css`
    ${isHorizontalImage && external_styled_components_.css`
      width: 500px;
    `};
    ${theme.media.down("md")`
      height: ${isHorizontalImage ? "60%" : "40%"};
      width: ${isHorizontalImage ? "60%" : "calc(100% - 20px)"};
      top: 50%;
      left: 50%;
      transform: translate(calc(-50% - 10px), -50%);
      margin: 0 10px;
      border-radius: 0px;
    `}
    ${theme.media.down("xs")`
      height: ${isHorizontalImage ? "64%" : "30%"};
      width: calc(100% - 20px);
      top: 50%;
      left: 50%;
      transform: translate(calc(-50% - 10px), -50%);
      margin: 0 10px;
      border-radius: 0px;
    `}
  `}
`;
const GalleryImage = external_styled_components_default()((image_default())).withConfig({
    componentId: "sc-df6eb748-1"
})`
  border-radius: 32px;
  background: #ffffff;
`;
const GalleryButton = external_styled_components_default().button.withConfig({
    componentId: "sc-df6eb748-2"
})`
  ${({ active , theme  })=>`
    background-color: ${active ? theme.colors.primary : "transparent"};
    border: 2px solid ${active ? theme.colors.primary : theme.colors.secondary};
  `};

  ${({ rotate  })=>`
    transform: rotate(${rotate});
  `};

  ${({ display  })=>display === false ? external_styled_components_.css`
          display: none;
        ` : external_styled_components_.css`
          display: flex;
        `};

  position: absolute;
  ${({ position  })=>position && external_styled_components_.css`
      ${position === "top-left" && external_styled_components_.css`
        top: 0;
        left: 0;
      `}

      ${position === "top-right" && external_styled_components_.css`
        top: 0;
        right: 0;
      `}

      ${position === "bottom-left" && external_styled_components_.css`
        bottom: 0;
        left: 0;
      `}

      ${position === "bottom-right" && external_styled_components_.css`
        bottom: 0;
        right: 0;
      `}
    `};
  background: #ffffff;
  border: 2px solid #8daec1;
  border-radius: 16px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin: 32px;
  width: 60px;
  ${({ disabled  })=>`
    ${disabled ? `opacity: 0.5;
    cursor: not-allowed;` : `opacity: 1;`}
  `}
  ${({ theme  })=>theme.media.down("md")`
    height: 40px;
    width: 40px;
    margin: 20px;
  `}
`;

// EXTERNAL MODULE: ./modules/core/components/icons/ArrowSelectUp.tsx
var ArrowSelectUp = __webpack_require__(24570);
// EXTERNAL MODULE: ./modules/core/components/icons/CloseIcon.tsx
var CloseIcon = __webpack_require__(14649);
// EXTERNAL MODULE: ./modules/core/components/Spinner/index.tsx
var Spinner = __webpack_require__(52901);
;// CONCATENATED MODULE: ./modules/placement/components/BookingImageGallery/index.tsx







const ModalGallery = ({ isOpen , onClose , images , currentImageIndex , setCurrentImage  })=>{
    const [imageLoading, setImageLoading] = (0,external_react_.useState)(false);
    const [aspectRatio, setAspectRatio] = (0,external_react_.useState)(null);
    (0,external_react_.useLayoutEffect)(()=>{
        setImageLoading(true);
        const img = new Image();
        img.src = images[currentImageIndex];
        img.onload = ()=>{
            const imgAspectRatio = img.width / img.height;
            setAspectRatio(imgAspectRatio);
        };
        const handleKeyDown = (event)=>{
            if (event.key === "ArrowLeft" && currentImageIndex > 0) {
                turnCurrentImage(currentImageIndex - 1);
            } else if (event.key === "ArrowRight" && currentImageIndex < images.length - 1) {
                turnCurrentImage(currentImageIndex + 1);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return ()=>{
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        currentImageIndex,
        images
    ]);
    const turnCurrentImage = (index)=>{
        setCurrentImage(index);
    };
    const onCloseButtonClickHandler = ()=>{
        onClose();
        setCurrentImage(0);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Modal, {
        disableEnforceFocus: true,
        disableAutoFocus: true,
        open: isOpen,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ModalContent, {
            isHorizontalImage: aspectRatio && aspectRatio < 1 || false,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(GalleryImage, {
                    onLoad: ()=>setImageLoading(false),
                    src: images[currentImageIndex],
                    alt: "tertiary-image",
                    fill: true,
                    objectFit: "cover",
                    priority: true
                }),
                imageLoading && /*#__PURE__*/ jsx_runtime_.jsx(Spinner/* default */.Z, {
                    showSpinner: imageLoading
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(GalleryButton, {
                    display: currentImageIndex > 0,
                    rotate: "90deg",
                    position: "bottom-left",
                    disabled: currentImageIndex <= 0,
                    onClick: ()=>turnCurrentImage(currentImageIndex - 1),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowSelectUp/* default */.Z, {
                        stroke: "#1D7ABD"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(GalleryButton, {
                    display: currentImageIndex !== images.length - 1,
                    rotate: "-90deg",
                    position: "bottom-right",
                    disabled: currentImageIndex === images.length - 1,
                    onClick: ()=>turnCurrentImage(currentImageIndex + 1),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowSelectUp/* default */.Z, {
                        stroke: "#1D7ABD"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(GalleryButton, {
                    position: "top-right",
                    onClick: onCloseButtonClickHandler,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CloseIcon/* default */.Z, {
                        stroke: "#1D7ABD"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const BookingImageGallery = (ModalGallery);


/***/ }),

/***/ 65369:
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51256);
/* harmony import */ var _modules_placement_components_Amenities_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75399);
/* harmony import */ var _modules_core_components_PhotoGallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84409);
/* harmony import */ var _components_MobileRoomTariffs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37552);
/* harmony import */ var _components_MobileDetailModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9393);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_MobileRoomTariffs__WEBPACK_IMPORTED_MODULE_5__, _components_MobileDetailModal__WEBPACK_IMPORTED_MODULE_6__]);
([_components_MobileRoomTariffs__WEBPACK_IMPORTED_MODULE_5__, _components_MobileDetailModal__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const MobileRoomCard = ({ rooms , amenitiesWithCategory , ratePlans , services  })=>{
    const [isModalGalleryOpen, setIsModalGalleryOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const amenitiesWithIcons = (0,_modules_placement_components_Amenities_constants__WEBPACK_IMPORTED_MODULE_3__/* .getAmenitiesWithIcon */ .YG)(amenitiesWithCategory, {
        width: 26,
        height: 26
    });
    const firstRoomDetailData = rooms.length > 0 ? rooms[0] : null;
    const { sizeValue , description , roomName  } = firstRoomDetailData || {};
    const images = rooms[0]?.images;
    const isAmenitiesExist = amenitiesWithIcons && amenitiesWithIcons?.length > 0;
    const isDetailsEmpty = !sizeValue && !description && (!amenitiesWithIcons || amenitiesWithIcons?.length < 1);
    const toggleDetailModal = ()=>{
        setIsDetailModalOpen((prev)=>!prev);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .MobileRoomHead */ .rk, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomNameTitle */ .eX, {
                    children: roomName || ""
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardContainer */ .AA, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PhotoGallery__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        images: images,
                        isModalOpened: isModalGalleryOpen,
                        setIsModalOpened: setIsModalGalleryOpen,
                        isOptionsType: true
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .MobileCardBody */ .M3, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardMainInformation */ .FU, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .MobileRoomHead */ .rk, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomNameTitle */ .eX, {
                                                children: "О номере"
                                            }),
                                            !isDetailsEmpty && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .MobileRoomBtn */ .nk, {
                                                onClick: toggleDetailModal,
                                                children: "Подробнее"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomDetailsBlock */ .wc, {
                                        children: sizeValue !== undefined && Number(sizeValue) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardTextValue */ .J2, {
                                            children: [
                                                "Площадь: ",
                                                sizeValue,
                                                " кв.м."
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardRoomInformation */ .ds, {
                                children: [
                                    isAmenitiesExist && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomAmenitiesBlock */ .nz, {
                                        children: amenitiesWithIcons?.map(({ amenities , category  })=>{
                                            return amenities.map(({ icon , name , code  }, index)=>{
                                                if (index > 0) return null;
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomAmenitiesItemBlock */ .KB, {
                                                    children: [
                                                        icon,
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardTextValue */ .J2, {
                                                            children: name
                                                        })
                                                    ]
                                                }, `${code}-${index}`);
                                            });
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomNameTitle */ .eX, {
                                        children: "Варианты размещения"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MobileRoomTariffs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        ratePlans,
                                        rooms,
                                        services
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MobileDetailModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                onClose: toggleDetailModal,
                isOpen: isDetailModalOpen,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomDetailsBlock */ .wc, {
                        children: [
                            sizeValue !== undefined && Number(sizeValue) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardTextValue */ .J2, {
                                children: [
                                    "Площадь: ",
                                    sizeValue,
                                    " кв.м."
                                ]
                            }),
                            description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardTextValue */ .J2, {
                                children: description
                            })
                        ]
                    }),
                    isAmenitiesExist && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .MobileModalAmenities */ .Xk, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .MobileModalAmenitiesTitle */ .td, {
                                children: "Удобства"
                            }),
                            amenitiesWithIcons?.map((amenities, i)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .AmenityRoomMobileContainer */ .Kr, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .AmenityCategoryTitle */ .FI, {
                                            children: amenities.category
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .AmenityBlock */ .sY, {
                                            children: amenities.amenities.map((amenity, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .AmenityItemBlock */ .Co, {
                                                    children: [
                                                        amenity.icon,
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .AmenityItemName */ .WP, {
                                                            children: amenity.name
                                                        })
                                                    ]
                                                }, `${amenity.name}-${i}`))
                                        })
                                    ]
                                }, amenities.category);
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileRoomCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13198:
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96202);
/* harmony import */ var _modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18618);
/* harmony import */ var _modules_core_hooks_useOverflowControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95517);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_4__]);
_modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const AmenitiesModal = ({ isOpen , onClose , children  })=>{
    (0,_modules_core_hooks_useOverflowControl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(isOpen);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        className: `${_modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_4__/* .franklinGothicMedium.variable */ .J7.variable} 
      ${_modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_4__/* .franklinGothicBook.variable */ .ut.variable}`,
        disableEnforceFocus: true,
        disableAutoFocus: true,
        open: isOpen,
        "aria-labelledby": "amenities-modal",
        "aria-describedby": "amenities-modal-description",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .ModalContent */ .hz, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .ModalHeaderBlock */ .Z9, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .ModalHeaderTitle */ .Cx, {
                            children: "Удобства в номере"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .CloseBtn */ .dg, {
                            onClick: onClose
                        })
                    ]
                }),
                children
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AmenitiesModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 96202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cx": () => (/* binding */ ModalHeaderTitle),
/* harmony export */   "Z9": () => (/* binding */ ModalHeaderBlock),
/* harmony export */   "dg": () => (/* binding */ CloseBtn),
/* harmony export */   "hz": () => (/* binding */ ModalContent)
/* harmony export */ });
/* unused harmony export ModalTitle */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_components_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14649);


const ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e1eabad8-0"
})`
  position: relative;
  background: #ffffff;
  border-radius: 32px;
  padding: 32px 32px 32px 32px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 884px;
  width: calc(100% - 20px);
  max-height: 80%;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    margin: 20px 0 20px 0;
  }

  ${({ theme  })=>theme.media.down("xs")`
    width: 100vw;
    height: 100%;
    border-radius: 0px;
  `}
`;
const ModalTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-e1eabad8-1"
})`
  font-size: 24px;
  line-height: 27px;
  color: #222121;
  text-align: center;
`;
const CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_modules_core_components_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-e1eabad8-2"
})`
  color: #1d7abd;
  cursor: pointer;
  background: #fff;
  z-index: 1;
`;
const ModalHeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-e1eabad8-3"
})`
  line-height: 32px;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    letter-spacing: 0.15px;
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle1};
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down("md")`
    `};
  `}
`;
const ModalHeaderBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e1eabad8-4"
})`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;


/***/ }),

/***/ 9393:
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
/* harmony import */ var _modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18618);
/* harmony import */ var _modules_core_hooks_useOverflowControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95517);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4753);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_3__]);
_modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const MobileDetailModal = ({ isOpen , onClose , children  })=>{
    (0,_modules_core_hooks_useOverflowControl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(isOpen);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        className: `${_modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_3__/* .franklinGothicMedium.variable */ .J7.variable} 
      ${_modules_core_containers_AppLayout__WEBPACK_IMPORTED_MODULE_3__/* .franklinGothicBook.variable */ .ut.variable}`,
        disableEnforceFocus: true,
        disableAutoFocus: true,
        open: isOpen,
        "aria-labelledby": "amenities-modal",
        "aria-describedby": "amenities-modal-description",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_5__/* .ModalContent */ .hz, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_5__/* .ModalHeaderBlock */ .Z9, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .CloseBtn */ .dg, {
                            onClick: onClose,
                            fill: "#222121"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .ModalHeaderTitle */ .Cx, {
                            children: "О номере"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .BodyContent */ .OV, {
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileDetailModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cx": () => (/* binding */ ModalHeaderTitle),
/* harmony export */   "OV": () => (/* binding */ BodyContent),
/* harmony export */   "Z9": () => (/* binding */ ModalHeaderBlock),
/* harmony export */   "dg": () => (/* binding */ CloseBtn),
/* harmony export */   "hz": () => (/* binding */ ModalContent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_components_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14649);


const ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-c0eda2ed-0"
})`
  position: relative;
  background: #ffffff;
  border-radius: 10px 10px 0 0;
  padding: 70px 16px 16px 16px;
  top: 5%;
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  &::-webkit-scrollbar-track {
    margin: 20px 0;
  }
`;
const CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_modules_core_components_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-c0eda2ed-1"
})`
  background: #fff;
  z-index: 1;
`;
const ModalHeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-c0eda2ed-2"
})`
  margin: 0 auto;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.default};
    font-size: 17px;
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
  `}
`;
const ModalHeaderBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-c0eda2ed-3"
})`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #8daec1;
  padding: 16px;
`;
const BodyContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-c0eda2ed-4"
})`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;


/***/ }),

/***/ 37552:
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51717);
/* harmony import */ var _RoomInformationContent_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68073);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53015);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72184);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_core_components_icons_BreakfastIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97304);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57441);
/* harmony import */ var _modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82741);
/* harmony import */ var _modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90756);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47644);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(65392);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _modules_core_components_icons_TransportIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17919);
/* harmony import */ var _modules_core_components_icons_RandomServiceIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(43735);
/* harmony import */ var _modules_core_helpers_serviceHandler__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(34540);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper_modules__WEBPACK_IMPORTED_MODULE_5__]);
([_styles__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper_modules__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












// Import Swiper styles





const MobileRoomTariffs = ({ rooms , ratePlans , services  })=>{
    const dispatch = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const filterData = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAppSelector */ .C)(_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_9__/* .selectFilterValues */ .N$);
    return rooms.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StyledSwiper */ .W, {
        pagination: {
            clickable: true
        },
        modules: [
            swiper_modules__WEBPACK_IMPORTED_MODULE_5__.Pagination
        ],
        children: rooms.map((room, index)=>{
            const { roomId , ratePlan , cancellationPolicy , price , includedServices , fullPlacementsName  } = room.placementExtraData;
            const currentRoomServices = includedServices?.map(({ id  }, index)=>services.find((service)=>String(service.id) === String(id)));
            const { mealService , transportService , anotherServices  } = (0,_modules_core_helpers_serviceHandler__WEBPACK_IMPORTED_MODULE_16__/* .serviceHandler */ .K)(currentRoomServices);
            const isFreeCancellation = cancellationPolicy.freeCancellationPossible;
            const penaltyAmount = cancellationPolicy.penaltyAmount;
            const isCancellationDeadline = cancellationPolicy.freeCancellationDeadlineLocal;
            const onBookingButtonHandler = ()=>{
                dispatch((0,_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_9__/* .setFilterValue */ .hL)({
                    roomId: roomId,
                    ratePlanId: ratePlan.id
                }));
                const { queriesString  } = (0,_modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_10__/* .queryHandler */ .F)({
                    ...filterData,
                    roomId: roomId,
                    ratePlanId: ratePlan.id
                }, _modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_10__/* .QueryLocation.form */ .v.form);
                router.push(`/booking/placement/${router.query.id}?${queriesString}`);
            };
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .CardContainer */ ._L, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .InfoTitle */ .Xw, {
                            children: fullPlacementsName
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .ServiceContainer */ .hi, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_RoomInformationContent_styles__WEBPACK_IMPORTED_MODULE_3__/* .RoomServiceBlock */ .Ef, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_BreakfastIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            width: 24,
                                            height: 24,
                                            fill: mealService ? "#1D7ABD" : "#222121"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RoomInformationContent_styles__WEBPACK_IMPORTED_MODULE_3__/* .RoomCardTextValue */ .J2, {
                                            children: mealService ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RoomInformationContent_styles__WEBPACK_IMPORTED_MODULE_3__/* .RoomServiceName */ .dH, {
                                                        highlighted: true,
                                                        children: "Питание:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RoomInformationContent_styles__WEBPACK_IMPORTED_MODULE_3__/* .RoomServiceName */ .dH, {
                                                        children: ` ${mealService.name}`
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RoomInformationContent_styles__WEBPACK_IMPORTED_MODULE_3__/* .RoomServiceName */ .dH, {
                                                bold: true,
                                                children: `Без завтрака`
                                            })
                                        })
                                    ]
                                }),
                                transportService && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_RoomInformationContent_styles__WEBPACK_IMPORTED_MODULE_3__/* .RoomServiceBlock */ .Ef, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_TransportIcon__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            width: 24,
                                            height: 24,
                                            fill: transportService ? "#1D7ABD" : "#222121"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_RoomInformationContent_styles__WEBPACK_IMPORTED_MODULE_3__/* .RoomCardTextValue */ .J2, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RoomInformationContent_styles__WEBPACK_IMPORTED_MODULE_3__/* .RoomServiceName */ .dH, {
                                                    highlighted: !!transportService,
                                                    children: "Транспорт:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RoomInformationContent_styles__WEBPACK_IMPORTED_MODULE_3__/* .RoomServiceValue */ .TG, {
                                                    children: transportService?.name
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                anotherServices?.map((service)=>{
                                    return service && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_RoomInformationContent_styles__WEBPACK_IMPORTED_MODULE_3__/* .RoomServiceBlock */ .Ef, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_RandomServiceIcon__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                width: 24,
                                                height: 24,
                                                fill: "#1D7ABD"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RoomInformationContent_styles__WEBPACK_IMPORTED_MODULE_3__/* .RoomCardTextValue */ .J2, {
                                                children: service.name === service.description ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RoomInformationContent_styles__WEBPACK_IMPORTED_MODULE_3__/* .RoomServiceName */ .dH, {
                                                    highlighted: true,
                                                    children: service.name
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RoomInformationContent_styles__WEBPACK_IMPORTED_MODULE_3__/* .RoomServiceName */ .dH, {
                                                    highlighted: true,
                                                    children: `${service.name}`
                                                })
                                            })
                                        ]
                                    }, service.id);
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .Price */ .tA, {
                            children: [
                                price.price,
                                " ₽"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RoomInformationContent_styles__WEBPACK_IMPORTED_MODULE_3__/* .BookingCardRoomButton */ .Hg, {
                            onClick: onBookingButtonHandler,
                            children: "Бронировать"
                        }),
                        isFreeCancellation ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .CancellationText */ .Pm, {
                            children: isCancellationDeadline ? `Бесплатная отмена до ${dayjs__WEBPACK_IMPORTED_MODULE_6___default()(isCancellationDeadline).format("DD.MM.YYYY HH:mm")}
                  по местному времени отеля` : "Отмена бесплатная"
                        }) : penaltyAmount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .CancellationText */ .Pm, {
                            children: [
                                "Отмена платная — ",
                                penaltyAmount,
                                " ₽"
                            ]
                        })
                    ]
                })
            }, `${index}`);
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileRoomTariffs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51717:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pm": () => (/* binding */ CancellationText),
/* harmony export */   "W": () => (/* binding */ StyledSwiper),
/* harmony export */   "Xw": () => (/* binding */ InfoTitle),
/* harmony export */   "_L": () => (/* binding */ CardContainer),
/* harmony export */   "hi": () => (/* binding */ ServiceContainer),
/* harmony export */   "tA": () => (/* binding */ Price)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__]);
swiper_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const StyledSwiper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper).withConfig({
    componentId: "sc-98352217-0"
})`
  padding-bottom: 40px;
  max-width: 100%;
  width: 100%;
  .swiper-pagination-bullets {
    position: absolute;
    bottom: 10px;
  }
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #1d7abd;
  }
`;
const CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-98352217-1"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border: 1px solid #c6e1f3;
  border-radius: 16px;
`;
const InfoTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-98352217-2"
})`
  line-height: 22px;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
  `}
`;
const Price = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
    componentId: "sc-98352217-3"
})`
  line-height: 28px;
  margin-top: auto;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
  `}
`;
const CancellationText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-98352217-4"
})`
  line-height: 18px;
  text-align: center;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body3};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicBook};
  `}
`;
const ServiceContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-98352217-5"
})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68073);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57441);
/* harmony import */ var _modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82741);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90756);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_core_components_icons_BreakfastIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97304);
/* harmony import */ var _modules_core_components_icons_TransportIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17919);
/* harmony import */ var _modules_core_components_icons_RandomServiceIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43735);
/* harmony import */ var _modules_core_helpers_serviceHandler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34540);












const RoomInformationContent = ({ roomId , ratePlan , cancellationPolicy , price , currentRoomServices , fullPlacementsName  })=>{
    const filterData = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)(_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_4__/* .selectFilterValues */ .N$);
    const dispatch = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const onBookingButtonHandler = ()=>{
        dispatch((0,_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_4__/* .setFilterValue */ .hL)({
            roomId: roomId,
            ratePlanId: ratePlan?.id
        }));
        const { queriesString  } = (0,_modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_6__/* .queryHandler */ .F)({
            ...filterData,
            roomId: roomId,
            ratePlanId: ratePlan?.id
        }, _modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_6__/* .QueryLocation.form */ .v.form);
        void router.push(`/booking/placement/${router.query.id}?${queriesString}`);
    };
    const { mealService , transportService , anotherServices  } = (0,_modules_core_helpers_serviceHandler__WEBPACK_IMPORTED_MODULE_11__/* .serviceHandler */ .K)(currentRoomServices);
    const isFreeCancellation = cancellationPolicy.freeCancellationPossible;
    const penaltyAmount = cancellationPolicy.penaltyAmount;
    const isCancellationDeadline = cancellationPolicy.freeCancellationDeadlineLocal;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomInformationWrapper */ .qr, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomInformationContainer */ .ko, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardDetailBlock */ ._d, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardDetailInformationBlock */ .NG, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomRateTitle */ .yq, {
                                children: fullPlacementsName || ""
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomServiceBlock */ .Ef, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_BreakfastIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        width: 24,
                                        height: 24,
                                        fill: mealService ? "#1D7ABD" : "#222121"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardTextValue */ .J2, {
                                        children: mealService ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomServiceName */ .dH, {
                                                    highlighted: true,
                                                    children: "Питание:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomServiceName */ .dH, {
                                                    children: ` ${mealService.name}`
                                                })
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomServiceName */ .dH, {
                                            bold: true,
                                            children: "Без завтрака"
                                        })
                                    })
                                ]
                            }),
                            transportService && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomServiceBlock */ .Ef, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_TransportIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        width: 24,
                                        height: 24,
                                        fill: transportService ? "#1D7ABD" : "#222121"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardTextValue */ .J2, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomServiceName */ .dH, {
                                                highlighted: true,
                                                children: "Транспорт:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomServiceName */ .dH, {
                                                children: ` ${transportService.name}`
                                            })
                                        ]
                                    })
                                ]
                            }),
                            anotherServices?.map((service)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomServiceBlock */ .Ef, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_RandomServiceIcon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            width: 24,
                                            height: 24,
                                            fill: "#1D7ABD"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardTextValue */ .J2, {
                                            children: service.name === service.description ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomServiceName */ .dH, {
                                                highlighted: true,
                                                children: `${service.name}`
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomServiceName */ .dH, {
                                                highlighted: true,
                                                children: `${service.name}`
                                            })
                                        })
                                    ]
                                }, service.id);
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardBookingBlock */ .tq, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomPriceAndButtonContainer */ .U5, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardPrice */ .UP, {
                                children: [
                                    price.price,
                                    " ₽"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .BookingCardRoomButton */ .Hg, {
                                dark: true,
                                onClick: onBookingButtonHandler,
                                children: "Бронировать"
                            })
                        ]
                    }),
                    isFreeCancellation ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomBookingTip */ .H$, {
                        children: isCancellationDeadline ? `Бесплатная отмена до ${dayjs__WEBPACK_IMPORTED_MODULE_7___default()(isCancellationDeadline).format("DD.MM.YYYY HH:mm")}
                  по местному времени отеля` : "Отмена бесплатная"
                    }) : penaltyAmount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomBookingTip */ .H$, {
                        children: [
                            "Отмена платная — ",
                            penaltyAmount,
                            " ₽"
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomInformationContent);


/***/ }),

/***/ 68073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ef": () => (/* binding */ RoomServiceBlock),
/* harmony export */   "H$": () => (/* binding */ RoomBookingTip),
/* harmony export */   "Hg": () => (/* binding */ BookingCardRoomButton),
/* harmony export */   "J2": () => (/* binding */ RoomCardTextValue),
/* harmony export */   "NG": () => (/* binding */ RoomCardDetailInformationBlock),
/* harmony export */   "TG": () => (/* binding */ RoomServiceValue),
/* harmony export */   "U5": () => (/* binding */ RoomPriceAndButtonContainer),
/* harmony export */   "UP": () => (/* binding */ RoomCardPrice),
/* harmony export */   "_d": () => (/* binding */ RoomCardDetailBlock),
/* harmony export */   "dH": () => (/* binding */ RoomServiceName),
/* harmony export */   "ko": () => (/* binding */ RoomInformationContainer),
/* harmony export */   "qr": () => (/* binding */ RoomInformationWrapper),
/* harmony export */   "tq": () => (/* binding */ RoomCardBookingBlock),
/* harmony export */   "yq": () => (/* binding */ RoomRateTitle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42143);


const RoomCardTextValue = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-9b4e9fce-0"
})`
  align-items: center;
  display: inline-block;

  ${({ theme , highlighted  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${highlighted ? theme.colors.primary : theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-family: ${theme.font.family.gothicBook};
    font-weight: ${theme.font.weight.regular};
    &:first-letter {
      text-transform: capitalize;
    }
    ${theme.media.down("md")`
    `};
  `}
`;
const RoomServiceName = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-9b4e9fce-1"
})`
  ${({ theme , highlighted , bold  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${highlighted ? theme.colors.primary : theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-family: ${highlighted || bold ? theme.font.family.gothicMedium : theme.font.family.gothicBook};
    font-weight: ${theme.font.weight.regular};

    &:first-letter {
      text-transform: capitalize;
    }
    ${theme.media.down("md")`
    `};
  `}
`;
const RoomServiceValue = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-9b4e9fce-2"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-family: ${theme.font.family.gothicBook};
    font-weight: ${theme.font.weight.regular};
    &:first-letter {
      text-transform: capitalize;
    }
    ${theme.media.down("md")`
    `};
  `}
`;
const RoomCardDetailBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-9b4e9fce-3"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 0;
    ${theme.media.down("md")`
      padding: 16px 0 0;
    `};
  `}
`;
const RoomCardDetailInformationBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-9b4e9fce-4"
})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const RoomRateTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-9b4e9fce-5"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    white-space: normal;
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-family: ${theme.font.family.gothicMedium};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down("md")`
    `};
  `}
`;
const RoomInformationContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-9b4e9fce-6"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    ${theme.media.down("md")`
    `};
  `}
`;
const RoomCardBookingBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-9b4e9fce-7"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px 0;
    align-items: center;
    ${theme.media.down("md")`
      align-items: flex-end;
      padding: 0 0 16px;
    `};
  `}
`;
const RoomPriceAndButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-9b4e9fce-8"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    ${theme.media.down("md")`
    `};
  `}
`;
const RoomCardPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-9b4e9fce-9"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.subtitle2};
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
    white-space: nowrap;
  `};
`;
const BookingCardRoomButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-9b4e9fce-10"
})`
  display: block;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  cursor: pointer;
  height: 40px;
  gap: 10px;
  align-self: flex-end;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.size.subtitle2};
    font-family: ${theme.font.family.gothicDemi};
  `};
  ${({ theme  })=>theme.media.down("sm")`
    width: 100%;
  `}
`;
const RoomInformationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-9b4e9fce-11"
})`
  border-top: 2px solid #c6e1f3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  ${({ theme  })=>theme.media.down("md")`
    flex-direction: column;
    gap: 16px;
  `}
`;
const RoomBookingTip = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
    componentId: "sc-9b4e9fce-12"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: #4f4f4f;
    font-size: ${theme.font.size.body3};
    font-family: ${theme.font.family.gothicBook};
    font-weight: ${theme.font.weight.regular};
    text-align: justify;
    align-self: flex-end;
  `};
`;
const RoomServiceBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-9b4e9fce-13"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    ${theme.media.down("md")`
    `};
  `}
`;


/***/ }),

/***/ 52432:
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51256);
/* harmony import */ var _modules_placement_components_Amenities_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75399);
/* harmony import */ var _modules_placement_components_RoomCard_components_RoomInformationContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51289);
/* harmony import */ var _modules_core_components_PhotoGallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84409);
/* harmony import */ var _modules_placement_components_RoomCard_components_AmenitiesModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13198);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_placement_components_RoomCard_components_AmenitiesModal__WEBPACK_IMPORTED_MODULE_6__]);
_modules_placement_components_RoomCard_components_AmenitiesModal__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const RoomCard = ({ rooms , amenitiesWithCategory , ratePlans , services  })=>{
    const [isModalGalleryOpen, setIsModalGalleryOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isAllAmenitiesModalOpen, setIsAllAmenitiesModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const amenitiesWithIcons = (0,_modules_placement_components_Amenities_constants__WEBPACK_IMPORTED_MODULE_3__/* .getAmenitiesWithIcon */ .YG)(amenitiesWithCategory, {
        width: 28,
        height: 28
    });
    const firstRoomDetailData = rooms.length > 0 ? rooms[0] : null;
    const { sizeValue , description , roomName  } = firstRoomDetailData || {};
    const images = rooms[0]?.images;
    const toggleAmenitiesModal = ()=>{
        setIsAllAmenitiesModalOpen((prev)=>!prev);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardContainer */ .AA, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardMainInformation */ .FU, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PhotoGallery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                images: images,
                                isModalOpened: isModalGalleryOpen,
                                setIsModalOpened: setIsModalGalleryOpen,
                                isOptionsType: true
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomDetailsBlock */ .wc, {
                                children: [
                                    sizeValue !== undefined && Number(sizeValue) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardTextValue */ .J2, {
                                        children: [
                                            "Площадь: ",
                                            sizeValue,
                                            " кв.м"
                                        ]
                                    }),
                                    description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardTextValue */ .J2, {
                                        children: description
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardRoomInformation */ .ds, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomHeaderBlock */ .$z, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomNameTitle */ .eX, {
                                        children: roomName || ""
                                    }),
                                    amenitiesWithIcons && amenitiesWithIcons?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomAllServicesButton */ .dq, {
                                        onClick: toggleAmenitiesModal,
                                        children: "Все удобства"
                                    })
                                ]
                            }),
                            amenitiesWithIcons && amenitiesWithIcons?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomAmenitiesBlock */ .nz, {
                                children: amenitiesWithIcons?.map(({ amenities , category  })=>{
                                    return amenities.map(({ icon , name , code  }, index)=>{
                                        if (index > 0) return null;
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomAmenitiesItemBlock */ .KB, {
                                            children: [
                                                icon,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardTextValue */ .J2, {
                                                    children: name
                                                })
                                            ]
                                        }, `${code}-${index}`);
                                    });
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomCardContentBlock */ .j9, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .RoomInformationContainer */ .ko, {
                                    children: rooms.length > 0 && rooms.map((room, index)=>{
                                        const ratePlan = ratePlans && ratePlans.find((el)=>el.id === room.placementExtraData.ratePlan.id);
                                        const currentRoomServices = room.placementExtraData.includedServices?.map(({ id  }, index)=>services.find((service)=>String(service.id) === String(id))).filter((service)=>service !== undefined);
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_components_RoomCard_components_RoomInformationContent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            ratePlan: ratePlan,
                                            roomId: room.placementExtraData.roomId,
                                            currentRoomServices: currentRoomServices,
                                            cancellationPolicy: room.placementExtraData.cancellationPolicy,
                                            price: room.placementExtraData.price,
                                            fullPlacementsName: room.placementExtraData.fullPlacementsName
                                        }, `${index}`);
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            isAllAmenitiesModalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_components_RoomCard_components_AmenitiesModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                onClose: toggleAmenitiesModal,
                isOpen: isAllAmenitiesModalOpen,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .AmenityRoomContainer */ .tk, {
                    children: amenitiesWithIcons?.map((amenities, i)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .AmenityCategoryBlock */ .oz, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .AmenityCategoryTitleContainer */ .EN, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .AmenityCategoryTitle */ .FI, {
                                        children: amenities.category
                                    })
                                }),
                                amenities.amenities.map((amenity, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .AmenityItemBlock */ .Co, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    minWidth: "min-content"
                                                },
                                                children: amenity.icon
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .AmenityItemName */ .WP, {
                                                children: amenity.name
                                            })
                                        ]
                                    }, `${amenity.name}-${i}`))
                            ]
                        }, `${amenities.category}-${i}`);
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$z": () => (/* binding */ RoomHeaderBlock),
/* harmony export */   "AA": () => (/* binding */ RoomCardContainer),
/* harmony export */   "Co": () => (/* binding */ AmenityItemBlock),
/* harmony export */   "EN": () => (/* binding */ AmenityCategoryTitleContainer),
/* harmony export */   "FI": () => (/* binding */ AmenityCategoryTitle),
/* harmony export */   "FU": () => (/* binding */ RoomCardMainInformation),
/* harmony export */   "J2": () => (/* binding */ RoomCardTextValue),
/* harmony export */   "KB": () => (/* binding */ RoomAmenitiesItemBlock),
/* harmony export */   "Kr": () => (/* binding */ AmenityRoomMobileContainer),
/* harmony export */   "M3": () => (/* binding */ MobileCardBody),
/* harmony export */   "WP": () => (/* binding */ AmenityItemName),
/* harmony export */   "Xk": () => (/* binding */ MobileModalAmenities),
/* harmony export */   "dq": () => (/* binding */ RoomAllServicesButton),
/* harmony export */   "ds": () => (/* binding */ RoomCardRoomInformation),
/* harmony export */   "eX": () => (/* binding */ RoomNameTitle),
/* harmony export */   "j9": () => (/* binding */ RoomCardContentBlock),
/* harmony export */   "ko": () => (/* binding */ RoomInformationContainer),
/* harmony export */   "nk": () => (/* binding */ MobileRoomBtn),
/* harmony export */   "nz": () => (/* binding */ RoomAmenitiesBlock),
/* harmony export */   "oz": () => (/* binding */ AmenityCategoryBlock),
/* harmony export */   "rk": () => (/* binding */ MobileRoomHead),
/* harmony export */   "sY": () => (/* binding */ AmenityBlock),
/* harmony export */   "td": () => (/* binding */ MobileModalAmenitiesTitle),
/* harmony export */   "tk": () => (/* binding */ AmenityRoomContainer),
/* harmony export */   "wc": () => (/* binding */ RoomDetailsBlock)
/* harmony export */ });
/* unused harmony export AmenityRoomBlock */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const RoomCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e0e7fa33-0"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    border-radius: 32px;
    border: 2px solid ${theme.colors.secondary};
    display: flex;
    padding: 24px;
    gap: 24px;
    flex-direction: row;
    ${theme.media.down("sm")`
      flex-direction: column;
      padding: 0px;
      gap: 16px;
    `};
  `}
`;
const RoomCardMainInformation = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e0e7fa33-1"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
    ${theme.media.down("md")`
    `};
  `}
`;
const RoomCardRoomInformation = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e0e7fa33-2"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
    ${theme.media.down("md")`
    `};
  `}
`;
const RoomCardTextValue = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-e0e7fa33-3"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    white-space: pre-line;
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-family: ${theme.font.family.gothicBook};
    font-weight: ${theme.font.weight.regular};
    &:first-letter {
      text-transform: capitalize;
    }
    ${theme.media.down("md")`
    `};
  `}
`;
const RoomDetailsBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e0e7fa33-4"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    ${theme.media.down("md")`
    `};
  `}
`;
const RoomNameTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-e0e7fa33-5"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    white-space: normal;
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle1};
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down("sm")`
      font-size: ${theme.font.size.subtitle2};
      margin: 0;
  `};
  `}
`;
const RoomHeaderBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e0e7fa33-6"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 24px;
    align-items: flex-start;
    ${theme.media.down("md")`
    `};
  `}
`;
const RoomAllServicesButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
    componentId: "sc-e0e7fa33-7"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    letter-spacing: 0.15px;
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.subtitle1};
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    ${theme.media.down("md")`
    `};
  `}
`;
const RoomAmenitiesBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e0e7fa33-8"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px 24px;
    width: 100%;
    ${theme.media.down("md")`
    `};
  `}
`;
const RoomAmenitiesItemBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e0e7fa33-9"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    ${theme.media.down("md")`
    `};
  `}
`;
const RoomCardContentBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e0e7fa33-10"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    gap: 24px;
    justify-content: space-between;
    width: 100%;
    ${theme.media.down("sm")`
      flex-direction: column;
    `};
  `}
`;
const RoomInformationContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e0e7fa33-11"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    ${theme.media.down("md")`
    `};
  `}
`;
const AmenityRoomBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e0e7fa33-12"
})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
`;
const AmenityRoomMobileContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e0e7fa33-13"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 24px;
    ${theme.media.down("sm")`
      padding-bottom: 0;
    `};
  `}
`;
const AmenityRoomContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
    componentId: "sc-e0e7fa33-14"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    list-style: none;
    column-gap: 24px;
    padding: 0;
    column-count: 3;
    ${theme.media.down("sm")`
      column-count: 2;
    `};
  `}
`;
const AmenityCategoryBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
    componentId: "sc-e0e7fa33-15"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  break-inside: avoid;
  padding-bottom: 16px;
`;
const AmenityBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e0e7fa33-16"
})`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;
const AmenityItemBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e0e7fa33-17"
})`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const AmenityItemName = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
    componentId: "sc-e0e7fa33-18"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.black};
    font-size: ${theme.font.size.body2};
    font-family: ${theme.font.family.gothicBook};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down("md")`
    `};
  `}
  &::first-letter {
    text-transform: capitalize;
  }
`;
const AmenityCategoryTitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e0e7fa33-19"
})`
  display: flex;
  align-items: flex-end;
  height: 40px;
`;
const AmenityCategoryTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-e0e7fa33-20"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body1};
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down("sm")`
      font-size: ${theme.font.size.body2};
      font-family: ${theme.font.family.gothicMedium};
    `};
  `}
`;
const MobileRoomHead = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e0e7fa33-21"
})`
  display: flex;
  justify-content: space-between;
  margin-bottom: -10px;
  gap: 3px;
  align-items: end;
`;
const MobileRoomBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-e0e7fa33-22"
})`
  margin: 0;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    letter-spacing: 0.15px;
    white-space: nowrap;
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.subtitle4};
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
  `}
`;
const MobileCardBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e0e7fa33-23"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    padding: 0 16px;
    gap: 16px;
    flex-direction: column;
  `}
`;
const MobileModalAmenities = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-e0e7fa33-24"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `}
`;
const MobileModalAmenitiesTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-e0e7fa33-25"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    line-height: 28px;
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle2};
    font-family: ${theme.font.family.gothicDemi};
    font-weight: ${theme.font.weight.regular};
  `}
`;


/***/ }),

/***/ 73031:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ BookingDetail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_placement_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27982);
/* harmony import */ var _modules_core_components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79417);
/* harmony import */ var _modules_placement_components_NameRatingTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14281);
/* harmony import */ var _modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57434);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57441);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90756);
/* harmony import */ var _modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82741);
/* harmony import */ var _modules_core_hooks_useFilterDataFromParams__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16812);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_core_hooks_useMatchMedia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40152);
/* harmony import */ var _modules_core_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80514);
/* harmony import */ var _components_PlacementFilter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29428);
/* harmony import */ var _modules_core_components_PhotoGallery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(84409);
/* harmony import */ var _modules_home_components_Filters__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(74186);
/* harmony import */ var _components_Amenities_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(61766);
/* harmony import */ var _modules_core_components_icons_BreakfastIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(97304);
/* harmony import */ var _components_Amenities_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(75399);
/* harmony import */ var _components_RoomCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(52432);
/* harmony import */ var _components_RoomCard_MobileRoomCard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(65369);
/* harmony import */ var _modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(89882);
/* harmony import */ var _modules_core_helpers_serviceHandler__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(34540);
/* harmony import */ var _modules_core_components_icons_TransportIcon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(17919);
/* harmony import */ var _modules_core_components_icons_RandomServiceIcon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(43735);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_PlacementFilter__WEBPACK_IMPORTED_MODULE_14__, _modules_home_components_Filters__WEBPACK_IMPORTED_MODULE_16__, _components_RoomCard__WEBPACK_IMPORTED_MODULE_20__, _components_RoomCard_MobileRoomCard__WEBPACK_IMPORTED_MODULE_21__]);
([_components_PlacementFilter__WEBPACK_IMPORTED_MODULE_14__, _modules_home_components_Filters__WEBPACK_IMPORTED_MODULE_16__, _components_RoomCard__WEBPACK_IMPORTED_MODULE_20__, _components_RoomCard_MobileRoomCard__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


























const BookingDetail = ({ data  })=>{
    const [isModalGalleryOpen, setIsModalGalleryOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isScreenSm = (0,_modules_core_hooks_useMatchMedia__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(`(max-width: ${_modules_core_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_13__/* .breakpoints.sm */ .AV.sm}px)`);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const sectionRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const [isMapOpened, setIsMapOpened] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { name , rating , address , images , rooms , services , ratePlans , description , amenities  } = data;
    // rooms?.keys().next().value - get the key of the first rooms array, [0] - get the first room from the array
    const firstRoomDetails = rooms?.get(rooms?.keys().next().value)?.[0];
    const filterData = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppSelector */ .C)(_modules_core_api_filterSlice__WEBPACK_IMPORTED_MODULE_9__/* .selectFilterValues */ .N$);
    (0,_modules_core_hooks_useFilterDataFromParams__WEBPACK_IMPORTED_MODULE_10__/* .useFilterDataFromQuery */ .x)();
    const { queriesString: bookingDetailParams  } = (0,_modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_8__/* .queryHandler */ .F)(filterData, _modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_8__/* .QueryLocation.detail */ .v.detail);
    const { queriesString: bookingListParams  } = (0,_modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_8__/* .queryHandler */ .F)(filterData, _modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_8__/* .QueryLocation.list */ .v.list);
    const filterSubmitHandler = (paramString)=>{
        window.open(`/placement?${paramString}`, "_blank");
    };
    const handleButtonClick = ()=>{
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    const { mealService , transportService , anotherServices  } = (0,_modules_core_helpers_serviceHandler__WEBPACK_IMPORTED_MODULE_24__/* .serviceHandler */ .K)(services);
    const breadcrumbsItems = [
        {
            url: `/`,
            label: "Главная"
        },
        {
            url: `/placement?${bookingListParams}`,
            label: "Результаты поиска"
        },
        {
            url: `/placement/${router.query.id}`,
            label: name
        }
    ];
    const numberOfPeople = (data.filterDto.numOfAdult || 0) + (data?.filterDto?.childAges?.length || 0);
    const advantageBlock = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .AdvantageBlock */ .o1, {
            children: [
                mealService && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .AdvantageText */ .oF, {
                    children: "Преимущества предложения"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Amenities_styles__WEBPACK_IMPORTED_MODULE_17__/* .AmenityItem */ .Yo, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_BreakfastIcon__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                            width: 32,
                            height: 32,
                            fill: "white"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Amenities_styles__WEBPACK_IMPORTED_MODULE_17__/* .AmenityTxt */ .m5, {
                            style: {
                                color: "white"
                            },
                            children: `${mealService ? "Завтрак" : "Без завтрака"}`
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .BookingButton */ .qm, {
                    dark: true,
                    onClick: handleButtonClick,
                    children: "Бронировать"
                })
            ]
        });
    const isAmenitiesAndServicesBlockShown = Boolean(amenities.length > 0 || mealService || transportService || anotherServices && anotherServices?.length > 0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .PageContainer */ ._z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .BreadcrumbsBlock */ .xJ, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    paths: breadcrumbsItems
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .DetailHeadSection */ .IW, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .FilterSection */ .Oy, {
                        children: !isScreenSm ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .FilterBlock */ .xL, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PlacementFilter__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                amenitiesData: [],
                                handler: filterSubmitHandler,
                                locationForParamsString: _modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_8__/* .QueryLocation.list */ .v.list,
                                isWithoutFilterParams: true,
                                isBookingDetail: true,
                                mapLink: `/placement/${router.query.id}/map?${bookingDetailParams}`,
                                isLink: true,
                                isMapOpened: isMapOpened,
                                handleMap: ()=>setIsMapOpened((prev)=>!prev)
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_home_components_Filters__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            handler: filterSubmitHandler,
                            locationForParamsString: _modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_8__/* .QueryLocation.home */ .v.home
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .GallerySection */ .o0, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .BookingHeaderContainer */ .$L, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_components_NameRatingTitle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        name: name,
                                        rating: rating
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_styles__WEBPACK_IMPORTED_MODULE_2__/* .BookingAddress */ .u1, {
                                        children: address
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PhotoGallery__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                images: images,
                                isModalOpened: isModalGalleryOpen,
                                setIsModalOpened: setIsModalGalleryOpen
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .FeaturesContainer */ .Ok, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .FeaturesBlock */ .UN, {
                        children: [
                            isAmenitiesAndServicesBlockShown && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .BlockContainer */ .VW, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .BlockTitle */ .bi, {
                                        children: "Удобства и услуги"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .AmenitiesList */ .J7, {
                                        children: [
                                            amenities.map((amenity, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Amenities_styles__WEBPACK_IMPORTED_MODULE_17__/* .AmenityItem */ .Yo, {
                                                    children: [
                                                        (0,_components_Amenities_constants__WEBPACK_IMPORTED_MODULE_19__/* .getIconTravelLine */ .yA)(amenity.code, {
                                                            width: 28,
                                                            height: 28
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Amenities_styles__WEBPACK_IMPORTED_MODULE_17__/* .AmenityTxt */ .m5, {
                                                            children: amenity.name
                                                        })
                                                    ]
                                                }, amenity.id)),
                                            mealService && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Amenities_styles__WEBPACK_IMPORTED_MODULE_17__/* .AmenityItem */ .Yo, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_BreakfastIcon__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                        width: 34,
                                                        stroke: "#3d3d3d",
                                                        height: 34,
                                                        strokeWidth: 1
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Amenities_styles__WEBPACK_IMPORTED_MODULE_17__/* .AmenityTxt */ .m5, {
                                                        children: mealService.name
                                                    })
                                                ]
                                            }),
                                            transportService && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Amenities_styles__WEBPACK_IMPORTED_MODULE_17__/* .AmenityItem */ .Yo, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_TransportIcon__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                        width: 34,
                                                        stroke: "#3d3d3d",
                                                        height: 34,
                                                        strokeWidth: 1
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Amenities_styles__WEBPACK_IMPORTED_MODULE_17__/* .AmenityTxt */ .m5, {
                                                        children: transportService.name
                                                    })
                                                ]
                                            }),
                                            anotherServices?.map((service)=>{
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Amenities_styles__WEBPACK_IMPORTED_MODULE_17__/* .AmenityItem */ .Yo, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_RandomServiceIcon__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                            width: 34,
                                                            stroke: "#3d3d3d",
                                                            height: 34,
                                                            strokeWidth: 1.6
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Amenities_styles__WEBPACK_IMPORTED_MODULE_17__/* .AmenityTxt */ .m5, {
                                                            children: service.name
                                                        })
                                                    ]
                                                }, service.id);
                                            })
                                        ]
                                    })
                                ]
                            }),
                            isScreenSm && advantageBlock(),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .BlockContainer */ .VW, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .BlockTitle */ .bi, {
                                        children: "Об отеле"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .BlockText */ .Tp, {
                                        children: description
                                    })
                                ]
                            })
                        ]
                    }),
                    !isScreenSm && advantageBlock()
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .Divider */ .iz, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .DetailBookingPageWrapper */ .mj, {
                ref: sectionRef,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .AvailableRoomInfo */ .pc, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .TitleText */ .eN, {
                                children: "Наличие мест на"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .TitleText */ .eN, {
                                children: ` ${dayjs__WEBPACK_IMPORTED_MODULE_11___default()(data.filterDto.arrivalDate).format("D MMMM")} -
              ${dayjs__WEBPACK_IMPORTED_MODULE_11___default()(data.filterDto.departureDate).format("D MMMM")}, `
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .TitleText */ .eN, {
                                children: `${numberOfPeople} ${(0,_modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_25__/* .pluralizationFn */ .$)(numberOfPeople, [
                                    "гость",
                                    "гостя",
                                    "гостей"
                                ])}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .BookingAvailableRooms */ .U$, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .DateBlock */ .mf, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .InfoTitle */ .Xw, {
                                    children: [
                                        "Заезд:",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .SubTitle */ .DK, {
                                            children: dayjs__WEBPACK_IMPORTED_MODULE_11___default()(firstRoomDetails?.placementExtraData.stayDates.arrivalDateTime).format("DD.MM.YYYY HH:mm")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .InfoTitle */ .Xw, {
                                    children: [
                                        "Выезд:",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .SubTitle */ .DK, {
                                            children: dayjs__WEBPACK_IMPORTED_MODULE_11___default()(firstRoomDetails?.placementExtraData.stayDates.departureDateTime).format("DD.MM.YYYY HH:mm")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .SubTitle */ .DK, {
                                    style: {
                                        textDecorationLine: "none",
                                        padding: 0
                                    },
                                    children: "(По местному времени отеля)"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail_styles__WEBPACK_IMPORTED_MODULE_5__/* .RoomsBlock */ .ht, {
                        children: rooms && Array.from(rooms).map(([key, rooms], index)=>{
                            return isScreenSm && rooms ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RoomCard_MobileRoomCard__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                services: services,
                                rooms: rooms,
                                ratePlans: ratePlans,
                                amenitiesWithCategory: rooms[0]?.amenitiesWithCategory
                            }, `${key}-${index}`) : rooms ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RoomCard__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                services: services,
                                rooms: rooms,
                                ratePlans: ratePlans,
                                amenitiesWithCategory: rooms[0]?.amenitiesWithCategory
                            }, `${key}-${index}`) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$L": () => (/* binding */ BookingHeaderContainer),
/* harmony export */   "DK": () => (/* binding */ SubTitle),
/* harmony export */   "IW": () => (/* binding */ DetailHeadSection),
/* harmony export */   "J7": () => (/* binding */ AmenitiesList),
/* harmony export */   "Ok": () => (/* binding */ FeaturesContainer),
/* harmony export */   "Oy": () => (/* binding */ FilterSection),
/* harmony export */   "Tp": () => (/* binding */ BlockText),
/* harmony export */   "U$": () => (/* binding */ BookingAvailableRooms),
/* harmony export */   "UN": () => (/* binding */ FeaturesBlock),
/* harmony export */   "VW": () => (/* binding */ BlockContainer),
/* harmony export */   "Xw": () => (/* binding */ InfoTitle),
/* harmony export */   "_z": () => (/* binding */ PageContainer),
/* harmony export */   "bi": () => (/* binding */ BlockTitle),
/* harmony export */   "eN": () => (/* binding */ TitleText),
/* harmony export */   "ht": () => (/* binding */ RoomsBlock),
/* harmony export */   "iz": () => (/* binding */ Divider),
/* harmony export */   "mf": () => (/* binding */ DateBlock),
/* harmony export */   "mj": () => (/* binding */ DetailBookingPageWrapper),
/* harmony export */   "o0": () => (/* binding */ GallerySection),
/* harmony export */   "o1": () => (/* binding */ AdvantageBlock),
/* harmony export */   "oF": () => (/* binding */ AdvantageText),
/* harmony export */   "pc": () => (/* binding */ AvailableRoomInfo),
/* harmony export */   "qm": () => (/* binding */ BookingButton),
/* harmony export */   "xJ": () => (/* binding */ BreadcrumbsBlock),
/* harmony export */   "xL": () => (/* binding */ FilterBlock)
/* harmony export */ });
/* unused harmony exports LinkToChangeData, BookingAvailableRoomsDate, RoomsContainer, RoomGroupContainer, RoomGroupWrapper, SmallScreenAccordionContainer, AccordionWrapper */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42143);



const PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-0"
})`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${({ theme  })=>theme.media.down("sm")`
    gap: 24px;
    padding-bottom: 16px;
  `}
`;
const BreadcrumbsBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-1"
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme  })=>theme.media.down("sm")`
    padding-bottom: 16px;
    ${theme.media.down("xs")`
    `}
  `}
`;
const DetailHeadSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-2"
})`
  display: flex;
  gap: 32px;
  ${({ theme  })=>theme.media.down("sm")`
      flex-direction: column-reverse;
  `}
`;
const FilterSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-3"
})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const GallerySection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-4"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const FeaturesContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-5"
})`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;
const FeaturesBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-6"
})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const BlockContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-7"
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const AdvantageBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-8"
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  min-width: 244px;
  border-radius: 24px;
  background: #8daec1;
  height: fit-content;

  ${({ theme  })=>theme.media.down("sm")`
        width: 100%;
  `}
`;
const AdvantageText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-8113f9bc-9"
})`
  line-height: 22px;
  color: white;
  border-bottom: 2px solid currentColor;
  padding-bottom: 8px;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
  `}
`;
const BlockTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-8113f9bc-10"
})`
  line-height: 32px;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle1};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
  `}
`;
const BlockText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-8113f9bc-11"
})`
  line-height: 22px;
  white-space: pre-line;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicBook};
  `}
`;
const AmenitiesList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-12"
})`
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 16px;
`;
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-13"
})`
  height: 2px;
  background: #c6e1f3;
`;
const DetailBookingPageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-14"
})`
  display: flex;
  flex-direction: column;
  ${({ theme  })=>theme.media.down("md")`
    flex-direction: column;
    ${theme.media.down("sm")`
    `}
  `}
`;
const TitleText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
    componentId: "sc-8113f9bc-15"
})`
  line-height: 32px;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle1};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
    ${theme.media.down("xs")`
      font-family: ${theme.font.family.gothicMedium};
    `};
  `}
`;
const BookingHeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-16"
})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const LinkToChangeData = styled_components__WEBPACK_IMPORTED_MODULE_0___default()((next_link__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
    componentId: "sc-8113f9bc-17"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.primary};
    margin-left: 12px;
    ${theme.media.down("xs")`
      margin-left: 0;
    `};
  `}
`;
const AvailableRoomInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-18"
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 24px;
  align-items: center;
  column-gap: 8px;
  row-gap: 6px;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("xs")`
      align-items: start;
    `}
  `}
`;
const BookingAvailableRooms = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(TitleText).withConfig({
    componentId: "sc-8113f9bc-19"
})`
  margin-bottom: 24px;
`;
const DateBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-20"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    ${theme.media.down("sm")`
      align-items: start;
      flex-direction: column;
      gap: 2px;
    `};
  `}
`;
const InfoTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-8113f9bc-21"
})`
  display: flex;
  flex-direction: row;
  gap: 6px;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
  `}
`;
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-8113f9bc-22"
})`
  padding-top: 1.6px;
  text-decoration-line: underline;
  text-underline-offset: 2px;
  font-weight: bold;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
  `}
`;
const BookingAvailableRoomsDate = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-8113f9bc-23"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    text-decoration-line: underline;
    font-weight: bold;
    padding: 0 4px;
    ${theme.media.down("xs")`
        display: flex;
        flex-direction: column;
        padding:0;
    `}
  `}
`;
const RoomsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-24"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: grid;
    grid-template-columns: 216px 1fr;
    gap: 64px;

    ${theme.media.down("md")`
      display: flex;
      flex-direction: column;
      gap: 16px;      
    `};
  `}
`;
const RoomsBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-25"
})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const RoomGroupContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-26"
})`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 32px;
  border: 1px solid #000;
  padding: 24px;
`;
const RoomGroupWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-27"
})`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const SmallScreenAccordionContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-28"
})`
  margin-top: 20px;
`;
const AccordionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-29"
})`
  h2 {
    margin-left: 40%;
  }
`;
const BookingButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-8113f9bc-30"
})`
  width: 100%;
  height: 56px;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    font-size: ${theme.font.size.subtitle2};
    font-family: ${theme.font.family.gothicDemi};
  `};

  ${({ theme  })=>theme.media.down("xs")`
  `}
`;
const FilterBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-8113f9bc-31"
})`
  width: 326px;
  flex: 1;
`;


/***/ }),

/***/ 84041:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_placement_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73031);
/* harmony import */ var _modules_core_containers_StoreProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24324);
/* harmony import */ var _modules_core_hooks_useToast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(602);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_core_components_ErrorComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22865);
/* harmony import */ var _modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90756);
/* harmony import */ var _modules_core_helpers_withLogging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77593);
/* harmony import */ var _modules_placement_apiPlacementSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88025);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_placement_detail__WEBPACK_IMPORTED_MODULE_2__]);
_modules_placement_detail__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const BookingDetailPage = ({ data , errorData  })=>{
    (0,_modules_core_hooks_useToast__WEBPACK_IMPORTED_MODULE_4__/* .useToast */ .p)(errorData);
    // Grouping rooms by id
    const groupedDetailPageDataByRooms = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!data) return;
        const groupedRooms = new Map();
        data.data.rooms.forEach((room)=>{
            const roomId = room.placementExtraData.roomId;
            if (!groupedRooms.has(roomId)) {
                groupedRooms.set(roomId, [
                    room
                ]);
            } else {
                groupedRooms.get(roomId)?.push(room);
            }
        });
        return groupedRooms;
    }, [
        data
    ]);
    if (!data) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_ErrorComponent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        status: errorData?.data.status,
        message: errorData?.data.message
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        "Go2Kavkaz : ",
                        data.data.name,
                        " ",
                        data.data.city
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_placement_detail__WEBPACK_IMPORTED_MODULE_2__/* .BookingDetail */ .l, {
                data: {
                    ...data.data,
                    rooms: groupedDetailPageDataByRooms
                }
            })
        ]
    });
};
const getServerSideProps = _modules_core_containers_StoreProvider__WEBPACK_IMPORTED_MODULE_3__/* .wrapper.getServerSideProps */ .YS.getServerSideProps((store)=>(0,_modules_core_helpers_withLogging__WEBPACK_IMPORTED_MODULE_8__/* .withLogging */ .o)(async (context)=>{
        const { id , ...rest } = context.query;
        const { data , error  } = await store.dispatch(_modules_placement_apiPlacementSlice__WEBPACK_IMPORTED_MODULE_9__/* .getDetailBookingData.initiate */ .R9.initiate({
            id: Number(id),
            urlQueries: (0,_modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_7__/* .queryHandler */ .F)(rest, _modules_core_helpers_queryHandler__WEBPACK_IMPORTED_MODULE_7__/* .QueryLocation.detail */ .v.detail).filters
        }));
        return {
            props: {
                data: data || null,
                errorData: error || null
            }
        };
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingDetailPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65392:
/***/ (() => {



/***/ }),

/***/ 71913:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ 4195:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ArrowBackIos");

/***/ }),

/***/ 65692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 73280:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/x-date-pickers");

/***/ }),

/***/ 10298:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/x-date-pickers/AdapterDayjs");

/***/ }),

/***/ 85753:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/x-date-pickers/LocalizationProvider");

/***/ }),

/***/ 85828:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/x-date-pickers/locales");

/***/ }),

/***/ 75184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 34335:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 19161:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/ru");

/***/ }),

/***/ 94166:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/localeData");

/***/ }),

/***/ 4424:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/toObject");

/***/ }),

/***/ 9416:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/weekday");

/***/ }),

/***/ 14799:
/***/ ((module) => {

"use strict";
module.exports = require("graylog2");

/***/ }),

/***/ 45567:
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

/***/ }),

/***/ 35648:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 53918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 45732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 64486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 99552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 71109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 87782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 82470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 95566:
/***/ ((module) => {

"use strict";
module.exports = require("next/error");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 73142:
/***/ ((module) => {

"use strict";
module.exports = require("notistack");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 93554:
/***/ ((module) => {

"use strict";
module.exports = require("react-number-format");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 57518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 75609:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ }),

/***/ 61908:
/***/ ((module) => {

"use strict";
module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 45641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ }),

/***/ 68680:
/***/ ((module) => {

"use strict";
module.exports = import("react-phone-number-input");;

/***/ }),

/***/ 53445:
/***/ ((module) => {

"use strict";
module.exports = import("react-phone-number-input/locale/en.json");;

/***/ }),

/***/ 72184:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/modules");;

/***/ }),

/***/ 53015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ }),

/***/ 46555:
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1050,5675,1664,7610,2143,8704,8413,6478,7499,679,1985,9511,756,966,9461,6239,347,6674,9417,512,838,7982,3230,4324,2326,8025,3245,3983,9391,9080,7341,6899], () => (__webpack_exec__(84041)));
module.exports = __webpack_exports__;

})();