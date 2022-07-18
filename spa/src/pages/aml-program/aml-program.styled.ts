import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ProgramParagraph = styled.p`
  width: 100%;
  margin-bottom: 30px;
  font-family: ${({ theme }) => theme.font.family.auxiliary};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.body2};
  color: ${({ theme }) => theme.palette.common.black};
`;
export const ProgramList = styled.ul``;
export const ProgramListItem = styled.li`
  margin-bottom: 30px;
  font-family: ${({ theme }) => theme.font.family.auxiliary};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.body2};
  color: ${({ theme }) => theme.palette.common.black};
  ul {
    margin-top: 30px;
  }
  ul li {
    margin-bottom: 5px;
  }
`;
export const ProgramTitle = styled.h3`
  width: 100%;
  margin-bottom: 30px;
  font-family: ${({ theme }) => theme.font.family.auxiliary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.body2};
  color: ${({ theme }) => theme.palette.common.black};
`;
export const ProgramListItemLink = styled.a``;
