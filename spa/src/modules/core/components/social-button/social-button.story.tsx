import { FC } from 'react';
import SocialButton from './social-button';

const SocialButtonStory: FC = () => {
  return (
    <>
      <SocialButton name='mail' />
      <SocialButton name='telegram' />
      <SocialButton name='messenger' />
    </>
  );
};

export default SocialButtonStory;
