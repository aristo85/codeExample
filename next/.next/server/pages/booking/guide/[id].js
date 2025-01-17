"use strict";
(() => {
var exports = {};
exports.id = 9219;
exports.ids = [9219];
exports.modules = {

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

/***/ 76607:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78245);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45641);
/* harmony import */ var _modules_core_components_Calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75797);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_excursion_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30838);
/* harmony import */ var _modules_core_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96894);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const BookingStepOne = ({ schedule , maxNumberOfParticipants , guideDuration  })=>{
    const { control , formState: { errors  } , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StepWrapper */ .V8, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
            name: "date",
            control: control,
            render: ({ field: { value , onChange  } , fieldState: { error  }  })=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .CalendarWrapper */ .QH, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Calendar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            numOfMonths: 2,
                            maxNumberOfParticipants: maxNumberOfParticipants,
                            schedule: schedule,
                            value: value ? new Date(value) : undefined,
                            onChange: (data)=>{
                                onChange(dayjs__WEBPACK_IMPORTED_MODULE_5___default()(data).format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_DATE_FORMAT */ .K_));
                                setValue("time", "");
                                setValue("duration", null);
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .ChosenDate */ .ND, {
                            children: [
                                "Выбранная дата: ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: value
                                })
                            ]
                        }),
                        value ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .CalendarFooterWrapper */ .PI, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                                    name: "time",
                                    control: control,
                                    render: ({ field  })=>{
                                        const options = schedule.find((el)=>el.date === value)?.timeList.map((el)=>({
                                                value: el.time,
                                                title: el.time
                                            }));
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FormSelector */ .pO, {
                                            label: "Время",
                                            options: options,
                                            ...field,
                                            value: field.value?.toString() ?? null,
                                            error: errors.time?.message,
                                            onChange: (value)=>{
                                                field.onChange(value);
                                            },
                                            placeholder: "Выберите время",
                                            mobileh: 68
                                        });
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                                    name: "duration",
                                    control: control,
                                    render: ({ field  })=>{
                                        const durationOptions = _modules_excursion_types__WEBPACK_IMPORTED_MODULE_6__/* .timeOptionsArray.filter */ .fW.filter((el)=>+el.value <= guideDuration);
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FormSelector */ .pO, {
                                            label: "Длительность",
                                            options: durationOptions,
                                            ...field,
                                            value: field.value?.toString() || null,
                                            error: errors.duration?.message,
                                            onChange: (value)=>{
                                                field.onChange(value);
                                            },
                                            placeholder: "Выберите Длительность",
                                            mobileh: 68
                                        });
                                    }
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .ErrorMessage */ .Bc, {
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

/***/ 55838:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78245);
/* harmony import */ var _modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89882);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const BookingStepThree = ()=>{
    const { getValues  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
    const { date , time , firstName , lastName , phone , email , bookingComments , adultCount , childrenCount , duration  } = getValues();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StepWrapper */ .V8, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .Step3Section */ .ly, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldWrapper */ .n2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTitle */ .m8, {
                                children: "Дата"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTxt */ .sI, {
                                children: dayjs__WEBPACK_IMPORTED_MODULE_3___default()(date).format("DD MMM YYYY")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldWrapper */ .n2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTitle */ .m8, {
                                children: "Время"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTxt */ .sI, {
                                children: time
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldWrapper */ .n2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTitle */ .m8, {
                                children: "Длительность"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTxt */ .sI, {
                                children: `${duration} ${duration ? (0,_modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_5__/* .pluralizationFn */ .$)(duration, [
                                    "час",
                                    "часа",
                                    "часов"
                                ]) : ""}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldWrapper */ .n2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTitle */ .m8, {
                                children: "Количество взрослых"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTxt */ .sI, {
                                children: adultCount
                            })
                        ]
                    }),
                    childrenCount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldWrapper */ .n2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTitle */ .m8, {
                                children: "Количество детей младше 7 лет"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTxt */ .sI, {
                                children: childrenCount
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .Divider */ .iz, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .Step3Section */ .ly, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldWrapper */ .n2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTitle */ .m8, {
                                children: "Имя"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTxt */ .sI, {
                                children: [
                                    firstName,
                                    " ",
                                    lastName
                                ]
                            })
                        ]
                    }),
                    phone && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldWrapper */ .n2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTitle */ .m8, {
                                children: "Телефон"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTxt */ .sI, {
                                children: [
                                    "+",
                                    phone
                                ]
                            })
                        ]
                    }),
                    email && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldWrapper */ .n2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTitle */ .m8, {
                                children: "Электронная почта"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTxt */ .sI, {
                                children: email
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .Divider */ .iz, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .Step3Section */ .ly, {
                children: bookingComments && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldWrapper */ .n2, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTitle */ .m8, {
                            children: "Комментарий"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FieldTxt */ .sI, {
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

/***/ 93147:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78245);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45641);
/* harmony import */ var _modules_core_components_inputs_PhoneInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79461);
/* harmony import */ var _modules_core_components_inputs_TextareaStyled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88000);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _modules_core_components_inputs_PhoneInput__WEBPACK_IMPORTED_MODULE_4__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _modules_core_components_inputs_PhoneInput__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const BookingStepTwo = ({ maxNumberOfParticipants , withChildren , userProfile  })=>{
    const { register , control , reset , setValue , trigger , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
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
                            void trigger("adultCount");
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
                            void trigger("childrenCount");
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .MaximumTxt */ .Mt, {
                children: `Максимум ${maxNumberOfParticipants} человек`
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

/***/ 12148:
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
    time: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Выберите время"),
    duration: yup__WEBPACK_IMPORTED_MODULE_1__.string().required("Выберите длительность")
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

/***/ 63612:
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78245);
/* harmony import */ var _modules_core_components_PriceComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(44643);
/* harmony import */ var _modules_core_components_DataTermsAndPrivacyPolicy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54952);
/* harmony import */ var _modules_core_components_DataTermsAndPrivacyPolicy_content__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(81489);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(57441);
/* harmony import */ var _modules_payment_paymentSlice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(37574);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(46555);
/* harmony import */ var _modules_auth_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(19218);
/* harmony import */ var _BookingStepOne__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(76607);
/* harmony import */ var _BookingStepTwo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(93147);
/* harmony import */ var _BookingStepThree__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(55838);
/* harmony import */ var _formValidations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(12148);
/* harmony import */ var _modules_booking_apiBookingSlice__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(43180);
/* harmony import */ var _modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(89882);
/* harmony import */ var _modules_guide_components_GuideFilter_guideFilterSlice__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2982);
/* harmony import */ var _modules_core_helpers_guideQueryHandler__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(51667);
/* harmony import */ var _guideSlice__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(45138);
/* harmony import */ var _modules_core_hooks_useFormStepsWithHistory__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(60268);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_11__, uuid__WEBPACK_IMPORTED_MODULE_18__, _BookingStepOne__WEBPACK_IMPORTED_MODULE_20__, _BookingStepTwo__WEBPACK_IMPORTED_MODULE_21__, _BookingStepThree__WEBPACK_IMPORTED_MODULE_22__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_11__, uuid__WEBPACK_IMPORTED_MODULE_18__, _BookingStepOne__WEBPACK_IMPORTED_MODULE_20__, _BookingStepTwo__WEBPACK_IMPORTED_MODULE_21__, _BookingStepThree__WEBPACK_IMPORTED_MODULE_22__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






























const pageSubtitles = [
    "Выберите дату и время бронирования",
    "Укажите ваши контактные данные",
    "Проверьте бронирование"
];
const BookingGuide = ({ guideData  })=>{
    const totalSteps = 3;
    const dispatch = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_16__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const bookingFormData = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_guideSlice__WEBPACK_IMPORTED_MODULE_27__/* .selectBookingGuideForm */ .Mg);
    const { currentStep , setStep  } = (0,_modules_core_hooks_useFormStepsWithHistory__WEBPACK_IMPORTED_MODULE_28__/* .useFormStepsWithHistory */ .g)(totalSteps, !bookingFormData?.date, true);
    const userProfile = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_16__/* .useAppSelector */ .C)(_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_9__/* .selectProfileData */ .NI);
    const filterGuideData = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_16__/* .useAppSelector */ .C)(_modules_guide_components_GuideFilter_guideFilterSlice__WEBPACK_IMPORTED_MODULE_25__/* .selectGuideFilterValues */ .jn);
    const { queriesString: guidePaymentParams  } = (0,_modules_core_helpers_guideQueryHandler__WEBPACK_IMPORTED_MODULE_26__/* .guideQueryHandler */ .w)(filterGuideData, _modules_core_helpers_guideQueryHandler__WEBPACK_IMPORTED_MODULE_26__/* .GuideQueryLocation.payment */ .a.payment);
    const { id  } = router.query;
    const isScreenXs = (0,_modules_core_hooks_useMatchMedia__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(`(max-width: ${_modules_core_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_7__/* .breakpoints.xs */ .AV.xs}px)`);
    const countryCode = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_9__/* .selectCountryCode */ .eV);
    const [bookGuide, { isLoading: isSendingBookRequest  }] = (0,_modules_booking_apiBookingSlice__WEBPACK_IMPORTED_MODULE_24__/* .useBookGuideMutation */ .Kz)();
    const schema = currentStep === 1 ? _formValidations__WEBPACK_IMPORTED_MODULE_23__/* .step1Schema */ .F : (0,_formValidations__WEBPACK_IMPORTED_MODULE_23__/* .step2Schema */ .hD)(countryCode.codeNum.length, guideData.maxNumberOfParticipants);
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_11__.yupResolver)(schema),
        mode: "onChange",
        defaultValues: {
            ...bookingFormData,
            guideId: Number(id),
            idempotenceKey: (0,uuid__WEBPACK_IMPORTED_MODULE_18__.v4)()
        }
    });
    const { handleSubmit , formState: { errors  } , setError , trigger , getValues , watch  } = methods;
    const duration = watch("duration");
    const paymentResponseHandler = async (response)=>{
        if (response.success) {
            const { bookingId , ...rest } = response.data;
            dispatch((0,_modules_payment_paymentSlice__WEBPACK_IMPORTED_MODULE_17__/* .setPaymentData */ .Ds)({
                ...rest
            }));
            const replacedUrl = userProfile ? `/profile/booking/guide/${bookingId}` : `/booking/guide/${id}/auto-authorized-booking?bookingId=${bookingId}`;
            await router.replace(replacedUrl);
            await router.push(`/booking/guide/${id}/payment?bookingId=${bookingId}&${guidePaymentParams}`);
        }
    };
    const onSubmit = async (data)=>{
        try {
            const response = await bookGuide(data).unwrap();
            await paymentResponseHandler(response);
            dispatch((0,_guideSlice__WEBPACK_IMPORTED_MODULE_27__/* .setBookingGuideForm */ .pJ)({}));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            error.data.data.forEach((item)=>{
                setError(item.field, item);
            });
            if (error.status === 401 && !error.data.isBlocked) {
                dispatch((0,_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_9__/* .setAuthModal */ .$_)(_modules_auth_types__WEBPACK_IMPORTED_MODULE_19__/* .AuthType.LOGIN */ .G.LOGIN));
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
                dispatch((0,_guideSlice__WEBPACK_IMPORTED_MODULE_27__/* .setBookingGuideForm */ .pJ)(getValues()));
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
                        listTitle: "За час",
                        price: guideData.costPerHour || 0
                    }
                ]
            },
            downSection: duration ? {
                title: "Итого",
                list: [
                    {
                        listTitle: `${duration} ${(0,_modules_core_helpers_pluralizationFn__WEBPACK_IMPORTED_MODULE_29__/* .pluralizationFn */ .$)(duration, [
                            "час",
                            "часа",
                            "часов"
                        ])}`,
                        price: duration * guideData.costPerHour
                    }
                ]
            } : undefined
        }), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        guideData,
        duration
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_12__/* .FormContainer */ .Yb, {
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_12__/* .BodyContainer */ .we, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_12__/* .MainContainer */ .tz, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_HeaderWithSteps__WEBPACK_IMPORTED_MODULE_4__/* .HeaderWithSteps */ .k, {
                                        title: guideData.name,
                                        subTitle: pageSubtitles[currentStep - 1],
                                        currentStep: currentStep,
                                        stepsAmount: totalSteps
                                    }),
                                    currentStep === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BookingStepOne__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                        schedule: guideData.schedule,
                                        maxNumberOfParticipants: guideData.maxNumberOfParticipants,
                                        guideDuration: guideData.duration
                                    }),
                                    currentStep === 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BookingStepTwo__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                        maxNumberOfParticipants: guideData.maxNumberOfParticipants,
                                        withChildren: guideData.withChildren,
                                        userProfile: userProfile
                                    }),
                                    currentStep === 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BookingStepThree__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {})
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_12__/* .BookingFormAdditionalData */ .Xv, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_PriceComponent__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        upSection: currentPrices.upSection,
                                        downSection: currentPrices.downSection
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_DataTermsAndPrivacyPolicy__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        items: [
                                            {
                                                title: "Политика конфиденциальности",
                                                text: _modules_core_components_DataTermsAndPrivacyPolicy_content__WEBPACK_IMPORTED_MODULE_15__/* .privacyPolicyText */ .uV
                                            },
                                            {
                                                title: "Условия использования данных",
                                                text: _modules_core_components_DataTermsAndPrivacyPolicy_content__WEBPACK_IMPORTED_MODULE_15__/* .termsOfDataUseText */ .RS
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingGuide);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 78245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bc": () => (/* binding */ ErrorMessage),
/* harmony export */   "GI": () => (/* binding */ Step2Row),
/* harmony export */   "Mt": () => (/* binding */ MaximumTxt),
/* harmony export */   "ND": () => (/* binding */ ChosenDate),
/* harmony export */   "PI": () => (/* binding */ CalendarFooterWrapper),
/* harmony export */   "QH": () => (/* binding */ CalendarWrapper),
/* harmony export */   "V8": () => (/* binding */ StepWrapper),
/* harmony export */   "Xv": () => (/* binding */ BookingFormAdditionalData),
/* harmony export */   "Yb": () => (/* binding */ FormContainer),
/* harmony export */   "ai": () => (/* binding */ FormPhoneWrapper),
/* harmony export */   "iz": () => (/* binding */ Divider),
/* harmony export */   "ly": () => (/* binding */ Step3Section),
/* harmony export */   "m8": () => (/* binding */ FieldTitle),
/* harmony export */   "n2": () => (/* binding */ FieldWrapper),
/* harmony export */   "pO": () => (/* binding */ FormSelector),
/* harmony export */   "sI": () => (/* binding */ FieldTxt),
/* harmony export */   "tz": () => (/* binding */ MainContainer),
/* harmony export */   "we": () => (/* binding */ BodyContainer),
/* harmony export */   "yt": () => (/* binding */ FormInput)
/* harmony export */ });
/* harmony import */ var _modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24062);
/* harmony import */ var _modules_core_components_inputs_Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8825);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().form.withConfig({
    componentId: "sc-b495421c-0"
})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const BodyContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-b495421c-1"
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
    componentId: "sc-b495421c-2"
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
const BookingFormAdditionalData = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.attrs({
    className: "infoBlock"
}).withConfig({
    componentId: "sc-b495421c-3"
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
const StepWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-b495421c-4"
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  margin-top: 32px;
`;
const CalendarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-b495421c-5"
})`
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: start;
`;
const ChosenDate = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
    componentId: "sc-b495421c-6"
})`
  color: #222121;
  font-size: 16px;
  line-height: 22px;
  span {
    color: #27ae60;
  }
`;
const FormSelector = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_modules_core_components_inputs_Select__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-b495421c-7"
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
const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
    componentId: "sc-b495421c-8"
})`
  color: red;
  font-size: 14px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Step2Row = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-b495421c-9"
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
    componentId: "sc-b495421c-10"
})`
  ${({ theme , mobileh , fullWidth  })=>styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
    flex-basis: ${fullWidth ? "100%" : "48%"};
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
    componentId: "sc-b495421c-11"
})`
  flex-basis: 48%;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
    ${theme.media.down("sm")`
    width: 100%;
    `}
  `}
`;
const MaximumTxt = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
    componentId: "sc-b495421c-12"
})`
  margin-top: -32px;
  color: #8daec1;
  font-size: 14px;
`;
const Step3Section = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-b495421c-13"
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
    componentId: "sc-b495421c-14"
})`
  min-width: 30%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const FieldTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
    componentId: "sc-b495421c-15"
})`
  color: #222121;
  font-size: 24px;
  white-space: nowrap;
`;
const FieldTxt = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
    componentId: "sc-b495421c-16"
})`
  color: #4f4f4f;
  font-size: 20px;
`;
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-b495421c-17"
})`
  height: 2px;
  background: #c6e1f3;
`;
const CalendarFooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-b495421c-18"
})`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-top: 32px;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
    ${theme.media.down("sm")`
     flex-direction: column;
    `}
  `}
`;


/***/ }),

/***/ 91909:
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
/* harmony import */ var _modules_core_components_ErrorComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22865);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_guide_apiGuideSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31170);
/* harmony import */ var _modules_guide_booking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63612);
/* harmony import */ var _modules_core_helpers_withLogging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77593);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_guide_booking__WEBPACK_IMPORTED_MODULE_7__]);
_modules_guide_booking__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-7207aae9-0"
})`
  padding-bottom: 16px;
  max-width: 1700px;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_4__.css`
    ${theme.media.down("sm")`
   
    `}
  `}
`;
const BookingGuidePage = ({ data , errorData  })=>{
    if (!data) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_ErrorComponent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        status: errorData?.data.status,
        message: errorData?.data.message
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Go2Kavkaz : Бронирование"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageContainer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_guide_booking__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    guideData: data
                })
            })
        ]
    });
};
const getServerSideProps = _modules_core_containers_StoreProvider__WEBPACK_IMPORTED_MODULE_2__/* .wrapper.getServerSideProps */ .YS.getServerSideProps((store)=>(0,_modules_core_helpers_withLogging__WEBPACK_IMPORTED_MODULE_8__/* .withLogging */ .o)(async (context)=>{
        const { id  } = context.query;
        const { data , error  } = await store.dispatch(_modules_guide_apiGuideSlice__WEBPACK_IMPORTED_MODULE_6__/* .getGuideByIdTourist.initiate */ .dQ.initiate({
            id: Number(id)
        }));
        return {
            props: {
                data: data?.data || null,
                errorData: error || null
            }
        };
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingGuidePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 65692:
/***/ ((module) => {

module.exports = require("@mui/material");

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

/***/ 82470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [1050,5675,7610,2143,8704,8413,6478,7499,679,1985,9511,966,9461,3180,838,3230,4324,3435,8000,1170,1998,3245,7593,5797,6543], () => (__webpack_exec__(91909)));
module.exports = __webpack_exports__;

})();