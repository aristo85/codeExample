import React, {FC, useEffect, useMemo} from 'react';
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
import {yupResolver} from '@hookform/resolvers/yup';
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
import {useAppDispatch, useAppSelector} from '@/modules/core/hooks';
import {setPaymentData} from '@/modules/payment/paymentSlice';
import {Response} from '@/modules/core/api/Response';
import {BookingVerifyData} from '@/modules/core/api/model/booking/bookingVerifyData';
import {v4 as uuidV4} from 'uuid';
import {AuthType} from '@/modules/auth/types';
import BookingStepOne from './BookingStepOne';
import BookingStepTwo from './BookingStepTwo';
import BookingStepThree from './BookingStepThree';
import {step1Schema, step2Schema} from './formValidations';
import {GuideData} from '@/modules/core/api/model/guide/guideData';
import {BookingGuideRequestBody} from '@/modules/core/api/model/booking/bookingGuideRequestBody';
import {useBookGuideMutation} from '@/modules/booking/apiBookingSlice';
import {pluralizationFn} from '@/modules/core/helpers/pluralizationFn';
import {selectGuideFilterValues} from '@/modules/guide/components/GuideFilter/guideFilterSlice';
import {GuideFilterValuesForm} from '@/modules/guide/guidetypes';
import {
  guideQueryHandler,
  GuideQueryLocation,
} from '@/modules/core/helpers/guideQueryHandler';
import {selectBookingGuideForm, setBookingGuideForm} from '../guideSlice';
import {useFormStepsWithHistory} from '@/modules/core/hooks/useFormStepsWithHistory';

const pageSubtitles = [
  'Выберите дату и время бронирования',
  'Укажите ваши контактные данные',
  'Проверьте бронирование',
];

interface BookingGuideProps {
  guideData: GuideData;
}

const BookingGuide: FC<BookingGuideProps> = ({guideData}) => {
  const totalSteps = 3;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const bookingFormData = useSelector(selectBookingGuideForm);
  const {currentStep, setStep} = useFormStepsWithHistory(
    totalSteps,
    !bookingFormData?.date,
    true,
  );
  const userProfile = useAppSelector(selectProfileData);
  const filterGuideData: GuideFilterValuesForm = useAppSelector(
    selectGuideFilterValues,
  );
  const {queriesString: guidePaymentParams} = guideQueryHandler(
    filterGuideData,
    GuideQueryLocation.payment,
  );
  const {id} = router.query;
  const isScreenXs = useMatchMedia(`(max-width: ${breakpoints.xs}px)`);
  const countryCode = useSelector(selectCountryCode);
  const [bookGuide, {isLoading: isSendingBookRequest}] = useBookGuideMutation();

  const schema =
    currentStep === 1
      ? step1Schema
      : step2Schema(
          countryCode.codeNum.length,
          guideData.maxNumberOfParticipants,
        );

  const methods = useForm<BookingGuideRequestBody>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      ...bookingFormData,
      guideId: Number(id),
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

  const duration = watch('duration');

  const paymentResponseHandler = async (
    response: Response<BookingVerifyData>,
  ) => {
    if (response.success) {
      const {bookingId, ...rest} = response.data;
      dispatch(setPaymentData({...rest}));
      const replacedUrl = userProfile
        ? `/profile/booking/guide/${bookingId}`
        : `/booking/guide/${id}/auto-authorized-booking?bookingId=${bookingId}`;
      await router.replace(replacedUrl);
      await router.push(
        `/booking/guide/${id}/payment?bookingId=${bookingId}&${guidePaymentParams}`,
      );
    }
  };

  const onSubmit = async (data: BookingGuideRequestBody) => {
    try {
      const response = await bookGuide(data).unwrap();
      await paymentResponseHandler(response);
      dispatch(setBookingGuideForm({}));
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
        dispatch(setBookingGuideForm(getValues()));
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
            listTitle: 'За час',
            price: guideData.costPerHour || 0,
          },
        ],
      },
      downSection: duration
        ? {
            title: 'Итого',
            list: [
              {
                listTitle: `${duration} ${pluralizationFn(duration, [
                  'час',
                  'часа',
                  'часов',
                ])}`,
                price: duration * guideData.costPerHour,
              },
            ],
          }
        : undefined,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [guideData, duration],
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
              title={guideData.name}
              subTitle={pageSubtitles[currentStep - 1]}
              currentStep={currentStep}
              stepsAmount={totalSteps}
            />
            {currentStep === 1 && (
              <BookingStepOne
                schedule={guideData.schedule}
                maxNumberOfParticipants={guideData.maxNumberOfParticipants}
                guideDuration={guideData.duration}
              />
            )}
            {currentStep === 2 && (
              <BookingStepTwo
                maxNumberOfParticipants={guideData.maxNumberOfParticipants}
                withChildren={guideData.withChildren}
                userProfile={userProfile}
              />
            )}
            {currentStep === 3 && <BookingStepThree />}
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

export default BookingGuide;
