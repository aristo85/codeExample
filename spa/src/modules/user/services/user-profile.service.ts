// types
import type {
  GetProfileResponse,
  UpdateProfileData,
  UpdateProfileCurrencyData,
} from 'modules/user/types/user-api.types';
import type { ProfileFormValues } from 'modules/user/containers/profile-form/profile-form.interface';
import { PreferencesFormValues } from 'modules/preferences/containers/preferences-form/preferences-form.interface';

class UserProfileService {
  public getNormalizedProfileData(data: GetProfileResponse): ProfileFormValues {
    // todo: use better way
    return {
      accountType: data.user.is_company ? 'business' : 'personal',
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
      birthday:
        data.fields.find((field) => field.code === 'birth_at')?.value ?? '',
      address:
        data.fields.find((field) => field.code === 'address')?.value ?? '',
    };
  }

  public getUpdateProfileDataByFormData(
    formData: ProfileFormValues,
    profileData: GetProfileResponse
  ): UpdateProfileData {
    const result: UpdateProfileData = {
      email: profileData.user.email,
      is_company: formData.accountType === 'business',
      fields: [],
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

  public getUpdateProfileCurrency(
    formData: PreferencesFormValues,
    profileData: GetProfileResponse
  ): PreferencesFormValues {
    const result: UpdateProfileCurrencyData = {
      email: profileData.user.email,
      currency: profileData.user.currency,
    };

    result.currency = formData.currency;

    return result;
  }
}

export default new UserProfileService();
