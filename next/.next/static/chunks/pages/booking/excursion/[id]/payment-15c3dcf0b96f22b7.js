(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2486],{12228:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/booking/excursion/[id]/payment",function(){return r(38994)}])},6570:function(e,n,r){"use strict";r.d(n,{C4:function(){return y},Hh:function(){return c},It:function(){return p},Nt:function(){return a},PK:function(){return d},SM:function(){return x},UO:function(){return T},bi:function(){return E},cY:function(){return l}});var t=r(49305),o=r(49836);let u=t.gk.injectEndpoints({endpoints:e=>({deleteExcursion:e.mutation({query:e=>({url:"/excursion/".concat(e),method:"DELETE"})}),hideShowExcursion:e.mutation({query:e=>{let{id:n,isHide:r}=e;return{url:"/excursion/".concat(n),method:"PUT",body:{isHide:!r}}}}),getPartnerExcursionList:e.query({query:e=>({url:"/excursion?".concat(e)}),transformResponse:(e,n)=>{var r;return{...e,totalCount:(null==n?void 0:null===(r=n.response)||void 0===r?void 0:r.headers.get("X-TOTAL-COUNT"))||"1"}},providesTags:["partnerExcursionList"],keepUnusedDataFor:0}),getBookedListItems:e.query({query:e=>({url:"/booking?".concat(e)}),transformResponse:(e,n)=>{var r;return{...e,totalCount:(null==n?void 0:null===(r=n.response)||void 0===r?void 0:r.headers.get("X-TOTAL-COUNT"))||"1"}},providesTags:["bookings"]}),getExcursionList:e.query({query:e=>({url:"/excursion?".concat((0,o.z)(e))}),transformResponse:(e,n)=>{var r;return{...e,totalCount:(null==n?void 0:null===(r=n.response)||void 0===r?void 0:r.headers.get("X-TOTAL-COUNT"))||"1"}},keepUnusedDataFor:0,providesTags:["excursion"]}),getExcursionById:e.query({query:e=>{let{id:n}=e;return{url:"/excursion/".concat(n),method:"GET"}},providesTags:["excursion"]}),getExcursionByIdTourist:e.query({query:e=>{let{id:n}=e;return{url:"/excursion/".concat(n,"/tourist"),method:"GET"}},providesTags:["excursion"]}),addExcursion:e.mutation({query:e=>({url:"/excursion",method:"POST",body:e}),extraOptions:{name:"createExcursion"}}),updateExcursion:e.mutation({query:e=>{let{data:n,id:r}=e;return{url:"/excursion/".concat(r),method:"PUT",body:n}},extraOptions:{name:"updateExcursion"},invalidatesTags:["partnerExcursionList"]})}),overrideExisting:!0}),{endpoints:{getExcursionById:i,getExcursionByIdTourist:s}}=u,{useGetPartnerExcursionListQuery:c,useHideShowExcursionMutation:a,useDeleteExcursionMutation:l,useGetBookedListItemsQuery:d,useGetExcursionListQuery:x,useGetExcursionByIdQuery:p,useGetExcursionByIdTouristQuery:E,useAddExcursionMutation:y,useUpdateExcursionMutation:T}=u},38994:function(e,n,r){"use strict";r.r(n);var t=r(85893);r(67294);var o=r(57441),u=r(11163),i=r(6570),s=r(81985),c=r(26239),a=r(98726),l=r(36788);let d=()=>{let e=(0,u.useRouter)(),{id:n}=e.query,{isLoading:r}=(0,a.Z)(),d=(0,o.C)(s.tE),{queriesString:x}=(0,c.k)(d,c.y.detail),{queriesString:p}=(0,c.k)(d,c.y.list),{data:E}=(0,i.bi)({id:Number(n)},{skip:!n}),{name:y}=(null==E?void 0:E.data)||{},T=[{url:"/",label:"Главная"},{url:"/excursion?".concat(p),label:"Результаты поиска"},{url:"/excursion/".concat(n,"?").concat(x),label:y||""},{url:"/booking/excursion/".concat(n,"?").concat(x),label:"Бронирование"},{url:"/booking/excursion/".concat(n,"/payment?").concat(x),label:"Оплата"}];return(0,t.jsx)(l.Z,{breadcrumbsItems:T,isLoading:r})};n.default=d}},function(e){e.O(0,[8248,9774,2888,179],function(){return e(e.s=12228)}),_N_E=e.O()}]);