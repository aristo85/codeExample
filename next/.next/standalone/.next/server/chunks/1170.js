"use strict";
exports.id = 1170;
exports.ids = [1170];
exports.modules = {

/***/ 31170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GD": () => (/* binding */ useDeleteGuideMutation),
/* harmony export */   "Kd": () => (/* binding */ useHideShowGuideMutation),
/* harmony export */   "OS": () => (/* binding */ useGetGuideByIdQuery),
/* harmony export */   "Zl": () => (/* binding */ useUpdateGuideMutation),
/* harmony export */   "_E": () => (/* binding */ useGetPartnerGuideListQuery),
/* harmony export */   "by": () => (/* binding */ useAddGuideMutation),
/* harmony export */   "dQ": () => (/* binding */ getGuideByIdTourist),
/* harmony export */   "kO": () => (/* binding */ useGetGuideByIdTouristQuery),
/* harmony export */   "we": () => (/* binding */ useGetGuideListQuery)
/* harmony export */ });
/* unused harmony exports apiGuideSlice, getGuideById */
/* harmony import */ var _modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70220);
/* harmony import */ var _modules_core_helpers_urlConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49836);


const apiGuideSlice = _modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_0__/* .apiSlice.injectEndpoints */ .gk.injectEndpoints({
    endpoints: (builder)=>({
            deleteGuide: builder.mutation({
                query: (id)=>({
                        url: `/guide/${id}`,
                        method: "DELETE"
                    })
            }),
            hideShowGuide: builder.mutation({
                query: ({ id , isHide  })=>({
                        url: `/guide/${id}`,
                        method: "PUT",
                        body: {
                            isHide: !isHide
                        }
                    })
            }),
            getPartnerGuideList: builder.query({
                query: (query)=>({
                        url: `/guide?${query}`
                    }),
                transformResponse: (baseQueryReturnValue, meta)=>({
                        ...baseQueryReturnValue,
                        totalCount: meta?.response?.headers.get("X-TOTAL-COUNT") || "1"
                    }),
                providesTags: [
                    "partnerGuideList"
                ],
                keepUnusedDataFor: 0
            }),
            getGuideById: builder.query({
                query: ({ id  })=>({
                        url: `/guide/${id}`,
                        method: "GET"
                    }),
                providesTags: [
                    "guide"
                ]
            }),
            getGuideList: builder.query({
                query: (urlQueries)=>({
                        url: `/guide?${(0,_modules_core_helpers_urlConstructor__WEBPACK_IMPORTED_MODULE_1__/* .getUrlQueries */ .z)(urlQueries)}`
                    }),
                transformResponse: (baseQueryReturnValue, meta)=>({
                        ...baseQueryReturnValue,
                        totalCount: meta?.response?.headers.get("X-TOTAL-COUNT") || "1"
                    }),
                keepUnusedDataFor: 0,
                providesTags: [
                    "guide"
                ]
            }),
            getGuideByIdTourist: builder.query({
                query: ({ id  })=>({
                        url: `/guide/${id}/tourist`,
                        method: "GET"
                    }),
                providesTags: [
                    "guide"
                ]
            }),
            addGuide: builder.mutation({
                query: (data)=>({
                        url: "/guide",
                        method: "POST",
                        body: data
                    }),
                extraOptions: {
                    name: "createGuide"
                }
            }),
            updateGuide: builder.mutation({
                query: ({ data , id  })=>({
                        url: `/guide/${id}`,
                        method: "PUT",
                        body: data
                    }),
                extraOptions: {
                    name: "updateGuide"
                },
                invalidatesTags: [
                    "partnerGuideList"
                ]
            })
        }),
    overrideExisting: true
});
// For SSR
const { endpoints: { getGuideById , getGuideByIdTourist  }  } = apiGuideSlice;
// For CSR
const { useGetGuideByIdQuery , useGetGuideListQuery , useAddGuideMutation , useUpdateGuideMutation , useGetPartnerGuideListQuery , useDeleteGuideMutation , useHideShowGuideMutation , useGetGuideByIdTouristQuery  } = apiGuideSlice;


/***/ })

};
;