import { useCallback, useState } from 'react';

type Config = {
  initialValue?: boolean;
};

type ReturnValue = [
  boolean,
  { on: () => void; off: () => void; toggle: () => void }
];

export const useBoolean = (config?: Config): ReturnValue => {
  const [booleanValue, setBooleanValue] = useState(!!config?.initialValue);

  const on = useCallback(() => {
    setBooleanValue(true);
  }, []);

  const off = useCallback(() => {
    setBooleanValue(false);
  }, []);

  const toggle = useCallback(() => {
    setBooleanValue((value) => !value);
  }, []);

  return [booleanValue, { on, off, toggle }];
};
