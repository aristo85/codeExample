import { FC } from 'react';

import { toast } from 'react-toastify';

const ToastStory: FC = () => {
  return <>{toast('test toast')}</>;
};

export default ToastStory;
