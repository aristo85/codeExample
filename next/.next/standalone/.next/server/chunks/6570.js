"use strict";
exports.id = 6570;
exports.ids = [6570];
exports.modules = {

/***/ 6570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C4": () => (/* binding */ useAddExcursionMutation),
/* harmony export */   "Hh": () => (/* binding */ useGetPartnerExcursionListQuery),
/* harmony export */   "It": () => (/* binding */ useGetExcursionByIdQuery),
/* harmony export */   "K7": () => (/* binding */ getExcursionByIdTourist),
/* harmony export */   "Nt": () => (/* binding */ useHideShowExcursionMutation),
/* harmony export */   "PK": () => (/* binding */ useGetBookedListItemsQuery),
/* harmony export */   "SM": () => (/* binding */ useGetExcursionListQuery),
/* harmony export */   "UO": () => (/* binding */ useUpdateExcursionMutation),
/* harmony export */   "bi": () => (/* binding */ useGetExcursionByIdTouristQuery),
/* harmony export */   "cY": () => (/* binding */ useDeleteExcursionMutation)
/* harmony export */ });
/* unused harmony exports apiExcursionSlice, getExcursionById */
/* harmony import */ var _modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70220);
/* harmony import */ var _modules_core_helpers_urlConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49836);


const apiExcursionSlice = _modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_0__/* .apiSlice.injectEndpoints */ .gk.injectEndpoints({
    endpoints: (builder)=>({
            deleteExcursion: builder.mutation({
                query: (id)=>({
                        url: `/excursion/${id}`,
                        method: "DELETE"
                    })
            }),
            hideShowExcursion: builder.mutation({
                query: ({ id , isHide  })=>({
                        url: `/excursion/${id}`,
                        method: "PUT",
                        body: {
                            isHide: !isHide
                        }
                    })
            }),
            getPartnerExcursionList: builder.query({
                query: (query)=>({
                        url: `/excursion?${query}`
                    }),
                transformResponse: (baseQueryReturnValue, meta)=>({
                        ...baseQueryReturnValue,
                        totalCount: meta?.response?.headers.get("X-TOTAL-COUNT") || "1"
                    }),
                providesTags: [
                    "partnerExcursionList"
                ],
                keepUnusedDataFor: 0
            }),
            getBookedListItems: builder.query({
                query: (query)=>{
                    return {
                        url: `/booking?${query}`
                    };
                },
                transformResponse: (baseQueryReturnValue, meta)=>({
                        ...baseQueryReturnValue,
                        totalCount: meta?.response?.headers.get("X-TOTAL-COUNT") || "1"
                    }),
                providesTags: [
                    "bookings"
                ]
            }),
            getExcursionList: builder.query({
                query: (urlQueries)=>({
                        url: `/excursion?${(0,_modules_core_helpers_urlConstructor__WEBPACK_IMPORTED_MODULE_1__/* .getUrlQueries */ .z)(urlQueries)}`
                    }),
                transformResponse: (baseQueryReturnValue, meta)=>({
                        ...baseQueryReturnValue,
                        totalCount: meta?.response?.headers.get("X-TOTAL-COUNT") || "1"
                    }),
                keepUnusedDataFor: 0,
                providesTags: [
                    "excursion"
                ]
            }),
            getExcursionById: builder.query({
                query: ({ id  })=>({
                        url: `/excursion/${id}`,
                        method: "GET"
                    }),
                providesTags: [
                    "excursion"
                ]
            }),
            getExcursionByIdTourist: builder.query({
                query: ({ id  })=>({
                        url: `/excursion/${id}/tourist`,
                        method: "GET"
                    }),
                providesTags: [
                    "excursion"
                ]
            }),
            addExcursion: builder.mutation({
                query: (data)=>({
                        url: "/excursion",
                        method: "POST",
                        body: data
                    }),
                extraOptions: {
                    name: "createExcursion"
                }
            }),
            updateExcursion: builder.mutation({
                query: ({ data , id  })=>({
                        url: `/excursion/${id}`,
                        method: "PUT",
                        body: data
                    }),
                extraOptions: {
                    name: "updateExcursion"
                },
                invalidatesTags: [
                    "partnerExcursionList"
                ]
            })
        }),
    overrideExisting: true
});
// For SSR
const { endpoints: { getExcursionById , getExcursionByIdTourist  }  } = apiExcursionSlice;
// For CSR
const { useGetPartnerExcursionListQuery , useHideShowExcursionMutation , useDeleteExcursionMutation , useGetBookedListItemsQuery , useGetExcursionListQuery , useGetExcursionByIdQuery , useGetExcursionByIdTouristQuery , useAddExcursionMutation , useUpdateExcursionMutation  } = apiExcursionSlice;


/***/ })

};
;