import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 100%;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 40px;
  padding: 0;
  margin-bottom: 10px;
`;

export const PageLayoutTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.size.heading2};
  line-height: 47px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.palette.common.black};
  font-family: ${({ theme }) => theme.font.family.auxiliary};
`;

export const PageLayoutSubtitle = styled.p`
  margin-top: 8px;
  line-height: 26px;
  font-size: ${({ theme }) => theme.font.size.subtitle2};
  color: ${({ theme }) => theme.palette.common.gray};
`;

export const PageLayoutTop = styled.div`
  position: relative;
`;

export const RightActionWrapper = styled.div`
  button {
    position: absolute;
    top: 0;
    right: 0;

    ${(props) => props.theme.media.down('sm')`
      display: none;
    `};
  }
`;
