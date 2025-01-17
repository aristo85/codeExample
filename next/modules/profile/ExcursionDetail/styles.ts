import styled, {css} from 'styled-components';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';

export const ExcursionDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 100px;
  ${({theme}) => theme.media.down('xs')`
    padding: 1rem;
    margin-bottom: 20px;
  `}
`;

export const ExcursionHeaderBlock = styled.div`
  ${({theme}) => css`
    display: flex;
    position: relative;
    flex-direction: row;
    gap: 32px;
    width: 100%;
    height: 300px;
    ${theme.media.down('md')`
      flex-direction: column;
      height: 100%;
    `};
    ${theme.media.down('xs')`
      align-items:center;
    `};
  `}
`;

export const ExcursionStatusBlock = styled.div`
  ${({theme}) => css`
    display: flex;
    align-self: flex-end;
    margin-bottom: 80px;
    ${theme.media.down('md')`
       margin-bottom: 0;
    `};
    ${theme.media.down('xs')`
      align-self:center;
    `};
  `}
`;

export const ExcursionMapContainer = styled.div`
  ${({theme}) => css`
    position: relative;
    width: 100%;
    height: 100%;
    ${theme.media.down('md')`
      height: 300px;
    `};
  `}
`;

export const InformationDetailContainer = styled.div`
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

export const InformationDetailBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ExcursionDetailValue = styled.h4`
  ${({theme}) => css`
    color: #4f4f4f;
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.body2};
    ${theme.media.down('xs')`
    `};
  `}
`;

export const ExcursionDetailTitle = styled.h3`
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.subtitle1};
    ${theme.media.down('xs')`
    `};
  `}
`;

export const ExcursionButtonBlock = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 20px;
    ${theme.media.down('xs')`
    flex-direction: column;
    gap: 10px;
    `};
  `}
`;

export const ExcursionButton = styled(ButtonBasic)`
  color: #eb5757;
`;

//
//
//

export const DetailBookingContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10%;
  ${({theme}) => theme.media.down('md')`
    flex-direction: column;
    gap: 0;
    align-items: center;
  `}
`;

export const DetailBookingContentItem = styled.div<{$fullWidth?: true}>`
  display: flex;
  flex-direction: column;
  ${({$fullWidth}) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
`;

export const DetailBookingPageHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  ${({theme}) => css`
    & > span {
      & > h2 {
        font-family: ${theme.font.family.gothicMedium};
        font-size: ${theme.font.size.heading2};
        font-weight: 400;
        line-height: 39px;
        margin-bottom: 8px;
      }
      & > span {
        font-family: ${theme.font.family.gothicBook};
        font-size: ${theme.font.size.subtitle5};
        font-weight: 400;
      }
    }
  `}
`;

export const FieldRow = styled.div<{$reverse?: boolean}>`
  display: flex;
  gap: 24px;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;

  ${({theme, $reverse}) => css`
    ${theme.media.down('md')`
      flex-direction: ${$reverse ? 'column-reverse' : 'column'};
    `}
  `}
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
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
