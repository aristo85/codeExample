import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

export const useFormStepsWithHistory = (
  totalSteps: number,
  isFormEmpty?: boolean,
  isResettable?: boolean,
) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const setStep = (step: number) => {
    const id = router.query.id;
    const url = id ? router.pathname.replace('[id]', `${id}`) : router.pathname;
    if (step <= totalSteps) {
      router.push(`${url}?step=${step}`, undefined, {
        shallow: true,
      });
    }
  };

  useEffect(() => {
    // Check if step exists in URL and set it
    if (router.query.step) {
      setCurrentStep(Number(router.query.step));
    }
  }, [router.query.step]);

  useEffect(() => {
    const queryStep = router.query.step ?? 1;
    // Check if step exists in URL and set it
    if (isFormEmpty && +queryStep > 1 && isResettable) {
      const baseUrl = router.pathname.includes('[id]')
        ? router.asPath.split('?step')[0]
        : router.pathname;
      router.push(`${baseUrl}?step=1`);
    }
  }, [isFormEmpty, router, isResettable]);

  return {currentStep, setStep};
};
