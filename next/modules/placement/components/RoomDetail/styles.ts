import styled, {css} from 'styled-components';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';

export const RoomDetailWrapper = styled.div`
  ${({theme}) => css`
    ${theme.media.down('md')`
      display: flex;
      flex-direction: column;
      gap: 20px;
    `};
  `}
`;

export const InformationDetail = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;

    ${theme.media.down('md')`
      flex-direction: column;
    `};
  `}
`;

export const InfoTitle = styled.h3`
  display: flex;
  flex-direction: row;
  gap: 4px;
  span {
    white-space: normal;
  }
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body1};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
  `}
`;

export const CancellationText = styled.p`
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
  `}
`;

export const FreePriceText = styled(CancellationText)`
  white-space: nowrap;
`;

export const ServiceText = styled.h3`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 10px;

  ${({theme}) => css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body1};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
  `}
`;

export const DateBlock = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    gap: 24px;
    ${theme.media.down('md')`
      flex-direction: column;
      gap: 12px;
    `};
  `}
`;

export const SubTitle = styled.span`
  ${({theme}) => `
    color: ${theme.colors.primary};
  `}
`;

export const ButtonPriceContainer = styled.div`
  ${({theme}) => css`
    position: relative;
    display: flex;
    gap: 24px;
    height: 64px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: flex-end;

    ${theme.media.down('md')`
    margin-top: 10px;
      flex-direction: column;
      height: auto;
      gap: 16px;
    `};

    ${theme.media.down('sm')`
      margin-top: 10px;
      flex-direction: column;
      height: auto;
      gap: 16px;
      align-items: flex-start;
      align-self: flex-start;
      width: 100%;
    `};
  `}
`;

export const ButtonContent = styled.div`
  ${({theme}) => css`
    text-align: end;

    ${theme.media.down('xs')`
      text-align: start;
    `};
  `}
`;

export const Price = styled.h2`
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle1};
    white-space: nowrap;

    ${theme.media.down('md')`
      align-self: start;
    `};
  `}
`;

export const MainInformation = styled.div`
  grid-column: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({theme}) => theme.media.down('md')`
    padding: 24px;
  `}
`;

export const BookingButton = styled(ButtonBasic)`
  display: block;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  cursor: pointer;
  width: 168px;
  align-self: flex-end;
  ${({theme}) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.size.subtitle2};
    font-family: ${theme.font.family.gothicDemi};
  `};
  ${({theme}) => theme.media.down('xs')`
    width: 100%;
  `}
`;

export const BottomInformationBlock = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({theme}) => theme.media.down('md')`
  `}
  ${({theme}) => `
    `};
`;

export const RoomImageLeftContainer = styled.div`
  grid-column: 1;
`;

export const ServiceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
