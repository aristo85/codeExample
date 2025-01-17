import styled, {css} from 'styled-components';
import {MapContainer, Popup} from 'react-leaflet';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ContainerWithError = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
`;

export const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  position: absolute;
`;

export const StyledPopup = styled(Popup)`
  .leaflet-popup-content-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    border: 2px solid #d9dbe9;
    box-sizing: border-box;
    align-items: center;
  }

  .leaflet-popup-content {
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin: 0;
    padding: 16px;
    width: 100%;
    align-items: center;
    ${({theme}) => theme.media.down('xs')`
      padding: 8px;
  `}
  }

  .leaflet-popup-tip-container {
    display: none;
  }
`;

export const PopupImage = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 32px;
  ${({theme}) => theme.media.down('xs')`
      width: 60px;
      height: 60px;
      border-radius: 20px;
  `}
`;

export const PopupTitle = styled.a`
  ${({theme}) => css`
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.subtitle1};
    color: ${theme.colors.primary};

    ${theme.media.down('xs')`
      font-size: ${theme.font.size.body2};
    `}
  `}
  cursor: pointer;
  display: flex;
  align-items: flex-end;
`;

export const PopupSubtitle = styled.h3`
  ${({theme}) => css`
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.body3};
    color: ${theme.colors.primary};

    ${theme.media.down('xs')`
      font-size: ${theme.font.size.auxiliary1};
    `}
  `}
  display: flex;
  align-items: flex-end;
`;

export const PopupContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const MapError = styled.h3`
  ${({theme}) => css`
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.subtitle2};
    color: red;
  `}
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  ${({theme}) => css`
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.semiBold};
  `}
`;

export const MapInfo = styled.p`
  color: #8daec1;
  font-size: 16px;
  line-height: 22px;
  margin: -10px 0px;
`;
