import React, {useEffect} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {GuideFormData} from '../types';
import {yupResolver} from '@hookform/resolvers/yup';
import {useSelector} from 'react-redux';
import {selectCountryCode} from '@/modules/auth/authSlice';
import {
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  stepGuideMatch,
} from './formValidations';
import Spinner from '@/modules/core/components/Spinner';
import {
  useAddGuideMutation,
  useGetGuideByIdQuery,
  useUpdateGuideMutation,
} from '../apiGuideSlice';
import {useRouter} from 'next/router';
import {HeaderWithSteps} from '@/modules/core/components/HeaderWithSteps';
import Breadcrumbs from '@/modules/core/components/Breadcrumbs';
import {useNotification} from '@/modules/core/hooks/useNotification';
import {stepErrorMatch} from '@/modules/core/helpers/stepErrorMatch';
import FormStepOne from './steps/FormStepOne';
import FormStepTwo from './steps/FormStepTwo';
import FormStepThree from './steps/FormStepThree';
import FormStepFour from './steps/FormStepFour';
import StickyFormFooter from '@/modules/core/components/StickyFormFooter';
import {PhotoComponentValue} from '@/modules/excursion/types';
import {useFormStepsWithHistory} from '@/modules/core/hooks/useFormStepsWithHistory';
import {useAppDispatch} from '@/modules/core/hooks';
import {selectGuideForm, setGuideCreateForm} from '../guideSlice';

const breadcrumbsItems = [
  {label: 'Досуг'},
  {url: '/control-panel/guide', label: 'Гиды'},
  {
    label: 'Добавление гида',
  },
];

const pageSubtitles = [
  'Расскажите о гиде и его опыте',
  'Детальная информация',
  'Время работы',
  'Фотографии',
];

const CreateGuide = () => {
  const totalSteps = 4;
  const toast = useNotification();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const guideFormData = useSelector(selectGuideForm);
  const {currentStep, setStep} = useFormStepsWithHistory(
    totalSteps,
    !guideFormData?.name,
    !router.pathname.includes('[id]'),
  );
  const countryCode = useSelector(selectCountryCode);

  const {data: guideData, isLoading: isLoadingGuideData} = useGetGuideByIdQuery(
    {id: Number(router.query.id)},
    {
      skip: !router.query.id,
      refetchOnMountOrArgChange: true,
    },
  );

  const [addGuideMutation, {isLoading: isLoadingAddGuide}] =
    useAddGuideMutation();
  const [updateGuide, {isLoading: isUpdateLoading}] = useUpdateGuideMutation();

  const stepsSchemas = [
    step1Schema(countryCode.codeNum.length),
    step2Schema,
    step3Schema,
    step4Schema,
  ];

  const schema = stepsSchemas[currentStep - 1] || step4Schema;

  const methods = useForm<GuideFormData>({
    defaultValues: router.query.id
      ? guideFormData?.name
        ? guideFormData
        : {}
      : guideFormData,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const {handleSubmit, setError, reset, trigger, getValues} = methods;

  const onSubmit = async (data: GuideFormData) => {
    const avatar = data.avatar?.[0].id;
    const photos = data.photos.map((el: PhotoComponentValue) => el.id);
    const requestData = {...data, avatar, photos};
    try {
      // const response = await addGuideMutation(data).unwrap();
      const response = router.query?.id
        ? await updateGuide({
            data: requestData,
            id: +router.query.id,
          }).unwrap()
        : await addGuideMutation(requestData).unwrap();

      if (response.success) {
        toast(
          `${router.query.id ? 'Гид удачно изменен' : 'Гид удачно добавлен'}`,
          'success',
        );
        void router.push(
          router.query.id
            ? `/control-panel/guide`
            : `/control-panel/guide/${response.data.id}/success`,
        );
        dispatch(setGuideCreateForm({}));
      }
    } catch (error: any) {
      let nearestStep = totalSteps;
      error?.data?.data?.forEach((item: any) => {
        const currentStep: number = stepErrorMatch(stepGuideMatch, item.field);
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
        dispatch(setGuideCreateForm(getValues()));
        setStep(currentStep + 1);
      }
    } catch (error) {}
  };

  const handleBackStep = () => {
    setStep(currentStep - 1);
  };

  useEffect(() => {
    const isReduxBeenUpdated = guideFormData?.name;
    if (guideData?.data && !isReduxBeenUpdated) {
      const avatar = [
        {
          id: guideData.data.avatar.key,
          url: guideData.data.avatar.url,
        },
      ];
      const photos = guideData.data.photos.map(el => ({
        id: el.key,
        url: el.url,
      }));
      reset({...guideData.data, avatar, photos});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guideData?.data]);

  return (
    <FormProvider {...methods}>
      <Spinner
        showSpinner={isLoadingAddGuide || isLoadingGuideData || isUpdateLoading}
      />
      <HeaderWithSteps
        title={<Breadcrumbs paths={breadcrumbsItems} />}
        subTitle={pageSubtitles[currentStep - 1]}
        currentStep={currentStep}
        stepsAmount={totalSteps}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 1 && <FormStepOne />}
        {currentStep === 2 && <FormStepTwo />}
        {currentStep === 3 && <FormStepThree />}
        {currentStep === 4 && <FormStepFour />}
        <StickyFormFooter
          sticky
          {...{totalSteps, currentStep, handleNextStep, handleBackStep}}
        />
      </form>
    </FormProvider>
  );
};

export default CreateGuide;
