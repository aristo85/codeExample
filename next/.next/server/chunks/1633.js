"use strict";
exports.id = 1633;
exports.ids = [1633];
exports.modules = {

/***/ 54554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 81633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ Location),
  "Z": () => (/* binding */ BookingImagesMap)
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
;// CONCATENATED MODULE: ./modules/placement/components/BookingImagesMap/styles.ts



const BookingImageMapWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-50f1bfbf-0"
})`
  ${({ theme , isSecondaryImageExists , location  })=>external_styled_components_.css`
    display: grid;
    grid-gap: 32px;
    width: 100%;
    margin: 42px 0 24px;
    grid-template-columns: 60% calc(40% - 32px);
    grid-template-rows: 210px 210px;
    height: 452px;

    ${location === Location.PLACEMENT && isSecondaryImageExists && external_styled_components_.css`
      grid-template-columns: 60% auto;
      grid-template-rows: 258px 210px;
      height: 500px;
    `}

    ${location !== Location.PLACEMENT && external_styled_components_.css`
      grid-template-columns: ${isSecondaryImageExists ? `calc(76% - 16px) 24%` : `100%`};
      grid-template-rows: 1fr 1fr;
      grid-gap: 16px;
      height: 328px;
      margin: 0;
    `}

    ${theme.media.down("sm")`
      grid-gap: 12px;
      margin: 24px 0;
      grid-template-columns: calc(50% - 6px) calc(50% - 6px);
      grid-template-rows: 156px 156px 100px;
      height: ${isSecondaryImageExists ? "424px" : "260px"};

      ${location !== Location.PLACEMENT && external_styled_components_.css`
          height: ${isSecondaryImageExists ? "312px" : "156px"};
          grid-template-rows: 156px 156px;
          //grid-template-rows: 1fr;
        `}
      
      ${!isSecondaryImageExists && location === Location.PLACEMENT && external_styled_components_.css`
          grid-template-rows: 156px 100px;
          height: 256px;
        `}
    `};
  `}
`;
const BookingMainContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-50f1bfbf-1"
})`
  position: relative;
  cursor: pointer;
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  ${({ theme  })=>external_styled_components_.css`
    ${theme.media.down("sm")`
       grid-column: 1 / span 2;
       grid-row: 1 / span 1;
    `}
  `}
`;
const BookingSecondaryContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-50f1bfbf-2"
})`
  position: relative;
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  ${({ theme  })=>external_styled_components_.css`
    ${theme.media.down("sm")`
        grid-column: 1 / span 1;
        grid-row: 2 / span 1;
    `}
  `}
`;
const BookingTertiaryContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-50f1bfbf-3"
})`
  position: relative;
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  ${({ theme  })=>external_styled_components_.css`
    ${theme.media.down("sm")`
        grid-column: 2 / span 1;
        grid-row: 2 / span 1;
    `}
  `}
`;
const BookingTertiaryImage = external_styled_components_default()((image_default())).withConfig({
    componentId: "sc-50f1bfbf-4"
})`
  border-radius: 32px;
  cursor: pointer;
  ${({ remainingElements  })=>remainingElements > 0 && external_styled_components_.css`
      filter: brightness(50%);
    `}
`;
const BookingMainImage = external_styled_components_default()((image_default())).withConfig({
    componentId: "sc-50f1bfbf-5"
})`
  border-radius: 32px;
`;
const BookingSecondaryImage = external_styled_components_default()((image_default())).withConfig({
    componentId: "sc-50f1bfbf-6"
})`
  border-radius: 32px;
  cursor: pointer;
  ${({ remainingElements , location , IsTertiaryImageExists  })=>external_styled_components_.css`
    ${location === Location.PLACEMENT && remainingElements && IsTertiaryImageExists && external_styled_components_.css`
      filter: brightness(50%);
    `}

    ${({ theme  })=>external_styled_components_.css`
      ${theme.media.down("sm")`
        filter: none;
    `}
    `}
  `}
`;
const BookingMapButtonWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-50f1bfbf-7"
})`
  ${({ theme , isSecondaryImageExists  })=>external_styled_components_.css`
    grid-column: 2 / span 1;
    grid-row: ${isSecondaryImageExists ? "2 / span 1" : "1 / span 1"};
    height: 100%;
    ${theme.media.down("sm")`
       grid-column: 1 / span 2;
       margin-top: 12px;
       grid-row: ${isSecondaryImageExists ? "3 / span 1" : "2 / span 1"};
       height: 88px;
    `}
  `}
`;
const SeeAllImagesText = external_styled_components_default().h2.withConfig({
    componentId: "sc-50f1bfbf-8"
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

// EXTERNAL MODULE: ./modules/core/hooks/useMatchMedia.ts
var useMatchMedia = __webpack_require__(40152);
// EXTERNAL MODULE: ./modules/core/styles/mediaQueries.ts
var mediaQueries = __webpack_require__(80514);
// EXTERNAL MODULE: ./modules/placement/components/BookingMapButton/index.tsx + 1 modules
var BookingMapButton = __webpack_require__(91591);
// EXTERNAL MODULE: ./modules/placement/components/BookingImageGallery/index.tsx + 1 modules
var BookingImageGallery = __webpack_require__(54554);
;// CONCATENATED MODULE: ./modules/placement/components/BookingImagesMap/index.tsx







var Location;
(function(Location) {
    Location["PLACEMENT"] = "PLACEMENT";
    Location["GUIDE"] = "GUIDE";
    Location["EXCURSION"] = "EXCURSION";
})(Location || (Location = {}));
const BookingImageMap = ({ images , mapLink , location  })=>{
    const [isModalOpened, setIsModalOpened] = (0,external_react_.useState)(false);
    const [currentImageIndex, setCurrentImageIndex] = (0,external_react_.useState)(0);
    const [isMapOpened, setIsMapOpened] = (0,external_react_.useState)(false);
    const [mainImage, secondaryImage, ...rest] = images;
    const isScreenSm = (0,useMatchMedia/* default */.Z)(`(max-width: ${mediaQueries/* breakpoints.sm */.AV.sm}px)`);
    let tertiaryImage;
    if (isScreenSm || location !== "PLACEMENT") {
        tertiaryImage = rest.shift();
    }
    const mapToggleHandler = ()=>{
        setIsMapOpened((prev)=>!prev);
    };
    const onClickHandler = (index)=>{
        setCurrentImageIndex(index);
        modalToggleHandler();
    };
    const modalToggleHandler = ()=>{
        setIsModalOpened((prev)=>!prev);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BookingImageMapWrapper, {
                isSecondaryImageExists: !!secondaryImage,
                location: location,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(BookingMainContainer, {
                        onClick: ()=>onClickHandler(0),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(BookingMainImage, {
                            src: mainImage,
                            alt: "main-image",
                            layout: "fill",
                            objectFit: "cover"
                        })
                    }),
                    secondaryImage && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BookingSecondaryContainer, {
                        onClick: ()=>onClickHandler(1),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(BookingSecondaryImage, {
                                location: location,
                                remainingElements: rest.length,
                                src: secondaryImage,
                                alt: "secondary-image",
                                layout: "fill",
                                objectFit: "cover",
                                IsTertiaryImageExists: !tertiaryImage
                            }),
                            rest.length > 0 && !tertiaryImage && /*#__PURE__*/ jsx_runtime_.jsx(SeeAllImagesText, {
                                children: isScreenSm || location !== Location.PLACEMENT ? `+${rest.length}` : "Смотреть все фото"
                            })
                        ]
                    }),
                    (isScreenSm || location !== Location.PLACEMENT) && tertiaryImage && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BookingTertiaryContainer, {
                        onClick: ()=>onClickHandler(2),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(BookingTertiaryImage, {
                                remainingElements: rest.length,
                                src: tertiaryImage,
                                alt: "tertiary-image",
                                layout: "fill",
                                objectFit: "cover"
                            }),
                            rest.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(SeeAllImagesText, {
                                children: isScreenSm || location !== Location.PLACEMENT ? `+${rest.length}` : "Смотреть все фото"
                            })
                        ]
                    }),
                    location === Location.PLACEMENT && mapLink && /*#__PURE__*/ jsx_runtime_.jsx(BookingMapButtonWrapper, {
                        isSecondaryImageExists: !!secondaryImage,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(BookingMapButton/* default */.Z, {
                            link: mapLink,
                            isLink: true,
                            isMapOpened: isMapOpened,
                            mapOpenFn: mapToggleHandler
                        })
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
/* harmony default export */ const BookingImagesMap = (BookingImageMap);


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


/***/ })

};
;