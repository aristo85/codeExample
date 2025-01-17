"use strict";
exports.id = 8025;
exports.ids = [8025];
exports.modules = {

/***/ 88025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F8": () => (/* binding */ useDeletePlacementMutation),
/* harmony export */   "G9": () => (/* binding */ useUnblockPlacementMutation),
/* harmony export */   "HK": () => (/* binding */ useGetPartnerPlacementsQuery),
/* harmony export */   "Kj": () => (/* binding */ getBookingData),
/* harmony export */   "PK": () => (/* binding */ useGetBookedListItemsQuery),
/* harmony export */   "PM": () => (/* binding */ useGetBookedExcursionGroupedItemsQuery),
/* harmony export */   "Qw": () => (/* binding */ useBlockPlacementMutation),
/* harmony export */   "R9": () => (/* binding */ getDetailBookingData),
/* harmony export */   "TK": () => (/* binding */ useGetDetailBookingDataQuery),
/* harmony export */   "YE": () => (/* binding */ useBookCurrentRoomMutation),
/* harmony export */   "mQ": () => (/* binding */ useAddExcursionExternalPlacesMutation),
/* harmony export */   "px": () => (/* binding */ useAddPlacementByIdMutation)
/* harmony export */ });
/* unused harmony exports apiPlacementSlice, useGetSpecialOfferQuery, useGetBookingDataByAmenitiesQuery */
/* harmony import */ var _modules_core_helpers_urlConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49836);
/* harmony import */ var _modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70220);


const apiPlacementSlice = _modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_1__/* .apiSlice.injectEndpoints */ .gk.injectEndpoints({
    endpoints: (builder)=>({
            blockPlacement: builder.mutation({
                query: (id)=>({
                        url: `/placement/${id}/block`,
                        method: "PUT"
                    })
            }),
            unblockPlacement: builder.mutation({
                query: (id)=>({
                        url: `/placement/${id}/unblock`,
                        method: "PUT"
                    })
            }),
            deletePlacement: builder.mutation({
                query: (id)=>({
                        url: `/placement/${id}`,
                        method: "DELETE",
                        body: id
                    })
            }),
            getPartnerPlacements: builder.query({
                query: (query)=>({
                        url: `/placement?${query}`
                    }),
                transformResponse: (baseQueryReturnValue, meta, arg)=>({
                        ...baseQueryReturnValue,
                        totalCount: meta?.response?.headers.get("X-TOTAL-COUNT") || "1"
                    }),
                providesTags: [
                    "Placements"
                ],
                keepUnusedDataFor: 0
            }),
            getBookingData: builder.query({
                query: (urlQueries)=>({
                        url: `/placement?${(0,_modules_core_helpers_urlConstructor__WEBPACK_IMPORTED_MODULE_0__/* .getUrlQueries */ .z)(urlQueries)}`
                    }),
                transformResponse: (baseQueryReturnValue, meta, arg)=>({
                        data: baseQueryReturnValue,
                        totalCount: meta?.response?.headers.get("X-TOTAL-COUNT") || "1"
                    }),
                keepUnusedDataFor: 0
            }),
            getDetailBookingData: builder.query({
                query: ({ id , urlQueries  })=>({
                        url: `/placement/${id}?${typeof urlQueries !== "string" ? (0,_modules_core_helpers_urlConstructor__WEBPACK_IMPORTED_MODULE_0__/* .getUrlQueries */ .z)(urlQueries) : urlQueries}`
                    })
            }),
            getSpecialOffer: builder.query({
                query: ()=>({
                        url: `/placement?specialOffer=true`
                    })
            }),
            bookCurrentRoom: builder.mutation({
                query: (data)=>({
                        url: "/booking/verify",
                        method: "POST",
                        body: data
                    }),
                extraOptions: {
                    name: "bookCurrentRoom"
                }
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
                ],
                keepUnusedDataFor: 0
            }),
            getBookedExcursionGroupedItems: builder.query({
                query: (query)=>{
                    return {
                        url: `/booking/excursion?${query}`
                    };
                },
                transformResponse: (baseQueryReturnValue, meta)=>({
                        ...baseQueryReturnValue,
                        totalCount: meta?.response?.headers.get("X-TOTAL-COUNT") || "1"
                    }),
                keepUnusedDataFor: 0,
                providesTags: [
                    "bookings"
                ]
            }),
            addPlacementById: builder.mutation({
                query: (data)=>({
                        url: "/placement",
                        method: "POST",
                        body: data
                    }),
                invalidatesTags: [
                    "Placements"
                ],
                extraOptions: {
                    name: "addPlacement"
                }
            }),
            getBookingDataByAmenities: builder.query({
                query: (urlQueries)=>({
                        url: `/placement?${(0,_modules_core_helpers_urlConstructor__WEBPACK_IMPORTED_MODULE_0__/* .getUrlQueries */ .z)(urlQueries)}`
                    }),
                transformResponse: (baseQueryReturnValue, meta, arg)=>{
                    return {
                        data: baseQueryReturnValue.data,
                        totalCount: meta?.response?.headers.get("X-TOTAL-COUNT") || "1",
                        amenitiesData: baseQueryReturnValue.amenitiesData
                    };
                }
            }),
            addExcursionExternalPlaces: builder.mutation({
                query: (data)=>({
                        url: "/booking/excursion",
                        method: "PUT",
                        body: data
                    })
            })
        }),
    overrideExisting: true
});
// For SSR
const { endpoints: { getBookingData , getDetailBookingData  }  } = apiPlacementSlice;
// For CSR
const { useGetDetailBookingDataQuery , useGetSpecialOfferQuery , useBookCurrentRoomMutation , useGetBookedListItemsQuery , useAddPlacementByIdMutation , useGetPartnerPlacementsQuery , useDeletePlacementMutation , useUnblockPlacementMutation , useBlockPlacementMutation , useGetBookedExcursionGroupedItemsQuery , useAddExcursionExternalPlacesMutation , useGetBookingDataByAmenitiesQuery  } = apiPlacementSlice;


/***/ })

};
;