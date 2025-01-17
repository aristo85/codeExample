import styled, {css} from 'styled-components';
import Image from 'next/image';

export const ModalContent = styled.div<{isHorizontalImage: boolean}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 10px), -50%);
  width: calc(100% - 112px);
  height: calc(100% - 130px);
  padding: 32px;

  ${({theme, isHorizontalImage}) => css`
    ${isHorizontalImage &&
    css`
      width: 500px;
    `};
    ${theme.media.down('md')`
      height: ${isHorizontalImage ? '60%' : '40%'};
      width: ${isHorizontalImage ? '60%' : 'calc(100% - 20px)'};
      top: 50%;
      left: 50%;
      transform: translate(calc(-50% - 10px), -50%);
      margin: 0 10px;
      border-radius: 0px;
    `}
    ${theme.media.down('xs')`
      height: ${isHorizontalImage ? '64%' : '30%'};
      width: calc(100% - 20px);
      top: 50%;
      left: 50%;
      transform: translate(calc(-50% - 10px), -50%);
      margin: 0 10px;
      border-radius: 0px;
    `}
  `}
`;

export const GalleryImage = styled(Image)`
  border-radius: 32px;
  background: #ffffff;
`;

interface GalleryButtonProps {
  active?: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  rotate?: string;
  display?: boolean;
}
export const GalleryButton = styled.button<GalleryButtonProps>`
  ${({active, theme}) => `
    background-color: ${active ? theme.colors.primary : 'transparent'};
    border: 2px solid ${active ? theme.colors.primary : theme.colors.secondary};
  `};

  ${({rotate}) => `
    transform: rotate(${rotate});
  `};

  ${({display}) =>
    display === false
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `};

  position: absolute;
  ${({position}) =>
    position &&
    css`
      ${position === 'top-left' &&
      css`
        top: 0;
        left: 0;
      `}

      ${position === 'top-right' &&
      css`
        top: 0;
        right: 0;
      `}

      ${position === 'bottom-left' &&
      css`
        bottom: 0;
        left: 0;
      `}

      ${position === 'bottom-right' &&
      css`
        bottom: 0;
        right: 0;
      `}
    `};
  background: #ffffff;
  border: 2px solid #8daec1;
  border-radius: 16px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin: 32px;
  width: 60px;
  ${({disabled}) =>
    `
    ${
      disabled
        ? `opacity: 0.5;
    cursor: not-allowed;`
        : `opacity: 1;`
    }
  `}
  ${({theme}) => theme.media.down('md')`
    height: 40px;
    width: 40px;
    margin: 20px;
  `}
`;
