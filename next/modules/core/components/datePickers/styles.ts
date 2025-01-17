import styled, {css} from 'styled-components';
import {franklinGothicMedium} from '../../containers/AppLayout';

export const Root = styled.div<{active: boolean; error?: boolean}>`
  flex: 1;

  input {
    cursor: pointer;
  }

  .MuiInputBase-root {
    background: #ffffff;
    height: 48px;
    border-radius: 16px;
    border: 3px solid
      ${({theme, active, error}) =>
        error ? 'red' : active ? theme.colors.primary : theme.colors.secondary};
    cursor: pointer;
  }

  .MuiTextField-root {
    min-width: 100% !important;
    width: 100% !important;
    ${({theme}) => theme.media.down('xs')`
    border-radius: 16px;
  `}
  }

  input::placeholder {
    color: ${({theme}) => theme.colors.secondary};
    font-size: 16px;
    line-height: 18px;
    opacity: 1;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;

  ${({theme}) => css`
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.semiBold};
  `}
`;

export const txtFieldStyles = {
  '& .MuiOutlinedInput-root': {
    ...franklinGothicMedium.style,
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      transform: 'none',
    },
  },
};
