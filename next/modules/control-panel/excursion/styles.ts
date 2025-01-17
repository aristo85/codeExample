import styled from 'styled-components';

export const BreadcrumbsBlock = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({theme}) => theme.media.down('sm')`
    padding: 0 16px;
    ${theme.media.down('xs')`
    `}
  `}
`;

export const ExcursionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${({theme}) => theme.media.down('md')`
    flex-direction: column;
    ${theme.media.down('sm')`
      padding: 0 16px;
    `}
  `}
`;

export const ExcursionButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;
`;
