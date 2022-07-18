import { useMutation } from 'react-query';
// services
import supportsApiService from '../services/supports-api.service';
// types
import { UpdateSupportData } from '../types/support-api.types';

export const useSupportUpdateMutation = (code: string) => {
  return useMutation(
    (data: UpdateSupportData) => supportsApiService.updateSupport(data, code),
    {
      onSuccess: () => {},
    }
  );
};
