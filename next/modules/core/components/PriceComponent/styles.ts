import styled from 'styled-components';

export const PriceMainTitle = styled.h3`
  ${({theme}) => `
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle1};
    font-weight: ${theme.font.weight.regular};
  `};
`;

export const PriceDataBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`;

export const PriceDataTitle = styled.h4`
  ${({theme}) => `
    color: #4F4F4F;
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.regular};
  `};
`;

export const PriceDataValue = styled.h4`
  ${({theme}) => `
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.regular};
  `};
`;

export const PriceLine = styled.span`
  width: 100%;
  height: 1px;
  background: #8daec1;
`;

export const PriceBlock = styled.div`
  display: flex;
  padding: 24px;
  border-radius: 32px;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  background: #c6e1f3;
  height: auto;
`;
