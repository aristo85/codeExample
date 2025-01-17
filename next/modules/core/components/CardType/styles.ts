import styled from 'styled-components';

export const CardTypeContainer = styled.div<{$width: '260px' | '100%'}>`
  ${({$width}) => `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 28px 20px;
    gap: 32px;
    width: ${$width};
    border-radius: 16px;
    border: 2px solid #1d7abd;
  `}
`;

export const CardInformationContainer = styled.div`
  ${({theme}) => `
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.black};
  `}
`;

export const CardName = styled.h4`
  font-size: 24px;
  text-align: center;
  margin-top: 10px;
`;

export const CardDescription = styled.div`
  text-align: center;
  font-size: 18px;
  padding: 10px 0;
`;
