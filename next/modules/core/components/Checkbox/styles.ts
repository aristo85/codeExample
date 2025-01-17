import styled, {css} from 'styled-components';
import {Checkbox} from '@mui/material';

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  max-height: 48px;
`;

export const CheckboxStyled = styled(Checkbox)`
  width: 20px;
  height: 20px;
`;

export const CheckboxLabel = styled.p`
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicMedium};
    color: ${theme.colors.default};
    font-weight: ${theme.font.weight.regular};
    font-size: 16px;
    font-style: normal;
    line-height: normal;

    &::first-letter {
      text-transform: capitalize;
    }
  `}
`;
