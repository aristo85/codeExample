import styled, {css} from 'styled-components';

export const PeopleSelectorContainer = styled.div`
  ${({theme}) => css`
    position: relative;
    flex: 1;

    ${theme.media.down('xs')`
      width: 100%;
    `}
  `};
`;
