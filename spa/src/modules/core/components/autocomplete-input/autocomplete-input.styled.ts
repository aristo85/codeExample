import styled, { css } from 'styled-components';

export const Root = styled.div`
  position: relative;
  width: 100%;
`;

export const Options = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% - 17px);
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.palette.common.white};
  transform: scaleY(0);
  transform-origin: top;
  transition: 0.1s;
  z-index: 10;
  cursor: pointer;
  max-height: 200px;
  overflow-y: auto;
  ${(props) => props.theme.elevation[1]};

  ${(props) =>
    props.isOpen &&
    css`
      transform: scaleY(1);
    `}
`;

export const Option = styled.div`
  display: flex;
  width: 100%;
  padding: 7px;
  box-sizing: border-box;
  border-bottom: 1px solid ${(props) => props.theme.palette.common.lightGray};
  background-color: ${(props) => props.theme.palette.common.white};

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;
