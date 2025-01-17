import React, {FC, useEffect, useMemo} from 'react';
import {ExcursionData} from '@/modules/core/api/model/excursion/excursionData';
import {FormProvider, useForm} from 'react-hook-form';
import Spinner from '@/modules/core/components/Spinner';
import {HeaderWithSteps} from '@/modules/core/components/HeaderWithSteps';
import StickyFormFooter from '@/modules/core/components/StickyFormFooter';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';
import {useSelector} from 'react-redux';
import {
  selectCountryCode,
  selectProfileData,
  setAuthModal,
} from '@/modules/auth/authSlice';
import {useRouter} from 'next/router';
import {BookingExcursionRequestBody} from '@/modules/core/api/model/booking/bookingExcursionRequestBody';
import {yupResolver} from '@hookform/resolvers/yup';
import {step1Schema, step2Schema} from './formValidations';
import BookingStepOne from './BookingStepOne';
import BookingStepTwo from './BookingStepTwo';
import BookingStepThree from './BookingStepThree';
import {
  BodyContainer,
  BookingFormAdditionalData,
  FormContainer,
  MainContainer,
} from './styles';
import PriceComponent, {
  SectionType,
} from '@/modules/core/components/PriceComponent';
import DataTermsAndPrivacyPolicy from '@/modules/core/components/DataTermsAndPrivacyPolicy';
import {
  privacyPolicyText,
  termsOfDataUseText,
} from '@/modules/core/components/DataTermsAndPrivacyPolicy/content';
import {useBookExcursionMutation} from '@/modules/booking/apiBookingSlice';
import {useAppDispatch, useAppSelector} from '@/modules/core/hooks';
import {setPaymentData} from '@/modules/payment/paymentSlice';
import {Response} from '@/modules/core/api/Response';
import {BookingVerifyData} from '@/modules/core/api/model/booking/bookingVerifyData';
import {v4 as uuidV4} from 'uuid';
import {AuthType} from '@/modules/auth/types';
import {selectExcursionFilterValues} from '@/modules/excursion/components/ExcursionFilter/ExcursionFilterSlice';
import {
  ExcursionFilterValuesForm,
  ExcursionTypes,
} from '@/modules/excursion/excursion.types';
import {ExcursionType} from '../types';
import {
  excursionQueryHandler,
  ExcursionQueryLocation,
} from '@/modules/core/helpers/excursionQueryHandler';
import {useFormStepsWithHistory} from '@/modules/core/hooks/useFormStepsWithHistory';
import {
  selectBookingExcursionForm,
  setBookingExcursionForm,
} from '../excursionSlice';

const pageSubtitles = [
  'Выберите дату и время экскурсии',
  'Укажите ваши контактные данные',
  'Проверьте бронирование',
];

interface BookingExcursionProps {
  excursionData: ExcursionData;
}

const BookingExcursion: FC<BookingExcursionProps> = ({excursionData}) => {
  const {
    maxNumberOfParticipants,
    adultPrice,
    withChildren,
    childrenPrice,
    name,
    schedule,
    duration,
    type,
  } = excursionData;
  const totalSteps = 3;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const bookingFormData = useSelector(selectBookingExcursionForm);
  const {currentStep, setStep} = useFormStepsWithHistory(
    totalSteps,
    !bookingFormData?.date,
    true,
  );
  const filterExcursionData: ExcursionFilterValuesForm = useAppSelector(
    selectExcursionFilterValues,
  );
  const {queriesString: excursionPaymentParams} = excursionQueryHandler(
    filterExcursionData,
    ExcursionQueryLocation.payment,
  );
  const {id} = router.query;
  const isScreenXs = useMatchMedia(`(max-width: ${breakpoints.xs}px)`);
  const userProfile = useAppSelector(selectProfileData);
  const countryCode = useSelector(selectCountryCode);
  const [bookExcursion, {isLoading: isSendingBookRequest}] =
    useBookExcursionMutation();

  const schema =
    currentStep === 1
      ? step1Schema
      : step2Schema(countryCode.codeNum.length, maxNumberOfParticipants);

  const methods = useForm<BookingExcursionRequestBody>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      ...bookingFormData,
      excursionId: Number(id),
      idempotenceKey: uuidV4(),
    },
  });

  const {
    handleSubmit,
    formState: {errors},
    setError,
    trigger,
    getValues,
    watch,
  } = methods;

  const adults = watch('adultCount');
  const children = watch('childrenCount');

  const paymentResponseHandler = async (
    response: Response<BookingVerifyData>,
  ) => {
    if (response.success) {
      const {bookingId, ...rest} = response.data;
      dispatch(setPaymentData({...rest}));
      const replacedUrl = userProfile
        ? `/profile/booking/excursion/${bookingId}`
        : `/booking/excursion/${id}/auto-authorized-booking?bookingId=${bookingId}`;
      await router.replace(replacedUrl);
      await router.push(
        `/booking/excursion/${id}/payment?bookingId=${bookingId}&${excursionPaymentParams}`,
      );
    }
  };

  const onSubmit = async (data: BookingExcursionRequestBody) => {
    try {
      const response = await bookExcursion(data).unwrap();
      await paymentResponseHandler(response);
      dispatch(setBookingExcursionForm({}));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      error.data.data.forEach((item: any) => {
        setError(item.field, item);
      });
      if (error.status === 401 && !error.data.isBlocked) {
        dispatch(setAuthModal(AuthType.LOGIN));
      }
      setStep(2);
    }
  };

  const handleNextStep = async () => {
    try {
      const isFormValid = await trigger();
      await schema.validate(getValues(), {abortEarly: false});
      // Move to the next step if validation passes
      if (isFormValid) {
        dispatch(setBookingExcursionForm(getValues()));
        setStep(currentStep + 1);
      }
    } catch (error) {}
  };

  const handleBackStep = () => {
    setStep(currentStep - 1);
  };
  const currentPrices = useMemo(
    () => ({
      upSection: {
        title: 'Стоимость',
        list: [
          {
            listTitle:
              type === ExcursionTypes.INDIVIDUAL ? 'За экскурсию' : 'Взрослый',
            price: adultPrice || 0,
          },
          ...(withChildren && type === ExcursionTypes.GROUP
            ? [
                {
                  listTitle: 'Ребенок младше 7л.',
                  price: childrenPrice || 0,
                },
              ]
            : []),
        ],
      },
      downSection:
        (adults || children) && type === ExcursionTypes.GROUP
          ? {
              ...(adults || children
                ? {
                    title: 'Итого',
                    list: [
                      ...(adults
                        ? [
                            {
                              listTitle: `${adults}х Взрослый`,
                              price: adultPrice * adults,
                            },
                          ]
                        : []),
                      ...(children && childrenPrice && withChildren
                        ? [
                            {
                              listTitle: `${children}х Ребенок младше 7л.`,
                              price: childrenPrice * children,
                            },
                          ]
                        : []),
                    ],
                  }
                : {}),
            }
          : undefined,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [excursionData, adults, children],
  );

  useEffect(() => {
    const infoBlock = document.querySelector('.infoBlock');
    const footerBtns = document.querySelector('.footerBtns');
    if (isScreenXs && infoBlock && footerBtns) {
      infoBlock.insertBefore(footerBtns, infoBlock.children[1]);
    }
  }, [isScreenXs]);

  return (
    <FormProvider {...methods}>
      <Spinner showSpinner={isSendingBookRequest} />
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <BodyContainer>
          <MainContainer>
            <HeaderWithSteps
              title={name}
              subTitle={pageSubtitles[currentStep - 1]}
              currentStep={currentStep}
              stepsAmount={totalSteps}
            />
            {currentStep === 1 && (
              <BookingStepOne
                schedule={schedule}
                maxNumberOfParticipants={maxNumberOfParticipants}
                isGroupType={type === ExcursionType.GROUP}
              />
            )}
            {currentStep === 2 && (
              <BookingStepTwo
                withChildren={withChildren}
                schedule={schedule}
                maxNumberOfParticipants={maxNumberOfParticipants}
                isGroupType={type === ExcursionType.GROUP}
                userProfile={userProfile}
              />
            )}
            {currentStep === 3 && <BookingStepThree duration={duration} />}
          </MainContainer>

          <BookingFormAdditionalData>
            <PriceComponent
              upSection={currentPrices.upSection}
              downSection={currentPrices.downSection as SectionType}
            />
            <DataTermsAndPrivacyPolicy
              items={[
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
        </BodyContainer>
        <StickyFormFooter
          className={`footerBtns step${currentStep}`}
          booking
          {...{totalSteps, currentStep, handleNextStep, handleBackStep}}
        />
      </FormContainer>
    </FormProvider>
  );
};

export default BookingExcursion;
