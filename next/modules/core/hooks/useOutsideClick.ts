import {RefObject, useCallback, useEffect} from 'react';

type UseOutsideClickParams = {
  ref: RefObject<HTMLElement>;
  handler: () => void;
};

export const useOutsideClick = ({ref, handler}: UseOutsideClickParams) => {
  const handleOutsideClick = useCallback(
    (e: any) => {
      if (ref.current) {
        if (!ref.current.contains(e.target)) {
          handler();
        }
      }
    },
    [handler, ref],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [handleOutsideClick]);
};
