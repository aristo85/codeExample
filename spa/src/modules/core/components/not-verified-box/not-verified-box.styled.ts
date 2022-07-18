import styled from 'styled-components';
// types
import type { Elevation } from 'styles/theme.types';

export const Root = styled.div``;

export const Container = styled.div<{
  elevation: Elevation;
}>`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 0 40px;
  justify-content: center;
  align-items: center;
  height: 74vh;
  margin: 40px auto;
  background: ${({ theme }) => theme.palette.common.white};
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.shape.borderRadius.medium};
  text-align: center;

  ${({ elevation, theme }) => theme.elevation[elevation]}
`;

export const NotVerifiedTitle = styled.h2`
  margin-bottom: 22px;
  font-size: ${({ theme }) => theme.font.size.subtitle1};
  line-height: 31px;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.palette.common.black};
`;

export const NotVerifiedReason = styled.p`
  margin-bottom: 22px;
  line-height: 21px;
  font-family: ${({ theme }) => theme.font.family.auxiliary};
  font-size: ${({ theme }) => theme.font.size.body1};
  color: ${({ theme }) => theme.palette.common.gray};
`;

export const NotVerifiedParagraph = styled.p`
  margin-bottom: 22px;
  font-size: ${({ theme }) => theme.font.size.body3};
  line-height: 21px;
  font-family: ${({ theme }) => theme.font.family.auxiliary};
  color: ${({ theme }) => theme.palette.common.lightGray};
`;
