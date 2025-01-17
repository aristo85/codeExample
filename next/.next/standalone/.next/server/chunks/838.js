"use strict";
exports.id = 838;
exports.ids = [838];
exports.modules = {

/***/ 30838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CN": () => (/* binding */ ExcursionType),
/* harmony export */   "GK": () => (/* binding */ closingHours),
/* harmony export */   "LT": () => (/* binding */ TravelModeType),
/* harmony export */   "X0": () => (/* binding */ excursionTypes),
/* harmony export */   "fW": () => (/* binding */ timeOptionsArray)
/* harmony export */ });
var TravelModeType;
(function(TravelModeType) {
    TravelModeType["FOOT"] = "FOOT";
    TravelModeType["CAR"] = "CAR";
    TravelModeType["BIKE"] = "BIKE";
    TravelModeType["BUS"] = "BUS";
    TravelModeType["MOTORCYCLE"] = "MOTORCYCLE";
    TravelModeType["BOAT"] = "BOAT";
    TravelModeType["MUSEUM"] = "MUSEUM";
    TravelModeType["IN_DOOR"] = "IN_DOOR";
    TravelModeType["HORSEBACK"] = "HORSEBACK";
})(TravelModeType || (TravelModeType = {}));
var ExcursionType;
(function(ExcursionType) {
    ExcursionType["INDIVIDUAL"] = "INDIVIDUAL";
    ExcursionType["GROUP"] = "GROUP";
})(ExcursionType || (ExcursionType = {}));
const excursionTypes = [
    {
        id: ExcursionType.INDIVIDUAL,
        title: "Индивидуальный",
        subtitle: "Бронирование закрывается сразу после того, как турист оплатил заказ, и становится недоступным для поиска"
    },
    {
        id: ExcursionType.GROUP,
        title: "Групповой",
        subtitle: "Бронирование закрывается, когда все места будут выкуплены, либо когда наступит указанное время."
    }
];
const timeOptionsArray = [
    {
        title: "1 час",
        value: "1"
    },
    {
        title: "1.5 часа",
        value: "1.5"
    },
    {
        title: "2 часа",
        value: "2"
    },
    {
        title: "2.5 часа",
        value: "2.5"
    },
    {
        title: "3 часа",
        value: "3"
    },
    {
        title: "3.5 часа",
        value: "3.5"
    },
    {
        title: "4 часа",
        value: "4"
    },
    {
        title: "4.5 часа",
        value: "4.5"
    },
    {
        title: "5 часов",
        value: "5"
    },
    {
        title: "5.5 часа",
        value: "5.5"
    },
    {
        title: "6 часов",
        value: "6"
    },
    {
        title: "7 часов",
        value: "7"
    },
    {
        title: "8 часов",
        value: "8"
    },
    {
        title: "9 часов",
        value: "9"
    },
    {
        title: "10 часов",
        value: "10"
    },
    {
        title: "11 часов",
        value: "11"
    },
    {
        title: "более 12 часов",
        value: "12"
    }
];
const closingHours = [
    {
        title: "За 1 час",
        value: "1"
    },
    {
        title: "За 2 часа",
        value: "2"
    },
    {
        title: "За 3 часа",
        value: "3"
    },
    {
        title: "За 4 часа",
        value: "4"
    },
    {
        title: "За 5 часов",
        value: "5"
    },
    {
        title: "За 6 часов",
        value: "6"
    },
    {
        title: "За 7 часов",
        value: "7"
    },
    {
        title: "За 8 часов",
        value: "8"
    },
    {
        title: "За 9 часов",
        value: "9"
    },
    {
        title: "За 10 часов",
        value: "10"
    },
    {
        title: "За 11 часов",
        value: "11"
    },
    {
        title: "За 12 часов",
        value: "12"
    },
    {
        title: "За 24 часа",
        value: "24"
    }
];


/***/ })

};
;