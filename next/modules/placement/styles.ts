import styled, {css} from 'styled-components';

export const BookingPage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 44px;
`;

export const BreadcrumbsBlock = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({theme}) => theme.media.down('sm')`
    padding-bottom: 16px;
    ${theme.media.down('xs')`
    `}
  `}
`;

export const PageWrapper = styled.div<{isMain?: boolean}>`
  display: flex;
  gap: ${({isMain}) => (isMain ? '32' : '24')}px;
  flex-direction: row;
  ${({theme}) => theme.media.down('md')`
    ${theme.media.down('sm')`
    `}
  `}
`;

export const PartnerPlacementPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${({theme}) => theme.media.down('md')`
    flex-direction: column;
    ${theme.media.down('sm')`
    `}
  `}
`;

export const PlacementButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MapWrapper = styled.div`
  position: relative;
  height: 600px;
  ${({theme}) => theme.media.down('md')`
      max-height: 600px;
      min-height: 400px;
  `}
`;

export const FilterBlock = styled.div`
  width: 326px;
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-around;
`;

export const BookingMainBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 28px;
`;

export const BookingEmptyBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 300px);
`;

export const BookingAddress = styled.h3`
  ${({theme}) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down('xs')`
        font-size: ${theme.font.size.subtitle2};
    `};
  `}
`;
