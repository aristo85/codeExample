import styled, { css } from 'styled-components';
import Paper from 'modules/core/components/paper';

export const RootBaseForm = styled(Paper)`
  display: flex;
  align-items: center;
  max-width: 840px;
  width: 100%;
  padding: 40px 60px 30px 60px;
  min-height: 430px;
  ${(props) => props.theme.media.down('sm')`
    padding: 20px;
  `}
`;

export const Root = styled.div`
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  width: 100%;

  ${(props) => props.theme.media.down('md')`
    flex-direction: column;
  `}
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 0.6;
  padding-right: 20px;

  ${(props) => props.theme.media.down('md')`
    order: 1;
    padding-right: 0;
  `}
`;

export const FormRow = styled.fieldset`
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AmountDescription = styled.span`
  font-family: 'Futura PT', sans-serif;
  font-size: 12px;
  color: ${(props) => props.theme.palette.common.gray};
`;

export const InfoRowsWrapper = styled.div``;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.palette.common.lightGray};

  &:last-child {
    border-bottom: 0;
    margin-bottom: 45px;
  }
`;

export const InfoRowName = styled.span`
  font-family: ${(props) => props.theme.font.family.auxiliary};
  font-size: 14px;
  color: ${(props) => props.theme.palette.common.lightGray};
`;

export const InfoRowValue = styled.span`
  font-family: ${(props) => props.theme.font.family.main};
  font-size: 14px;
  color: ${(props) => props.theme.palette.common.black};
  max-width: 50%;
  word-wrap: break-word;
  text-align: end;
`;

export const Info = styled.div`
  flex: 0.4;
  padding-left: 20px;
  border-left: 1px solid ${(props) => props.theme.palette.common.lightGray};
  height: fit-content;

  ${(props) => props.theme.media.down('md')`
    margin-bottom: 35px;
    border-left: none;
    padding-left: 0;
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
`;

export const InfoBlockTitle = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.body3};
  `}
`;

export const InfoBlockText = styled.span`
  margin-top: 4px;
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.body3};
    color: ${theme.palette.common.lightGray};
  `}
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const GoBackAction = styled.button`
  padding: 15px;
  font-size: 14px;
  color: ${(props) => props.theme.palette.common.primary};
  background-color: transparent;
  border: none;
  width: fit-content;
  margin: 0 auto;
  text-decoration: underline;
`;

export const InfoContainer = styled.div`
  max-width: 724px;
`;

export const InfoContainerBlock = styled(Paper)``;

export const CardsContainerBlock = styled(Paper)`
  margin-top: 17px;
  padding: 50px 0 60px 0;
`;

export const InfoContainerBlockParagraph = styled.p`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family.auxiliary};
  font-size: ${({ theme }) => theme.font.size.body2};
  line-height: 21px;
  color: ${({ theme }) => theme.palette.common.lightGray};
`;

export const InfoContainerBlockSpan = styled.span`
  font-size: ${({ theme }) => theme.font.size.body2};
  color: ${({ theme }) => theme.palette.common.black};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

export const OrderComments = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 17px;
`;

export const OrderID = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 13px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.common.lightGray};
`;

export const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 13px;
  p {
    font-size: ${({ theme }) => theme.font.size.body3};
    line-height: 21px;
    color: ${({ theme }) => theme.palette.common.black};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    span {
      margin-left: 5px;
      font-weight: ${({ theme }) => theme.font.weight.bold};
    }
  }
`;

export const Recalculating = styled.div`
  padding: 5px;
  background: #f4f6f9;
  font-family: ${({ theme }) => theme.font.family.auxiliary};
  color: ${({ theme }) => theme.palette.common.black};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.auxiliary1};
  text-align: center;
  border: 1px solid #ebebeb;
`;
