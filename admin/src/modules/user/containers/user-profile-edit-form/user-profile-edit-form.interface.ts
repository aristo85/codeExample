import type { ResourceId } from 'modules/core/types/resource.types';

export type ProfileRuleProps = {
  idUser: ResourceId;
  onClose: () => void;
};

export type ProfileEditFormValues = {
  accountType: string | null;
  firstName: string;
  lastName: string;
  country: string | null;
  city: string | null;
  postalCode?: string;
  address?: string;
  phone?: string;
  birthday?: Date | null | string;
  group: string;
};
