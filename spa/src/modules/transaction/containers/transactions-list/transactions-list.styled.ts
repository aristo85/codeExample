import styled from 'styled-components';
// components
import Paper from 'modules/core/components/paper';

export const Root = styled(Paper)`
  margin-top: 15px;

  /* ${(props) => props.theme.media.down('xl')`
   overflow-x: scroll;
  `} */
`;

export const Debit = styled.span`
  color: ${(props) => props.theme.palette.common.red};
`;

export const Credit = styled.span`
  color: ${(props) => props.theme.palette.common.green};
`;

export const Fee = styled.span`
  color: ${(props) => props.theme.palette.common.red};
`;
