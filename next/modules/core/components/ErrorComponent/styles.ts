import styled from 'styled-components';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';

export const ErrorContainer = styled.div`
  width: 100%;
  height: calc(100vh - 123px); // subtract header
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const ErrorTitle = styled.h1`
  font-weight: 600;
  font-size: 200px;
  color: #8daec1;

  ${({theme}) => theme.media.down('sm')`
    font-size: 120px;
    ${theme.media.down('xs')`
    font-size: 100px;
    `}
  `}
`;

export const ErrorSubTitle = styled.h2`
  font-weight: 400;
  font-size: 46px;
  text-align: center;

  ${({theme}) => theme.media.down('md')`
    font-size: 24px;
    ${theme.media.down('xs')`
    font-size: 24px;
    `}
  `}
`;

export const ReloadPageButton = styled(ButtonBasic)`
  right: 16px;
  top: 40px;
  height: 48px;
  align-self: center;
  width: 30%;

  ${({theme}) => theme.media.down('md')`
      width: 60%;
    ${theme.media.down('xs')`
      font-size: 16px;
      width: 90%;
    `}
  `}
`;
