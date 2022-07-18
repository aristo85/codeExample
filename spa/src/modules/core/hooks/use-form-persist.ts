import type { UseFormWatch, UseFormSetValue } from 'react-hook-form';
import { useEffect } from 'react';

type FormControllers = {
  watch: UseFormWatch<any>;
  setValue: UseFormSetValue<any>;
};

const storage = window.sessionStorage;

export const useFormPersist = (
  name: string,
  { watch, setValue }: FormControllers
) => {
  const values = watch();

  useEffect(() => {
    const str = storage.getItem(name);

    if (str) {
      const parsedValues = JSON.parse(str);
      const dataRestored: any = {};

      Object.keys(parsedValues).forEach((key) => {
        dataRestored[key] = parsedValues[key];
        setValue(key, parsedValues[key]);
      });
    }
  }, [name]);

  useEffect(() => {
    storage.setItem(name, JSON.stringify(values));
  });

  return {
    clear: () => storage.removeItem(name),
  };
};
