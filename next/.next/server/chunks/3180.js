"use strict";
exports.id = 3180;
exports.ids = [3180];
exports.modules = {

/***/ 43180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ES": () => (/* binding */ useApproveBookingMutation),
/* harmony export */   "Kz": () => (/* binding */ useBookGuideMutation),
/* harmony export */   "L$": () => (/* binding */ useReInitPaymentMutation),
/* harmony export */   "X4": () => (/* binding */ useGetBookingInfoByIdQuery),
/* harmony export */   "_h": () => (/* binding */ useApproveBookingWithTokenMutation),
/* harmony export */   "f4": () => (/* binding */ useCalculatePenaltyMutation),
/* harmony export */   "kP": () => (/* binding */ useCancelBookingWithTokenMutation),
/* harmony export */   "lq": () => (/* binding */ useBookExcursionMutation),
/* harmony export */   "tH": () => (/* binding */ useGetDetailBookingQuery),
/* harmony export */   "xg": () => (/* binding */ useCancelBookingMutation)
/* harmony export */ });
/* unused harmony exports apiBookingSlice, getDetailBooking */
/* harmony import */ var _modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70220);

var StayUnitKind;
(function(StayUnitKind) {
    StayUnitKind["NIGHT_RATE"] = "NightRate";
    StayUnitKind["DAILY_RATE"] = "DailyRate";
})(StayUnitKind || (StayUnitKind = {}));
const apiBookingSlice = _modules_core_api_apiSlice__WEBPACK_IMPORTED_MODULE_0__/* .apiSlice.injectEndpoints */ .gk.injectEndpoints({
    endpoints: (builder)=>({
            calculatePenalty: builder.mutation({
                query: (id)=>({
                        url: `/booking/${id}/calculate-penalty`,
                        method: "POST"
                    })
            }),
            getDetailBooking: builder.query({
                query: ({ id  })=>({
                        url: `/booking/${id}`
                    }),
                keepUnusedDataFor: 0
            }),
            cancelBooking: builder.mutation({
                query: ({ id  })=>({
                        url: `/booking/${id}/cancel`,
                        method: "PUT"
                    }),
                async onQueryStarted ({ id , ...patch }, { dispatch , queryFulfilled  }) {
                    const { data  } = await queryFulfilled;
                    const patchResult = dispatch(apiBookingSlice.util.updateQueryData("getDetailBooking", {
                        id: id
                    }, (draft)=>{
                        Object.assign(draft, data);
                    }));
                    try {
                        await queryFulfilled;
                    } catch  {
                        patchResult.undo();
                    }
                },
                invalidatesTags: [
                    "bookings",
                    "notifications",
                    "bookedByID"
                ]
            }),
            approveBooking: builder.mutation({
                query: ({ id  })=>({
                        url: `/booking/${id}/approve`,
                        method: "PUT"
                    }),
                async onQueryStarted ({ id , ...patch }, { dispatch , queryFulfilled  }) {
                    const { data  } = await queryFulfilled;
                    const patchResult = dispatch(apiBookingSlice.util.updateQueryData("getDetailBooking", {
                        id: id
                    }, (draft)=>{
                        Object.assign(draft, data);
                    }));
                    try {
                        await queryFulfilled;
                    } catch  {
                        patchResult.undo();
                    }
                },
                invalidatesTags: [
                    "bookings",
                    "notifications"
                ]
            }),
            bookExcursion: builder.mutation({
                query: (data)=>({
                        url: "/booking/excursion",
                        method: "POST",
                        body: data
                    }),
                extraOptions: {
                    name: "bookExcursion"
                }
            }),
            reInitPayment: builder.mutation({
                query: (id)=>({
                        url: `/booking/${id}/payment`,
                        method: "PUT"
                    }),
                extraOptions: {
                    name: "reInitPayment"
                }
            }),
            bookGuide: builder.mutation({
                query: (data)=>({
                        url: "/booking/guide",
                        method: "POST",
                        body: data
                    }),
                extraOptions: {
                    name: "bookGuide"
                }
            }),
            getBookingInfoById: builder.query({
                query: ({ bookingId , token  })=>({
                        url: `/booking/${bookingId}/info/${token}`,
                        method: "GET"
                    }),
                extraOptions: {
                    name: "bookingInfo"
                }
            }),
            cancelBookingWithToken: builder.mutation({
                query: ({ bookingId , token  })=>({
                        url: `/booking/${bookingId}/cancel/${token}`,
                        method: "PUT"
                    }),
                extraOptions: {
                    name: "cancelBookingWithToken"
                }
            }),
            approveBookingWithToken: builder.mutation({
                query: ({ bookingId , token  })=>({
                        url: `/booking/${bookingId}/approve/${token}`,
                        method: "PUT"
                    }),
                extraOptions: {
                    name: "approveBookingWithToken"
                }
            })
        }),
    overrideExisting: true
});
// For CSR
const { useGetDetailBookingQuery , useApproveBookingMutation , useCancelBookingMutation , useCalculatePenaltyMutation , useBookExcursionMutation , useBookGuideMutation , useReInitPaymentMutation , useGetBookingInfoByIdQuery , useCancelBookingWithTokenMutation , useApproveBookingWithTokenMutation  } = apiBookingSlice;
const { endpoints: { getDetailBooking  }  } = apiBookingSlice;


/***/ })

};
;