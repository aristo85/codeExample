import styled, {css} from 'styled-components';

export const Root = styled.div<{isDisabled: boolean}>`
  position: relative;
  width: 100%;
  cursor: pointer;
  user-select: none;
  padding-bottom: 0;
  &:focus {
    background-color: #e7f2f8;
  }
  ${({isDisabled}) =>
    isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.3;
    `}
  ${({theme}) => theme.media.down('xs')`
  cursor: none;
  `}
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  ${({theme}) => css`
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.semiBold};
  `}
`;

export const SelectValue = styled.div<{
  isError: boolean;
  isOpen: boolean;
  isFilled: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 30px;
  padding: 5px 0 5px 16px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 16px;
  height: 48px;
  border: 3px solid
    ${({theme, isFilled, isError}) =>
      isFilled
        ? theme.colors.primary
        : isError
        ? 'red'
        : theme.colors.secondary};

  ${({theme}) => theme.media.down('xs')`
  `}
  &:focus {
    border: 3px solid ${props => props.theme.colors.primary};
  }

  ${props =>
    props.isOpen &&
    css`
      border-radius: 16px 16px 0px 0px;
      border-bottom-width: 0px !important;
    `};
`;

export const SelectValueInfo = styled.div``;

export const Title = styled.p<{active?: boolean}>`
  ${({theme, active}) => css`
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    white-space: nowrap;
    color: ${active ? theme.colors.secondary : '#222121'};
  `}
`;

export const PlaceHolder = styled.div`
  ${({theme}) => css`
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.secondary};
  `}
`;

export const Subtitle = styled.div`
  margin-top: 4px;
  ${({theme}) => css`
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
  `}
`;

export const StartAdornment = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const DownArrowWrapper = styled.div<{isOpen: boolean}>`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  transition: ${props => props.theme.transition.fast};

  ${props =>
    props.isOpen &&
    css`
      transform: translateY(-50%) rotate(180deg);
    `};
`;

export const OptionsWrapper = styled.div<{isOpen: boolean}>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  transform: scaleY(0);
  transform-origin: top;
  transition: 0.1s;
  z-index: 10;
  border: 3px solid ${props => props.theme.colors.primary};
  border-radius: 0 0 16px 16px;

  ${props =>
    props.isOpen &&
    css`
      transform: scaleY(1);
    `}
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 7px;
  box-sizing: border-box;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  ${props => props.theme.elevation[1]};
  font-weight: ${props => props.theme.font.weight.semiBold};

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

export const ErrorMessage = styled.span.attrs({className: 'error'})`
  position: absolute;
  bottom: -14px;
  left: 0;
  color: red;
  font-size: 14px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
