import { FC } from 'react';
import { Route } from 'react-router-dom';
// components
import NotVerifiedBox from 'modules/core/components/not-verified-box';
import AccountBlockedBox from 'modules/core/components/account-blocked-box';
// hooks
import { useProfileQuery } from 'modules/user/hooks/use-profile-query';
import { PrivateRouteProps } from './private-route.interface';
import {
  selectIsAccountBlocked,
  selectIsUserReviewStatusRequestCheck,
  selectIsUserReviewStatusBlocked,
  selectIsUserReviewStatusReset,
  selectIsUserReviewStatusOnHold,
} from 'modules/user/user.selectors';
import { useLocalization } from 'modules/localization/hooks/use-localization';

const PrivateRoute: FC<PrivateRouteProps> = ({
  Component,
  isVerificationRequired = true,
  ...rest
}) => {
  const { t } = useLocalization();

  const profile = useProfileQuery();

  const isUserVerified = profile.data?.kyc?.verified === true;

  const isAccountBlocked = selectIsAccountBlocked(profile?.data);
  const reviewStatusReset = selectIsUserReviewStatusReset(profile?.data);
  const reviewStatusOnHold = selectIsUserReviewStatusOnHold(profile?.data);
  const reviewStatusBlocked = selectIsUserReviewStatusBlocked(profile?.data);
  const reviewStatusPending = selectIsUserReviewStatusRequestCheck(
    profile?.data
  );

  const userVerificationStatus = () => {
    if (!profile) return;

    if (reviewStatusPending) return t('PAGES.NOT_VERIFIED.REQUEST_CHECK');

    if (reviewStatusReset) return t('PAGES.NOT_VERIFIED.RESET');

    if (reviewStatusBlocked && !isUserVerified)
      return t('PAGES.NOT_VERIFIED.BLACKLIST');

    if (reviewStatusOnHold && !isUserVerified)
      return t('PAGES.NOT_VERIFIED.REQUEST_CHECK');
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        /* eslint-disable */
        isAccountBlocked || reviewStatusBlocked ? (
          <AccountBlockedBox sumsub={reviewStatusBlocked} />
        ) : isVerificationRequired && !isUserVerified ? (
          <NotVerifiedBox reason={userVerificationStatus()} />
        ) : !reviewStatusBlocked && reviewStatusPending ? (
          <NotVerifiedBox reason={userVerificationStatus()} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
