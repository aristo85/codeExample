import AppLayout from '@/modules/core/containers/AppLayout';
import StoreProvider from '@/modules/core/containers/StoreProvider';
import type {AppProps} from 'next/app';
import {CacheProvider, EmotionCache} from '@emotion/react';
import {createEmotionCache} from '@/modules/core/services';
import GlobalThemeProvider from '@/modules/core/containers/GlobalThemeProvider';
import {StylesProvider} from '@material-ui/styles';
import ToastProvider from '@/modules/core/containers/ToastProvider';
import Spinner from '@/modules/core/components/Spinner';
import dayjs from 'dayjs';
import 'dayjs/locale/ru'; // Import the Russian locale and set it up
import utc from 'dayjs/plugin/utc';
import {enqueueSnackbar} from 'notistack';
import {useEffect, useState} from 'react';
import {Router} from 'next/router';
import {useHasMounted} from '@/modules/core/hooks/useHasMounted';
import Head from 'next/head';
import styled, {css} from 'styled-components';

dayjs.extend(utc).locale('ru');

const clientSideEmotionCache = createEmotionCache();

const ContentWrapper = styled.div`
  align-items: center;
  max-width: 1180px;
  margin: 32px auto;
  padding: 0 10px;
  ${({theme}) => css`
    ${theme.media.down('sm')`
      margin: 0 auto; 
    `};
  `}
`;

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
  const [loaderIsShown, setLoaderIsShown] = useState(false);
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (props.pageProps.error) {
      const message =
        props.pageProps.error.status === 422
          ? props.pageProps.error.data.message
          : 'Произошла ошибка!';
      enqueueSnackbar(message, {variant: 'error'});
    }
  }, [props.pageProps.error]);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      setLoaderIsShown(true);
    });
    Router.events.on('routeChangeComplete', () => {
      setLoaderIsShown(false);
    });
    return () => {
      Router.events.off('routeChangeStart', () => {
        setLoaderIsShown(true);
      });
      Router.events.off('routeChangeComplete', () => {
        setLoaderIsShown(false);
      });
    };
  }, []);

  if (!hasMounted) return <Spinner showSpinner={!hasMounted} />;

  return (
    <StoreProvider>
      <Head>
        <title>Go2Kavkaz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ToastProvider>
        <CacheProvider value={emotionCache}>
          <GlobalThemeProvider>
            <StylesProvider injectFirst>
              <AppLayout>
                {loaderIsShown && <Spinner showSpinner={loaderIsShown} />}
                {!loaderIsShown && (
                  <ContentWrapper>
                    <Component {...pageProps} />
                  </ContentWrapper>
                )}
              </AppLayout>
            </StylesProvider>
          </GlobalThemeProvider>
        </CacheProvider>
      </ToastProvider>
    </StoreProvider>
  );
}
