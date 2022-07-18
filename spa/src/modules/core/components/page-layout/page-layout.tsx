import React, { FC } from 'react';
import { PageLayoutProps } from './page-layout.interface';
// styled components
import {
  Root,
  PageLayoutTitle,
  PageLayoutSubtitle,
  RightActionWrapper,
  PageLayoutTop,
} from './page-layout.styled';

const PageLayout: FC<PageLayoutProps> = ({
  title,
  subtitle,
  children,
  rightAction,
}) => {
  return (
    <Root>
      <PageLayoutTop>
        <PageLayoutTitle>{title}</PageLayoutTitle>
        <PageLayoutSubtitle>{subtitle}</PageLayoutSubtitle>
        {!!rightAction && (
          <RightActionWrapper>{rightAction}</RightActionWrapper>
        )}
      </PageLayoutTop>
      {children}
    </Root>
  );
};

export default PageLayout;
