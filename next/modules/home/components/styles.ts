import styled, {css} from 'styled-components';

export const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  ${({theme}) => theme.media.down('xs')`
    gap: 16px;
    padding-bottom: 16px;
  `}
`;

export const PageTitle = styled.h1`
  width: 100%;
  max-width: 1180px;
  font-size: 48px;
  line-height: 64px;
  color: ${({theme}) => theme.colors.default};
  font-weight: 400;
  margin-top: 16px;
  text-align: left;

  ${({theme}) => theme.media.down('md')`
    font-size: 48px;
    line-height: 56px;
    margin-top: 0; 
  `}

  ${({theme}) => theme.media.down('xs')`
    font-size: 34px;
    line-height: 46px;
  `};
`;

export const CarouselTabletAndDown = styled.div`
  position: absolute;
  padding: 24px 0;
  ${({theme}) => css`
    ${theme.media.down('md')`
      width: calc(100% - ${theme.layouts.paddingMd});
    `};
    ${theme.media.down('sm')`
      width: calc(100% - ${theme.layouts.paddingSm});
    `};
  `}
`;
