import styled, {css} from 'styled-components';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';

export const BreadcrumbsBlock = styled.div`
  padding: 0 0 calc(34px - 1rem);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({theme}) => theme.media.down('sm')`
    padding: 0;
    ${theme.media.down('xs')`
    `}
  `}
`;

export const DetailBookingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({theme}) => theme.media.down('md')`
    flex-direction: column;
    ${theme.media.down('sm')`
    `}
  `}
`;

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

export const DetailBookingButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  margin-top: 30px;
  gap: 24px;

  ${({theme}) => css`
    ${theme.media.down('md')`
      align-self: normal;
      flex-direction: column;
      gap: 10px;
    `}
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

export const FieldRow = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  ${({theme}) => css`
    ${theme.media.down('md')`
      flex-direction: column;
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

export const CancelButton = styled(ButtonBasic)`
  width: auto;
  white-space: nowrap;
  font-size: 24px;
  color: #eb5757;
  border-color: #eb5757;

  &:hover {
    background: rgba(235, 87, 87, 0.3);
  }

  &:active {
    background: #fff;
    color: #eb5757;
  }
`;
