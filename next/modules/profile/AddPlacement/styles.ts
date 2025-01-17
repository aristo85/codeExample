import styled, {css} from 'styled-components';

export const PlacementContainer = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: 32px;
    ${theme.media.down('sm')`
      margin-bottom: 32px;
      align-items:center;
      text-align: center;
    `}
  `}
`;

export const TextInformationContainer = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
  `}
`;

export const PlacementTitle = styled.h2`
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicMedium};
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle1};
    margin-bottom: 16px;

    ${theme.media.down('sm')`
      font-size: ${theme.font.size.subtitle2};
    `}
  `}
`;

export const PlacementSubTitle = styled.h5`
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicMedium};
    color: ${theme.colors.black};
    font-size: ${theme.font.size.subtitle4};

    ${theme.media.down('sm')`
      font-size: ${theme.font.size.subtitle5};
    `}
  `}
`;

export const PlacementCardBlock = styled.div`
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicMedium};
    color: ${theme.colors.primary};
    font-size: ${theme.font.size.body2};
    display: flex;
    flex-direction: row;
    gap: 16px;
    flex-wrap: wrap;

    ${theme.media.down('sm')`
      justify-content: center;
    `}
  `}
`;

export const PlacementTypeApiContainer = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    gap: 32px;
    ${theme.media.down('sm')`
      flex-direction: column;
    `}
  `}
`;

export const PlacementApiTypeOption = styled.div<{active: boolean}>`
  ${({theme, active}) => css`
    background: ${active ? '#1D7ABD' : '#FFFFFFF'};
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-radius: 16px;
    cursor: pointer;
    border: 1px solid #1d7abd;
  `}
`;

export const PlacementApiTypeName = styled.h4<{active: boolean}>`
  ${({theme, active}) => css`
    font-family: ${theme.font.family.gothicDemi};
    color: ${active ? theme.colors.white : theme.colors.primary};
    font-size: 26px;
    text-align: center;
  `}
`;
