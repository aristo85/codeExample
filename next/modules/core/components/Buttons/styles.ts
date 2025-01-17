import styled, {css} from 'styled-components';

interface StyledButtonProps {
  dark?: boolean;
  small?: boolean;
}

export const BtnStyled = styled.button<StyledButtonProps>`
  border: 2px solid #1d7abd;
  height: ${props => (props.small ? 'auto' : '58px')};
  border-radius: ${props => (props.small ? '10px' : '16px')};
  background: ${props => (props.dark ? props.theme.colors.primary : '#ffffff')};
  font-size: ${props => (props.small ? '16px' : '24px')};
  line-height: ${props => (props.small ? '20px' : '27px')};
  color: ${props => (!props.dark ? props.theme.colors.primary : '#ffffff')};
  padding: ${props => (props.small ? '10px' : '0 24px')};
  width: 100%;
  cursor: pointer;
  font-family: ${({theme}) => theme.font.family.gothicDemi};

  &:disabled {
    background: ${props => props.theme.colors.lightDefault};
    color: rgba(34, 33, 33, 0.32);
    border: none;
    cursor: not-allowed;

    &:active,
    &:hover {
      background: ${props => props.theme.colors.lightDefault};
      color: rgba(34, 33, 33, 0.32);
    }
  }

  &:active {
    background: ${props => (props.dark ? '#fff' : props.theme.colors.primary)};
    color: #fff;
  }

  transition: background-color 0.3s ease;

  ${({theme, dark}) => css`
    ${theme.media.up('sm')`
    &:hover {
      background: #c6e1f3;
      color: ${dark ? theme.colors.primary : ''};
    }
  `}
    ${theme.media.down('sm')`
      cursor: auto;
    `}
  `}
`;
