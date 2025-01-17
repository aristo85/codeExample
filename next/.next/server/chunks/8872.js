"use strict";
exports.id = 8872;
exports.ids = [8872];
exports.modules = {

/***/ 78872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UW": () => (/* binding */ ServiceType),
  "Gd": () => (/* binding */ bookingStatusNames),
  "ZP": () => (/* binding */ components_BookingListItem)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./modules/core/components/BookingListItem/styles.ts
var styles = __webpack_require__(3980);
// EXTERNAL MODULE: ./modules/core/hooks/useMatchMedia.ts
var useMatchMedia = __webpack_require__(40152);
// EXTERNAL MODULE: ./modules/core/styles/mediaQueries.ts
var mediaQueries = __webpack_require__(80514);
// EXTERNAL MODULE: ./modules/core/components/icons/HotelIcon.tsx
var HotelIcon = __webpack_require__(96619);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./modules/core/components/icons/CalendarIcon.tsx
var CalendarIcon = __webpack_require__(92001);
// EXTERNAL MODULE: ./modules/core/components/icons/ClockIcon.tsx
var ClockIcon = __webpack_require__(70069);
// EXTERNAL MODULE: ./modules/core/hooks/useGetDaysAndNights.ts
var useGetDaysAndNights = __webpack_require__(42326);
// EXTERNAL MODULE: ./modules/core/api/types.ts
var types = __webpack_require__(20293);
// EXTERNAL MODULE: ./modules/core/components/icons/PersonIcon.tsx
var PersonIcon = __webpack_require__(47229);
// EXTERNAL MODULE: ./modules/core/hooks/useOutsideClick.ts
var useOutsideClick = __webpack_require__(25140);
;// CONCATENATED MODULE: ./modules/core/components/BookingListItem/CardActions.tsx







const CardActions = ({ status , linkToDetailPage , onCancelClick , id , isTourist , price , isScreenSmTab , paymentResponseHandler  })=>{
    const buttonContainerRef = (0,external_react_.useRef)(null);
    const isScreenXs = (0,useMatchMedia/* default */.Z)(`(max-width: ${mediaQueries/* breakpoints.xs */.AV.xs}px)`);
    const [isMenuBlockOpened, setIsMenuBlockOpened] = (0,external_react_.useState)(false);
    let isCanBeCancelled = false;
    if (status === types/* BookingStatus.WAITING_PAYMENT */.g.WAITING_PAYMENT) {
        isCanBeCancelled = true;
    } else if (status === types/* BookingStatus.WAITING_PARTNER */.g.WAITING_PARTNER) {
        isCanBeCancelled = true;
    } else if (status === types/* BookingStatus.CANCELLED */.g.CANCELLED) {
        isCanBeCancelled = false;
    } else if (status === types/* BookingStatus.PAID */.g.PAID) {
        isCanBeCancelled = true;
    } else if (status === types/* BookingStatus.PARTNER_ACCEPTED */.g.PARTNER_ACCEPTED) {
        isCanBeCancelled = true;
    }
    (0,useOutsideClick/* useOutsideClick */.O)({
        ref: buttonContainerRef,
        handler: ()=>setIsMenuBlockOpened(false)
    });
    const setMenuBlockToggle = (e)=>{
        e.preventDefault();
        setIsMenuBlockOpened((prev)=>!prev);
    };
    return isTourist ? /*#__PURE__*/ jsx_runtime_.jsx(styles/* ActionSection */.I8, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(styles/* ActionWrapper */.yY, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* ButtonContainer */.qO, {
                ref: buttonContainerRef,
                isScreenSmTab: isScreenSmTab,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(styles/* ItemButton */.ys, {
                        onClick: setMenuBlockToggle,
                        children: "..."
                    }),
                    isMenuBlockOpened && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* Block */.gO, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(styles/* ItemLink */.FB, {
                                href: linkToDetailPage,
                                children: "Посмотреть детали"
                            }),
                            isCanBeCancelled && /*#__PURE__*/ jsx_runtime_.jsx(styles/* ButtonItem */.yO, {
                                type: "button",
                                onClick: ()=>onCancelClick && onCancelClick(id),
                                children: "Отменить бронирование"
                            }),
                            status === types/* BookingStatus.WAITING_PAYMENT */.g.WAITING_PAYMENT && /*#__PURE__*/ jsx_runtime_.jsx(styles/* ButtonItem */.yO, {
                                type: "button",
                                onClick: ()=>paymentResponseHandler(id),
                                children: "Оплатить"
                            })
                        ]
                    })
                ]
            })
        })
    }) : /*#__PURE__*/ jsx_runtime_.jsx(styles/* StatusAndPrice */.bu, {
        children: !isScreenXs && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* ItemPrice */.tv, {
            $isScreenSmTab: isScreenSmTab,
            children: [
                price,
                " рублей"
            ]
        })
    });
};
/* harmony default export */ const BookingListItem_CardActions = (CardActions);

// EXTERNAL MODULE: ./modules/core/components/icons/PeopleIcon.tsx
var PeopleIcon = __webpack_require__(16444);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: ./modules/core/helpers/peopleCounter.ts
var peopleCounter = __webpack_require__(39953);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: ./modules/core/hooks/usePayment.ts
var usePayment = __webpack_require__(72974);
;// CONCATENATED MODULE: ./modules/core/components/BookingListItem/index.tsx


















const bookingStatusNames = new Map([
    [
        types/* BookingStatus.WAITING_PARTNER */.g.WAITING_PARTNER,
        "Ожидание подтверждения"
    ],
    [
        types/* BookingStatus.WAITING_PAYMENT */.g.WAITING_PAYMENT,
        "Ожидание оплаты"
    ],
    [
        types/* BookingStatus.PARTNER_ACCEPTED */.g.PARTNER_ACCEPTED,
        "Подтверждено партнером"
    ],
    [
        types/* BookingStatus.PAID */.g.PAID,
        "Оплачено"
    ],
    [
        types/* BookingStatus.CANCELLED */.g.CANCELLED,
        "Отменено"
    ]
]);
var ServiceType;
(function(ServiceType) {
    ServiceType["PLACEMENT"] = "PLACEMENT";
    ServiceType["EXCURSION"] = "EXCURSION";
    ServiceType["GUIDE"] = "GUIDE";
})(ServiceType || (ServiceType = {}));
const BookingListItem = (props)=>{
    const { title , image , departureDateTime , arrivalDateTime , names , linkToDetailPage , isTourist , type , numberOfChildren , numberOfParticipants , eventStartDateTime , status , guideData , placementData , excursionData  } = props;
    const router = (0,router_.useRouter)();
    const isScreenXs = (0,useMatchMedia/* default */.Z)(`(max-width: ${mediaQueries/* breakpoints.xs */.AV.xs}px)`);
    const isScreenSmTab = (0,useMatchMedia/* default */.Z)(`(max-width: ${mediaQueries/* breakpoints.smTab */.AV.smTab}px)`) || router.pathname === "/profile" || router.pathname === "/control-panel";
    const isPlacement = type === ServiceType.PLACEMENT;
    const isGuide = type === ServiceType.GUIDE;
    const isExcursion = type === ServiceType.EXCURSION;
    const { daysString , dateRangeString , datesWithTime  } = (0,useGetDaysAndNights/* default */.Z)({
        arrivalDate: arrivalDateTime || null,
        departureDate: departureDateTime || null
    });
    const [paymentResponseHandler] = (0,usePayment/* default */.Z)();
    const payHandler = async (id)=>{
        let itemId = null;
        switch(type){
            case "EXCURSION":
                itemId = excursionData?.id || null;
                break;
            case "PLACEMENT":
                itemId = placementData?.id || null;
                break;
            case "GUIDE":
                itemId = guideData?.id || null;
                break;
        }
        if (itemId) {
            void paymentResponseHandler({
                bookingId: id,
                type,
                itemId
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* BookedItemContainer */.rM, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* BookedItemImageContainer */.WG, {
                children: [
                    !isScreenXs && /*#__PURE__*/ jsx_runtime_.jsx(styles/* BookedItemImage */.CF, {
                        src: image,
                        height: 88,
                        width: 88,
                        alt: "image"
                    }),
                    isScreenXs && /*#__PURE__*/ jsx_runtime_.jsx(styles/* BookedItemImage */.CF, {
                        src: image,
                        layout: "fill",
                        objectFit: "cover",
                        alt: "image"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* BookedMainBlockWrap */.dG, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(styles/* BookedMainBlock */.Q3, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* BookedItemInformation */.E, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* BookedItemFieldData */.um, {
                                    children: [
                                        isGuide ? /*#__PURE__*/ jsx_runtime_.jsx(PersonIcon/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx(HotelIcon/* default */.Z, {}),
                                        !isTourist && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: linkToDetailPage,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(styles/* BookedItemName */.dh, {
                                                isPartner: !isTourist,
                                                children: title
                                            })
                                        }),
                                        isTourist && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: linkToDetailPage,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(styles/* BookedItemName */.dh, {
                                                isPartner: !isTourist,
                                                children: title
                                            })
                                        })
                                    ]
                                }),
                                isTourist && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* BookedItemFieldData */.um, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CalendarIcon/* default */.Z, {}),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* BookedItemValue */.m$, {
                                                    children: [
                                                        isExcursion && eventStartDateTime && `${external_dayjs_default()(eventStartDateTime).utc(false).format("DD MMMM YYYY")}${", " + external_dayjs_default()(eventStartDateTime).utc(false).format("HH:mm")}`,
                                                        isPlacement && `${dateRangeString}${isPlacement ? ", " + datesWithTime.arrivalDate?.format("HH:mm") : ""}`,
                                                        isGuide && `${external_dayjs_default()(eventStartDateTime).utc(false).format("DD MMMM YYYY, HH:mm")}`
                                                    ]
                                                })
                                            ]
                                        }),
                                        isPlacement ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* BookedItemFieldData */.um, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(ClockIcon/* default */.Z, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx(styles/* BookedItemValue */.m$, {
                                                    children: daysString
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* BookedItemFieldData */.um, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(PeopleIcon/* default */.Z, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx(styles/* BookedItemValue */.m$, {
                                                    children: (0,peopleCounter/* peopleCounter */.S)(numberOfParticipants, numberOfChildren)
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                !isTourist && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        !isGuide && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* BookedItemFieldData */.um, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(PersonIcon/* default */.Z, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx(styles/* FullNameString */.We, {
                                                    children: names
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* BookedItemFieldData */.um, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CalendarIcon/* default */.Z, {}),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* BookedItemValue */.m$, {
                                                    children: [
                                                        isPlacement && `${dateRangeString}${type !== ServiceType.PLACEMENT ? ", " + datesWithTime.arrivalDate?.format("HH:mm") : ""}`,
                                                        isExcursion && eventStartDateTime && `${external_dayjs_default()(eventStartDateTime).utc(false).format("DD MMMM YYYY")}${", " + external_dayjs_default()(eventStartDateTime).utc(false).format("HH:mm")}`,
                                                        isGuide && `${external_dayjs_default()(eventStartDateTime).utc(false).format("DD MMMM YYYY, HH:mm")}`
                                                    ]
                                                })
                                            ]
                                        }),
                                        isGuide && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* BookedItemFieldData */.um, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(PeopleIcon/* default */.Z, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx(styles/* BookedItemValue */.m$, {
                                                    children: (0,peopleCounter/* peopleCounter */.S)(numberOfParticipants, numberOfChildren)
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                isTourist ? /*#__PURE__*/ jsx_runtime_.jsx(styles/* ItemStatus */.Ms, {
                                    type: status,
                                    showBackground: false,
                                    children: bookingStatusNames.get(status)
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(styles/* ItemPartnerStatus */.ol, {
                                    type: status,
                                    children: bookingStatusNames.get(status)
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(BookingListItem_CardActions, {
                        ...props,
                        paymentResponseHandler: payHandler,
                        isScreenSmTab: isScreenSmTab
                    })
                ]
            })
        ]
    });
// );
};
/* harmony default export */ const components_BookingListItem = (BookingListItem);


/***/ }),

/***/ 3980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CF": () => (/* binding */ BookedItemImage),
/* harmony export */   "E": () => (/* binding */ BookedItemInformation),
/* harmony export */   "FB": () => (/* binding */ ItemLink),
/* harmony export */   "I8": () => (/* binding */ ActionSection),
/* harmony export */   "Ms": () => (/* binding */ ItemStatus),
/* harmony export */   "Q3": () => (/* binding */ BookedMainBlock),
/* harmony export */   "WG": () => (/* binding */ BookedItemImageContainer),
/* harmony export */   "We": () => (/* binding */ FullNameString),
/* harmony export */   "bu": () => (/* binding */ StatusAndPrice),
/* harmony export */   "dG": () => (/* binding */ BookedMainBlockWrap),
/* harmony export */   "dh": () => (/* binding */ BookedItemName),
/* harmony export */   "gO": () => (/* binding */ Block),
/* harmony export */   "m$": () => (/* binding */ BookedItemValue),
/* harmony export */   "ol": () => (/* binding */ ItemPartnerStatus),
/* harmony export */   "qO": () => (/* binding */ ButtonContainer),
/* harmony export */   "rM": () => (/* binding */ BookedItemContainer),
/* harmony export */   "tv": () => (/* binding */ ItemPrice),
/* harmony export */   "um": () => (/* binding */ BookedItemFieldData),
/* harmony export */   "yO": () => (/* binding */ ButtonItem),
/* harmony export */   "yY": () => (/* binding */ ActionWrapper),
/* harmony export */   "ys": () => (/* binding */ ItemButton)
/* harmony export */ });
/* unused harmony exports GuideCard, GuideMainSection, GuideImage, GuideMainInfo */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42143);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const BookedItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-db4ab767-0"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 16px;
    height: 89px;
    border: 1px solid ${theme.colors.primary};
    border-radius: 8px;
    ${theme.media.down("xs")`
      flex-direction: column;
      height: auto;
      gap: 0;
    `}
  `}
`;
const BookedItemImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-db4ab767-1"
})`
  position: relative;
  width: 88px;
  height: auto;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("xs")`
      width: 100%;
      height: 128px;
    `}
  `}
`;
const BookedItemImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
    componentId: "sc-db4ab767-2"
})`
  object-fit: cover;
  ${({ theme , $isGuide  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    border-radius: ${$isGuide ? "50%" : "7px 0 0 7px"};
    ${theme.media.down("xs")`
      position: static;
      border-radius: 7px 7px 0 0;
    `}
  `}
`;
const BookedMainBlockWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-db4ab767-3"
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("xs")`
      padding: 16px;
    `}
  `}
`;
const BookedMainBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-db4ab767-4"
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`;
const BookedItemInformation = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-db4ab767-5"
})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("smTab")`
      width: 100%;
    `}
  `}
`;
const BookedItemFieldData = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-db4ab767-6"
})`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("xs")`
      
    `}
  `}
`;
const BookedItemName = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-db4ab767-7"
})`
  ${({ theme , isPartner  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    display: inline-block;
    font-family: ${theme.font.family.interBold};
    font-size: ${theme.font.size.body3};
    color: ${theme.colors.primary};
    min-width: 215px;
    max-width: ${isPartner ? "300px" : "530px"};
    height: 17px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    ${theme.media.down("lg")`
    ${!isPartner && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
        max-width: 400px;
      `}
      
    `};
    ${theme.media.down("screen1200")`
    ${isPartner ? styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
            max-width: 220px;
            min-width: 180px;
          ` : styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
            max-width: 300px;
          `}
      
    `};
    ${theme.media.down("xs")`
      min-width: unset;
      max-width: 215px;
    `};
  `}
`;
const BookedItemValue = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-db4ab767-8"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    font-family: ${theme.font.family.gothicBook};
    font-size: ${theme.font.size.body3};
    color: ${theme.colors.default};
    ${theme.media.down("xs")`
      
    `};
  `}
`;
const ActionSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
    componentId: "sc-db4ab767-9"
})`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const ActionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-db4ab767-10"
})`
  display: flex;
  flex-direction: row;
  gap: 16px;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("xs")`
      width: 100%;
      justify-content: space-between;
    `}
  `}
`;
const ItemStatus = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-db4ab767-11"
})`
  ${({ theme , type , showBackground  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    font-family: ${theme.font.family.interBold};
    font-size: ${showBackground ? theme.font.size.auxiliary1 : theme.font.size.body3};
    padding: ${showBackground ? "8px 16px" : 0};
    border-radius: 16px;
    color: ${type === "PAID" ? "#6fcf97" : type === "CANCELLED" ? "#de3730" : type === "WAITING_PAYMENT" ? "#f29200" : type === "WAITING_PARTNER" || type === "PARTNER_ACCEPTED" ? "#f29200" : "inherit"};
    ${showBackground && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      background: ${type === "PAID" ? "rgba(111, 207, 151, 0.3)" : type === "CANCELLED" ? "rgba(255, 127, 122, 0.3)" : type === "WAITING_PAYMENT" ? "rgba(255, 228, 110, 0.3)" : type === "WAITING_PARTNER" || type === "PARTNER_ACCEPTED" ? "rgba(255, 228, 110, 0.3)" : "none"};
    `}
    ${theme.media.down("xs")`
      padding: ${showBackground ? "8px" : 0};
    `};
  `}
`;
const ItemPartnerStatus = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-db4ab767-12"
})`
  align-self: start;
  ${({ theme , type  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    font-family: ${theme.font.family.interBold};
    font-size: ${theme.font.size.body3};
    border-radius: 16px;
    color: ${type === "PAID" ? "#6fcf97" : type === "CANCELLED" ? "#de3730" : type === "WAITING_PAYMENT" ? "#f29200" : type === "WAITING_PARTNER" || type === "PARTNER_ACCEPTED" ? "#f29200" : "inherit"};
    ${theme.media.down("xs")`
    `};
  `}
`;
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-db4ab767-13"
})`
  position: relative;
  margin: 8px 8px;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("xs")`
      margin 0;
    `}
  `}
`;
const ItemButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-db4ab767-14"
})`
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  font-size: 18px;
  position: relative;
  border-radius: 10px;
  border: 2px solid var(--main-accent, #1d7abd);
  background: var(--main-white, #fff);
  display: flex;
  justify-content: center;
  align-items: baseline;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("xs")`
      
    `}
  `}
`;
const Block = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-db4ab767-15"
})`
  position: absolute;
  background: blue;
  top: 30px;
  right: 0;
  z-index: 1;
  border-radius: 16px 0 16px 16px;
  border: 2px solid var(--main-accent, #1d7abd);
  background: var(--main-white, #fff);
  padding: 16px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("xs")`
      
    `}
  `}
`;
const ItemLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()((next_link__WEBPACK_IMPORTED_MODULE_3___default())).withConfig({
    componentId: "sc-db4ab767-16"
})`
  white-space: nowrap;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.body2};
    color: ${theme.colors.default};
    ${theme.media.down("xs")`      
    `};
  `}
`;
const ButtonItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
    componentId: "sc-db4ab767-17"
})`
  white-space: nowrap;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.body2};
    color: ${theme.colors.default};
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    text-align: left;
    ${theme.media.down("xs")`
      
    `};
  `}
`;
const StatusAndPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-db4ab767-18"
})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: flex-end;
  align-self: flex-start;
  margin-top: 8px;
  white-space: nowrap;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("xs")`
      display: block;
    `}
  `}
`;
const FullNameString = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-db4ab767-19"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    font-family: ${theme.font.family.gothicDemi};
    font-size: ${theme.font.size.body2};
    color: ${theme.colors.default};
    ${theme.media.down("xs")`
      
    `};
  `}
`;
const ItemPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-db4ab767-20"
})`
  ${({ theme , $isScreenSmTab  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    font-family: ${theme.font.family.interBold};
    font-size: ${theme.font.size.body3};
    color: ${theme.colors.default};
    ${()=>$isScreenSmTab ? styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
            padding: 0 16px 0 0;
          ` : theme.media.between("xs", "smTab")`
          padding: 0 16px 0 0;
    `}
  `}
`;
// GUIDE
const GuideCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-db4ab767-21"
})`
  position: relative;
  display: flex;
  gap: 16px;
  border-radius: 8px;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    border: 1px solid ${theme.colors.primary};
    ${theme.media.down("xs")`
    `};
  `}
`;
const GuideMainSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
    componentId: "sc-db4ab767-22"
})`
  display: flex;
  gap: 16px;
  align-items: center;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("xs")`
      
    `};
  `}
`;
const GuideImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default())).withConfig({
    componentId: "sc-db4ab767-23"
})`
  border-radius: 7px 0 0 7px;
  object-fit: cover;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("xs")`
    `}
  `}
`;
const GuideMainInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-db4ab767-24"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("xs")`
    `}
  `}
`;


/***/ }),

/***/ 39953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ peopleCounter)
/* harmony export */ });
/* harmony import */ var _modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89882);

const peopleCounter = (numberOfParticipants = 1, numberOfChildren = 0)=>{
    return `
  ${numberOfParticipants} ${(0,_modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_0__/* .pluralizationFn */ .$)(numberOfParticipants, [
        "взрослый",
        "взрослых",
        "взрослых"
    ])}${numberOfChildren > 0 ? ` + ${numberOfChildren}` : ""} ${numberOfChildren > 0 ? `${(0,_modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_0__/* .pluralizationFn */ .$)(numberOfChildren, [
        "ребенок",
        "ребенка",
        "детей"
    ])}` : ""}`;
};


/***/ })

};
;