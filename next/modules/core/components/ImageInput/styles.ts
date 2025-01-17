import styled, {css} from 'styled-components';
import Image from 'next/image';
import {Color, Shape} from '@/modules/core/components/ImageInput/types';

export const InputButtonWrapper = styled.div<{
  isScreenXs: boolean;
  isFullHeight: boolean;
}>(({theme, isScreenXs, isFullHeight}) => {
  const baseFlex = isScreenXs
    ? css`
        flex-direction: column-reverse;
      `
    : css`
        flex-direction: row;
      `;

  return css`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    ${isFullHeight && 'height: 100%;'}
    ${baseFlex};
  `;
});
export const InputButtonContainer = styled.label<{
  shape: Shape;
  color: Color;
  isScreenXs: boolean;
  disabled: boolean;
  isFullHeight: boolean;
}>(({theme, shape, color, isScreenXs, disabled, isFullHeight}) => {
  const baseFlex =
    isScreenXs && shape !== Shape.CIRCLE
      ? css`
          flex-direction: row;
          gap: 10px;
        `
      : css`
          flex-direction: column;
          gap: 12px;
        `;

  let specificCss;

  if (shape === Shape.RECTANGLE) {
    specificCss = css`
      ${baseFlex};
      width: ${isScreenXs ? '100%' : '216px'};
      ${!isScreenXs && !isFullHeight && 'height: 121px;'};
      ${isScreenXs && 'font-size: 20px;'};
      border-radius: 16px;
    `;
  }

  if (shape === Shape.CIRCLE) {
    specificCss = css`
      ${baseFlex};
      width: 182px;
      height: 182px;
      border-radius: 100px;
    `;
  }

  let colorCss;

  if (color === Color.PRIMARY) {
    colorCss = css`
      background-color: ${theme.colors.primary};
      color: #ffffff;
    `;
  }

  if (color === Color.WHITE) {
    colorCss = css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    `;
  }

  const stateCss = disabled
    ? css`
        background-color: rgba(34, 33, 33, 0.16);
        color: rgba(34, 33, 33, 0.32);
        border: 2px solid rgba(34, 33, 33, 0.16);
      `
    : css`
        ${colorCss};
        border: 2px solid #1d7abd;
      `;

  return css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 16px;
    text-align: center;
    font-size: 16px;
    line-height: 22px;

    & input {
      display: none;
    }

    ${specificCss};
    ${stateCss};
  `;
});

export const ImagePreview = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  margin: 5px;
  border-radius: 100px;
  border: 2px solid #1d7abd;
  object-fit: cover;
`;

export const ImageRectanglePreviewWrapper = styled.div<{
  $isScreenXs: boolean;
  isFullHeight?: boolean;
}>(({$isScreenXs, isFullHeight}) => {
  const baseSize = $isScreenXs
    ? css`
        width: inherit;
        height: 121px;
      `
    : css`
        width: 216px;
        ${!isFullHeight && 'height: 121px;'}
      `;
  return css`
    position: relative;
    ${baseSize};
  `;
});

export const ImageCirclePreviewRemove = styled.div`
  position: absolute;
  right: 0;
  z-index: 2;
`;

export const ImageRectanglePreviewRemove = styled.div`
  position: absolute;
  right: 11.2px;
  top: 12px;
  z-index: 2;
`;

export const ImagePreviewButton = styled.button<{small?: boolean}>(
  ({small}) => {
    const sizeCss = small
      ? css`
          width: 24px;
          height: 24px;
          padding: 4px;
        `
      : css`
          width: 32px;
          height: 32px;
          padding: 8px;
        `;
    return css`
      ${sizeCss};
      border: none;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 21.333px;
      background: rgba(0, 0, 0, 0.72);
    `;
  },
);

export const ImageRectanglePreviewMainImage = styled.div`
  position: absolute;
  left: 16px;
  top: 16px;
  z-index: 2;
`;

export const ImageRectanglePreview = styled(Image)<{$isScreenXs: boolean}>(
  ({$isScreenXs}) => {
    const baseSize = $isScreenXs
      ? css`
          width: 100%;
          height: 121px !important;
        `
      : css`
          width: 216px;
          height: 121px;
        `;
    return css`
      ${baseSize};
      border-radius: 16px;
      object-fit: cover;
    `;
  },
);

export const EditExistedPicture = styled.label`
  ${({theme}) => css`
    font-size: ${theme.font.size.body2};
    font-family: ${theme.font.family.gothicMedium};
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.regular};
    cursor: pointer;
    text-align: center;
    display: inline-flex;

    & input {
      display: none;
    }
  `}
`;

export const ImageInputBlock = styled.div`
  position: relative;
  display: inline-flex;
  width: fit-content;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
