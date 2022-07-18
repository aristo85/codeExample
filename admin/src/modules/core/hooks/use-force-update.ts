import { useCallback, useState } from 'react';

export const useForceUpdate = () => {
  const [, setValue] = useState({});

  const forceUpdate = useCallback(() => {
    setValue({});
  }, []);

  return { forceUpdate };
};
