import styled, { css } from 'styled-components';

export const Actions = styled.div`
  display: flex;
`;

export const Action = styled.button<{ isActive?: boolean }>`
  background-color: transparent;
  border: none;
  width: fit-content;
  margin-left: 10px;
  text-decoration: underline;
  color: ${(props) => props.theme.palette.common.gray};
  white-space: nowrap;

  ${(props) =>
    props.isActive &&
    css`
      color: ${props.theme.palette.common.primary};
    `};

  ${({ theme }) => css`
    font-family: ${theme.font.family.main};
    font-size: ${theme.font.size.body1};
  `};
`;

export const AdditionalTopLine = styled.div`
  display: flex;
  justify-content: space-between;

  ${(props) => props.theme.media.down('md')`
    flex-direction: column;

  `}
`;

export const HistoryFilterContainer = styled.div`
  max-width: 100%;
  margin-top: 6px;
  padding-left: 0;
  overflow-x: scroll;

  ${(props) => props.theme.media.down('xl')`
    margin-bottom: 0;
    margin-left: 0;
    padding-right: 0;
    justify-content: center;

  `}
`;

export const AdditionalLinks = styled.div`
  display: flex;
  align-items: center;

  ${(props) => props.theme.media.down('md')`
    margin-top: 15px;
  `}
`;
