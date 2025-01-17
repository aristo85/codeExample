import {VariantType, useSnackbar} from 'notistack';

type ErrorType = {
  message: string;
  // Additional properties specific to error object
};

export function useNotification() {
  const {enqueueSnackbar} = useSnackbar();

  const handleClickVariant = (message: string, variant: VariantType) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, {variant});
  };

  return handleClickVariant;
}
