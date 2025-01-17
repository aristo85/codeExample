import {useLayoutEffect, useState} from 'react';

const useMatchMedia = (query: string): boolean => {
  const [isMatch, setMatch] = useState<boolean>(false);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleMatchChange = (event: MediaQueryListEvent) => {
      setMatch(event.matches);
    };

    setMatch(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMatchChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMatchChange);
    };
  }, [query]);

  return isMatch;
};

export default useMatchMedia;
