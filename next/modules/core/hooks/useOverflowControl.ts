import {useEffect} from 'react';

const useOverflowControl = (value: boolean) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.document) {
      document.documentElement.style.overflow = value ? 'hidden' : 'unset';
    }

    return () => {
      document.documentElement.style.overflow = 'unset';
    };
  }, [value]);
};

export default useOverflowControl;
