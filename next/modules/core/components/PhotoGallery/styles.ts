import Image from 'next/image';
import styled, {css} from 'styled-components';

const templateArea3Items = css`
  grid-template-areas:
    'main main'
    'second third';
  grid-template-columns: 1fr 1fr;
`;

const templateArea4Items = css`
  grid-template-areas:
    'main main main'
    'second third fourth';
  grid-template-columns: 1fr 1fr 1fr;
`;

export const GridContainer = styled.div<{
  length: number;
  isOptionsType?: boolean;
}>`
  width: 100%;
  display: grid;
  grid-gap: 10px;

  ${({theme, isOptionsType}) => css`
    max-width: ${isOptionsType ? '560' : '848'}px;
    grid-template-columns: ${isOptionsType ? 'repeat(4, 1fr)' : '39% 1fr 1fr'};
    ${theme.media.down('md')`
        max-width: ${isOptionsType ? '436' : '612'}px;
    `}
    ${theme.media.down('sm')`
        max-width: 100%;
    `}
  `}

  ${({length, theme, isOptionsType}) => {
    if (isOptionsType) {
      return css`
        grid-template-areas:
          'main main main main'
          'second third fourth fifth';
        ${theme.media.between('sm', 'md')`
          ${templateArea4Items}
        `}
        ${theme.media.down('xs')`
          ${templateArea4Items}
        `}
        ${theme.media.down('xxs')`
          ${templateArea3Items}
        `}
      `;
    } else {
      switch (length) {
        case 1:
        case 2:
        case 3:
          return templateArea3Items;
        case 4:
          return css`
            ${templateArea4Items}
            ${theme.media.down('md')`
                ${templateArea3Items}
              `}
          `;
        case 5:
          return css`
            grid-template-areas:
              'second main main'
              'third main main'
              'fourth fifth fifth';
            ${theme.media.down('md')`
                ${templateArea3Items}
              `}
          `;
        default:
          return css`
            grid-template-areas:
              'second main main'
              'third main main'
              'fourth fifth sixth';
            ${theme.media.down('md')`
                ${templateArea3Items}
              `}
          `;
      }
    }
  }};
`;

const ImageContainer = styled.div<{isOptionsType?: boolean}>`
  position: relative;
  cursor: pointer;
  height: 188px;
  ${({theme, isOptionsType}) => {
    return isOptionsType
      ? css`
          height: 80px;
        `
      : css`
          ${theme.media.down('md')`
            height: 164px;
          `}
          ${theme.media.down('xs')`
            height: 156px;
          `}
        `;
  }}
`;

export const MainImageContainer = styled(ImageContainer)<{
  isOptionsType?: boolean;
}>`
  grid-area: main;
  ${({theme, isOptionsType}) => css`
    height: ${isOptionsType ? '248' : '392'}px;
    ${theme.media.down('xs')`
        height: ${isOptionsType ? '164' : '156'}px;
    `}
  `}
`;

export const SecondImageContainer = styled(ImageContainer)`
  grid-area: second;
`;

export const ThirdImageContainer = styled(ImageContainer)`
  grid-area: third;
`;

export const FourthImageContainer = styled(ImageContainer)`
  grid-area: fourth;
`;

export const FifthImageContainer = styled(ImageContainer)`
  grid-area: fifth;
`;

export const SixthImageContainer = styled(ImageContainer)`
  grid-area: sixth;
`;

export const StyledImage = styled(Image)<{
  $isSeeMore: boolean;
  $isOptionsType?: boolean;
  $mainImage?: boolean;
}>`
  border-radius: ${({$isOptionsType, $mainImage}) =>
    $isOptionsType && !$mainImage ? '16' : '30'}px;
  ${props => props.$isSeeMore && 'filter: brightness(50%);'}
`;

export const SeeAllImagesText = styled.h2`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
  cursor: pointer;
  ${({theme}) => `
    color: ${theme.colors.white};
    font-size: ${theme.font.size.subtitle1};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicDemi};
  `};
`;

export const NoImagesLengthBlock = styled.div<{
  cursor: 'pointer' | 'not-allowed';
}>`
  ${({theme, cursor}) => css`
    cursor: ${cursor};
    height: 248px;
    width: 100%;
    display: flex;
    flex-direction: column;

    ${theme.media.down('sm')`
        height: 200px;
    `}

    ${theme.media.down('xs')`
        height: 156px;
    `}
  `}
`;

export const DefaultIconContainer = styled.div`
  ${({theme}) => css`
    height: 100%;
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    border: 2px solid ${theme.colors.primary};
    border-radius: 32px;
    ${theme.media.down('sm')`
      border: none;
    `};
  `}
`;

export const NoImageDefaultText = styled.h3`
  ${({theme}) => `
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body1};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
  `};
`;
