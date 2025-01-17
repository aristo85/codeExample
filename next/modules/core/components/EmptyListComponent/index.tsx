import React, {FC} from 'react';

import LensIcon from '@/modules/core/components/icons/LensIcon';
import {
  EmptyListWrapper,
  EmptySubTitle,
  EmptyTitle,
  LensContainer,
} from '@/modules/core/components/EmptyListComponent/styles';

interface EmptyListComponentProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}
const EmptyListComponent: FC<EmptyListComponentProps> = ({
  icon,
  title,
  subtitle,
}) => {
  return (
    <EmptyListWrapper>
      <LensContainer>{icon ? icon : <LensIcon />}</LensContainer>
      <EmptyTitle>{title}</EmptyTitle>
      <EmptySubTitle>{subtitle}</EmptySubTitle>
    </EmptyListWrapper>
  );
};

export default EmptyListComponent;
