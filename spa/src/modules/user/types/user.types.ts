export type User = {
  email: string;
  is_company: boolean;
  status: string;
  currency: string;
};

export type UserField = {
  active: boolean;
  code: string;
  name: string;
  value: any;
};

export type Avatar = {
  url: string;
  thumb_url: string;
};
