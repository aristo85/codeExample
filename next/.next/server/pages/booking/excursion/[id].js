"use strict";
(() => {
var exports = {};
exports.id = 2337;
exports.ids = [2337,7593,5797,6543];
exports.modules = {

/***/ 75797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Calendar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "dayjs/plugin/localeData"
var localeData_ = __webpack_require__(94166);
var localeData_default = /*#__PURE__*/__webpack_require__.n(localeData_);
// EXTERNAL MODULE: external "dayjs/plugin/weekday"
var weekday_ = __webpack_require__(9416);
var weekday_default = /*#__PURE__*/__webpack_require__.n(weekday_);
// EXTERNAL MODULE: external "dayjs/plugin/toObject"
var toObject_ = __webpack_require__(4424);
var toObject_default = /*#__PURE__*/__webpack_require__.n(toObject_);
// EXTERNAL MODULE: external "dayjs/locale/ru"
var ru_ = __webpack_require__(19161);
var ru_default = /*#__PURE__*/__webpack_require__.n(ru_);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./modules/core/components/Calendar/components/CalendarMonth/styles.ts

const CalendarMonthWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-1b0fb803-0"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 12px;
  background: #ffffff;
  border-radius: 13px;
`;
const CalendarCaption = external_styled_components_default().div.withConfig({
    componentId: "sc-1b0fb803-1"
})`
  ${({ theme  })=>external_styled_components_.css`
    font-family: ${theme.font.family.gothicMedium};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
  `}
  display: flex;
  gap: 16px;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 16px;
  color: #222121;
`;
const CalendarCaptionButton = external_styled_components_default().button.withConfig({
    componentId: "sc-1b0fb803-2"
})`
  border: none;
  outline: none;
  background: transparent;
`;
const CalendarWeekDayRow = external_styled_components_default().div.withConfig({
    componentId: "sc-1b0fb803-3"
})`
  display: flex;
  justify-content: stretch;
`;
const CalendarWeekDay = external_styled_components_default().div.withConfig({
    componentId: "sc-1b0fb803-4"
})`
  ${({ theme  })=>external_styled_components_.css`
    font-family: ${theme.font.family.gothicMedium};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  `}
  text-transform: capitalize;
  text-align: center;
  line-height: 14px;
  padding: 14px 14px;
`;
const CalendarWeek = external_styled_components_default().div.withConfig({
    componentId: "sc-1b0fb803-5"
})`
  display: flex;
  justify-content: stretch;
  margin: 11px 0 0;
`;
const CalendarDay = external_styled_components_default().div.withConfig({
    componentId: "sc-1b0fb803-6"
})`
  ${({ theme  })=>external_styled_components_.css`
    font-family: ${theme.font.family.gothicMedium};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  `}
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 14px;
  padding: ${({ hasPlaces  })=>hasPlaces ? "6px 7px" : "14px 14px"};
  color: ${({ selected , hasPlaces  })=>selected || hasPlaces ? "#ffffff" : "#222121"};
  background: ${({ selected , hasPlaces , empty  })=>empty ? "transparent" : selected ? "#219653" : hasPlaces ? "#1D7ABD" : "transparent"};
  border-radius: 32px;
  cursor: ${({ hasPlaces , selectable , empty  })=>hasPlaces && selectable && !empty ? "pointer" : "auto"};
`;
const CalendarDayPlaces = external_styled_components_default().div.withConfig({
    componentId: "sc-1b0fb803-7"
})`
  ${({ theme  })=>external_styled_components_.css`
    font-family: ${theme.font.family.gothicBook};
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
  `}
  text-align: center;
  line-height: 7px;
  color: #ffffff;
`;

// EXTERNAL MODULE: ./modules/core/helpers/pluralizationFn.ts
var pluralizationFn = __webpack_require__(89882);
// EXTERNAL MODULE: ./modules/core/components/icons/ArrowRightIcon.tsx
var ArrowRightIcon = __webpack_require__(13851);
;// CONCATENATED MODULE: ./modules/core/components/Calendar/styles.ts


const CalendarWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-4219e49e-0"
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 16px;
`;
const ArrowLeftIcon = external_styled_components_default()(ArrowRightIcon/* default */.Z).withConfig({
    componentId: "sc-4219e49e-1"
})`
  transform: rotate(180deg);
`;
const CalendarButton = external_styled_components_default().button.withConfig({
    componentId: "sc-4219e49e-2"
})`
  width: 48px;
  height: 48px;
  background: #8daec1;
  border-radius: 32px;
  border: none;
  padding: ${(props)=>props.$left ? "12px 14px 12px 10px" : "12px 10px 12px 14px"};
  cursor: pointer;
  align-self: center;
`;
const CalendarButtonPlaceholder = external_styled_components_default().div.withConfig({
    componentId: "sc-4219e49e-3"
})`
  width: 48px;
  height: 48px;
  background: transparent;
  align-self: center;
`;

;// CONCATENATED MODULE: ./modules/core/components/Calendar/components/CalendarMonth/index.tsx











const CalendarMonth = ({ month , year , schedule , selectable , value , onChange , onClickPrev , onClickNext , hasPreviousMonth , maxNumberOfParticipants , isGroupType  })=>{
    external_dayjs_default().extend((localeData_default()));
    external_dayjs_default().extend((weekday_default()));
    external_dayjs_default().extend((toObject_default()));
    external_dayjs_default().locale((ru_default()));
    const monthDate = external_dayjs_default()(new Date(year, month));
    const weekDays = (0,external_react_.useMemo)(()=>{
        const daysOfWeek = Array.from(Array(7).keys()).map((dayOfWeek)=>external_dayjs_default()().day(dayOfWeek).format("dd"));
        daysOfWeek.push(daysOfWeek.shift());
        return daysOfWeek;
    }, []);
    const monthWeeks = (0,external_react_.useMemo)(()=>{
        const getWeeks = ()=>{
            const weeks = [];
            let currentDate = monthDate.startOf("month").weekday(0);
            const nextMonth = monthDate.add(1, "month");
            while(currentDate.weekday(0).toObject().months !== nextMonth.month()){
                weeks.push(currentDate);
                currentDate = currentDate.add(1, "week");
            }
            return weeks;
        };
        const getDaysOfWeek = (week)=>{
            const days = [];
            let currentDate = week;
            const nextWeek = currentDate.add(1, "week");
            while(currentDate.toObject().date !== nextWeek.toObject().date){
                days.push(currentDate);
                currentDate = currentDate.add(1, "day");
            }
            return days;
        };
        const weeks = getWeeks();
        return weeks.map((week)=>getDaysOfWeek(week).map((day)=>{
                const daySchedule = schedule?.find((value)=>external_dayjs_default()(value.date).isSame(day));
                const places = isGroupType ? daySchedule?.numberOfFreeCount : maxNumberOfParticipants * (daySchedule?.timeList?.length ?? 0);
                return {
                    caption: day.month() == monthDate.month() ? day.format("D") : undefined,
                    date: day.toDate(),
                    selected: day.isSame(value),
                    places: places ?? 0
                };
            }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        monthDate,
        schedule,
        value
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CalendarMonthWrapper, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CalendarCaption, {
                children: [
                    onClickPrev && hasPreviousMonth && /*#__PURE__*/ jsx_runtime_.jsx(CalendarCaptionButton, {
                        onClick: onClickPrev,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowLeftIcon, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            monthDate.format("MMMM"),
                            " ",
                            year
                        ]
                    }),
                    onClickNext && /*#__PURE__*/ jsx_runtime_.jsx(CalendarCaptionButton, {
                        onClick: onClickNext,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowRightIcon/* default */.Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CalendarWeekDayRow, {
                children: weekDays.map((weekDay)=>/*#__PURE__*/ jsx_runtime_.jsx(CalendarWeekDay, {
                        children: weekDay
                    }, weekDay + monthDate.month()))
            }),
            monthWeeks.map((monthWeek)=>/*#__PURE__*/ jsx_runtime_.jsx(CalendarWeek, {
                    children: monthWeek.map((monthDay)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CalendarDay, {
                            onClick: ()=>monthDay.places && onChange(monthDay.date),
                            selected: monthDay.selected,
                            selectable: selectable,
                            empty: !monthDay.caption,
                            hasPlaces: !!monthDay.places,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: monthDay.caption
                                }),
                                monthDay.places && monthDay.caption ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CalendarDayPlaces, {
                                    children: [
                                        monthDay.places,
                                        " ",
                                        (0,pluralizationFn/* pluralizationFn */.$)(monthDay.places, [
                                            "место",
                                            "места",
                                            "мест"
                                        ])
                                    ]
                                }) : null
                            ]
                        }, monthDay.date.getDay() + monthDate.month());
                    })
                }, monthWeek.map(({ caption  })=>caption).join()))
        ]
    });
};
/* harmony default export */ const components_CalendarMonth = (CalendarMonth);

// EXTERNAL MODULE: ./modules/core/hooks/useMatchMedia.ts
var useMatchMedia = __webpack_require__(40152);
// EXTERNAL MODULE: ./modules/core/styles/mediaQueries.ts
var mediaQueries = __webpack_require__(80514);
;// CONCATENATED MODULE: ./modules/core/components/Calendar/index.tsx








const Calendar = ({ numOfMonths , schedule , value , onChange , maxNumberOfParticipants , isGroupType  })=>{
    const isScreenXs = (0,useMatchMedia/* default */.Z)(`(max-width: ${mediaQueries/* breakpoints.xs */.AV.xs}px)`);
    const [startMonth, setStartMonth] = (0,external_react_.useState)(external_dayjs_default()(new Date()));
    const numOfMonthsRender = isScreenXs ? 1 : numOfMonths;
    const monthYear = (0,external_react_.useMemo)(()=>{
        const monthYear = [];
        let currentMonth = startMonth;
        let monthCounter = 0;
        while(monthCounter < numOfMonthsRender){
            monthYear.push({
                month: currentMonth.month(),
                year: currentMonth.year()
            });
            currentMonth = currentMonth.add(1, "month");
            monthCounter += 1;
        }
        return monthYear;
    }, [
        numOfMonthsRender,
        startMonth
    ]);
    const handleSelectDate = (date)=>{
        if (onChange) {
            onChange(date);
        }
    };
    const hasPreviousMonth = startMonth.startOf("month").isAfter(external_dayjs_default()(new Date()).startOf("month"));
    const handleClickPrev = ()=>setStartMonth(startMonth.subtract(1, "month"));
    const handleClickNext = ()=>setStartMonth(startMonth.add(1, "month"));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CalendarWrapper, {
        children: [
            !isScreenXs && (hasPreviousMonth ? /*#__PURE__*/ jsx_runtime_.jsx(CalendarButton, {
                $left: true,
                onClick: handleClickPrev,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowLeftIcon, {
                    color: "white"
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx(CalendarButtonPlaceholder, {})),
            monthYear.map(({ month , year  })=>/*#__PURE__*/ jsx_runtime_.jsx(components_CalendarMonth, {
                    month: month,
                    year: year,
                    selectable: !!onChange,
                    schedule: schedule,
                    value: value,
                    onChange: handleSelectDate,
                    onClickPrev: isScreenXs ? handleClickPrev : undefined,
                    onClickNext: isScreenXs ? handleClickNext : undefined,
                    maxNumberOfParticipants: maxNumberOfParticipants,
                    hasPreviousMonth: hasPreviousMonth,
                    isGroupType: isGroupType
                }, `${month}-${year}`)),
            !isScreenXs && /*#__PURE__*/ jsx_runtime_.jsx(CalendarButton, {
                onClick: handleClickNext,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowRightIcon/* default */.Z, {
                    color: "white"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Calendar = (Calendar);


/***/ }),

/***/ 81489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RS": () => (/* binding */ termsOfDataUseText),
/* harmony export */   "gD": () => (/* binding */ cancelReservationText),
/* harmony export */   "uV": () => (/* binding */ privacyPolicyText)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

const privacyPolicyText = "Оформляя заказ, вы соглашаетесь с нашей политикой конфиденциальности. Мы защищаем ваши данные и используем их только для обработки заказа и обеспечения качественного обслуживания. Мы не передаем вашу информацию третьим лицам без вашего согласия. Если у вас есть вопросы, свяжитесь с нами.";
const termsOfDataUseText = "Соглашаясь с условиями использования данных, вы разрешаете нам использовать их в соответствии с нашей политикой конфиденциальности. Мы не передаем данные третьим лицам без вашего согласия, кроме случаев, когда это необходимо для выполнения наших обязательств или по закону. Если у вас есть вопросы, свяжитесь с нами.";
const cancelReservationText = (cancellationPolicy)=>{
    const cancellationLocalDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(cancellationPolicy?.freeCancellationDeadlineLocal).format("DD.MM.YYYY HH:mm");
    const initialMessage = "В случае отмены бронирования";
    if (cancellationPolicy?.freeCancellationPossible) {
        return cancellationPolicy?.freeCancellationDeadlineLocal ? `${initialMessage} до ${cancellationLocalDate} (по местному времени отеля) вам возвращается вся оплаченная сумма. При отмене после ${cancellationLocalDate}
      с вас будет удержан штраф в размере ${cancellationPolicy.penaltyAmount} ₽.` : `${initialMessage}  вам возвращается оплаченная сумма.`;
    }
    return `${initialMessage} вам возвращается оплаченная сумма с удержанием штрафа в размере ${cancellationPolicy?.penaltyAmount} ₽.`;
};


/***/ }),

/***/ 54952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_DataTermsAndPrivacyPolicy)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./modules/core/components/icons/CheckMark.tsx
var CheckMark = __webpack_require__(96910);
;// CONCATENATED MODULE: ./modules/core/components/DataTermsAndPrivacyPolicy/styles.ts


const DataTermsAndPrivacyPolicyBlock = external_styled_components_default().div.withConfig({
    componentId: "sc-c99a7ba-0"
})`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  border-radius: 32px;
  ${({ theme  })=>`
    border: 2px solid ${theme.colors.secondary};
  `};
`;
const InfoBlock = external_styled_components_default().div.withConfig({
    componentId: "sc-c99a7ba-1"
})`
  display: grid;
  grid-template-columns: 5% 95%;
  grid-column-gap: 15px;
  grid-row-gap: 4px;
  grid-row: 2;
`;
const CheckMarkContainer = external_styled_components_default()(CheckMark/* default */.Z).withConfig({
    componentId: "sc-c99a7ba-2"
})`
  align-self: center;
`;
const InfoBlockTitle = external_styled_components_default().h3.withConfig({
    componentId: "sc-c99a7ba-3"
})`
  white-space: nowrap;
  grid-column: 2;
  ${({ theme  })=>`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
  `};
`;
const InfoBlockDescription = external_styled_components_default().h4.withConfig({
    componentId: "sc-c99a7ba-4"
})`
  grid-column: 2;
  ${({ theme  })=>`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.size.body3};
    font-weight: ${theme.font.weight.regular};
  `};
`;

;// CONCATENATED MODULE: ./modules/core/components/DataTermsAndPrivacyPolicy/index.tsx



const DataTermsAndPrivacyPolicy = ({ items  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(DataTermsAndPrivacyPolicyBlock, {
        children: items.map((item, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InfoBlock, {
                children: [
                    item.icon ? item.icon : /*#__PURE__*/ jsx_runtime_.jsx(CheckMarkContainer, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(InfoBlockTitle, {
                        children: item.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InfoBlockDescription, {
                        children: item.text
                    })
                ]
            }, index);
        })
    });
};
/* harmony default export */ const components_DataTermsAndPrivacyPolicy = (DataTermsAndPrivacyPolicy);


/***/ }),

/***/ 22865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 44643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_PriceComponent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./modules/core/components/PriceComponent/styles.ts

const PriceMainTitle = external_styled_components_default().h3.withConfig({
    componentId: "sc-5c378-0"
})`
  ${({ theme  })=>`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle1};
    font-weight: ${theme.font.weight.regular};
  `};
`;
const PriceDataBlock = external_styled_components_default().div.withConfig({
    componentId: "sc-5c378-1"
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`;
const PriceDataTitle = external_styled_components_default().h4.withConfig({
    componentId: "sc-5c378-2"
})`
  ${({ theme  })=>`
    color: #4F4F4F;
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.regular};
  `};
`;
const PriceDataValue = external_styled_components_default().h4.withConfig({
    componentId: "sc-5c378-3"
})`
  ${({ theme  })=>`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.regular};
  `};
`;
const PriceLine = external_styled_components_default().span.withConfig({
    componentId: "sc-5c378-4"
})`
  width: 100%;
  height: 1px;
  background: #8daec1;
`;
const PriceBlock = external_styled_components_default().div.withConfig({
    componentId: "sc-5c378-5"
})`
  display: flex;
  padding: 24px;
  border-radius: 32px;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  background: #c6e1f3;
  height: auto;
`;

;// CONCATENATED MODULE: ./modules/core/components/PriceComponent/index.tsx



const PriceComponent = ({ upSection , downSection  })=>{
    const total = downSection?.list.reduce((acc, curr)=>acc + curr?.price, 0);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceBlock, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(PriceMainTitle, {
                        children: "Стоимость"
                    }),
                    upSection.list.map((el)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceDataBlock, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceDataTitle, {
                                    children: [
                                        el.listTitle,
                                        ":"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceDataValue, {
                                    children: [
                                        el.price,
                                        " ₽"
                                    ]
                                })
                            ]
                        }, el.listTitle))
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PriceLine, {}),
            downSection && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceDataBlock, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(PriceMainTitle, {
                                children: "Итого"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceMainTitle, {
                                children: [
                                    total,
                                    " ₽"
                                ]
                            })
                        ]
                    }),
                    downSection?.list.map((el)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceDataBlock, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceDataTitle, {
                                    children: [
                                        el.listTitle,
                                        ":"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceDataValue, {
                                    children: [
                                        el.price,
                                        " ₽"
                                    ]
                                })
                            ]
                        }, el.listTitle))
                ]
            })
        ]
    });
};
/* harmony default export */ const components_PriceComponent = (PriceComponent);


/***/ }),

/***/ 13851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ArrowRightIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            stroke: props.color === "white" ? "#ffffff" : "#222121",
            strokeLinecap: "round",
            strokeWidth: 2,
            d: "m7 2 9.293 9.293a1 1 0 0 1 0 1.414L7 22"
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowRightIcon);


/***/ }),

/***/ 96910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CheckMark = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 12,
        height: 12,
        fill: "none",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            stroke: "#8DAEC1",
            strokeLinecap: "round",
            strokeWidth: 2,
            d: "m11 1-5.43 9.05a1 1 0 0 1-1.457.285L1 8"
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckMark);


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

/***/ 13556:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A0": () => (/* binding */ WitchChildrenCheckbox),
/* harmony export */   "Ak": () => (/* binding */ GuideContacts),
/* harmony export */   "Bc": () => (/* binding */ ErrorMessage),
/* harmony export */   "Fc": () => (/* binding */ RegistrationCloseLabel),
/* harmony export */   "GI": () => (/* binding */ Step2Row),
/* harmony export */   "J1": () => (/* binding */ GuideWrapper),
/* harmony export */   "K8": () => (/* binding */ PhotoSection),
/* harmony export */   "R_": () => (/* binding */ ExcursionTextBlock),
/* harmony export */   "Sr": () => (/* binding */ Step2InfoLabel),
/* harmony export */   "Te": () => (/* binding */ InformationTxt),
/* harmony export */   "V8": () => (/* binding */ StepWrapper),
/* harmony export */   "XZ": () => (/* binding */ Checkbox),
/* harmony export */   "Yb": () => (/* binding */ FormContainer),
/* harmony export */   "ai": () => (/* binding */ FormPhoneWrapper),
/* harmony export */   "dN": () => (/* binding */ MultiplyWrapper),
/* harmony export */   "fb": () => (/* binding */ ImageWrapper),
/* harmony export */   "h_": () => (/* binding */ MapContainer),
/* harmony export */   "mR": () => (/* binding */ GuideInfo),
/* harmony export */   "n7": () => (/* binding */ ExcursionTypesSection),
/* harmony export */   "oT": () => (/* binding */ MapTipTitle),
/* harmony export */   "pO": () => (/* binding */ FormSelector),
/* harmony export */   "w5": () => (/* binding */ RegistrationClose),
/* harmony export */   "yt": () => (/* binding */ FormInput)
/* harmony export */ });
/* unused harmony export Divider */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_home_components_Filters_MobileFilters_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30089);
/* harmony import */ var _modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24062);
/* harmony import */ var _modules_core_components_inputs_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_home_components_Filters_MobileFilters_styles__WEBPACK_IMPORTED_MODULE_1__]);
_modules_home_components_Filters_MobileFilters_styles__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const StepWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-aa63a27d-0"
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  margin-top: 32px;
`;
const MapTipTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-aa63a27d-1"
})`
  color: #1d7abd;
`;
const ExcursionTextBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-aa63a27d-2"
})`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const FormInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-aa63a27d-3"
})`
  padding-bottom: 5px;
  flex-basis: 49%;

  ${({ theme , mobileh  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("sm")`
      > div.inputwrapper {
      height: ${mobileh ?? 48}px;
    }
     input {
      padding-bottom: ${mobileh ? 0.4 * mobileh : "10"}px;
    }
     input::placeholder {
      white-space: normal;
    }
    `}
  `}
`;
const FormPhoneWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-aa63a27d-4"
})`
  flex-basis: 49%;
`;
const GuideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-aa63a27d-5"
})`
  display: flex;
  gap: 32px;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("sm")`
     flex-direction: column;
    `}
  `}
`;
const GuideInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-aa63a27d-6"
})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;
`;
const GuideContacts = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-aa63a27d-7"
})`
  display: flex;
  gap: 32px;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("md")`
     flex-direction: column;
    `}
  `}
`;
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-aa63a27d-8"
})`
  width: 100%;
  height: 2px;
  background: #8daec1;
`;
const FormSelector = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_modules_core_components_inputs_Select__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-aa63a27d-9"
})`
  flex-basis: 49%;

  & .optionsMenu {
    max-height: 200px;
    overflow-y: scroll;
    ${(props)=>props.theme.scrollbar.thinSecondary}
  }

  ${({ theme , mobileh , error  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    .error {
      bottom: -18px;
    }

    ${theme.media.down("sm")`
   .selector {
    height: ${mobileh ?? 48}px;
    padding-right: 20px;
  }
  `}
  `}
`;
const MultiplyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-aa63a27d-10"
})`
  display: block;
  position: relative;
  flex-basis: 49%;
  width: 100%;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("md")`
     display: flex;
     flex-direction: column;
    `}
  `}
`;
const Step2Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-aa63a27d-11"
})`
  display: flex;
  gap: 24px;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("lg")`
     flex-direction: column;
    `}
  `}
`;
const ExcursionTypesSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-aa63a27d-12"
})`
  display: flex;
  flex-direction: column-reverse;
  gap: 24px;
`;
const RegistrationClose = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-aa63a27d-13"
})`
  display: flex;
  gap: 9px;
  flex-direction: column;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("md")`
      gap: 9px;
  `}
  `}
`;
const RegistrationCloseLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
    componentId: "sc-aa63a27d-14"
})`
  font-size: 20px;
  font-weight: 400;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    font-family: ${theme.font.family.gothicMedium};
    ${theme.media.down("lg")`
    `}
  `}
`;
const Step2InfoLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-aa63a27d-15"
})`
  color: #8daec1;
  font-size: 14px;
`;
const WitchChildrenCheckbox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_modules_home_components_Filters_MobileFilters_styles__WEBPACK_IMPORTED_MODULE_1__/* .FilterCheckbox */ .TG).withConfig({
    componentId: "sc-aa63a27d-16"
})`
  position: absolute;
  top: 0;
  right: 0;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("md")`
      position: static;
      align-self: start;
    `}
  `}
`;
const Checkbox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_modules_home_components_Filters_MobileFilters_styles__WEBPACK_IMPORTED_MODULE_1__/* .FilterCheckbox */ .TG).withConfig({
    componentId: "sc-aa63a27d-17"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    .checkboxLabel {
      color: #222121;
      font-family: ${theme.font.family.gothicBook};
      font-size: 16px;
    }
    ${theme.media.down("sm")`
      align-items: flex-start;
      svg {
        margin-top: 10px;
      }
    `}
  `}
`;
const MapContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-aa63a27d-18"
})`
  width: 100%;
  height: 400px;
  position: relative;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("sm")`
    
    `}
  `}
`;
const InformationTxt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-aa63a27d-19"
})`
  color: #8daec1;
  font-size: 16px;
  line-height: 22px;

  span {
    color: #222121;
  }
`;
const PhotoSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-aa63a27d-20"
})`
  display: flex;
  gap: 16px;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("sm")`
    flex-direction: column;
    `}
  `};
`;
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-aa63a27d-21"
})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("sm")`
    width: 100%;
    `}
  `};
`;
const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-aa63a27d-22"
})`
  color: red;
  font-size: 14px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
    componentId: "sc-aa63a27d-23"
})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74338:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_components_Calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75797);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45641);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94691);
/* harmony import */ var _CreateExcursionForm_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13556);
/* harmony import */ var _modules_core_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80514);
/* harmony import */ var _modules_core_hooks_useMatchMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40152);
/* harmony import */ var _modules_core_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96894);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _CreateExcursionForm_styles__WEBPACK_IMPORTED_MODULE_6__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _CreateExcursionForm_styles__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const BookingStepOne = ({ schedule , maxNumberOfParticipants , isGroupType  })=>{
    const { control , formState: { errors  } , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
    const isSmallScreen = (0,_modules_core_hooks_useMatchMedia__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(`(max-width: ${_modules_core_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__/* .breakpoints.smTab */ .AV.smTab}px)`);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (router.query.selectedDate) {
            setValue("date", router.query.selectedDate);
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CreateExcursionForm_styles__WEBPACK_IMPORTED_MODULE_6__/* .StepWrapper */ .V8, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_4__.Controller, {
            name: "date",
            control: control,
            render: ({ field: { value , onChange  } , fieldState: { error  }  })=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_5__/* .CalendarWrapper */ .QH, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Calendar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            numOfMonths: isSmallScreen ? 1 : 2,
                            maxNumberOfParticipants: maxNumberOfParticipants,
                            schedule: schedule,
                            isGroupType: isGroupType,
                            value: value ? new Date(value) : undefined,
                            onChange: (data)=>{
                                onChange(dayjs__WEBPACK_IMPORTED_MODULE_2___default()(data).format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_9__/* .DEFAULT_DATE_FORMAT */ .K_));
                                setValue("time", "");
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_5__/* .ChosenDate */ .ND, {
                            children: [
                                "Выбранная дата: ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: value
                                })
                            ]
                        }),
                        value ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_4__.Controller, {
                            name: "time",
                            control: control,
                            render: ({ field  })=>{
                                const options = schedule.find((el)=>el.date === value)?.timeList.map((el)=>({
                                        value: el.time,
                                        title: el.time
                                    }));
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .FormSelector */ .pO, {
                                    label: "Время",
                                    options: options,
                                    style: {
                                        marginTop: "32px"
                                    },
                                    ...field,
                                    value: `${field.value}`,
                                    error: errors.time?.message,
                                    onChange: (value)=>{
                                        field.onChange(value);
                                    },
                                    placeholder: "Выберите время",
                                    mobileh: 68
                                });
                            }
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .ErrorMessage */ .Bc, {
                            children: errors.date?.message
                        })
                    ]
                });
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingStepOne);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64447:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45641);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94691);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89882);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const BookingStepThree = ({ duration  })=>{
    const { register , control , getFieldState , getValues  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
    const { date , time , firstName , lastName , phone , email , bookingComments , adultCount , childrenCount  } = getValues();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .StepWrapper */ .V8, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .Step3Section */ .ly, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldWrapper */ .n2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTitle */ .m8, {
                                children: "Дата"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTxt */ .sI, {
                                children: dayjs__WEBPACK_IMPORTED_MODULE_4___default()(date).format("DD MMM YYYY")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldWrapper */ .n2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTitle */ .m8, {
                                children: "Время"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTxt */ .sI, {
                                children: time
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldWrapper */ .n2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTitle */ .m8, {
                                children: "Длительность"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTxt */ .sI, {
                                children: [
                                    duration,
                                    " ",
                                    (0,_modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_6__/* .pluralizationFn */ .$)(duration, [
                                        "час",
                                        "часа",
                                        "часов"
                                    ])
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldWrapper */ .n2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTitle */ .m8, {
                                children: "Количество взрослых"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTxt */ .sI, {
                                children: adultCount
                            })
                        ]
                    }),
                    childrenCount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldWrapper */ .n2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTitle */ .m8, {
                                children: "Количество детей младше 7 лет"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTxt */ .sI, {
                                children: childrenCount
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .Step3Section */ .ly, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldWrapper */ .n2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTitle */ .m8, {
                                children: "Имя"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTxt */ .sI, {
                                children: [
                                    firstName,
                                    " ",
                                    lastName
                                ]
                            })
                        ]
                    }),
                    phone && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldWrapper */ .n2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTitle */ .m8, {
                                children: "Телефон"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTxt */ .sI, {
                                children: [
                                    "+",
                                    phone
                                ]
                            })
                        ]
                    }),
                    email && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldWrapper */ .n2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTitle */ .m8, {
                                children: "Электронная почта"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTxt */ .sI, {
                                children: email
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .Step3Section */ .ly, {
                children: bookingComments && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldWrapper */ .n2, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTitle */ .m8, {
                            children: "Комментарий"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .FieldTxt */ .sI, {
                            style: {
                                whiteSpace: "pre-wrap"
                            },
                            children: bookingComments
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingStepThree);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 84120:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94691);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45641);
/* harmony import */ var _modules_core_components_inputs_PhoneInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79461);
/* harmony import */ var _modules_core_components_inputs_TextareaStyled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88000);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _modules_core_components_inputs_PhoneInput__WEBPACK_IMPORTED_MODULE_4__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _modules_core_components_inputs_PhoneInput__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const BookingStepTwo = ({ withChildren , schedule , maxNumberOfParticipants , isGroupType , userProfile  })=>{
    const { register , control , reset , setValue , trigger , formState: { errors  } , getValues  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
    const { date , time  } = getValues();
    const freePlaces = !isGroupType ? maxNumberOfParticipants : schedule.find((el)=>el.date === date)?.timeList.find((slot)=>slot.time === time)?.numberOfFreeCount;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (userProfile) {
            reset((values)=>({
                    ...values,
                    firstName: userProfile.firstName,
                    lastName: userProfile.lastName,
                    email: userProfile.email,
                    phone: userProfile.phone ? userProfile.phone : values.phone
                }));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        userProfile
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StepWrapper */ .V8, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .Step2Row */ .GI, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FormInput */ .yt, {
                        label: "Фамилия",
                        ...register("lastName"),
                        placeholder: "Введите вашу фамилию",
                        error: errors.lastName?.message
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FormInput */ .yt, {
                        label: "Имя",
                        ...register("firstName"),
                        placeholder: "Введите ваше имя",
                        error: errors.firstName?.message
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FormPhoneWrapper */ .ai, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                            name: "phone",
                            control: control,
                            render: ({ field  })=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_inputs_PhoneInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    label: "Номер телефона",
                                    placeholder: "Введите ваш номер телефона",
                                    onChange: field.onChange,
                                    error: errors.phone?.message,
                                    phoneNumber: field.value
                                });
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FormInput */ .yt, {
                        label: "Email",
                        ...register("email"),
                        placeholder: "Введите ваш email",
                        error: errors.email?.message
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FormInput */ .yt, {
                        label: "Количество взрослых",
                        ...register("adultCount"),
                        placeholder: "Введите количество участников",
                        error: errors.adultCount?.message,
                        onChange: (e)=>{
                            const currentValue = Number(e.target.value.replace(/[^0-9]/g, ""));
                            setValue("adultCount", currentValue);
                            void trigger([
                                "adultCount",
                                "childrenCount"
                            ]);
                        },
                        fullWidth: !withChildren
                    }),
                    withChildren && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FormInput */ .yt, {
                        label: "Количество детей младше 7 лет",
                        ...register("childrenCount"),
                        placeholder: "Введите количество детей",
                        error: errors.childrenCount?.message,
                        onChange: (e)=>{
                            const currentValue = Number(e.target.value.replace(/[^0-9]/g, ""));
                            setValue("childrenCount", currentValue);
                            void trigger([
                                "childrenCount",
                                "adultCount"
                            ]);
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .MaximumTxt */ .Mt, {
                children: `Максимум ${freePlaces} человек`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_inputs_TextareaStyled__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                label: "Комментарий",
                ...register("bookingComments"),
                placeholder: "Расскажите о себе",
                error: errors.bookingComments?.message
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingStepTwo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ step1Schema),
/* harmony export */   "hD": () => (/* binding */ step2Schema)
/* harmony export */ });
/* unused harmony export numberValidation */
/* harmony import */ var _modules_core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38445);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);


const numberValidation = (totalMax, minValue)=>yup__WEBPACK_IMPORTED_MODULE_1__.number().transform((value, originalValue)=>{
        return originalValue === "" ? undefined : value;
    }).min(minValue, `Минимальное количество участников ${minValue}`).max(totalMax, `Максимальное количество участников ${totalMax}`).typeError("Только цифры").required("Введите количество участников");
const totalParticipantsValidation = (maxParticipants)=>yup__WEBPACK_IMPORTED_MODULE_1__.number().transform((value, originalValue)=>{
        return originalValue === "" ? undefined : value;
    }).typeError("Только цифры").test("total-participants", `максимальное количество участников ${maxParticipants}`, function(value) {
        const adultCount = this.parent.adultCount || 0;
        const childrenCount = value || 0;
        const totalParticipants = adultCount + childrenCount;
        return totalParticipants <= maxParticipants;
    });
const step1Schema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    date: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Выберите дату"),
    time: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Выберите время")
});
const step2Schema = (phoneLen, maxParticipants)=>yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
        firstName: (0,_modules_core_services__WEBPACK_IMPORTED_MODULE_0__/* .nameValidationSchema */ .Fw)("Введите ваше имя"),
        lastName: (0,_modules_core_services__WEBPACK_IMPORTED_MODULE_0__/* .nameValidationSchema */ .Fw)("Введите вашу фамилию"),
        phone: (0,_modules_core_services__WEBPACK_IMPORTED_MODULE_0__/* .phoneValidationSchema */ .yV)(10 + phoneLen),
        email: _modules_core_services__WEBPACK_IMPORTED_MODULE_0__/* .emailValidationSchema */ .Dp,
        adultCount: numberValidation(maxParticipants, 1),
        childrenCount: totalParticipantsValidation(maxParticipants),
        bookingComments: _modules_core_services__WEBPACK_IMPORTED_MODULE_0__/* .commentsValidationSchema */ .K3
    });


/***/ }),

/***/ 86976:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45641);
/* harmony import */ var _modules_core_components_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52901);
/* harmony import */ var _modules_core_components_HeaderWithSteps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13435);
/* harmony import */ var _modules_core_components_StickyFormFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32762);
/* harmony import */ var _modules_core_hooks_useMatchMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40152);
/* harmony import */ var _modules_core_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80514);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68270);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61908);
/* harmony import */ var _formValidations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45300);
/* harmony import */ var _BookingStepOne__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74338);
/* harmony import */ var _BookingStepTwo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(84120);
/* harmony import */ var _BookingStepThree__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(64447);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(94691);
/* harmony import */ var _modules_core_components_PriceComponent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(44643);
/* harmony import */ var _modules_core_components_DataTermsAndPrivacyPolicy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(54952);
/* harmony import */ var _modules_core_components_DataTermsAndPrivacyPolicy_content__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(81489);
/* harmony import */ var _modules_booking_apiBookingSlice__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(43180);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(57441);
/* harmony import */ var _modules_payment_paymentSlice__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(37574);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(46555);
/* harmony import */ var _modules_auth_types__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(19218);
/* harmony import */ var _modules_excursion_components_ExcursionFilter_ExcursionFilterSlice__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(81985);
/* harmony import */ var _modules_excursion_excursion_types__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(12439);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(30838);
/* harmony import */ var _modules_core_helpers_excursionQueryHandler__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(26239);
/* harmony import */ var _modules_core_hooks_useFormStepsWithHistory__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(60268);
/* harmony import */ var _excursionSlice__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(83344);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_11__, _BookingStepOne__WEBPACK_IMPORTED_MODULE_13__, _BookingStepTwo__WEBPACK_IMPORTED_MODULE_14__, _BookingStepThree__WEBPACK_IMPORTED_MODULE_15__, uuid__WEBPACK_IMPORTED_MODULE_23__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_11__, _BookingStepOne__WEBPACK_IMPORTED_MODULE_13__, _BookingStepTwo__WEBPACK_IMPORTED_MODULE_14__, _BookingStepThree__WEBPACK_IMPORTED_MODULE_15__, uuid__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);































const pageSubtitles = [
    "Выберите дату и время экскурсии",
    "Укажите ваши контактные данные",
    "Проверьте бронирование"
];
const BookingExcursion = ({ excursionData  })=>{
    const { maxNumberOfParticipants , adultPrice , withChildren , childrenPrice , name , schedule , duration , type  } = excursionData;
    const totalSteps = 3;
    const dispatch = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_21__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const bookingFormData = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_excursionSlice__WEBPACK_IMPORTED_MODULE_30__/* .selectBookingExcursionForm */ .pz);
    const { currentStep , setStep  } = (0,_modules_core_hooks_useFormStepsWithHistory__WEBPACK_IMPORTED_MODULE_29__/* .useFormStepsWithHistory */ .g)(totalSteps, !bookingFormData?.date, true);
    const filterExcursionData = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_21__/* .useAppSelector */ .C)(_modules_excursion_components_ExcursionFilter_ExcursionFilterSlice__WEBPACK_IMPORTED_MODULE_25__/* .selectExcursionFilterValues */ .tE);
    const { queriesString: excursionPaymentParams  } = (0,_modules_core_helpers_excursionQueryHandler__WEBPACK_IMPORTED_MODULE_28__/* .excursionQueryHandler */ .k)(filterExcursionData, _modules_core_helpers_excursionQueryHandler__WEBPACK_IMPORTED_MODULE_28__/* .ExcursionQueryLocation.payment */ .y.payment);
    const { id  } = router.query;
    const isScreenXs = (0,_modules_core_hooks_useMatchMedia__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(`(max-width: ${_modules_core_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__/* .breakpoints.xs */ .AV.xs}px)`);
    const userProfile = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_21__/* .useAppSelector */ .C)(_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_9__/* .selectProfileData */ .NI);
    const countryCode = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_9__/* .selectCountryCode */ .eV);
    const [bookExcursion, { isLoading: isSendingBookRequest  }] = (0,_modules_booking_apiBookingSlice__WEBPACK_IMPORTED_MODULE_20__/* .useBookExcursionMutation */ .lq)();
    const schema = currentStep === 1 ? _formValidations__WEBPACK_IMPORTED_MODULE_12__/* .step1Schema */ .F : (0,_formValidations__WEBPACK_IMPORTED_MODULE_12__/* .step2Schema */ .hD)(countryCode.codeNum.length, maxNumberOfParticipants);
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_11__.yupResolver)(schema),
        mode: "onChange",
        defaultValues: {
            ...bookingFormData,
            excursionId: Number(id),
            idempotenceKey: (0,uuid__WEBPACK_IMPORTED_MODULE_23__.v4)()
        }
    });
    const { handleSubmit , formState: { errors  } , setError , trigger , getValues , watch  } = methods;
    const adults = watch("adultCount");
    const children = watch("childrenCount");
    const paymentResponseHandler = async (response)=>{
        if (response.success) {
            const { bookingId , ...rest } = response.data;
            dispatch((0,_modules_payment_paymentSlice__WEBPACK_IMPORTED_MODULE_22__/* .setPaymentData */ .Ds)({
                ...rest
            }));
            const replacedUrl = userProfile ? `/profile/booking/excursion/${bookingId}` : `/booking/excursion/${id}/auto-authorized-booking?bookingId=${bookingId}`;
            await router.replace(replacedUrl);
            await router.push(`/booking/excursion/${id}/payment?bookingId=${bookingId}&${excursionPaymentParams}`);
        }
    };
    const onSubmit = async (data)=>{
        try {
            const response = await bookExcursion(data).unwrap();
            await paymentResponseHandler(response);
            dispatch((0,_excursionSlice__WEBPACK_IMPORTED_MODULE_30__/* .setBookingExcursionForm */ .Jd)({}));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            error.data.data.forEach((item)=>{
                setError(item.field, item);
            });
            if (error.status === 401 && !error.data.isBlocked) {
                dispatch((0,_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_9__/* .setAuthModal */ .$_)(_modules_auth_types__WEBPACK_IMPORTED_MODULE_24__/* .AuthType.LOGIN */ .G.LOGIN));
            }
            setStep(2);
        }
    };
    const handleNextStep = async ()=>{
        try {
            const isFormValid = await trigger();
            await schema.validate(getValues(), {
                abortEarly: false
            });
            // Move to the next step if validation passes
            if (isFormValid) {
                dispatch((0,_excursionSlice__WEBPACK_IMPORTED_MODULE_30__/* .setBookingExcursionForm */ .Jd)(getValues()));
                setStep(currentStep + 1);
            }
        } catch (error) {}
    };
    const handleBackStep = ()=>{
        setStep(currentStep - 1);
    };
    const currentPrices = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            upSection: {
                title: "Стоимость",
                list: [
                    {
                        listTitle: type === _modules_excursion_excursion_types__WEBPACK_IMPORTED_MODULE_26__/* .ExcursionTypes.INDIVIDUAL */ .o.INDIVIDUAL ? "За экскурсию" : "Взрослый",
                        price: adultPrice || 0
                    },
                    ...withChildren && type === _modules_excursion_excursion_types__WEBPACK_IMPORTED_MODULE_26__/* .ExcursionTypes.GROUP */ .o.GROUP ? [
                        {
                            listTitle: "Ребенок младше 7л.",
                            price: childrenPrice || 0
                        }
                    ] : []
                ]
            },
            downSection: (adults || children) && type === _modules_excursion_excursion_types__WEBPACK_IMPORTED_MODULE_26__/* .ExcursionTypes.GROUP */ .o.GROUP ? {
                ...adults || children ? {
                    title: "Итого",
                    list: [
                        ...adults ? [
                            {
                                listTitle: `${adults}х Взрослый`,
                                price: adultPrice * adults
                            }
                        ] : [],
                        ...children && childrenPrice && withChildren ? [
                            {
                                listTitle: `${children}х Ребенок младше 7л.`,
                                price: childrenPrice * children
                            }
                        ] : []
                    ]
                } : {}
            } : undefined
        }), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        excursionData,
        adults,
        children
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const infoBlock = document.querySelector(".infoBlock");
        const footerBtns = document.querySelector(".footerBtns");
        if (isScreenXs && infoBlock && footerBtns) {
            infoBlock.insertBefore(footerBtns, infoBlock.children[1]);
        }
    }, [
        isScreenXs
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, {
        ...methods,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Spinner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                showSpinner: isSendingBookRequest
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_16__/* .FormContainer */ .Yb, {
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_16__/* .BodyContainer */ .we, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_16__/* .MainContainer */ .tz, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_HeaderWithSteps__WEBPACK_IMPORTED_MODULE_4__/* .HeaderWithSteps */ .k, {
                                        title: name,
                                        subTitle: pageSubtitles[currentStep - 1],
                                        currentStep: currentStep,
                                        stepsAmount: totalSteps
                                    }),
                                    currentStep === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BookingStepOne__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        schedule: schedule,
                                        maxNumberOfParticipants: maxNumberOfParticipants,
                                        isGroupType: type === _types__WEBPACK_IMPORTED_MODULE_27__/* .ExcursionType.GROUP */ .CN.GROUP
                                    }),
                                    currentStep === 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BookingStepTwo__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        withChildren: withChildren,
                                        schedule: schedule,
                                        maxNumberOfParticipants: maxNumberOfParticipants,
                                        isGroupType: type === _types__WEBPACK_IMPORTED_MODULE_27__/* .ExcursionType.GROUP */ .CN.GROUP,
                                        userProfile: userProfile
                                    }),
                                    currentStep === 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BookingStepThree__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        duration: duration
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_16__/* .BookingFormAdditionalData */ .Xv, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PriceComponent__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        upSection: currentPrices.upSection,
                                        downSection: currentPrices.downSection
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_DataTermsAndPrivacyPolicy__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        items: [
                                            {
                                                title: "Политика конфиденциальности",
                                                text: _modules_core_components_DataTermsAndPrivacyPolicy_content__WEBPACK_IMPORTED_MODULE_19__/* .privacyPolicyText */ .uV
                                            },
                                            {
                                                title: "Условия использования данных",
                                                text: _modules_core_components_DataTermsAndPrivacyPolicy_content__WEBPACK_IMPORTED_MODULE_19__/* .termsOfDataUseText */ .RS
                                            }
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_StickyFormFooter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: `footerBtns step${currentStep}`,
                        booking: true,
                        totalSteps,
                        currentStep,
                        handleNextStep,
                        handleBackStep
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingExcursion);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 94691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bc": () => (/* binding */ ErrorMessage),
/* harmony export */   "GI": () => (/* binding */ Step2Row),
/* harmony export */   "Mt": () => (/* binding */ MaximumTxt),
/* harmony export */   "ND": () => (/* binding */ ChosenDate),
/* harmony export */   "QH": () => (/* binding */ CalendarWrapper),
/* harmony export */   "V8": () => (/* binding */ StepWrapper),
/* harmony export */   "Xv": () => (/* binding */ BookingFormAdditionalData),
/* harmony export */   "Yb": () => (/* binding */ FormContainer),
/* harmony export */   "ai": () => (/* binding */ FormPhoneWrapper),
/* harmony export */   "ly": () => (/* binding */ Step3Section),
/* harmony export */   "m8": () => (/* binding */ FieldTitle),
/* harmony export */   "n2": () => (/* binding */ FieldWrapper),
/* harmony export */   "pO": () => (/* binding */ FormSelector),
/* harmony export */   "sI": () => (/* binding */ FieldTxt),
/* harmony export */   "tz": () => (/* binding */ MainContainer),
/* harmony export */   "we": () => (/* binding */ BodyContainer),
/* harmony export */   "yt": () => (/* binding */ FormInput)
/* harmony export */ });
/* unused harmony export Divider */
/* harmony import */ var _modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24062);
/* harmony import */ var _modules_core_components_inputs_Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8825);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().form.withConfig({
    componentId: "sc-2ffe6967-0"
})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const BodyContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-2ffe6967-1"
})`
  display: flex;
  gap: 52px;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
    ${theme.media.down("md")`
      flex-direction: column;
      gap: 24px;
  `}
  `}
`;
const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-2ffe6967-2"
})`
  display: flex;
  gap: 32px;
  flex-direction: column;
  width: 100%;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
    ${theme.media.down("md")`
      gap: 0px;
  `}
  `}
`;
const StepWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-2ffe6967-3"
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  margin-top: 32px;
`;
const BookingFormAdditionalData = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.attrs({
    className: "infoBlock"
}).withConfig({
    componentId: "sc-2ffe6967-4"
})`
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
    width: min-content;
    max-width: 328px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    ${theme.media.down("md")`
      max-width: 100%;
      flex-direction: row;
      width: 100%;
      gap: 24px;
    `}

    ${theme.media.down("sm")`
      flex-direction: column;
      gap: 24px;
    `}
  `}
`;
const ChosenDate = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
    componentId: "sc-2ffe6967-5"
})`
  color: #222121;
  font-size: 16px;
  line-height: 22px;
  span {
    color: #27ae60;
  }
`;
const CalendarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-2ffe6967-6"
})`
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: start;
`;
const FormSelector = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_modules_core_components_inputs_Select__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-2ffe6967-7"
})`
  width: 288px;
  .optionsMenu {
    overflow: inherit;
  }

  ${({ theme , mobileh , error  })=>styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
    ${theme.media.down("sm")`
     .selector {
      height: ${mobileh ?? 48}px;
      padding-right: 20px;
    }
    `}
  `}
`;
const Step2Row = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-2ffe6967-8"
})`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
  position: relative;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
    ${theme.media.down("sm")`
     flex-direction: column;
    `}
  `}
`;
const FormInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).withConfig({
    componentId: "sc-2ffe6967-9"
})`
  flex-basis: ${({ fullWidth  })=>fullWidth ? "100%" : "48%"};
  ${({ theme , mobileh  })=>styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
    ${theme.media.down("sm")`
      > div.inputwrapper {
      height: ${mobileh ?? 48}px;
    }
    input {
      margin-top: -${mobileh ? 0.4 * mobileh : 0}px;
    }
     input::placeholder {
      white-space: normal;
    }
    `}
  `}
`;
const FormPhoneWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-2ffe6967-10"
})`
  flex-basis: 48%;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
    ${theme.media.down("sm")`
    width: 100%;
    `}
  `}
`;
const Step3Section = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-2ffe6967-11"
})`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
    ${theme.media.down("sm")`
     flex-direction: column;
    `}
  `}
`;
const FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-2ffe6967-12"
})`
  min-width: 30%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const FieldTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
    componentId: "sc-2ffe6967-13"
})`
  color: #222121;
  font-size: 24px;
  white-space: nowrap;
`;
const FieldTxt = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
    componentId: "sc-2ffe6967-14"
})`
  color: #4f4f4f;
  font-size: 20px;
`;
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-2ffe6967-15"
})`
  height: 2px;
  background: #c6e1f3;
`;
const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
    componentId: "sc-2ffe6967-16"
})`
  color: red;
  font-size: 14px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const MaximumTxt = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
    componentId: "sc-2ffe6967-17"
})`
  margin-top: -32px;
  color: #8daec1;
  font-size: 14px;
`;


/***/ }),

/***/ 12439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ ExcursionTypes),
/* harmony export */   "p": () => (/* binding */ TableStatusEnum)
/* harmony export */ });
var TableStatusEnum;
(function(TableStatusEnum) {
    TableStatusEnum["ACTIVE"] = "ACTIVE";
    TableStatusEnum["DISABLED"] = "DISABLED";
    TableStatusEnum["CHECK"] = "CHECK";
})(TableStatusEnum || (TableStatusEnum = {}));
var ExcursionTypes;
(function(ExcursionTypes) {
    ExcursionTypes["GROUP"] = "GROUP";
    ExcursionTypes["INDIVIDUAL"] = "INDIVIDUAL";
})(ExcursionTypes || (ExcursionTypes = {}));


/***/ }),

/***/ 30089:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TG": () => (/* binding */ FilterCheckbox)
/* harmony export */ });
/* unused harmony exports FilterWrapper, FilterForm, FilterSelect, FilterDateWrapper, FilterDateInput, FilterBTn */
/* harmony import */ var _modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42143);
/* harmony import */ var _modules_core_components_datePickers_DateInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(512);
/* harmony import */ var _modules_core_components_inputs_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8825);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_core_components_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52962);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_core_components_datePickers_DateInput__WEBPACK_IMPORTED_MODULE_1__]);
_modules_core_components_datePickers_DateInput__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const FilterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-d080fa53-0"
})`
  width: 100%;
  height: 100%;
`;
const FilterForm = styled_components__WEBPACK_IMPORTED_MODULE_3___default().form.withConfig({
    componentId: "sc-d080fa53-1"
})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const FilterSelect = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_modules_core_components_inputs_Select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d080fa53-2"
})``;
const FilterDateWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-d080fa53-3"
})`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
const FilterDateInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_modules_core_components_datePickers_DateInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d080fa53-4"
})`
  input {
    padding: 3px 0 0 16px;
  }
`;
const FilterBTn = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_modules_core_components_Buttons_ButtonBasic__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d080fa53-5"
})`
  height: 56px;
  font-size: 20px;
`;
const FilterCheckbox = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_modules_core_components_Checkbox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d080fa53-6"
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

/***/ 12503:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _modules_core_containers_StoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24324);
/* harmony import */ var _modules_excursion_apiExcursionSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6570);
/* harmony import */ var _modules_core_components_ErrorComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22865);
/* harmony import */ var _modules_excursion_booking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86976);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_core_helpers_withLogging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77593);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_excursion_booking__WEBPACK_IMPORTED_MODULE_5__]);
_modules_excursion_booking__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
    componentId: "sc-f91f19b8-0"
})`
  max-width: 1700px;
  padding-bottom: 16px;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_6__.css`
    ${theme.media.down("sm")`
    `}
  `}
`;
const BookingPage = ({ data , errorData  })=>{
    if (!data) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_ErrorComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        status: errorData?.data.status,
        message: errorData?.data.message
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Go2Kavkaz : Бронирование"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageContainer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_excursion_booking__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    excursionData: data
                })
            })
        ]
    });
};
const getServerSideProps = _modules_core_containers_StoreProvider__WEBPACK_IMPORTED_MODULE_2__/* .wrapper.getServerSideProps */ .YS.getServerSideProps((store)=>(0,_modules_core_helpers_withLogging__WEBPACK_IMPORTED_MODULE_8__/* .withLogging */ .o)(async (context)=>{
        const { id  } = context.query;
        const { data , error  } = await store.dispatch(_modules_excursion_apiExcursionSlice__WEBPACK_IMPORTED_MODULE_3__/* .getExcursionByIdTourist.initiate */ .K7.initiate({
            id: Number(id)
        }));
        return {
            props: {
                data: data?.data || null,
                errorData: error || null
            }
        };
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 4195:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowBackIos");

/***/ }),

/***/ 65692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 73280:
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers");

/***/ }),

/***/ 10298:
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers/AdapterDayjs");

/***/ }),

/***/ 85753:
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers/LocalizationProvider");

/***/ }),

/***/ 85828:
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers/locales");

/***/ }),

/***/ 75184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 34335:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 19161:
/***/ ((module) => {

module.exports = require("dayjs/locale/ru");

/***/ }),

/***/ 94166:
/***/ ((module) => {

module.exports = require("dayjs/plugin/localeData");

/***/ }),

/***/ 4424:
/***/ ((module) => {

module.exports = require("dayjs/plugin/toObject");

/***/ }),

/***/ 9416:
/***/ ((module) => {

module.exports = require("dayjs/plugin/weekday");

/***/ }),

/***/ 14799:
/***/ ((module) => {

module.exports = require("graylog2");

/***/ }),

/***/ 45567:
/***/ ((module) => {

module.exports = require("jwt-decode");

/***/ }),

/***/ 35648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 53918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 45732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 64486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 99552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 71109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 87782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 82470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 95566:
/***/ ((module) => {

module.exports = require("next/error");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 73142:
/***/ ((module) => {

module.exports = require("notistack");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 93554:
/***/ ((module) => {

module.exports = require("react-number-format");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 57518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 75609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 61908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 45641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 68680:
/***/ ((module) => {

module.exports = import("react-phone-number-input");;

/***/ }),

/***/ 53445:
/***/ ((module) => {

module.exports = import("react-phone-number-input/locale/en.json");;

/***/ }),

/***/ 46555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1050,5675,1664,7610,2143,8704,8413,6478,7499,679,1985,9511,756,966,9461,6239,347,6674,3180,512,838,3230,4324,6570,3435,8000,1998,3245], () => (__webpack_exec__(12503)));
module.exports = __webpack_exports__;

})();