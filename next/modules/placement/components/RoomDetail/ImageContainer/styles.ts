import styled, {css} from 'styled-components';
import Image from 'next/image';

export const RoomNameTitle = styled.h2`
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body1};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
    ${theme.media.down('md')`
    `};
  `}
`;

export const ImageContentBlock = styled.div<{
  cursor: 'pointer' | 'not-allowed';
}>`
  ${({theme, cursor}) => css`
    cursor: ${cursor};
    height: auto;
    width: 216px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    ${theme.media.down('md')`
    `};
  `}
`;
export const ImageBlock = styled.div`
  ${({theme}) => css`
    position: relative;
    height: 119px;
    width: 216px;
    ${theme.media.down('md')`
      
    `};
  `}
`;

export const DefaultIconContainer = styled.div`
  ${({theme}) => css`
    height: 119px;
    width: 216px;
    justify-content: center;
    display: flex;
    align-items: center;
    border: 2px solid ${theme.colors.primary};
    border-radius: 32px;
    ${theme.media.down('md')`
      
    `};
  `}
`;

export const ViewAllImagesTitle = styled.h2`
  ${({theme}) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down('md')`
    `};
  `}
`;

export const ImageContainer = styled.div`
  ${({theme}) => css`
    display: flex;
    grid-column: 1;
    flex-direction: column;
    gap: 16px;
    width: 216px;
    ${theme.media.down('md')`
     
    `};
  `}
`;

export const RoomImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 32px;
`;
