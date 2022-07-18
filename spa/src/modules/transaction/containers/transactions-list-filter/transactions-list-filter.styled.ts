import styled from 'styled-components';
// components
import Paper from 'modules/core/components/paper';

export const Root = styled(Paper)`
  display: flex;
  align-items: center;
  margin-top: 14px;

  ${(props) => props.theme.media.down('md')`
    flex-direction: column;
  `}
`;

export const FilterFields = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
  column-gap: 30px;
  row-gap: 20px;
  flex: 1;
  align-items: center;

  /* ${(props) => props.theme.media.down('md')`
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  `} */
`;

export const Actions = styled.div`
  padding-left: 40px;
  /* margin-bottom: 10px; */

  ${(props) => props.theme.media.down('md')`
   padding-left: 0;
  `}
`;
