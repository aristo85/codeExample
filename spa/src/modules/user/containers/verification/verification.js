import React, { useEffect, useMemo } from 'react';
// import { Redirect } from 'react-router-dom';
import snsWebSdk from '@sumsub/websdk';
// hooks
import { useProfileQuery } from '../../hooks/use-profile-query';

function Verification({ apiService }) {
  const profile = useProfileQuery();
  // const isUserVerified = useMemo(() => profile.data?.kyc.verified, [profile]);
  const isCompany = useMemo(() => !!profile.data?.user.is_company, [profile]);
  const email = useMemo(() => profile.data?.user.email, [profile]);
  // const userReviewStatus = useMemo(() => profile.data?.kyc.review_status, [
  //   profile,
  // ]);

  const launchWebSdk = (
    apiUrl,
    flowName,
    accessToken,
    applicantEmail,
    applicantPhone
  ) => {
    let snsWebSdkInstance = snsWebSdk
      .Builder(apiUrl, flowName)
      .withAccessToken(accessToken, (newAccessTokenCallback) => {
        newAccessTokenCallback(accessToken);
      })
      .withConf({
        lang: 'en',
        email: applicantEmail,
        phone: applicantPhone,
        onMessage: (type, payload) => {
          console.log('WebSDK onMessage', type, payload);
        },
        uiConf: {
          customCss:
            'https://copypaycos.greattrade.com.ua/wp-content/uploads/2021/03/style.css',
        },
        onError: (error) => {
          console.error('WebSDK onError', error);
        },
      })
      .build();
    snsWebSdkInstance.launch('#sumsub-websdk-container');
  };

  useEffect(() => {
    if (!email) {
      return;
    }

    apiService.createKycAccessToken().then((result) => {
      const token = result['access_token'];
      const flow = isCompany ? 'company-kyc' : 'basic-kyc';
      launchWebSdk('https://test-api.sumsub.com', flow, token, email);
    });
  }, [isCompany, email]);

  // if (isUserVerified) {
  //   return <Redirect to='/balance' />;
  // }

  return <div id='sumsub-websdk-container' />;
}

export default Verification;
