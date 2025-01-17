import styled, {css} from 'styled-components';

export const ConfirmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  ${({theme}) => theme.media.down('md')`
    flex-direction: column;
    ${theme.media.down('sm')`
    `}
  `}
`;

export const ConfirmHeaderTitle = styled.h2`
  ${({theme}) => css`
    font-size: ${theme.font.size.heading3};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.default};
  `}
`;

export const ConfirmInfoContainer = styled.div`
  ${({theme}) => css`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    ${theme.media.down('md')`
      grid-template-columns: 1fr 1fr;
    `};
    ${theme.media.down('xs')`
      grid-template-columns: 1fr;
    `};
  `}
`;

export const InformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FieldHeader = styled.h6`
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  color: #222121;
`;

export const FieldValue = styled.p`
  font-size: 20px;
  line-height: 23px;
  color: #4f4f4f;
`;

export const Divider = styled.div`
  height: 2px;
  background: #8daec1;
`;

export const ButtonsConfirmContainer = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: center;
    align-self: flex-end;
    flex-direction: row;
    gap: 10px;
    margin-top: 30px;
    ${theme.media.down('sm')`
      flex-direction: column;
      width: 100%;
      margin-bottom: 30px;
    `};
  `}
`;
