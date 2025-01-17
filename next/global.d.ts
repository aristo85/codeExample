export type YooMoneyErrorType =
  | 'customization_of_payment_methods_not_allowed'
  | 'invalid_combination_of_payment_methods'
  | 'invalid_payment_methods'
  | 'invalid_return_url'
  | 'invalid_token'
  | 'no_payment_methods_to_display'
  | 'token_expired'
  | 'token_required'
  | 'internal_service_error';

export type YooMoneyError = {
  error: YooMoneyErrorType;
};

export type YooMoneyCheckoutWidgetPaymentMethods =
  | 'bank_card'
  | 'yoo_money'
  | 'sberbank'
  | 'mir_pay'
  | 'sbp';

export type YooMoneyCheckoutWidgetColors = {
  control_primary: string; // HEX value allowed
  control_primary_content: string; // Should be contrast with control_primary
  background: string;
  text: string; // Should be contrast with background
  border: string; // Should be contrast with background
  control_secondary: string; // Should be contrast with background
};

export type YooMoneyCheckoutWidgetCustomization = {
  payment_methods?: YooMoneyCheckoutWidgetPaymentMethods[];
  colors?: YooMoneyCheckoutWidgetColors;
  modal?: boolean;
};

export type YooMoneyCheckoutWidgetArgs = {
  confirmation_token: string;
  return_url: string;
  error_callback: (e: YooMoneyError) => void;
  customization?: YooMoneyCheckoutWidgetCustomization;
};

export interface YooMoneyCheckoutWidget {
  new (args: YooMoneyCheckoutWidgetArgs);
}

declare global {
  interface Window {
    YooMoneyCheckoutWidget: YooMoneyCheckoutWidget;
  }
}
