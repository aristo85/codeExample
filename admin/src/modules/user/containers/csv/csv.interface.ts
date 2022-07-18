export type CSVFilterData = {
  user_id: string;
  user_email: string;
  user_name: string;
  user_group: string[];
  user_surname: string;
  user_acc_type: string;
  user_verification: string;
  user_status: string;
  created_from: string;
  created_to: string;
  updated_from: string;
  updated_to: string;
};

export type SearchedFilters = {
  id_eq?: string | undefined;
  email_eq?: string | undefined;
  user_field_values_value_cont_any?: string[] | undefined;
  group_id_in?: string[] | undefined;
  status_eq?: string | null;
  is_company_eq?: string | undefined;
  kyc_verified_null?: boolean | null;
  kyc_verified_eq?: boolean | null;
  kyc_review_status_eq?: string | null;
  created_at_gteq?: string | undefined;
  created_at_lteq?: string | undefined;
  updated_at_gteq?: string | undefined;
  updated_at_lteq?: string | undefined;
  sorts?: string | undefined;
};

export type CSVProps = {
  filter: SearchedFilters | null | undefined;
  listCount: number | undefined;
  sortingByDate: boolean;
  setsortingByDate: (data: boolean) => void;
};

export type CSVProfileData = {
  user_id: string;
  user_email: string;
  user_name: string;
  user_surname: string;
  user_acc_type: string;
  user_group: string;
  user_verification: string;
  user_status: string;
  created_from?: string;
  created_to?: string;
  updated_from?: string;
  updated_to?: string;
};
