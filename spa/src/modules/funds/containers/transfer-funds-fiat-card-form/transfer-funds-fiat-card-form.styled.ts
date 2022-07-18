import styled, { css } from 'styled-components';
// components
import Paper from 'modules/core/components/paper';
import Button from 'modules/core/components/button';
import Select from 'modules/core/components/select';

export const Root = styled.div`
  /* display: flex;
  align-items: center;
  max-width: 840px;
  width: 100%;
  padding: 40px 60px 30px 60px;

  ${(props) => props.theme.media.down('md')`
    padding: 20px;
  `} */
`;

export const InfoContainer = styled(Paper)`
  max-width: 724px;
  padding: 22px 35px 17px 35px;
  margin: 17px auto 0 auto;
`;

export const InfoContainerBlock = styled.div``;

export const OrderID = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 13px;
`;

// export const OrderComments = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding-bottom: 17px;
// border-bottom: 1px solid ${(props) => props.theme.palette.common.gray}; ;
// `;

export const OrderAmount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 13px;
`;

export const InfoContainerBlockParagraph = styled.p`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.font.family.main};
  font-size: ${(props) => props.theme.font.size.body2};
  line-height: 21px;
  color: ${(props) => props.theme.palette.common.gray};
`;

export const InfoContainerBlockSpan = styled.span`
  font-size: ${(props) => props.theme.font.size.body3};
  color: ${(props) => props.theme.palette.common.black};
  font-weight: ${(props) => props.theme.font.weight.semiBold};
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

export const WalletSelect = styled(Select)`
  width: 105px;
  margin-left: 30px;
`;
