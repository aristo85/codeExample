import styled from 'styled-components';
export const BreadcrumbsBlock = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({theme}) => theme.media.down('sm')`
    display: none;
    padding-bottom: 16px;
  `}
`;

export const SuccessContainer = styled.div`
  width: 100%;
  height: calc(100vh - 256px); // subtract header
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const SuccessTitle = styled.h1`
  color: #232222;
  font-size: 34px;
  text-align: center;

  ${({theme}) => theme.media.down('sm')`
    font-size: 32px;
    ${theme.media.down('xs')`
    font-size: 32px;
    `}
  `}
`;

export const SuccessSubTitle = styled.h2`
  color: #4f4f4f;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  max-width: 467px;
  white-space: pre-wrap;
`;
