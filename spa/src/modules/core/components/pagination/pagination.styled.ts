import styled, { css } from 'styled-components';

export const Root = styled.div`
  display: flex;
  width: fit-content;
  overflow-x: scroll;
`;

export const PaginationButton = styled.button<{
  isActive?: boolean;
  clickable?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  min-width: 24px;
  background-color: ${(props) => props.theme.palette.common.white};
  border: 1px solid ${(props) => props.theme.palette.common.lightGray};
  border-radius: 12px;
  margin: 0 4px;
  color: #858585;

  ${({ theme }) => css`
    font-family: ${theme.font.family.main};
    font-size: ${theme.font.size.auxiliary2};
    font-weight: ${theme.font.weight.bold};
  `}

  ${(props) =>
    props.isActive &&
    css`
      background-color: #f4f6f9;
      color: ${props.theme.palette.common.black};
    `}

  ${(props) =>
    !props.clickable &&
    css`
      opacity: 0.5;
      cursor: default;
      pointer-events: none;
    `}
`;
