import { GetProfileResponse } from './types/user-api.types';

export const selectUserId = (
  profile?: GetProfileResponse
): string | undefined => {
  if (profile) {
    return profile.user.id;
  }
};

export const selectIsAccountBlocked = (profile?: GetProfileResponse) => {
  return profile?.user?.status === 'blocked';
};

export const selectIsUserReviewStatusRequestCheck = (
  profile?: GetProfileResponse
) => {
  return profile?.kyc?.review_status === 'pending';
};

export const selectIsUserReviewStatusBlocked = (
  profile?: GetProfileResponse
) => {
  return profile?.kyc?.review_status === 'completed' && !profile?.kyc?.verified;
};

export const selectIsUserReviewStatusReset = (profile?: GetProfileResponse) => {
  return profile?.kyc?.review_status === 'init';
};

export const selectIsUserReviewStatusOnHold = (
  profile?: GetProfileResponse
) => {
  return profile?.kyc?.review_status === 'on_hold';
};
