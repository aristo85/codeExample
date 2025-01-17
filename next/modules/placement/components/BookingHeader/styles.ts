import styled, {css} from 'styled-components';

export const BookingTitle = styled.h2`
  ${({theme}) => css`
    font-size: ${theme.font.size.heading3};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.default};
    font-family: ${theme.font.family.gothicMedium} ${theme.media.down('xs')`
      margin: 24px 0 0;
      flex-direction: column;
      align-self: flex-start;
      font-weight: 400;
      font-size: ${theme.font.size.subtitle1};
    `};
  `}
`;

export const BookingHeaderBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 8px;
  align-items: center;

  ${({theme}) => theme.media.down('xs')`
    flex-direction: column;
  `}
`;
