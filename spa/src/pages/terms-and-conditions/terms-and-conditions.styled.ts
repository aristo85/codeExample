import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ProgramParagraph = styled.p`
  margin-bottom: 30px;
  min-width: 100%;
  font-family: ${({ theme }) => theme.font.family.auxiliary};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.body2};
  color: ${({ theme }) => theme.palette.common.black};
  margin-left: 0;
`;

export const ProgramList = styled.ul`
  margin-left: 0;
  min-width: 100%;
  list-style-type: disc;
`;

export const ProgramListItem = styled.li`
  margin-bottom: 30px;
  margin-left: 0;
  margin-left: 40px;
  font-family: ${({ theme }) => theme.font.family.auxiliary};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.body2};
  color: ${({ theme }) => theme.palette.common.black};

  ul {
    margin-top: 30px;
    min-width: 100%;
    list-style-type: disc;
  }

  ul li {
    margin-bottom: 5px;
  }

  ul p {
    margin-left: 0;
  }
`;
export const ProgramTitle = styled.h3`
  margin-bottom: 30px;
  font-family: ${({ theme }) => theme.font.family.auxiliary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.body2};
  color: ${({ theme }) => theme.palette.common.black};
`;

export const ProgramListItemLink = styled.a``;
