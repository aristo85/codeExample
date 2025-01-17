import styled, {css} from 'styled-components';

export const BookingFormPage = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;

  ${({theme}) => theme.media.down('md')`
    flex-direction: column;
    ${theme.media.down('sm')`
    `}
  `}
`;

export const BookingFormMainData = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 44px;
  gap: 24px;
`;

export const BookingFormAdditionalData = styled.div`
  ${({theme}) => css`
    width: min-content;
    max-width: 328px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    ${theme.media.down('md')`
      max-width: 100%;
      flex-direction: row;
      width: 100%;
      gap: 24px;
    `}
  `}
`;

export const BookingFormName = styled.h2`
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.heading2};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down('sm')`
        font-size: ${theme.font.size.subtitle1};
    `}
  `}
`;

export const BookingFormHeader = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    ${theme.media.down('sm')`
        gap: 8px;
    `}
  `}
`;

export const Line = styled.span`
  ${({theme}) => css`
    height: 2px;
    background: #c6e1f3;
    width: 100%;
    margin: 28px 0 16px;
    ${theme.media.down('sm')`
          margin: 0;
      `}
  `}
`;
