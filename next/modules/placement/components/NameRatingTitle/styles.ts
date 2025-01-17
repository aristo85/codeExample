import {Rating} from '@mui/material';
import styled, {css} from 'styled-components';

export const BookingTitleBlock = styled.p`
  align-items: center;
  display: inline-flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 4px;
  ${props => props.theme.media.down('xxs')`
  `}
`;

export const BookingName = styled.span`
  display: inline-block;
  text-align: left;
  ${({theme}) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.heading3};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
  `};
`;

export const ItemRating = styled(Rating)`
  display: inline-flex;
  svg {
    font-size: 32px;
  }
`;
