import styled, {css} from 'styled-components';
import Link from 'next/link';

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  list-style-type: none;
  align-items: center;
  flex-wrap: wrap;

  ${({theme}) => theme.media.down('xs')`
     align-items: center;
  `}
`;

export const ListItem = styled.li`
  display: flex;
  gap: 8px;
`;

export const BreadcrumbLabel = styled.span`
  ${({theme}) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight};
    font-size: ${theme.font.size.subtitle1};
    ${theme.media.down('xs')`
      font-size: ${theme.font.size.body2}
    `};
  `}
`;

export const BreadcrumbCurrentPath = styled.span`
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-weight: ${theme.font.weight};
    font-size: ${theme.font.size.subtitle1};
    max-width: 26vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${theme.media.down('md')`
      max-width: 34vw;
    `}

    ${theme.media.down('xs')`
      font-size: ${theme.font.size.body2}
    `}
  `}
`;

export const BreadcrumbLink = styled(Link)`
  ${({theme}) => css`
    max-width: 26vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${theme.media.down('md')`
      max-width: 34vw;
    `}

    ${theme.media.down('xs')`
      font-size: ${theme.font.size.body2}
    `}
  `}
`;
