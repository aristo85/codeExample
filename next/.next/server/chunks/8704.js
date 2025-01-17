"use strict";
exports.id = 8704;
exports.ids = [8704];
exports.modules = {

/***/ 70220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gk": () => (/* binding */ apiSlice),
  "Cz": () => (/* binding */ useChangeProfilePasswordMutation),
  "$Y": () => (/* binding */ useFileMutation),
  "eU": () => (/* binding */ useGetProfileDataQuery),
  "YA": () => (/* binding */ useLoginMutation),
  "_y": () => (/* binding */ useLogoutMutation),
  "vU": () => (/* binding */ usePassRecoveryMutation),
  "iy": () => (/* binding */ usePassResetMutation),
  "Ln": () => (/* binding */ useRegisterEmailconfirmMutation),
  "l4": () => (/* binding */ useRegisterMutation),
  "BZ": () => (/* binding */ useResendEmailMutation),
  "TG": () => (/* binding */ useUpdateProfileMutation)
});

// UNUSED EXPORTS: useDeleteAccountMutation

;// CONCATENATED MODULE: ./config.ts
const config = {
    apiUrl: "https://api.g2k.dev.icerockdev.com/v1" ?? 0,
    apiMockUrl: "http://localhost:3000/api/v1" ?? 0,
    baseUrl: "https://api.g2k.dev.icerockdev.com/v1" ?? 0,
    serverName: "https://api.g2k.dev.icerockdev.com" ?? 0
};

// EXTERNAL MODULE: external "@reduxjs/toolkit/query/react"
var react_ = __webpack_require__(34335);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(35648);
// EXTERNAL MODULE: ./modules/auth/authSlice.ts
var authSlice = __webpack_require__(68270);
// EXTERNAL MODULE: ./modules/core/services.ts
var services = __webpack_require__(38445);
;// CONCATENATED MODULE: ./modules/core/api/apiSlice.ts





const baseQuery = (0,react_.fetchBaseQuery)({
    baseUrl: config.apiUrl,
    prepareHeaders: (headers, { getState  })=>{
        const token = getState().auth.userAccessToken;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    }
});
const baseQueryWithReAuth = async (args, api, extraOptions)=>{
    let result = await baseQuery(args, api, extraOptions);
    // If there aren't any tokens in userStorage it means we don't have a logged-in user
    const data = (0,services/* getUserStorage */.qn)(services/* KeyStorage.USER_TOKEN_KEY */.hv.USER_TOKEN_KEY);
    if (!data) {
        return result;
    }
    if (result.error && result.error.status === 401) {
        const baseQueryRefresh = (0,react_.fetchBaseQuery)({
            baseUrl: config.apiUrl
        });
        // try to get a new token
        const refreshToken = api.getState().auth.userRefreshToken;
        const refreshResult = await baseQueryRefresh({
            url: "/auth/refresh",
            method: "POST",
            body: {
                refreshToken
            }
        }, api, extraOptions);
        if (refreshResult.data) {
            // store the new token
            const newToken = refreshResult.data.data;
            api.dispatch((0,authSlice/* setLogIn */.qN)(newToken));
            // retry the initial query
            result = await baseQuery(args, api, extraOptions);
        } else if (!refreshResult.data && (result.error?.data)?.isBlocked) {
            // We need it to show an error in a toast for 3 seconds for blocked user
            setTimeout(()=>{
                api.dispatch((0,authSlice/* setLogOut */.H0)());
            }, 3000);
        } else {
            api.dispatch((0,authSlice/* setLogOut */.H0)());
        }
    }
    return result;
};
const apiSlice = (0,react_.createApi)({
    reducerPath: "api",
    baseQuery: baseQueryWithReAuth,
    extractRehydrationInfo (action, { reducerPath  }) {
        if (action.type === external_next_redux_wrapper_.HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    tagTypes: [
        "Placements",
        "bookings",
        "notifications",
        "bookedByID",
        "excursion",
        "guide",
        "partnerExcursionList",
        "partnerGuideList"
    ],
    endpoints: (builder)=>({
            deleteAccount: builder.mutation({
                query: ()=>({
                        url: "/user/profile",
                        method: "DELETE"
                    })
            }),
            getProfileData: builder.query({
                query: ()=>({
                        url: `/user/profile`
                    })
            }),
            changeProfilePassword: builder.mutation({
                query: (data)=>({
                        url: "/user/profile/change-password",
                        method: "POST",
                        body: data
                    }),
                extraOptions: {
                    name: "changePassword"
                }
            }),
            updateProfile: builder.mutation({
                query: (data)=>({
                        url: "/user/profile",
                        method: "PUT",
                        body: data
                    }),
                extraOptions: {
                    name: "profileUpdate"
                }
            }),
            login: builder.mutation({
                query: (creds)=>({
                        url: "/auth/sign-in",
                        method: "POST",
                        body: creds
                    }),
                extraOptions: {
                    name: "login"
                }
            }),
            passRecovery: builder.mutation({
                query: (data)=>({
                        url: "/auth/restore-by-email",
                        method: "POST",
                        body: data
                    })
            }),
            passReset: builder.mutation({
                query: (data)=>({
                        url: "/auth/restore-by-email",
                        method: "PUT",
                        body: data
                    })
            }),
            register: builder.mutation({
                query: (data)=>({
                        url: "/auth/sign-up",
                        method: "POST",
                        body: data
                    }),
                extraOptions: {
                    name: "register"
                }
            }),
            resendEmail: builder.mutation({
                query: (data)=>({
                        url: "/auth/resend-email",
                        method: "POST",
                        body: data
                    })
            }),
            registerEmailconfirm: builder.mutation({
                query: (data)=>({
                        url: "/auth/confirm-email",
                        method: "PUT",
                        body: data
                    })
            }),
            logout: builder.mutation({
                query: (data)=>({
                        url: "/auth/logout",
                        method: "POST",
                        body: {
                            refreshToken: data
                        }
                    })
            }),
            file: builder.mutation({
                query: (file)=>{
                    const bodyFormData = new FormData();
                    bodyFormData.append("file", file);
                    return {
                        url: "/file/upload",
                        method: "POST",
                        body: bodyFormData,
                        formData: true
                    };
                },
                extraOptions: {
                    name: "file"
                }
            })
        })
});
// For CSR
const { useChangeProfilePasswordMutation , useUpdateProfileMutation , useGetProfileDataQuery , useLoginMutation , usePassRecoveryMutation , usePassResetMutation , useRegisterMutation , useRegisterEmailconfirmMutation , useResendEmailMutation , useDeleteAccountMutation , useLogoutMutation , useFileMutation  } = apiSlice;


/***/ }),

/***/ 52901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




const SpinnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box).withConfig({
    componentId: "sc-f7c13671-0"
})`
  display: flex;
  justify-content: center;
  padding: 50vh 0;
`;
const Spinner = ({ showSpinner  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        open: showSpinner,
        "aria-labelledby": "modal-modal-title",
        "aria-describedby": "modal-modal-description",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SpinnerContainer, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {})
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);


/***/ })

};
;