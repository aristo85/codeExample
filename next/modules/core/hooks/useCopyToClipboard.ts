import {useNotification} from '@/modules/core/hooks/useNotification';

export const useCopyToClipboard = (): [(value: string) => void] => {
  const toast = useNotification();
  const handleCopyToClipboard = (data: string) => {
    navigator.clipboard
      .writeText(data)
      .then(() => toast('Вы удачно скопировали поле', 'success'))
      .catch(() => toast('Что-то пошло не так, попробуйте заново', 'error'));
  };

  return [handleCopyToClipboard];
};
