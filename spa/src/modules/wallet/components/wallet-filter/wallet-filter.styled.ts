import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 40px;

  ${(props) => props.theme.media.down('sm')`
    position: absolute;
    top: -70px;
    right: 0;
    margin-bottom: 0;
  `}
`;

export const OptionsTabs = styled.div`
  /* margin-left: 30px; */
  margin-left: auto;
`;
