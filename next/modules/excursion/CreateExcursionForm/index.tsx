import React, {useEffect} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema,
  stepExcursionMatch,
} from './formValidations';
import FormStepOne from './components/FormStepOne';
import FormStepTwo from './components/FormStepTwo';
import FormStepThree from './components/FormStepThree';
import {HeaderWithSteps} from '@/modules/core/components/HeaderWithSteps';
import StickyFormFooter from '@/modules/core/components/StickyFormFooter';
import {ExcursionType, PhotoComponentValue, TourFormData} from '../types';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import FormStepFour from './components/FormStepFour';
import FormStepFive from './components/FormStepFive';
import {useSelector} from 'react-redux';
import {selectCountryCode} from '@/modules/auth/authSlice';
import {useNotification} from '@/modules/core/hooks/useNotification';
import {useRouter} from 'next/router';
import Spinner from '@/modules/core/components/Spinner';
import {stepErrorMatch} from '@/modules/core/helpers/stepErrorMatch';
import {
  useAddExcursionMutation,
  useGetExcursionByIdQuery,
  useUpdateExcursionMutation,
} from '@/modules/excursion/apiExcursionSlice';
import {FormContainer} from './styles';
import {useFormStepsWithHistory} from '@/modules/core/hooks/useFormStepsWithHistory';
import {useAppDispatch} from '@/modules/core/hooks';
import {selectExcursionForm, setExcursionCreateForm} from '../excursionSlice';

const breadcrumbsItems = [
  {label: 'Досуг'},
  {url: '/control-panel/excursion', label: 'Экскурсии'},
  {
    label: 'Добавление экскурсии',
  },
];

const pageSubtitles = [
  'Расскажите об экскурсоводе и экскурсии',
  'Детальная информация',
  'Расписание экскурсии',
  'Место встречи',
  'Фотография',
];

const CreateExcursionForm = () => {
  const totalSteps = 5;
  const toast = useNotification();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const excursionFormData = useSelector(selectExcursionForm);
  const {currentStep, setStep} = useFormStepsWithHistory(
    totalSteps,
    !excursionFormData?.name,
    !router.pathname.includes('[id]'),
  );
  const countryCode = useSelector(selectCountryCode);
  const [addExcursionMut, {isLoading}] = useAddExcursionMutation();
  const [updateExcursionMut, {isLoading: isUpdateLoading}] =
    useUpdateExcursionMutation();

  const {data, isLoading: isLoadingData} = useGetExcursionByIdQuery(
    {id: Number(router.query.id)},
    {
      skip: !router.query.id,
      refetchOnMountOrArgChange: true,
    },
  );
  const stepsSchemas = [
    step1Schema(countryCode.codeNum.length),
    step2Schema,
    step3Schema,
    step4Schema,
    step5Schema,
  ];
  const schema = stepsSchemas[currentStep - 1] || step5Schema;

  const methods = useForm<TourFormData>({
    defaultValues: router.query.id
      ? excursionFormData?.name
        ? excursionFormData
        : {
            type: ExcursionType.INDIVIDUAL,
          }
      : excursionFormData,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const {handleSubmit, setError, reset, trigger, getValues} = methods;

  const onSubmit = async (data: TourFormData) => {
    const guideAvatar = data.guideAvatar?.[0].id;
    const mainPhoto = data.mainPhoto?.[0]?.id;
    const photos = data.photos.map((el: PhotoComponentValue) => el.id);
    const requestData = {
      ...data,
      guideAvatar,
      mainPhoto,
      photos,
      childrenPrice: data.childrenPrice ?? 0,
    };
    try {
      const response = router.query?.id
        ? await updateExcursionMut({
            data: requestData,
            id: +router.query.id,
          }).unwrap()
        : await addExcursionMut(requestData).unwrap();
      if (response.success) {
        toast(
          `${
            router.query.id
              ? 'Удачно изменена экскурсия'
              : 'Удачно добавлена экскурсия'
          }`,
          'success',
        );
        const redirectUrl = router.query.id
          ? `/control-panel/excursion`
          : `/control-panel/excursion/${response.data.id}/success`;
        router.push(redirectUrl);
        dispatch(
          setExcursionCreateForm({
            type: ExcursionType.INDIVIDUAL,
          }),
        );
      }
    } catch (error: any) {
      let nearestStep = totalSteps;
      error?.data?.data?.forEach((item: any) => {
        const currentStep: number = stepErrorMatch(
          stepExcursionMatch,
          item.field,
        );
        nearestStep = nearestStep > currentStep ? currentStep : nearestStep;
        setError(item.field, item);
      });
      setStep(nearestStep);
    }
  };

  const handleNextStep = async () => {
    try {
      const isFormValid = await trigger();
      // Move to the next step if validation passes
      if (isFormValid) {
        dispatch(setExcursionCreateForm(getValues()));
        setStep(currentStep + 1);
      }
    } catch (error) {}
  };

  const handleBackStep = () => {
    setStep(currentStep - 1);
  };

  useEffect(() => {
    const isReduxBeenUpdated = excursionFormData?.name;
    if (data?.data && !isReduxBeenUpdated) {
      const guideAvatar = [
        {
          id: data.data.guideAvatar.key,
          url: data.data.guideAvatar.url,
        },
      ];
      const mainPhoto = [
        {
          id: data.data.mainPhoto.key,
          url: data.data.mainPhoto.url,
        },
      ];
      const photos = data.data.photos.map(el => ({
        id: el.key,
        url: el.url,
      }));
      reset({...data.data, guideAvatar, mainPhoto, photos});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.data]);

  return (
    <FormProvider {...methods}>
      <Spinner showSpinner={isLoading || isLoadingData || isUpdateLoading} />
      <HeaderWithSteps
        title={<Breadcrumbs paths={breadcrumbsItems} />}
        subTitle={pageSubtitles[currentStep - 1]}
        currentStep={currentStep}
        stepsAmount={totalSteps}
      />
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 1 && <FormStepOne />}
        {currentStep === 2 && <FormStepTwo />}
        {currentStep === 3 && <FormStepThree />}
        {currentStep === 4 && <FormStepFour />}
        {currentStep === 5 && <FormStepFive />}
        <StickyFormFooter
          {...{totalSteps, currentStep, handleNextStep, handleBackStep}}
        />
      </FormContainer>
    </FormProvider>
  );
};

export default CreateExcursionForm;
