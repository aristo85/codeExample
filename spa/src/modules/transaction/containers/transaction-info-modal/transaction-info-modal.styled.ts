import styled, { css } from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  background-color: ${(props) => props.theme.palette.common.primary};
  border-top-left-radius: ${(props) => props.theme.shape.borderRadius.medium};
  border-top-right-radius: ${(props) => props.theme.shape.borderRadius.medium};
  display: flex;
  align-items: center;
  padding: 0 60px;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.family.auxiliary};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.size.subtitle2};
    color: ${theme.palette.common.white};
  `}
`;
