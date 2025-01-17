import styled, {css} from 'styled-components';

export const AmenitiesContainer = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: 16px;

    ${theme.media.down('xs')`
      max-height: 100%;
      font-weight: 400;
      font-size: ${theme.font.size.subtitle1};
    `}
  `}
`;

export const CategoryName = styled.h2`
  ${({theme}) => css`
    padding: 20px 0 0;
    font-size: ${theme.font.size.body1};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.default};

    ${theme.media.down('xs')`
      
    `}
  `}
`;

export const AmenityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${({theme}) => css`
    ${theme.media.down('xs')`
      
    `}
  `}
`;

export const AmenityTxt = styled.div`
  font-size: 16px;
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicBook};

    ${theme.media.down('xs')`
    `}
  `}
  &:first-letter {
    text-transform: capitalize;
  }
`;

export const AmenityBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AmenitiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const AmenitiesGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DetailDescription = styled.p`
  color: #222121;
  font-size: 16px;
`;

export const DetailLabel = styled.h3`
  color: #222121;
  font-size: 18px;
`;
