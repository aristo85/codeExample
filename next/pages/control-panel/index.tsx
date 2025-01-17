import React, {FC} from 'react';
import BookedListWithCategories from '@/modules/profile/components/BookedListWithCategories';
import Notifications from '@/modules/control-panel/components/Notifications';
import {ControlPanelWrapper} from '@/modules/control-panel/components/Notifications/styles';
import useMatchMedia from '@/modules/core/hooks/useMatchMedia';
import {breakpoints} from '@/modules/core/styles/mediaQueries';

const ControlPanelPage: FC = () => {
  const isScreenSm = useMatchMedia(`(max-width: ${breakpoints.sm}px)`);
  return (
    <ControlPanelWrapper>
      <BookedListWithCategories />
      {!isScreenSm && <Notifications />}
    </ControlPanelWrapper>
  );
};

export default ControlPanelPage;
