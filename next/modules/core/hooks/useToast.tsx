import {useNotification} from '@/modules/core/hooks/useNotification';

export interface ErrorResponse {
  status: number;
  data: {
    data: unknown[];
    message: string;
    status: number;
    success: boolean;
    timestamp: number;
    totalCount: string;
  };
}

enum ToastMessages {
  serverError = 'Ошибка сервера',
}

export const useToast = (error: ErrorResponse | null): void => {
  const toast = useNotification();

  if (!error) return;

  if (error.status.toString().startsWith('5')) {
    toast(ToastMessages.serverError, 'error');
  } else {
    toast(error.data.message, 'error');
  }
};
