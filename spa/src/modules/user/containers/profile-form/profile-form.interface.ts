export type ProfileFormProps = {};

export type ProfileFormValues = {
  accountType: string | null;
  firstName: string;
  lastName: string;
  country: string | null;
  city: string | null;
  postalCode?: string;
  address?: string;
  phone?: string;
  birthday?: Date | null;
};
