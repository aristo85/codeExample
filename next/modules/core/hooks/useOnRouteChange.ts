import {useEffect} from 'react';
import {useRouter} from 'next/router';

function useOnRouteChange(callback: () => void) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const isEdit = router.pathname.includes('[id]');
      const baseUrl = isEdit
        ? router.pathname.split('[id]')[0]
        : `${router.pathname}?`;
      const baseUrlTo = isEdit
        ? url.replace(/\/\d+.*$/, '/')
        : url.split('step')[0];
      if (baseUrl !== baseUrlTo) {
        callback();
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router, callback]);
}

export default useOnRouteChange;
