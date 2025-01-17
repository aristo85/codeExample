(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3521],{41618:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/control-panel/excursion",function(){return t(97805)}])},6570:function(e,n,t){"use strict";t.d(n,{C4:function(){return p},Hh:function(){return u},It:function(){return h},Nt:function(){return a},PK:function(){return d},SM:function(){return x},UO:function(){return m},bi:function(){return g},cY:function(){return c}});var r=t(49305),i=t(49836);let o=r.gk.injectEndpoints({endpoints:e=>({deleteExcursion:e.mutation({query:e=>({url:"/excursion/".concat(e),method:"DELETE"})}),hideShowExcursion:e.mutation({query:e=>{let{id:n,isHide:t}=e;return{url:"/excursion/".concat(n),method:"PUT",body:{isHide:!t}}}}),getPartnerExcursionList:e.query({query:e=>({url:"/excursion?".concat(e)}),transformResponse:(e,n)=>{var t;return{...e,totalCount:(null==n?void 0:null===(t=n.response)||void 0===t?void 0:t.headers.get("X-TOTAL-COUNT"))||"1"}},providesTags:["partnerExcursionList"],keepUnusedDataFor:0}),getBookedListItems:e.query({query:e=>({url:"/booking?".concat(e)}),transformResponse:(e,n)=>{var t;return{...e,totalCount:(null==n?void 0:null===(t=n.response)||void 0===t?void 0:t.headers.get("X-TOTAL-COUNT"))||"1"}},providesTags:["bookings"]}),getExcursionList:e.query({query:e=>({url:"/excursion?".concat((0,i.z)(e))}),transformResponse:(e,n)=>{var t;return{...e,totalCount:(null==n?void 0:null===(t=n.response)||void 0===t?void 0:t.headers.get("X-TOTAL-COUNT"))||"1"}},keepUnusedDataFor:0,providesTags:["excursion"]}),getExcursionById:e.query({query:e=>{let{id:n}=e;return{url:"/excursion/".concat(n),method:"GET"}},providesTags:["excursion"]}),getExcursionByIdTourist:e.query({query:e=>{let{id:n}=e;return{url:"/excursion/".concat(n,"/tourist"),method:"GET"}},providesTags:["excursion"]}),addExcursion:e.mutation({query:e=>({url:"/excursion",method:"POST",body:e}),extraOptions:{name:"createExcursion"}}),updateExcursion:e.mutation({query:e=>{let{data:n,id:t}=e;return{url:"/excursion/".concat(t),method:"PUT",body:n}},extraOptions:{name:"updateExcursion"},invalidatesTags:["partnerExcursionList"]})}),overrideExisting:!0}),{endpoints:{getExcursionById:s,getExcursionByIdTourist:l}}=o,{useGetPartnerExcursionListQuery:u,useHideShowExcursionMutation:a,useDeleteExcursionMutation:c,useGetBookedListItemsQuery:d,useGetExcursionListQuery:x,useGetExcursionByIdQuery:h,useGetExcursionByIdTouristQuery:g,useAddExcursionMutation:p,useUpdateExcursionMutation:m}=o},97805:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var r=t(85893),i=t(27982),o=t(42143),s=t(41664),l=t.n(s),u=t(67294),a=t(27060),c=t(74094),d=t(34443),x=t(65959),h=t(51949),g=t(6570),p=t(49836),m=t(19656),f=t(85540),C=t(80357),E=t(96894),j=t(15442);let v={ACTIVE:"ACTIVE",DISABLED:"DISABLED",CHECK:"CHECK"};var y=t(6153),T=t(95513);let w=()=>{let e=(0,a.Cl)(),[n,t]=(0,u.useState)(1),[i,o]=(0,u.useState)(0),[s,{isLoading:l}]=(0,g.cY)(),[w,{isLoading:b}]=(0,g.Nt)(),[S,k]=(0,u.useState)(!1),[L,P]=(0,u.useState)(null),[q]=(0,T.m)(),D=(0,h.l)(),{data:z,isLoading:H,refetch:O}=(0,g.Hh)((0,p.z)({limit:E.UZ,offset:i})),N=e=>{P(e),k(!0)},_=()=>{P(null),k(!1)},U=async(e,n,t)=>{if(t===v.CHECK){D("Скрыть/отображать экскурсию можно только в статусе Активна","error");return}await w({id:e,isHide:n}),O()},Z=async()=>{if(L)try{await s(L).unwrap(),D("Экскурсия была удалена успешно","success"),O()}catch(e){D("Экскурсия не была удалена. Попробуйте заново","error")}finally{k(!1)}},R=e=>{o((e-1)*E.UZ),t(e)},V=(0,u.useMemo)(()=>Math.ceil(Number(null==z?void 0:z.totalCount)/E.UZ),[null==z?void 0:z.totalCount]),A=(0,u.useMemo)(()=>[e.accessor("name",{size:657,header:()=>"Название экскурсии",cell:e=>(0,r.jsx)(j.ZR,{children:e.getValue()})}),e.accessor("cityName",{size:130,header:()=>"Населенный пункт",cell:e=>e.getValue()}),e.accessor("guidePhone",{size:200,enableHiding:!0,header:()=>"Телефон экскурсовода",cell:e=>(0,r.jsxs)(r.Fragment,{children:["+",e.getValue()]})}),e.accessor("guideEmail",{size:200,enableHiding:!0,header:()=>"Email экскурсовода",cell:e=>(0,r.jsxs)(j.Ll,{children:[e.getValue(),(0,r.jsx)(y.Z,{onClick:n=>{n.stopPropagation(),q(e.getValue()||"")}})]})}),e.accessor("status",{size:100,enableHiding:!0,header:()=>"Статус",cell:e=>(0,r.jsx)(f.Z,{width:e.column.columnDef.size,status:e.getValue()})}),e.accessor("id",{id:"actions",size:96,header:()=>"Действия",cell:e=>(0,r.jsx)(m.Z,{id:e.row.original.id,width:e.column.columnDef.size,isHideValue:e.row.original.isHide,editLink:"/control-panel/excursion/".concat(e.row.original.id,"/edit?step=1"),onHideShowButtonClickFn:(n,t)=>U(n,t,e.row.original.status),onDeleteClickFn:N})})],[z]),B=(0,c.b7)({data:(null==z?void 0:z.data)||[],columns:A,enableColumnResizing:!1,getCoreRowModel:(0,a.sC)()});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(j.xJ,{children:[(0,r.jsxs)(j.iA,{children:[(0,r.jsx)(j.ss,{children:B.getHeaderGroups().map(e=>(0,r.jsx)(j.SC,{children:e.headers.map(e=>(0,r.jsx)(j.xs,{style:{width:e.column.columnDef.size},children:e.isPlaceholder?null:(0,c.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),B.getRowModel().rows.length&&!H?(0,r.jsx)(j.RM,{children:B.getRowModel().rows.map(e=>(0,r.jsx)(j.SC,{children:e.getVisibleCells().map(e=>(0,r.jsx)(j.pj,{style:{width:e.column.columnDef.size},children:(0,c.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))}):(0,r.jsx)(j.RM,{children:(0,r.jsx)(j.SC,{children:(0,r.jsx)(j.pj,{colSpan:6,style:{textAlign:"center"},children:"Здесь будут ваши экскурсии"})})})]}),z&&V>1&&(0,r.jsx)(d.Z,{leftSideButtons:1,rightSideButtons:1,visiblePages:4,currentPage:n,totalPages:V,onPageChange:R})]}),S&&(0,r.jsx)(C.p,{deletingText:"Вы уверены, что хотите удалить экскурсию?",deletePlacementFn:Z,closeButtonFn:_}),(0,r.jsx)(x.Z,{showSpinner:l||b})]})};var b=t(79417);let S=[{label:"Панель управления",url:"/control-panel"},{label:"Досуг"},{label:"Экскурсии"}],k=()=>(0,r.jsxs)(i.yr,{children:[(0,r.jsxs)(i.vO,{children:[(0,r.jsx)(b.Z,{paths:S}),(0,r.jsx)(l(),{href:"/control-panel/excursion/add?step=1",children:(0,r.jsx)(o.Z,{dark:!0,children:"Добавить экскурсию"})})]}),(0,r.jsx)(w,{})]});var L=k}},function(e){e.O(0,[8999,9246,5647,1465,9774,2888,179],function(){return e(e.s=41618)}),_N_E=e.O()}]);