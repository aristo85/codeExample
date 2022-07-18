import styled, { css } from 'styled-components';
// components
import Paper from 'modules/core/components/paper';
import Button from 'modules/core/components/button/button';

export const Root = styled(Paper)`
  max-width: 840px;
  width: 100%;
  padding: 40px 60px;

  ${(props) => props.theme.media.down('md')`
    padding: 20px 30px;
  `}
`;

export const FormContent = styled.div`
  display: flex;
  width: 100%;

  ${(props) => props.theme.media.down('md')`
    flex-direction: column;
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  padding-right: 35px;

  ${(props) => props.theme.media.down('md')`
    order: 1;
    padding-right: 0;
  `}
`;

export const FormRow = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 10px;
`;

export const FormSubmit = styled(Button)`
  margin: 20px auto 0 auto;
`;

export const Info = styled.div`
  flex: 0.5;
  padding-left: 35px;
  border-left: 1px solid ${(props) => props.theme.palette.common.lightGray};
  height: fit-content;

  ${(props) => props.theme.media.down('md')`
    margin-bottom: 35px;
  `}
`;

export const InfoTitle = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family.auxiliary};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.body2};
  `}
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  &.error {
    ${({ theme }) => css`
      color: ${theme.palette.common.red};
    `}
  }
`;

export const InfoBlockTitle = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family.auxiliary};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.body3};
  `}
`;

export const InfoBlockText = styled.span`
  margin-top: 5px;
  ${({ theme }) => css`
    font-family: ${theme.font.family.auxiliary};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.body3};
    color: ${theme.palette.common.lightGray};
  `}
`;
