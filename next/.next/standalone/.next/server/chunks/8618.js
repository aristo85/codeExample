"use strict";
exports.id = 8618;
exports.ids = [8618];
exports.modules = {

/***/ 61070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ step1Schema),
/* harmony export */   "LS": () => (/* binding */ stepGuideMatch),
/* harmony export */   "Up": () => (/* binding */ step3Schema),
/* harmony export */   "eS": () => (/* binding */ step4Schema),
/* harmony export */   "hD": () => (/* binding */ step2Schema)
/* harmony export */ });
/* unused harmony exports guideNameValidationSchema, guidePhoneValidationSchema, guideEmailValidationSchema */
/* harmony import */ var _modules_core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38445);
/* harmony import */ var _modules_excursion_CreateExcursionForm_formValidations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84044);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);



const guideNameValidationSchema = yup__WEBPACK_IMPORTED_MODULE_2__.string().trim().required("Введите имя и фамилию гида").min(2, (0,_modules_core_services__WEBPACK_IMPORTED_MODULE_0__/* .validLenMessage */ .JB)(2, 100)).max(100, (0,_modules_core_services__WEBPACK_IMPORTED_MODULE_0__/* .validLenMessage */ .JB)(2, 100));
const guidePhoneValidationSchema = (length)=>yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Введите номер телефона гида").min(6, "Недопустимое количество символов").max(15, "Недопустимое количество символов");
const guideEmailValidationSchema = yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Введите email гида").email("Недопустимые символы/формат").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Недопустимые символы/формат").typeError("Недопустимое значение");
//
// schemas
//
const step1Schema = (phoneLen)=>yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
        name: guideNameValidationSchema,
        phone: guidePhoneValidationSchema(10 + phoneLen),
        email: guideEmailValidationSchema,
        description: (0,_modules_excursion_CreateExcursionForm_formValidations__WEBPACK_IMPORTED_MODULE_1__/* .descriptionValidationSchema */ .UM)("Введите описание гида"),
        avatar: yup__WEBPACK_IMPORTED_MODULE_2__.array().required("Добавьте фото гида").min(1, "Добавьте фото гида"),
        birthdayDate: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Добавьте дату рождения гида")
    });
const step2Schema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
    cityId: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Выберите населенный пункт"),
    maxNumberOfParticipants: (0,_modules_excursion_CreateExcursionForm_formValidations__WEBPACK_IMPORTED_MODULE_1__/* .numberValidation */ .AU)("Введите максимальное количество участников"),
    travelMode: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Выберите способ передвижения"),
    duration: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Выберите продолжительность"),
    costPerHour: (0,_modules_excursion_CreateExcursionForm_formValidations__WEBPACK_IMPORTED_MODULE_1__/* .numberValidation */ .AU)("Введите стоимость за 1 час")
});
const formSchema = {
    date: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("form.required_message"),
    timeList: yup__WEBPACK_IMPORTED_MODULE_2__.array().of(yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
        time: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("form.required_message")
    })).required("form.required_message").min(1, "Добавьте время")
};
const step3Schema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
    schedule: yup__WEBPACK_IMPORTED_MODULE_2__.array().test("unique-dates", "дата не должна повторяться", function(value) {
        const dateValues = value?.map((item)=>item.date);
        const uniqueDates = new Set(dateValues);
        return dateValues?.length === uniqueDates.size;
    }).of(yup__WEBPACK_IMPORTED_MODULE_2__.object().shape(formSchema)).required("Must have fields").min(1, "Добавьте дату и время")
});
const step4Schema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({
    photos: yup__WEBPACK_IMPORTED_MODULE_2__.array().required("Загрузите фотографии").min(6, "минимум 6 фотографий")
});
const stepGuideMatch = {
    1: [
        "name",
        "birthdayDate",
        "phone",
        "email",
        "about",
        "avatar"
    ],
    2: [
        "cityId",
        "maxNumberOfParticipants",
        "travelMode",
        "duration",
        "costPerHour"
    ],
    3: [
        "schedule"
    ],
    5: [
        "photos"
    ]
};


/***/ }),

/***/ 68618:
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
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61908);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68270);
/* harmony import */ var _formValidations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61070);
/* harmony import */ var _modules_core_components_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52901);
/* harmony import */ var _apiGuideSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31170);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_core_components_HeaderWithSteps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13435);
/* harmony import */ var _modules_core_components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(79417);
/* harmony import */ var _modules_core_hooks_useNotification__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51949);
/* harmony import */ var _modules_core_helpers_stepErrorMatch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(56669);
/* harmony import */ var _steps_FormStepOne__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36238);
/* harmony import */ var _steps_FormStepTwo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71689);
/* harmony import */ var _steps_FormStepThree__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22651);
/* harmony import */ var _steps_FormStepFour__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(838);
/* harmony import */ var _modules_core_components_StickyFormFooter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(32762);
/* harmony import */ var _modules_core_hooks_useFormStepsWithHistory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(60268);
/* harmony import */ var _modules_core_hooks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(57441);
/* harmony import */ var _guideSlice__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(45138);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__, _steps_FormStepOne__WEBPACK_IMPORTED_MODULE_13__, _steps_FormStepTwo__WEBPACK_IMPORTED_MODULE_14__, _steps_FormStepThree__WEBPACK_IMPORTED_MODULE_15__, _steps_FormStepFour__WEBPACK_IMPORTED_MODULE_16__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__, _steps_FormStepOne__WEBPACK_IMPORTED_MODULE_13__, _steps_FormStepTwo__WEBPACK_IMPORTED_MODULE_14__, _steps_FormStepThree__WEBPACK_IMPORTED_MODULE_15__, _steps_FormStepFour__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const breadcrumbsItems = [
    {
        label: "Досуг"
    },
    {
        url: "/control-panel/guide",
        label: "Гиды"
    },
    {
        label: "Добавление гида"
    }
];
const pageSubtitles = [
    "Расскажите о гиде и его опыте",
    "Детальная информация",
    "Время работы",
    "Фотографии"
];
const CreateGuide = ()=>{
    const totalSteps = 4;
    const toast = (0,_modules_core_hooks_useNotification__WEBPACK_IMPORTED_MODULE_12__/* .useNotification */ .l)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const dispatch = (0,_modules_core_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useAppDispatch */ .T)();
    const guideFormData = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_guideSlice__WEBPACK_IMPORTED_MODULE_20__/* .selectGuideForm */ .N6);
    const { currentStep , setStep  } = (0,_modules_core_hooks_useFormStepsWithHistory__WEBPACK_IMPORTED_MODULE_18__/* .useFormStepsWithHistory */ .g)(totalSteps, !guideFormData?.name, !router.pathname.includes("[id]"));
    const countryCode = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_modules_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__/* .selectCountryCode */ .eV);
    const { data: guideData , isLoading: isLoadingGuideData  } = (0,_apiGuideSlice__WEBPACK_IMPORTED_MODULE_8__/* .useGetGuideByIdQuery */ .OS)({
        id: Number(router.query.id)
    }, {
        skip: !router.query.id,
        refetchOnMountOrArgChange: true
    });
    const [addGuideMutation, { isLoading: isLoadingAddGuide  }] = (0,_apiGuideSlice__WEBPACK_IMPORTED_MODULE_8__/* .useAddGuideMutation */ .by)();
    const [updateGuide, { isLoading: isUpdateLoading  }] = (0,_apiGuideSlice__WEBPACK_IMPORTED_MODULE_8__/* .useUpdateGuideMutation */ .Zl)();
    const stepsSchemas = [
        (0,_formValidations__WEBPACK_IMPORTED_MODULE_6__/* .step1Schema */ .F)(countryCode.codeNum.length),
        _formValidations__WEBPACK_IMPORTED_MODULE_6__/* .step2Schema */ .hD,
        _formValidations__WEBPACK_IMPORTED_MODULE_6__/* .step3Schema */ .Up,
        _formValidations__WEBPACK_IMPORTED_MODULE_6__/* .step4Schema */ .eS
    ];
    const schema = stepsSchemas[currentStep - 1] || _formValidations__WEBPACK_IMPORTED_MODULE_6__/* .step4Schema */ .eS;
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        defaultValues: router.query.id ? guideFormData?.name ? guideFormData : {} : guideFormData,
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(schema),
        mode: "onChange"
    });
    const { handleSubmit , setError , reset , trigger , getValues  } = methods;
    const onSubmit = async (data)=>{
        const avatar = data.avatar?.[0].id;
        const photos = data.photos.map((el)=>el.id);
        const requestData = {
            ...data,
            avatar,
            photos
        };
        try {
            // const response = await addGuideMutation(data).unwrap();
            const response = router.query?.id ? await updateGuide({
                data: requestData,
                id: +router.query.id
            }).unwrap() : await addGuideMutation(requestData).unwrap();
            if (response.success) {
                toast(`${router.query.id ? "Гид удачно изменен" : "Гид удачно добавлен"}`, "success");
                void router.push(router.query.id ? `/control-panel/guide` : `/control-panel/guide/${response.data.id}/success`);
                dispatch((0,_guideSlice__WEBPACK_IMPORTED_MODULE_20__/* .setGuideCreateForm */ .B8)({}));
            }
        } catch (error) {
            let nearestStep = totalSteps;
            error?.data?.data?.forEach((item)=>{
                const currentStep = (0,_modules_core_helpers_stepErrorMatch__WEBPACK_IMPORTED_MODULE_21__/* .stepErrorMatch */ .x)(_formValidations__WEBPACK_IMPORTED_MODULE_6__/* .stepGuideMatch */ .LS, item.field);
                nearestStep = nearestStep > currentStep ? currentStep : nearestStep;
                setError(item.field, item);
            });
            setStep(nearestStep);
        }
    };
    const handleNextStep = async ()=>{
        try {
            const isFormValid = await trigger();
            // Move to the next step if validation passes
            if (isFormValid) {
                dispatch((0,_guideSlice__WEBPACK_IMPORTED_MODULE_20__/* .setGuideCreateForm */ .B8)(getValues()));
                setStep(currentStep + 1);
            }
        } catch (error) {}
    };
    const handleBackStep = ()=>{
        setStep(currentStep - 1);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const isReduxBeenUpdated = guideFormData?.name;
        if (guideData?.data && !isReduxBeenUpdated) {
            const avatar = [
                {
                    id: guideData.data.avatar.key,
                    url: guideData.data.avatar.url
                }
            ];
            const photos = guideData.data.photos.map((el)=>({
                    id: el.key,
                    url: el.url
                }));
            reset({
                ...guideData.data,
                avatar,
                photos
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        guideData?.data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, {
        ...methods,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Spinner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                showSpinner: isLoadingAddGuide || isLoadingGuideData || isUpdateLoading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_HeaderWithSteps__WEBPACK_IMPORTED_MODULE_10__/* .HeaderWithSteps */ .k, {
                title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    paths: breadcrumbsItems
                }),
                subTitle: pageSubtitles[currentStep - 1],
                currentStep: currentStep,
                stepsAmount: totalSteps
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                children: [
                    currentStep === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_steps_FormStepOne__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                    currentStep === 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_steps_FormStepTwo__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
                    currentStep === 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_steps_FormStepThree__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
                    currentStep === 4 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_steps_FormStepFour__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_StickyFormFooter__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        sticky: true,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateGuide);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 838:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56664);
/* harmony import */ var _modules_core_components_ImageUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86289);
/* harmony import */ var _modules_core_components_ImageInput_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42189);
/* harmony import */ var _modules_core_components_icons_Camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21650);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__]);
([_styles__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const FormStepFour = ()=>{
    const { control , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useFormContext)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StepWrapper */ .V8, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .InformationTxt */ .Te, {
                children: [
                    "Загрузите качественные и яркие фото с пейзажами, архитектурными, природными и другими любопытными объектами по маршруту. Также хорошо подойдут фото с людьми на вашей экскурсии, чтобы прочувствовать атмосферу, которую вы создаете. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "Добавьте к описанию экскурсии ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "минимум 6 фотографий"
                    }),
                    ". Минимальные размеры фотографий:",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "горизонтальные – 1200х1000, вертикальные – 1000х1350"
                    }),
                    ". Загружая фотографии, вы подтверждаете право их использования на нашем сайте: изображения сделаны вами, взяты с согласия автора или из легальных источников, а также не нарушают прав третьих лиц."
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .PhotoSection */ .K8, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .ImageWrapper */ .fb, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_6__.Controller, {
                        name: "photos",
                        control: control,
                        render: ({ field: { value , onChange  }  })=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_ImageUpload__WEBPACK_IMPORTED_MODULE_3__/* .ImageUpload */ .U, {
                                        imageText: "Добавить фотографии",
                                        onImageUpload: (data)=>{
                                            onChange(data);
                                        },
                                        shape: _modules_core_components_ImageInput_types__WEBPACK_IMPORTED_MODULE_4__/* .Shape.RECTANGLE */ .b.RECTANGLE,
                                        color: _modules_core_components_ImageInput_types__WEBPACK_IMPORTED_MODULE_4__/* .Color.WHITE */ .I.WHITE,
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_Camera__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            fill: "#1D7ABD"
                                        }),
                                        multipleImages: true,
                                        imageList: value ?? []
                                    }),
                                    errors.photos && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .ErrorMessage */ .Bc, {
                                        children: errors.photos.message
                                    })
                                ]
                            });
                        }
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormStepFour);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56664);
/* harmony import */ var _modules_core_components_ImageUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86289);
/* harmony import */ var _modules_core_components_ImageInput_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42189);
/* harmony import */ var _modules_core_components_icons_Camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21650);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45641);
/* harmony import */ var _modules_core_components_inputs_PhoneInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79461);
/* harmony import */ var _modules_core_components_inputs_TextareaStyled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88000);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_core_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96894);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _modules_core_components_inputs_PhoneInput__WEBPACK_IMPORTED_MODULE_7__]);
([_styles__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _modules_core_components_inputs_PhoneInput__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const FormStepOne = ()=>{
    const { register , control , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useFormContext)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StepWrapper */ .V8, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .GuideWrapper */ .J1, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .ImageWrapper */ .fb, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_6__.Controller, {
                            name: "avatar",
                            control: control,
                            render: ({ field: { value , onChange  }  })=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_ImageUpload__WEBPACK_IMPORTED_MODULE_3__/* .ImageUpload */ .U, {
                                            imageText: "Добавить фото гида",
                                            onImageUpload: (data)=>{
                                                onChange(data);
                                            },
                                            shape: _modules_core_components_ImageInput_types__WEBPACK_IMPORTED_MODULE_4__/* .Shape.RECTANGLE */ .b.RECTANGLE,
                                            color: _modules_core_components_ImageInput_types__WEBPACK_IMPORTED_MODULE_4__/* .Color.WHITE */ .I.WHITE,
                                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_icons_Camera__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                fill: "#1D7ABD"
                                            }),
                                            imageList: value ?? [],
                                            isFullHeight: true
                                        }),
                                        errors.avatar?.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .ErrorMessage */ .Bc, {
                                            children: errors.avatar.message
                                        })
                                    ]
                                });
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .GuideInfo */ .mR, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .GuideContacts */ .Ak, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FormInput */ .yt, {
                                        isStepOne: true,
                                        label: "Имя гида",
                                        ...register("name"),
                                        placeholder: "Введите имя и фамилию гида",
                                        error: errors.name?.message
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_6__.Controller, {
                                        control: control,
                                        name: "birthdayDate",
                                        render: ({ field  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .DateWrapper */ .I0, {
                                                style: {
                                                    width: "50%"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .BirthdateInput */ .tQ, {
                                                        style: {
                                                            width: "100%"
                                                        },
                                                        label: "Дата рождения гида",
                                                        value: field.value ? dayjs__WEBPACK_IMPORTED_MODULE_9___default()(field.value) : null,
                                                        setValue: (value)=>{
                                                            field.onChange(dayjs__WEBPACK_IMPORTED_MODULE_9___default()(value).format(_modules_core_constants__WEBPACK_IMPORTED_MODULE_10__/* .DEFAULT_DATE_FORMAT */ .K_));
                                                        },
                                                        placeholder: "Выберите дату рождения гида",
                                                        maxDate: dayjs__WEBPACK_IMPORTED_MODULE_9___default()(),
                                                        disablePast: false,
                                                        error: errors?.birthdayDate?.message
                                                    }),
                                                    errors.birthdayDate?.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .ErrorMessage */ .Bc, {
                                                        children: errors.birthdayDate.message
                                                    })
                                                ]
                                            })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .GuideContacts */ .Ak, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FormPhoneWrapper */ .ai, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_6__.Controller, {
                                            name: "phone",
                                            control: control,
                                            render: ({ field  })=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_inputs_PhoneInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    label: "Номер телефона гида",
                                                    placeholder: "Введите номер телефона гида",
                                                    onChange: field.onChange,
                                                    error: errors.phone?.message,
                                                    phoneNumber: field.value
                                                });
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FormInput */ .yt, {
                                        isStepOne: true,
                                        label: "Email гида",
                                        ...register("email"),
                                        placeholder: "Укажите адрес email гида",
                                        error: errors.email?.message
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_inputs_TextareaStyled__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                label: "Расскажите о Гиде",
                ...register("description"),
                placeholder: "Это подробная информация о гиде и его услугах. То, что вы здесь напишете будет отображаться на детальной странице гида.",
                error: errors.description?.message
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormStepOne);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22651:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56664);
/* harmony import */ var _modules_core_components_TimeTableController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92405);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_2__, _modules_core_components_TimeTableController__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__]);
([_styles__WEBPACK_IMPORTED_MODULE_2__, _modules_core_components_TimeTableController__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const FormStepThree = ()=>{
    const { register , control  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StepWrapper */ .V8, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_core_components_TimeTableController__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            control,
            register
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormStepThree);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71689:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56664);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45641);
/* harmony import */ var _modules_core_hooks_useCitySelectorOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85601);
/* harmony import */ var _modules_excursion_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30838);
/* harmony import */ var _modules_core_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96894);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
([_styles__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const FormStepTwo = ()=>{
    const { register , control , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
    const [cities] = (0,_modules_core_hooks_useCitySelectorOptions__WEBPACK_IMPORTED_MODULE_4__/* .useCitySelectorOptions */ .B)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .StepWrapper */ .V8, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .Step2Row */ .GI, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                        name: "cityId",
                        control: control,
                        render: ({ field  })=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FormSelector */ .pO, {
                                label: "Населенный пункт",
                                options: cities,
                                ...field,
                                value: field.value?.toString(),
                                error: errors.cityId?.message,
                                onChange: (value)=>{
                                    field.onChange(value);
                                },
                                placeholder: "Выберите населенный пункт гида",
                                mobileh: 68
                            });
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FormInput */ .yt, {
                        label: "Максимальное количество участников",
                        ...register("maxNumberOfParticipants"),
                        placeholder: "Укажите количество участников, с которым может работать гид",
                        mobileh: 68,
                        error: errors.maxNumberOfParticipants?.message,
                        style: {
                            marginTop: "8px"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                        control: control,
                        name: "withChildren",
                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .WitchChildrenCheckbox */ .A0, {
                                label: "Можно с детьми",
                                value: !!field.value,
                                setValue: field.onChange
                            })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                        name: "travelMode",
                        control: control,
                        render: ({ field  })=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FormSelector */ .pO, {
                                label: "Способ передвижения",
                                options: _modules_core_constants__WEBPACK_IMPORTED_MODULE_6__/* .travelModeSelectorValues */ .gG,
                                ...field,
                                value: field.value,
                                error: errors.travelMode?.message,
                                onChange: (value)=>{
                                    field.onChange(value);
                                },
                                placeholder: "Выберите способ передвижения гида",
                                mobileh: 68
                            });
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                        name: "duration",
                        control: control,
                        render: ({ field  })=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FormSelector */ .pO, {
                                label: "Максимальная продолжительность работы",
                                options: _modules_excursion_types__WEBPACK_IMPORTED_MODULE_5__/* .timeOptionsArray */ .fW,
                                ...field,
                                value: field.value?.toString(),
                                error: errors.duration?.message,
                                onChange: (value)=>{
                                    field.onChange(value);
                                },
                                placeholder: "Выберите продолжительность работы гида",
                                mobileh: 68
                            });
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .FormInput */ .yt, {
                label: "Cтоимость за 1 час, ₽",
                ...register("costPerHour"),
                placeholder: "Укажите стоимость часа работы гида",
                mobileh: 68,
                error: errors.costPerHour?.message
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .Step2InfoLbel */ .GB, {
                children: "Вы ничего не платите за размещение гида. Вместо этого мы берем процент от стоимости каждого заказа."
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormStepTwo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56664:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A0": () => (/* binding */ WitchChildrenCheckbox),
/* harmony export */   "Ak": () => (/* binding */ GuideContacts),
/* harmony export */   "Bc": () => (/* binding */ ErrorMessage),
/* harmony export */   "GB": () => (/* binding */ Step2InfoLbel),
/* harmony export */   "GI": () => (/* binding */ Step2Row),
/* harmony export */   "I0": () => (/* binding */ DateWrapper),
/* harmony export */   "J1": () => (/* binding */ GuideWrapper),
/* harmony export */   "K8": () => (/* binding */ PhotoSection),
/* harmony export */   "Te": () => (/* binding */ InformationTxt),
/* harmony export */   "V8": () => (/* binding */ StepWrapper),
/* harmony export */   "ai": () => (/* binding */ FormPhoneWrapper),
/* harmony export */   "fb": () => (/* binding */ ImageWrapper),
/* harmony export */   "mR": () => (/* binding */ GuideInfo),
/* harmony export */   "pO": () => (/* binding */ FormSelector),
/* harmony export */   "tQ": () => (/* binding */ BirthdateInput),
/* harmony export */   "yt": () => (/* binding */ FormInput)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24062);
/* harmony import */ var _modules_core_components_inputs_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8825);
/* harmony import */ var _modules_home_components_Filters_MobileFilters_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30089);
/* harmony import */ var _modules_core_components_datePickers_DateInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(512);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_home_components_Filters_MobileFilters_styles__WEBPACK_IMPORTED_MODULE_3__, _modules_core_components_datePickers_DateInput__WEBPACK_IMPORTED_MODULE_4__]);
([_modules_home_components_Filters_MobileFilters_styles__WEBPACK_IMPORTED_MODULE_3__, _modules_core_components_datePickers_DateInput__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const StepWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-85734d03-0"
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  margin-top: 32px;
`;
const GuideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-85734d03-1"
})`
  display: flex;
  gap: 32px;
  align-items: center;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("sm")`
     flex-direction: column;
    `}
  `}
`;
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-85734d03-2"
})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-self: stretch;
  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("sm")`
    width: 100%;
    `}
  `};
`;
const DateWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-85734d03-3"
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
    componentId: "sc-85734d03-4"
})`
  color: red;
  font-size: 14px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const GuideInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-85734d03-5"
})`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;
  width: 100%;
`;
const FormInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_modules_core_components_inputs_InputStyled__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).withConfig({
    componentId: "sc-85734d03-6"
})`
  flex-basis: 48.9%;

  ${({ theme , mobileh , isStepOne  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down(isStepOne ? "md" : "lg")`
      flex-basis: 100%;
    `}
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
const GuideContacts = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-85734d03-7"
})`
  display: flex;
  gap: 32px;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("md")`
     flex-direction: column;
    `}
  `}
`;
const FormPhoneWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-85734d03-8"
})`
  flex-basis: 48.9%;
`;
const Step2Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-85734d03-9"
})`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
  position: relative;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("sm")`
     flex-direction: column;
    `}
  `}
`;
const FormSelector = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_modules_core_components_inputs_Select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).withConfig({
    componentId: "sc-85734d03-10"
})`
  flex-basis: 48.9%;

  & .optionsMenu {
    max-height: 200px;
    overflow-y: scroll;
    ${(props)=>props.theme.scrollbar.thinSecondary}
  }

  ${({ theme , mobileh , error  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    .error {
      bottom: -18px;
    }
    ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      ${theme.media.down("lg")`
      flex-basis: 100%;
    `}
    `}
    ${theme.media.down("sm")`
   .selector {
    height: ${mobileh ?? 48}px;
    padding-right: 20px;
  }
  `}
  `}
`;
const WitchChildrenCheckbox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_modules_home_components_Filters_MobileFilters_styles__WEBPACK_IMPORTED_MODULE_3__/* .FilterCheckbox */ .TG).withConfig({
    componentId: "sc-85734d03-11"
})`
  position: absolute;
  top: 0;
  right: 0;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("lg")`
      position: static;
      align-self: start;
    `}
  `}
`;
const Step2InfoLbel = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-85734d03-12"
})`
  color: #8daec1;
  font-size: 14px;
`;
const InformationTxt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
    componentId: "sc-85734d03-13"
})`
  color: #8daec1;
  font-size: 16px;
  line-height: 22px;

  span {
    color: #222121;
  }
`;
const PhotoSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-85734d03-14"
})`
  display: flex;
  align-items: center;
  gap: 16px;

  ${({ theme  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.media.down("sm")`
    flex-direction: column;
    `}
  `};
`;
const BirthdateInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_modules_core_components_datePickers_DateInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-85734d03-15"
})`
  flex-grow: 1;
  min-width: 100% !important;
  margin-top: 3px;
  input {
    padding: 3px 0 0 16px;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B8": () => (/* binding */ setGuideCreateForm),
/* harmony export */   "Mg": () => (/* binding */ selectBookingGuideForm),
/* harmony export */   "N6": () => (/* binding */ selectGuideForm),
/* harmony export */   "QU": () => (/* binding */ guideSlice),
/* harmony export */   "pJ": () => (/* binding */ setBookingGuideForm)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    createGuideForm: {},
    bookingGuideForm: {}
};
const guideSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "guide",
    initialState,
    reducers: {
        setGuideCreateForm: (state, action)=>{
            state.createGuideForm = action.payload;
        },
        setBookingGuideForm: (state, action)=>{
            state.bookingGuideForm = action.payload;
        }
    }
});
const { setGuideCreateForm , setBookingGuideForm  } = guideSlice.actions;
const selectGuideForm = (state)=>state.guide.createGuideForm;
const selectBookingGuideForm = (state)=>state.guide.bookingGuideForm;


/***/ })

};
;