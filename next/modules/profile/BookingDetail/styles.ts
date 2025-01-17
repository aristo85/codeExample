import styled, {css} from 'styled-components';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import CopyIcon from '@/modules/core/components/icons/Copy';

export const BreadcrumbsBlock = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({theme}) => theme.media.down('sm')`
    padding: 0;
    ${theme.media.down('xs')`
      padding: 0px;
  `}
  `}
`;

export const DetailBookingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({theme}) => theme.media.down('md')`
    flex-direction: column;
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
  gap: 20px;
  margin-top: 30px;

  ${({theme}) => css`
    ${theme.media.down('md')`
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
    ${theme.media.down('md')`
      flex-direction: column;
      gap: 10px;
    `}
  `}

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
  padding-top: 32px;
  padding-bottom: 32px;

  ${({theme}) => css`
    ${theme.media.down('md')`
      align-items: flex-start;
      flex-direction: column;
    `}
  `}
`;

export const FieldTitle = styled.h2`
  margin: 32px 0 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  color: #222121;

  ${({theme}) => css`
    ${theme.media.down('md')`
    margin: 16px 0 0;
    font-size: 20px;
    line-height: 28px;
    `}
  `}
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  ${({theme}) => css`
    ${theme.media.down('md')`
    gap: 4px;
    width: 90%;
    `}
  `}
`;

export const FieldHeader = styled.h6`
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  color: #222121;

  ${({theme}) => css`
    ${theme.media.down('md')`
    font-size: 20px;
    line-height: 28px;
    `}
  `}
`;

export const FieldValue = styled.p<{$blue?: boolean}>`
  font-size: 20px;
  line-height: 23px;
  color: ${({$blue}) => ($blue ? '#1D7ABD' : '#4f4f4f')};

  ${({theme}) => css`
    ${theme.media.down('md')`
    font-size: 16px;
    line-height: 22px;
    `}
  `}
`;

export const Divider = styled.div`
  height: 2px;
  background: #8daec1;
`;

export const RoomImage = styled.img`
  max-width: 300px;
  border-radius: 32px;
  ${({theme}) => theme.media.down('xs')`
      max-width: 275px;
      border-radius: 20px;
  `}
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

export const ButtonAndStatusBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
  ${({theme}) => theme.media.down('xs')`
      align-items:center;
  `}
`;

export const DetailPageMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding-bottom: 16px;
`;

export const FieldSectionMobile = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const FieldMobileRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 24px;
  line-height: 32px;
`;

export const BookingNumber = styled.p`
  font-size: 16px;
  font-style: normal;
  line-height: normal;
`;

export const CopyToCBIcon = styled(CopyIcon)`
  cursor: pointer;
`;

export const FieldService = styled.p`
  font-size: 20px;
  line-height: 23px;
  color: #222121;
`;
