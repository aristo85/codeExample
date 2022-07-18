import { useCallback, useRef, RefObject } from 'react';

export const useCopyToClipboard = (): [
  RefObject<HTMLInputElement>,
  () => void
] => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopyToClipboard = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
    }
  }, []);

  return [inputRef, handleCopyToClipboard];
};
