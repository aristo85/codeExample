import styled from 'styled-components';

export const GuidePage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 44px;
`;

export const GuideBreadcrumbsBlock = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({theme}) => theme.media.down('sm')`
  padding-bottom: 16px;
    ${theme.media.down('xs')`
    `}
  `}
`;

export const GuideFilterBlock = styled.div`
  width: 326px;
  ${({theme}) => theme.media.down('md')`
    width: 100%;
    height: auto;
  `}
`;

export const GuideListBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

export const GuideEmptyBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
