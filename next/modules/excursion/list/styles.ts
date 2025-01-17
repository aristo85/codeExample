import styled from 'styled-components';

export const ExcursionPage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 44px;
`;

export const ExcursionBreadcrumbsBlock = styled.div`
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

export const ExcursionFilterBlock = styled.div`
  width: 326px;
  ${({theme}) => theme.media.down('md')`
    width: 100%;
    height: auto;
  `}
`;

export const ExcursionListBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

export const ExcursionEmptyBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
