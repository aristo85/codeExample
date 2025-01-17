"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2600],{31170:function(n,e,t){t.d(e,{GD:function(){return f},Kd:function(){return m},OS:function(){return a},Zl:function(){return c},_E:function(){return p},by:function(){return s},kO:function(){return h},we:function(){return d}});var r=t(49305),i=t(49836);let o=r.gk.injectEndpoints({endpoints:n=>({deleteGuide:n.mutation({query:n=>({url:"/guide/".concat(n),method:"DELETE"})}),hideShowGuide:n.mutation({query:n=>{let{id:e,isHide:t}=n;return{url:"/guide/".concat(e),method:"PUT",body:{isHide:!t}}}}),getPartnerGuideList:n.query({query:n=>({url:"/guide?".concat(n)}),transformResponse:(n,e)=>{var t;return{...n,totalCount:(null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.headers.get("X-TOTAL-COUNT"))||"1"}},providesTags:["partnerGuideList"],keepUnusedDataFor:0}),getGuideById:n.query({query:n=>{let{id:e}=n;return{url:"/guide/".concat(e),method:"GET"}},providesTags:["guide"]}),getGuideList:n.query({query:n=>({url:"/guide?".concat((0,i.z)(n))}),transformResponse:(n,e)=>{var t;return{...n,totalCount:(null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.headers.get("X-TOTAL-COUNT"))||"1"}},keepUnusedDataFor:0,providesTags:["guide"]}),getGuideByIdTourist:n.query({query:n=>{let{id:e}=n;return{url:"/guide/".concat(e,"/tourist"),method:"GET"}},providesTags:["guide"]}),addGuide:n.mutation({query:n=>({url:"/guide",method:"POST",body:n}),extraOptions:{name:"createGuide"}}),updateGuide:n.mutation({query:n=>{let{data:e,id:t}=n;return{url:"/guide/".concat(t),method:"PUT",body:e}},extraOptions:{name:"updateGuide"},invalidatesTags:["partnerGuideList"]})}),overrideExisting:!0}),{endpoints:{getGuideById:l,getGuideByIdTourist:u}}=o,{useGetGuideByIdQuery:a,useGetGuideListQuery:d,useAddGuideMutation:s,useUpdateGuideMutation:c,useGetPartnerGuideListQuery:p,useDeleteGuideMutation:f,useHideShowGuideMutation:m,useGetGuideByIdTouristQuery:h}=o},22600:function(n,e,t){t.d(e,{Z:function(){return n1}});var r=t(85893),i=t(67294),o=t(87536),l=t(47533),u=t(41248),a=t(68270),d=t(38445),s=t(84044),c=t(16310);let p=c.Z_().trim().required("Введите имя и фамилию гида").min(2,(0,d.JB)(2,100)).max(100,(0,d.JB)(2,100)),f=n=>c.Z_().required("Введите номер телефона гида").min(6,"Недопустимое количество символов").max(15,"Недопустимое количество символов"),m=c.Z_().required("Введите email гида").email("Недопустимые символы/формат").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Недопустимые символы/формат").typeError("Недопустимое значение"),h=n=>c.Ry().shape({name:p,phone:f(10+n),email:m,description:(0,s.UM)("Введите описание гида"),avatar:c.IX().required("Добавьте фото гида").min(1,"Добавьте фото гида"),birthdayDate:c.Z_().required("Добавьте дату рождения гида")}),v=c.Ry().shape({cityId:c.Z_().required("Выберите населенный пункт"),maxNumberOfParticipants:(0,s.AU)("Введите максимальное количество участников"),travelMode:c.Z_().required("Выберите способ передвижения"),duration:c.Z_().required("Выберите продолжительность"),costPerHour:(0,s.AU)("Введите стоимость за 1 час")}),g={date:c.Z_().required("form.required_message"),timeList:c.IX().of(c.Ry().shape({time:c.Z_().required("form.required_message")})).required("form.required_message").min(1,"Добавьте время")},x=c.Ry().shape({schedule:c.IX().test("unique-dates","дата не должна повторяться",function(n){let e=null==n?void 0:n.map(n=>n.date),t=new Set(e);return(null==e?void 0:e.length)===t.size}).of(c.Ry().shape(g)).required("Must have fields").min(1,"Добавьте дату и время")}),Z=c.Ry().shape({photos:c.IX().required("Загрузите фотографии").min(6,"минимум 6 фотографий")}),y={1:["name","birthdayDate","phone","email","about","avatar"],2:["cityId","maxNumberOfParticipants","travelMode","duration","costPerHour"],3:["schedule"],5:["photos"]};var j=t(65959),w=t(31170),b=t(11163),C=t(13435),q=t(79417),I=t(51949),P=t(56669),T=t(7297),G=t(186),E=t(24062),_=t(8825),O=t(30089),S=t(71620);function D(){let n=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 32px;\n  margin-top: 32px;\n"]);return D=function(){return n},n}function L(){let n=(0,T.Z)(["\n     flex-direction: column;\n    "]);return L=function(){return n},n}function N(){let n=(0,T.Z)(["\n    ","\n  "]);return N=function(){return n},n}function k(){let n=(0,T.Z)(["\n  display: flex;\n  gap: 32px;\n  align-items: center;\n\n  ","\n"]);return k=function(){return n},n}function A(){let n=(0,T.Z)(["\n    width: 100%;\n    "]);return A=function(){return n},n}function U(){let n=(0,T.Z)(["\n    ","\n  "]);return U=function(){return n},n}function R(){let n=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  align-self: stretch;\n  ",";\n"]);return R=function(){return n},n}function B(){let n=(0,T.Z)(["\n    width: 100%;\n    "]);return B=function(){return n},n}function z(){let n=(0,T.Z)(["\n    ","\n  "]);return z=function(){return n},n}function H(){let n=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  ",";\n"]);return H=function(){return n},n}function M(){let n=(0,T.Z)(["\n  color: red;\n  font-size: 14px;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"]);return M=function(){return n},n}function Q(){let n=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  flex-grow: 1;\n  width: 100%;\n"]);return Q=function(){return n},n}function X(){let n=(0,T.Z)(["\n      flex-basis: 100%;\n    "]);return X=function(){return n},n}function F(){let n=(0,T.Z)(["\n      > div.inputwrapper {\n      height: ","px;\n    }\n    input {\n      margin-top: -","px;\n    }\n     input::placeholder {\n      white-space: normal;\n    }\n    "]);return F=function(){return n},n}function V(){let n=(0,T.Z)(["\n    ","\n    ","\n  "]);return V=function(){return n},n}function W(){let n=(0,T.Z)(["\n  flex-basis: 48.9%;\n\n  ","\n"]);return W=function(){return n},n}function J(){let n=(0,T.Z)(["\n     flex-direction: column;\n    "]);return J=function(){return n},n}function K(){let n=(0,T.Z)(["\n    ","\n  "]);return K=function(){return n},n}function $(){let n=(0,T.Z)(["\n  display: flex;\n  gap: 32px;\n\n  ","\n"]);return $=function(){return n},n}function Y(){let n=(0,T.Z)(["\n  flex-basis: 48.9%;\n"]);return Y=function(){return n},n}function nn(){let n=(0,T.Z)(["\n     flex-direction: column;\n    "]);return nn=function(){return n},n}function ne(){let n=(0,T.Z)(["\n    ","\n  "]);return ne=function(){return n},n}function nt(){let n=(0,T.Z)(["\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n  align-items: center;\n  position: relative;\n\n  ","\n"]);return nt=function(){return n},n}function nr(){let n=(0,T.Z)(["\n      flex-basis: 100%;\n    "]);return nr=function(){return n},n}function ni(){let n=(0,T.Z)(["\n      ","\n    "]);return ni=function(){return n},n}function no(){let n=(0,T.Z)(["\n   .selector {\n    height: ","px;\n    padding-right: 20px;\n  }\n  "]);return no=function(){return n},n}function nl(){let n=(0,T.Z)(["\n    .error {\n      bottom: -18px;\n    }\n    ","\n    ","\n  "]);return nl=function(){return n},n}function nu(){let n=(0,T.Z)(["\n  flex-basis: 48.9%;\n\n  & .optionsMenu {\n    max-height: 200px;\n    overflow-y: scroll;\n    ","\n  }\n\n  ","\n"]);return nu=function(){return n},n}function na(){let n=(0,T.Z)(["\n      position: static;\n      align-self: start;\n    "]);return na=function(){return n},n}function nd(){let n=(0,T.Z)(["\n    ","\n  "]);return nd=function(){return n},n}function ns(){let n=(0,T.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  ","\n"]);return ns=function(){return n},n}function nc(){let n=(0,T.Z)(["\n  color: #8daec1;\n  font-size: 14px;\n"]);return nc=function(){return n},n}function np(){let n=(0,T.Z)(["\n  color: #8daec1;\n  font-size: 16px;\n  line-height: 22px;\n\n  span {\n    color: #222121;\n  }\n"]);return np=function(){return n},n}function nf(){let n=(0,T.Z)(["\n    flex-direction: column;\n    "]);return nf=function(){return n},n}function nm(){let n=(0,T.Z)(["\n    ","\n  "]);return nm=function(){return n},n}function nh(){let n=(0,T.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 16px;\n\n  ",";\n"]);return nh=function(){return n},n}function nv(){let n=(0,T.Z)(["\n  flex-grow: 1;\n  min-width: 100% !important;\n  margin-top: 3px;\n  input {\n    padding: 3px 0 0 16px;\n  }\n"]);return nv=function(){return n},n}let ng=G.ZP.div.withConfig({componentId:"sc-85734d03-0"})(D()),nx=G.ZP.div.withConfig({componentId:"sc-85734d03-1"})(k(),n=>{let{theme:e}=n;return(0,G.iv)(N(),e.media.down("sm")(L()))}),nZ=G.ZP.div.withConfig({componentId:"sc-85734d03-2"})(R(),n=>{let{theme:e}=n;return(0,G.iv)(U(),e.media.down("sm")(A()))}),ny=G.ZP.div.withConfig({componentId:"sc-85734d03-3"})(H(),n=>{let{theme:e}=n;return(0,G.iv)(z(),e.media.down("sm")(B()))}),nj=G.ZP.span.withConfig({componentId:"sc-85734d03-4"})(M()),nw=G.ZP.div.withConfig({componentId:"sc-85734d03-5"})(Q()),nb=(0,G.ZP)(E.Z).withConfig({componentId:"sc-85734d03-6"})(W(),n=>{let{theme:e,mobileh:t,isStepOne:r}=n;return(0,G.iv)(V(),e.media.down(r?"md":"lg")(X()),e.media.down("sm")(F(),null!=t?t:48,t?.4*t:0))}),nC=G.ZP.div.withConfig({componentId:"sc-85734d03-7"})($(),n=>{let{theme:e}=n;return(0,G.iv)(K(),e.media.down("md")(J()))}),nq=G.ZP.div.withConfig({componentId:"sc-85734d03-8"})(Y()),nI=G.ZP.div.withConfig({componentId:"sc-85734d03-9"})(nt(),n=>{let{theme:e}=n;return(0,G.iv)(ne(),e.media.down("sm")(nn()))}),nP=(0,G.ZP)(_.Z).withConfig({componentId:"sc-85734d03-10"})(nu(),n=>n.theme.scrollbar.thinSecondary,n=>{let{theme:e,mobileh:t,error:r}=n;return(0,G.iv)(nl(),n=>{let{theme:e}=n;return(0,G.iv)(ni(),e.media.down("lg")(nr()))},e.media.down("sm")(no(),null!=t?t:48))}),nT=(0,G.ZP)(O.TG).withConfig({componentId:"sc-85734d03-11"})(ns(),n=>{let{theme:e}=n;return(0,G.iv)(nd(),e.media.down("lg")(na()))}),nG=G.ZP.p.withConfig({componentId:"sc-85734d03-12"})(nc()),nE=G.ZP.p.withConfig({componentId:"sc-85734d03-13"})(np()),n_=G.ZP.div.withConfig({componentId:"sc-85734d03-14"})(nh(),n=>{let{theme:e}=n;return(0,G.iv)(nm(),e.media.down("sm")(nf()))}),nO=(0,G.ZP)(S.Z).withConfig({componentId:"sc-85734d03-15"})(nv());var nS=t(86289),nD=t(42189),nL=t(21650),nN=t(88620),nk=t(88e3),nA=t(27484),nU=t.n(nA),nR=t(96894);let nB=()=>{var n,e,t;let{register:i,control:l,formState:{errors:u}}=(0,o.Gc)();return(0,r.jsxs)(ng,{children:[(0,r.jsxs)(nx,{children:[(0,r.jsx)(nZ,{children:(0,r.jsx)(o.Qr,{name:"avatar",control:l,render:n=>{var e;let{field:{value:t,onChange:i}}=n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(nS.U,{imageText:"Добавить фото гида",onImageUpload:n=>{i(n)},shape:nD.b.RECTANGLE,color:nD.I.WHITE,icon:(0,r.jsx)(nL.Z,{fill:"#1D7ABD"}),imageList:null!=t?t:[],isFullHeight:!0}),(null===(e=u.avatar)||void 0===e?void 0:e.message)&&(0,r.jsx)(nj,{children:u.avatar.message})]})}})}),(0,r.jsxs)(nw,{children:[(0,r.jsxs)(nC,{children:[(0,r.jsx)(nb,{isStepOne:!0,label:"Имя гида",...i("name"),placeholder:"Введите имя и фамилию гида",error:null===(n=u.name)||void 0===n?void 0:n.message}),(0,r.jsx)(o.Qr,{control:l,name:"birthdayDate",render:n=>{var e,t;let{field:i}=n;return(0,r.jsxs)(ny,{style:{width:"50%"},children:[(0,r.jsx)(nO,{style:{width:"100%"},label:"Дата рождения гида",value:i.value?nU()(i.value):null,setValue:n=>{i.onChange(nU()(n).format(nR.K_))},placeholder:"Выберите дату рождения гида",maxDate:nU()(),disablePast:!1,error:null==u?void 0:null===(e=u.birthdayDate)||void 0===e?void 0:e.message}),(null===(t=u.birthdayDate)||void 0===t?void 0:t.message)&&(0,r.jsx)(nj,{children:u.birthdayDate.message})]})}})]}),(0,r.jsxs)(nC,{children:[(0,r.jsx)(nq,{children:(0,r.jsx)(o.Qr,{name:"phone",control:l,render:n=>{var e;let{field:t}=n;return(0,r.jsx)(nN.Z,{label:"Номер телефона гида",placeholder:"Введите номер телефона гида",onChange:t.onChange,error:null===(e=u.phone)||void 0===e?void 0:e.message,phoneNumber:t.value})}})}),(0,r.jsx)(nb,{isStepOne:!0,label:"Email гида",...i("email"),placeholder:"Укажите адрес email гида",error:null===(e=u.email)||void 0===e?void 0:e.message})]})]})]}),(0,r.jsx)(nk.Z,{label:"Расскажите о Гиде",...i("description"),placeholder:"Это подробная информация о гиде и его услугах. То, что вы здесь напишете будет отображаться на детальной странице гида.",error:null===(t=u.description)||void 0===t?void 0:t.message})]})};var nz=t(85601),nH=t(30838);let nM=()=>{var n,e;let{register:t,control:i,formState:{errors:l}}=(0,o.Gc)(),[u]=(0,nz.B)();return(0,r.jsxs)(ng,{children:[(0,r.jsxs)(nI,{children:[(0,r.jsx)(o.Qr,{name:"cityId",control:i,render:n=>{var e,t;let{field:i}=n;return(0,r.jsx)(nP,{label:"Населенный пункт",options:u,...i,value:null===(e=i.value)||void 0===e?void 0:e.toString(),error:null===(t=l.cityId)||void 0===t?void 0:t.message,onChange:n=>{i.onChange(n)},placeholder:"Выберите населенный пункт гида",mobileh:68})}}),(0,r.jsx)(nb,{label:"Максимальное количество участников",...t("maxNumberOfParticipants"),placeholder:"Укажите количество участников, с которым может работать гид",mobileh:68,error:null===(n=l.maxNumberOfParticipants)||void 0===n?void 0:n.message,style:{marginTop:"8px"}}),(0,r.jsx)(o.Qr,{control:i,name:"withChildren",render:n=>{let{field:e}=n;return(0,r.jsx)(nT,{label:"Можно с детьми",value:!!e.value,setValue:e.onChange})}}),(0,r.jsx)(o.Qr,{name:"travelMode",control:i,render:n=>{var e;let{field:t}=n;return(0,r.jsx)(nP,{label:"Способ передвижения",options:nR.gG,...t,value:t.value,error:null===(e=l.travelMode)||void 0===e?void 0:e.message,onChange:n=>{t.onChange(n)},placeholder:"Выберите способ передвижения гида",mobileh:68})}}),(0,r.jsx)(o.Qr,{name:"duration",control:i,render:n=>{var e,t;let{field:i}=n;return(0,r.jsx)(nP,{label:"Максимальная продолжительность работы",options:nH.fW,...i,value:null===(e=i.value)||void 0===e?void 0:e.toString(),error:null===(t=l.duration)||void 0===t?void 0:t.message,onChange:n=>{i.onChange(n)},placeholder:"Выберите продолжительность работы гида",mobileh:68})}})]}),(0,r.jsx)(nb,{label:"Cтоимость за 1 час, ₽",...t("costPerHour"),placeholder:"Укажите стоимость часа работы гида",mobileh:68,error:null===(e=l.costPerHour)||void 0===e?void 0:e.message}),(0,r.jsx)(nG,{children:"Вы ничего не платите за размещение гида. Вместо этого мы берем процент от стоимости каждого заказа."})]})};var nQ=t(64350);let nX=()=>{let{register:n,control:e}=(0,o.Gc)();return(0,r.jsx)(ng,{children:(0,r.jsx)(nQ.Z,{control:e,register:n})})},nF=()=>{let{control:n,formState:{errors:e}}=(0,o.Gc)();return(0,r.jsxs)(ng,{children:[(0,r.jsxs)(nE,{children:["Загрузите качественные и яркие фото с пейзажами, архитектурными, природными и другими любопытными объектами по маршруту. Также хорошо подойдут фото с людьми на вашей экскурсии, чтобы прочувствовать атмосферу, которую вы создаете. ",(0,r.jsx)("br",{}),"Добавьте к описанию экскурсии ",(0,r.jsx)("span",{children:"минимум 6 фотографий"}),". Минимальные размеры фотографий:"," ",(0,r.jsx)("span",{children:"горизонтальные – 1200х1000, вертикальные – 1000х1350"}),". Загружая фотографии, вы подтверждаете право их использования на нашем сайте: изображения сделаны вами, взяты с согласия автора или из легальных источников, а также не нарушают прав третьих лиц."]}),(0,r.jsx)(n_,{children:(0,r.jsx)(nZ,{children:(0,r.jsx)(o.Qr,{name:"photos",control:n,render:n=>{let{field:{value:t,onChange:i}}=n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(nS.U,{imageText:"Добавить фотографии",onImageUpload:n=>{i(n)},shape:nD.b.RECTANGLE,color:nD.I.WHITE,icon:(0,r.jsx)(nL.Z,{fill:"#1D7ABD"}),multipleImages:!0,imageList:null!=t?t:[]}),e.photos&&(0,r.jsx)(nj,{children:e.photos.message})]})}})})})]})};var nV=t(32762),nW=t(60268),nJ=t(57441),nK=t(45138);let n$=[{label:"Досуг"},{url:"/control-panel/guide",label:"Гиды"},{label:"Добавление гида"}],nY=["Расскажите о гиде и его опыте","Детальная информация","Время работы","Фотографии"],n0=()=>{let n=(0,I.l)(),e=(0,b.useRouter)(),t=(0,nJ.T)(),d=(0,u.v9)(nK.N6),{currentStep:s,setStep:c}=(0,nW.g)(4,!(null==d?void 0:d.name),!e.pathname.includes("[id]")),p=(0,u.v9)(a.eV),{data:f,isLoading:m}=(0,w.OS)({id:Number(e.query.id)},{skip:!e.query.id,refetchOnMountOrArgChange:!0}),[g,{isLoading:T}]=(0,w.by)(),[G,{isLoading:E}]=(0,w.Zl)(),_=[h(p.codeNum.length),v,x,Z],O=_[s-1]||Z,S=(0,o.cI)({defaultValues:e.query.id?(null==d?void 0:d.name)?d:{}:d,resolver:(0,l.X)(O),mode:"onChange"}),{handleSubmit:D,setError:L,reset:N,trigger:k,getValues:A}=S,U=async r=>{var i,o,l,u;let a=null===(i=r.avatar)||void 0===i?void 0:i[0].id,d=r.photos.map(n=>n.id),s={...r,avatar:a,photos:d};try{let r=(null===(o=e.query)||void 0===o?void 0:o.id)?await G({data:s,id:+e.query.id}).unwrap():await g(s).unwrap();r.success&&(n("".concat(e.query.id?"Гид удачно изменен":"Гид удачно добавлен"),"success"),e.push(e.query.id?"/control-panel/guide":"/control-panel/guide/".concat(r.data.id,"/success")),t((0,nK.B8)({})))}catch(e){let n=4;null==e||null===(l=e.data)||void 0===l||null===(u=l.data)||void 0===u||u.forEach(e=>{let t=(0,P.x)(y,e.field);n=n>t?t:n,L(e.field,e)}),c(n)}},R=async()=>{try{let n=await k();n&&(t((0,nK.B8)(A())),c(s+1))}catch(n){}},B=()=>{c(s-1)};return(0,i.useEffect)(()=>{let n=null==d?void 0:d.name;if((null==f?void 0:f.data)&&!n){let n=[{id:f.data.avatar.key,url:f.data.avatar.url}],e=f.data.photos.map(n=>({id:n.key,url:n.url}));N({...f.data,avatar:n,photos:e})}},[null==f?void 0:f.data]),(0,r.jsxs)(o.RV,{...S,children:[(0,r.jsx)(j.Z,{showSpinner:T||m||E}),(0,r.jsx)(C.k,{title:(0,r.jsx)(q.Z,{paths:n$}),subTitle:nY[s-1],currentStep:s,stepsAmount:4}),(0,r.jsxs)("form",{onSubmit:D(U),children:[1===s&&(0,r.jsx)(nB,{}),2===s&&(0,r.jsx)(nM,{}),3===s&&(0,r.jsx)(nX,{}),4===s&&(0,r.jsx)(nF,{}),(0,r.jsx)(nV.Z,{sticky:!0,totalSteps:4,currentStep:s,handleNextStep:R,handleBackStep:B})]})]})};var n1=n0}}]);