import styled, { css } from 'styled-components';

export const Root = styled.div<{ isDisabled: boolean }>`
  position: relative;
  width: 100%;
  cursor: pointer;
  user-select: none;
  padding-bottom: 17px;

  ${(props) =>
    props.isDisabled &&
    css`
      pointer-events: none;
    `}
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  ${({ theme }) => css`
    font-family: ${theme.font.family.auxiliary};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.semiBold};
    color: ${theme.palette.common.lightGray};
  `}
`;

export const SelectValue = styled.div<{ isError: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 30px;
  padding: 5px 0 5px 9px;
  box-sizing: border-box;
  border-bottom: 1px solid
    ${({ theme, isError }) =>
      isError ? 'red' : theme.palette.common.lightGray};
`;

export const SelectValueInfo = styled.div``;

export const Title = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.family.main};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.semiBold};
  `}
`;

export const Subtitle = styled.div`
  margin-top: 4px;
  ${({ theme }) => css`
    font-family: ${theme.font.family.main};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.palette.common.lightGray};
  `}
`;

export const StartAdornment = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const DownArrowWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  color: ${(props) => props.theme.palette.common.primary};
  transition: ${(props) => props.theme.transition.fast};

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateY(-50%) rotate(180deg);
    `};
`;

export const OptionsWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% - 17px);
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.palette.common.white};
  transform: scaleY(0);
  transform-origin: top;
  transition: 0.1s;
  z-index: 10;

  ${(props) =>
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
  border-bottom: 1px solid ${(props) => props.theme.palette.common.lightGray};
  ${(props) => props.theme.elevation[1]};
  background-color: ${(props) => props.theme.palette.common.white};
  font-weight: ${(props) => props.theme.font.weight.semiBold};

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  color: red;
  font-size: 14px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
