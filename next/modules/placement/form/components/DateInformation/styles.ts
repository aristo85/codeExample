import styled, {css} from 'styled-components';

interface DateFormBlockProps {
  isMobileLastStep?: boolean;
}
export const DateFormBlock = styled.div<DateFormBlockProps>`
  ${({theme, isMobileLastStep}) => css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    ${theme.media.down('sm')`
        flex-direction: ${isMobileLastStep ? 'column' : 'row'};
        flex-flow: ${isMobileLastStep ? 'auto' : 'wrap'};
    `}
  `}
`;

export const DateFormInformation = styled.h3`
  ${({theme}) => `
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular}
  `};
`;

interface DateFormDataProps {
  dark?: boolean;
}
export const DateFormData = styled.h3<DateFormDataProps>`
  cursor: pointer;
  ${({theme, dark}) => `
    color: ${dark ? '#4F4F4F' : '#27AE60'};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular}
  `};
`;

export const DateInformationBlock = styled.div`
  ${({theme}) => css`
    grid-column: 1 / 3;
    gap: 32px;
    display: flex;
    margin: 16px 0;
    flex-direction: row;
    ${theme.media.down('sm')`
       flex-direction: column;
       gap: 16px;
       margin: 0;
    `}
  `}
`;

export const DateTimeBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 56px;
`;
