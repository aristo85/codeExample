import { addDays } from 'date-fns';
// types

import { formatDateAsFilterValue } from 'utils/data.utils';
import { removeMatchedValues } from 'utils/object.utils';
import { ProfileEditFormValues } from '../containers/user-profile-edit-form/user-profile-edit-form.interface';
import { UsersFilterValues } from '../containers/users-filter/users-filter.interface';
import { GetUserResponse, UpdateUserData } from '../types/user-api.types';
// import { GetOneUserResponse, UpdateUserData } from '../types/user-api.types';
import { KYCStatus, User } from '../types/user.types';
//   import { PreferencesFormValues } from 'modules/preferences/containers/preferences-form/preferences-form.interface';

class UserProfileService {
  public getNormalizedProfileData(data: User): ProfileEditFormValues {
    // todo: use better way
    return {
      accountType: data.user.is_company ? 'business' : 'personal',
      group: data.group.id ?? '',
      firstName:
        data.fields.find((field) => field.code === 'first_name')?.value ?? '',
      lastName:
        data.fields.find((field) => field.code === 'last_name')?.value ?? '',
      country:
        data.fields.find((field) => field.code === 'country')?.value ?? null,
      city: data.fields.find((field) => field.code === 'city')?.value ?? null,
      postalCode:
        data.fields.find((field) => field.code === 'post_code')?.value ?? '',
      phone: data.fields.find((field) => field.code === 'phone')?.value ?? '',
      birthday: data.fields.find((field) => field.code === 'birth_at')?.value
        ? new Date(
            data.fields.find((field) => field.code === 'birth_at')?.value
          )
            .toISOString()
            .substring(0, +'10')
        : '',
      address:
        data.fields.find((field) => field.code === 'address')?.value ?? '',
    };
  }

  public getUpdateProfileDataByFormData(
    formData: ProfileEditFormValues,
    profileData: GetUserResponse
  ): UpdateUserData {
    const result: UpdateUserData = {
      email: profileData.user.email,
      is_company: formData.accountType === 'business',
      fields: [],
      group_id: formData.group,
    };

    result.is_company = formData.accountType === 'business';

    // todo: use better way
    profileData.fields.forEach((field) => {
      switch (field.code) {
        case 'first_name':
          if (formData.firstName) {
            result.fields.push({
              user_field_id: field.id,
              value: formData.firstName,
            });
          }

          break;
        case 'last_name':
          if (formData.lastName) {
            result.fields.push({
              user_field_id: field.id,
              value: formData.lastName,
            });
          }

          break;
        case 'country':
          if (formData.country) {
            result.fields.push({
              user_field_id: field.id,
              value: formData.country,
            });
          }

          break;
        case 'city':
          if (formData.city) {
            result.fields.push({
              user_field_id: field.id,
              value: formData.city,
            });
          }

          break;
        case 'post_code':
          if (formData.postalCode) {
            result.fields.push({
              user_field_id: field.id,
              value: formData.postalCode,
            });
          }

          break;
        case 'phone':
          if (formData.phone) {
            result.fields.push({
              user_field_id: field.id,
              value: formData.phone,
            });
          }

          break;
        case 'birth_at':
          if (formData.birthday) {
            result.fields.push({
              user_field_id: field.id,
              value: formData.birthday,
            });
          }

          break;
        case 'address':
          if (formData.address) {
            result.fields.push({
              user_field_id: field.id,
              value: formData.address,
            });
          }

          break;
        default:
          return;
      }
    });

    return result;
  }

  // public getUpdateProfileCurrency(
  //   formData: PreferencesFormValues,
  //   profileData: GetProfileResponse
  // ): PreferencesFormValues {
  //   const result: UpdateProfileCurrencyData = {
  //     email: profileData.user.email,
  //     currency: profileData.user.currency,
  //   };

  //   result.currency = formData.currency;

  //   return result;
  // }

  public getFullNameFilter(firstName: string, lastName: string): string[] {
    const result = [];

    firstName && firstName !== '' && result.push(firstName);
    lastName && lastName !== '' && result.push(lastName);

    return result;
  }

  public getKycData(kycStatus: string): KYCStatus | undefined {
    switch (kycStatus) {
      case 'Blocked':
        return { review: 'completed', verified: false };

      case 'In progress':
        return { review: 'pending', verified: null };

      case 'Verified':
        return { review: 'completed', verified: true };

      case 'Unverified':
        return { review: null, verified: null };

      default:
        return undefined;
    }
  }

  public getKycStatus(kycStatus: string, kycVerified: boolean): string {
    let status = 'Unverified';

    if (kycStatus === 'completed' && !kycVerified) {
      status = 'Blocked';
    }

    if (kycStatus === 'pending') {
      status = 'In progress';
    }

    if (kycVerified && kycStatus === 'completed') {
      status = 'Verified';
    }

    return status;
  }

  public onProfileFilters(filterValues: UsersFilterValues | null) {
    return filterValues
      ? removeMatchedValues(
          {
            id_eq: filterValues.user_id,
            email_cont: filterValues.user_email,
            group_id_in: filterValues.user_group,
            user_field_values_value_cont_any: [
              filterValues.user_name,
              filterValues.user_surname,
            ],
            kyc_verified_null:
              filterValues.user_verification === 'Unverified' ? true : null,
            kyc_verified_eq: this.getKycData(filterValues.user_verification)
              ?.verified,
            kyc_review_status_eq: this.getKycData(
              filterValues.user_verification
            )?.review,
            is_company_eq:
              filterValues.user_acc_type !== 'all'
                ? filterValues.user_acc_type
                : undefined,
            status_eq:
              filterValues.user_status !== 'all'
                ? filterValues.user_status
                : null,
            created_at_gteq: filterValues.created_from
              ? formatDateAsFilterValue(new Date(filterValues.created_from))
              : undefined,
            created_at_lteq: filterValues.created_to
              ? formatDateAsFilterValue(
                  addDays(new Date(filterValues.created_to), 1)
                )
              : undefined,
            updated_at_gteq: filterValues.updated_from
              ? formatDateAsFilterValue(new Date(filterValues.updated_from))
              : undefined,
            updated_at_lteq: filterValues.updated_to
              ? formatDateAsFilterValue(
                  addDays(new Date(filterValues.updated_to), 1)
                )
              : undefined,
          },
          ['', 'all']
        )
      : undefined;
  }
}

export default new UserProfileService();
