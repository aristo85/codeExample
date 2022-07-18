import { FC } from 'react';

import IconButton from './icon-button';

const IconButtonStory: FC = () => {
  return (
    <>
      <IconButton size='small' icon='qrCode' />
      <br />
      <IconButton size='small' icon='copy' />
      <br />
      <IconButton size='small' icon='clock' />
    </>
  );
};

export default IconButtonStory;
