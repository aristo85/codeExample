import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {useAppDispatch, useAppSelector} from '@/modules/core/hooks';
import {useRouter} from 'next/router';
import {FilterValues} from '@/modules/home/components/Filters/types';
import {selectFilterValues} from '@/modules/core/api/filterSlice';
import {queryHandler, QueryLocation} from '@/modules/core/helpers/queryHandler';
import {
  useBookCurrentRoomMutation,
  useGetDetailBookingDataQuery,
  VerifyBookingDataResponse,
} from '@/modules/placement/apiPlacementSlice';
import {useFilterDataFromQuery} from '@/modules/core/hooks/useFilterDataFromParams';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import {
  BookingFormAdditionalData,
  BookingFormMainData,
  BookingFormPage,
} from '@/modules/placement/form/styles';
import BookingFormBlock, {
  GuestType,
} from '@/modules/placement/form/bookingForm';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import {
  MobileFirstStepBooking,
  SelectedRoomOption,
} from '@/modules/placement/form/mobile/firstStep';
import RoomData from '@/modules/placement/form/components/RoomData';
import {MobileSecondStepBooking} from '@/modules/placement/form/mobile/secondStep';
import {MobileThirdStepBooking} from '@/modules/placement/form/mobile/thirdStep';
import {useNotification} from '@/modules/core/hooks/useNotification';
import Spinner from '@/modules/core/components/Spinner';
import {v4 as uuidV4} from 'uuid';
import * as yup from 'yup';
import {
  commentsValidationSchema,
  emailValidationSchema,
  nameValidationSchema,
  phoneValidationSchema,
} from '@/modules/core/services';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {setPaymentData} from '@/modules/payment/paymentSlice';
import DataTermsAndPrivacyPolicy from '@/modules/core/components/DataTermsAndPrivacyPolicy';
import {
  cancelReservationText,
  privacyPolicyText,
  termsOfDataUseText,
} from '@/modules/core/components/DataTermsAndPrivacyPolicy/content';
import {
  selectProfileData,
  setAuthModal,
  selectCountryCode,
} from '@/modules/auth/authSlice';
import {AuthType} from '@/modules/auth/types';
import PriceComponent from '@/modules/core/components/PriceComponent';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import {HeaderWithSteps} from '@/modules/core/components/HeaderWithSteps';

export interface RoomStay {
  stayDates: {
    arrivalDateTime: string;
    departureDateTime: string;
  };
  ratePlan: {id: string | number};
  roomType: {
    id: number | string;
    placements: {code: string}[];
  };
  guests: Guests[];
  guestCount: {
    adultCount: number;
    childAges: number[];
  };
  checksum: string;
}

export enum BookingPaymentType {
  PREPAYMENT = 'PREPAYMENT',
  FULL_PAYMENT = 'FULL_PAYMENT',
}

export interface BookingPaymentTypes {
  placementId: string;
  bookingPaymentType: BookingPaymentType;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  bookingComments: string;
  roomStays: RoomStay[];
  idempotenceKey: string;
}

export interface BookingFormFields {
  firstName: string;
  lastName: string;
  email: string;
  bookingComments: string;
  phone: string;
  guests: Guests[];
  idempotenceKey: string;
  whoIsGuest: GuestType;
}

export interface Guests {
  firstName: string;
  lastName: string;
}

const bookingFormValidationSchema = (phoneLength: number) =>
  yup.object().shape({
    email: emailValidationSchema,
    firstName: nameValidationSchema('Введите ваше имя'),
    lastName: nameValidationSchema('Введите вашу фамилию'),
    bookingComments: commentsValidationSchema,
    phone: phoneValidationSchema(phoneLength),
    guests: yup.array().of(
      yup.object().shape({
        firstName: nameValidationSchema('Введите имя гостя'),
        lastName: nameValidationSchema('Введите фамилию гостя'),
      }),
    ),
  });

export const BookingForm: FC = () => {
  const dispatch = useAppDispatch();
  const [currentStep, setCurrentStep] = useState<number>(1);
  useFilterDataFromQuery();
  const toast = useNotification();
  const isScreenSm = useMatchMedia(`(max-width: ${breakpoints.sm}px)`);
  const filterData: FilterValues<string> = useAppSelector(selectFilterValues);
  const router = useRouter();
  const userProfile = useAppSelector(selectProfileData);
  const countryCode = useAppSelector(selectCountryCode);

  useEffect(() => {
    if (userProfile) {
      reset(values => ({
        ...values,
        firstName: userProfile.firstName,
        lastName: userProfile.lastName,
        email: userProfile.email,
        phone: userProfile.phone ? userProfile.phone : values.phone,
      }));
    }
  }, [userProfile]);

  const setFirstGuestDataToForm = () => {
    reset(values => ({
      ...values,
      guests: [
        {
          firstName: values.firstName,
          lastName: values.lastName,
        },
      ],
    }));
  };

  const [bookCurrentRoom, {isLoading: isSendingBookRequest}] =
    useBookCurrentRoomMutation();
  const {id} = router.query;
  const {queriesString: bookingDetailParams} = queryHandler(
    filterData,
    QueryLocation.detail,
  );
  const {queriesString: bookingListParams} = queryHandler(
    filterData,
    QueryLocation.list,
  );
  const {queriesString: bookingPaymentParams} = queryHandler(
    filterData,
    QueryLocation.payment,
  );
  const {data, isLoading, refetch} = useGetDetailBookingDataQuery(
    {
      id: Number(id),
      urlQueries: bookingDetailParams,
    },
    {
      skip: !id,
    },
  );

  const {name, address, filterDto, services, rooms} = data?.data || {};

  const breadcrumbsItems = [
    {url: '/', label: 'Главная'},
    {
      url: `/placement?${bookingListParams}`,
      label: 'Результаты поиска',
    },
    {
      url: `/placement/${id}?${bookingDetailParams}`,
      label: name || '',
    },
    {url: `/booking/placement/${router.query.id}`, label: 'Бронирование'},
  ];

  const currentRoom = useMemo(
    () =>
      rooms?.find(
        room =>
          room.placementExtraData?.roomId === Number(router.query.roomId) &&
          room.placementExtraData?.ratePlan.id ===
            Number(router.query.ratePlanId),
      ),
    [rooms, router],
  );

  const currentPrices = useMemo(
    () => ({
      upSection: {
        title: 'Стоимость',
        list: [
          {
            listTitle: 'За ночь',
            price: currentRoom?.placementExtraData.price.pricePerDay || 0,
          },
        ],
      },
      downSection: {
        title: 'Итого',
        list: [
          {
            listTitle: `${
              currentRoom?.placementExtraData.price.daysCount
            } ${pluralizationFn(
              currentRoom?.placementExtraData.price.daysCount || 0,
              ['ночь', 'ночи', 'ночей'],
            )}`,
            price: currentRoom?.placementExtraData.price.totalPrice || 0,
          },
        ],
      },
    }),
    [currentRoom],
  );

  const guestsCount: number = useMemo(
    () => (filterDto?.numOfAdult || 0) + (filterDto?.childAges?.length || 0),
    [filterDto],
  );

  const {
    register,
    handleSubmit,
    control,
    formState,
    watch,
    trigger,
    reset,
    getValues,
    setError,
    setValue,
  } = useForm<BookingFormFields>({
    defaultValues: {
      idempotenceKey: uuidV4(),
      whoIsGuest: GuestType.HIMSELF,
    },
    resolver: yupResolver(
      bookingFormValidationSchema(10 + countryCode.codeNum.length),
    ),
    mode: 'onChange',
  });

  const changeRoomDecisionHandler = (roomOption: SelectedRoomOption) => {
    const {pathname, query} = router;
    const newUrl = {
      pathname,
      query: {
        ...query,
        roomId: String(roomOption.roomId),
        ratePlanId: String(roomOption.ratePlanId),
      },
    };
    router.push(newUrl, undefined, {shallow: true});
  };

  const createPaymentObjectHandler = useCallback(
    (
      bookingPaymentType: BookingPaymentType,
      data: BookingFormFields,
    ): BookingPaymentTypes | null => {
      if (id && currentRoom && filterDto) {
        return {
          placementId: String(id),
          bookingPaymentType: bookingPaymentType,
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          email: data.email,
          bookingComments: data?.bookingComments,
          roomStays: [
            {
              guests: data?.guests,
              stayDates: {
                arrivalDateTime:
                  currentRoom?.placementExtraData.stayDates.arrivalDateTime,
                departureDateTime:
                  currentRoom?.placementExtraData.stayDates.departureDateTime,
              },
              ratePlan: {
                id: currentRoom?.placementExtraData.ratePlan.id.toString(),
              },
              roomType: {
                id: currentRoom?.placementExtraData.roomType.id.toString(),
                placements:
                  currentRoom?.placementExtraData?.roomType?.placements.map(
                    placement => {
                      return {code: placement.code};
                    },
                  ),
              },
              guestCount: {
                adultCount: filterDto?.numOfAdult,
                childAges: filterDto?.childAges,
              },
              checksum: currentRoom?.placementExtraData.checksum,
              //  Travel Line doesn't support. Service.id - backend doesn't send us
              // services: services?.map(service => service.id),
            },
          ],
          idempotenceKey: data.idempotenceKey,
        };
      } else {
        toast('Что-то пошло не так', 'error');
        return null;
      }
    },
    [id, currentRoom, filterDto, toast],
  );

  const fullPaymentHandler = async (data: BookingFormFields) => {
    try {
      const paymentData = createPaymentObjectHandler(
        BookingPaymentType.FULL_PAYMENT,
        data,
      );
      if (paymentData) {
        const response = await bookCurrentRoom(paymentData).unwrap();
        await paymentResponseHandler(response);
      }
    } catch (error: any) {
      error.data.data.forEach((item: any) => {
        setError(item.field, item);
      });

      // If currentStep = 3 it means we use Mobile version
      if (error.status === 401 && currentStep === 3 && !error.data.isBlocked) {
        setCurrentStep(2);
        dispatch(setAuthModal(AuthType.LOGIN));
      }
      // currentStep = 1 - default value
      if (error.status === 401 && currentStep === 1 && !error.data.isBlocked) {
        dispatch(setAuthModal(AuthType.LOGIN));
      }

      // Wrong checksum
      if (error.status === 409) {
        refetch();
        setCurrentStep(1);
      }
    }
  };

  const partialPaymentHandler = async (data: BookingFormFields) => {
    try {
      const paymentData = createPaymentObjectHandler(
        BookingPaymentType.PREPAYMENT,
        data,
      );
      if (paymentData) {
        const response = await bookCurrentRoom(paymentData).unwrap();
        await paymentResponseHandler(response);
      }
    } catch (error: any) {
      error.data.data.forEach((item: any) => {
        setError(item.field, item);
      });
      // If currentStep = 3 it means we use Mobile version
      if (error.status === 401 && currentStep === 3 && !error.data.isBlocked) {
        setCurrentStep(2);
        dispatch(setAuthModal(AuthType.LOGIN));
      }
      // currentStep = 1 - default value
      if (error.status === 401 && currentStep === 1 && !error.data.isBlocked) {
        dispatch(setAuthModal(AuthType.LOGIN));
      }
    }
  };

  const paymentResponseHandler = async (
    response: VerifyBookingDataResponse,
  ) => {
    if (response.success) {
      const {bookingId, ...rest} = response.data;
      dispatch(setPaymentData({...rest}));
      const replacedUrl = userProfile
        ? `/profile/booking/placement/${bookingId}`
        : `/booking/placement/${id}/auto-authorized-booking?bookingId=${bookingId}`;
      await router.replace(replacedUrl);
      await router.push(
        `/booking/placement/${id}/payment?bookingId=${bookingId}&${bookingPaymentParams}`,
      );
    }
  };

  if (isLoading || isSendingBookRequest) {
    return <Spinner showSpinner={true} />;
  }

  if (isScreenSm) {
    return (
      <>
        {currentStep === 1 && (
          <MobileFirstStepBooking
            name={name}
            currentPrices={currentPrices}
            address={address}
            breadcrumbsItems={breadcrumbsItems}
            currentRoom={currentRoom}
            guestsCount={guestsCount}
            services={services}
            rooms={rooms}
            changeRoomFn={changeRoomDecisionHandler}
            stayDates={currentRoom?.placementExtraData.stayDates || null}
            nextStepFn={() => setCurrentStep(prev => prev + 1)}
          />
        )}
        {currentStep === 2 && (
          <MobileSecondStepBooking
            setValue={setValue}
            setFirstGuestDataToForm={setFirstGuestDataToForm}
            currentPrices={currentPrices}
            getValues={getValues}
            register={register}
            handleSubmit={handleSubmit}
            control={control}
            watch={watch}
            trigger={trigger}
            formState={formState}
            name={name}
            address={address}
            breadcrumbsItems={breadcrumbsItems}
            nextStepFn={() => setCurrentStep(prev => prev + 1)}
            guestsCount={guestsCount}
            cancellationPolicy={
              currentRoom?.placementExtraData.cancellationPolicy
            }
          />
        )}
        {currentStep === 3 && (
          <MobileThirdStepBooking
            handleSubmit={handleSubmit}
            watch={watch}
            name={name}
            address={address}
            currentPrices={currentPrices}
            breadcrumbsItems={breadcrumbsItems}
            currentRoom={currentRoom}
            guestsCount={guestsCount}
            services={services}
            stayDates={currentRoom?.placementExtraData.stayDates || null}
            fullPaymentFn={fullPaymentHandler}
            partialPaymentFn={partialPaymentHandler}
          />
        )}
      </>
    );
  }

  return (
    <BookingFormPage>
      <BookingFormMainData>
        <Breadcrumbs paths={breadcrumbsItems} />
        <HeaderWithSteps title={name} subTitle={address} />
        <RoomData
          currentRoom={currentRoom}
          guestsCount={guestsCount}
          services={services}
          backwardLink={breadcrumbsItems[2].url}
        />
        <BookingFormBlock
          setValue={setValue}
          setFirstGuestDataToForm={setFirstGuestDataToForm}
          register={register}
          watch={watch}
          trigger={trigger}
          getValues={getValues}
          handleSubmit={handleSubmit}
          control={control}
          formState={formState}
          isMobile={false}
          fullPaymentFn={fullPaymentHandler}
          partialPaymentFn={partialPaymentHandler}
          stayDates={currentRoom?.placementExtraData.stayDates || null}
          guestsCount={guestsCount}
          backwardLink={breadcrumbsItems[1].url}
        />
      </BookingFormMainData>
      <BookingFormAdditionalData>
        <PriceComponent
          upSection={currentPrices.upSection}
          downSection={currentPrices.downSection}
        />
        <DataTermsAndPrivacyPolicy
          items={[
            {
              title: 'Отмена бронирования',
              text: cancelReservationText(
                currentRoom?.placementExtraData.cancellationPolicy,
              ),
            },
            {
              title: 'Политика конфиденциальности',
              text: privacyPolicyText,
            },
            {
              title: 'Условия использования данных',
              text: termsOfDataUseText,
            },
          ]}
        />
      </BookingFormAdditionalData>
    </BookingFormPage>
  );
};
