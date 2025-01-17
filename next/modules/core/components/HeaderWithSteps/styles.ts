import styled from 'styled-components';

export const HeaderWithStepsContainer = styled.div`
  ${({theme}) => `
    display: flex;
    flex-direction: column;
    gap: 16px;
    ${theme.media.down('sm')`
        gap: 8px;
    `}
  `}
`;

export const HeaderTitle = styled.h2`
  ${({theme}) => `
    color: ${theme.colors.default};
    font-size: ${theme.font.size.heading2};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down('sm')`
        font-size: ${theme.font.size.subtitle1};
    `}
  `}
`;

export const HeaderStepsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

interface HeaderStepProps {
  currentStep?: boolean;
}
export const HeaderStep = styled.h2<HeaderStepProps>`
  ${({theme, currentStep}) => `
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.subtitle1};
    color: ${currentStep ? theme.colors.default : '#8daec1'};
    ${theme.media.down('xs')`
        font-size: ${theme.font.size.subtitle2};
    `};
  `}
`;

export const HeaderSubTitle = styled.h3`
  ${({theme}) => `
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
  `}
`;
