import { useMutation } from 'react-query';
// services
import commissionsApiService from '../services/commissions-api.service';
import ApiService from 'modules/core/services/api-service';
// types
import { UpdateCommissionData } from '../types/commissions-api.types';
import { ApiError } from 'modules/core/types/api.types';

import { useCommissionListQuery } from './use-commission-list-query';

const apiService = new ApiService();

export const useCommissionUpdateMutation = (id: string) => {
  const commissionList = useCommissionListQuery({
    page: 1,
    per_page: 10,
    q: { sorts: 'created_at asc' },
  });

  return useMutation(
    (data: UpdateCommissionData) =>
      commissionsApiService.updateCommission(data, id),
    {
      onSuccess: () => {
        commissionList.refetch();
      },
      onError: (error: ApiError) => {
        apiService.showApiErrorToast(error, 'Unable to update');
      },
    }
  );
};

// export const useProfileCurrencyUpdateMutation = () => {
//   const queryBalance = useTotalBalanceQuery();

//   return useMutation((data: UpdateProfileCurrencyData) =>
//     userApiService.updateProfileCurrency(data),{
//       onSuccess : () => {
//         queryBalance.refetch()
//       }
//     }
//   );
// };
