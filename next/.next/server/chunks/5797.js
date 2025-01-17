"use strict";
exports.id = 5797;
exports.ids = [5797];
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


/***/ })

};
;