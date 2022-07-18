import styled, { css } from 'styled-components';

export const Root = styled.div`
  position: relative;
  display: flex;
  padding: 5px;
  background-color: #f4f6f9;
  width: fit-content;
  height: fit-content;
  ${({ theme }) => css`
    border-radius: ${theme.shape.borderRadius.medium};
  `}

  ${(props) => props.theme.media.down('md')`

  &:first-child{
    flex: 0 1 80%;
    margin-left: 0;
  }

  button {
    margin-right: 0;
  }

  `}
`;

export const Tab = styled.button<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border: none;
  margin-right: 10px;
  padding: 0 11px;
  transition: ${(props) => props.theme.transition.fast};

  ${({ isActive, theme }) =>
    isActive
      ? css`
          background-color: ${theme.palette.common.white};
          color: ${theme.palette.common.black};
        `
      : css`
          background-color: transparent;
          color: ${theme.palette.common.gray};
        `}

  ${({ theme }) => css`
    border-radius: ${theme.shape.borderRadius.medium};
    font-family: ${theme.font.family.main};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.semiBold};
  `}

  &:first-child {
    min-width: 100px;
  }

  &:last-child {
    margin-right: 0;
  }
`;
