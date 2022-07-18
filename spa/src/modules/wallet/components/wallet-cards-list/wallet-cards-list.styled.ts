import styled from 'styled-components';

export const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 30px;
  row-gap: 30px;

  ${(props) => props.theme.media.down('xs')`
    grid-template-columns: repeat(1, 1fr);
  `};
`;
