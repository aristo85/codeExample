import styled, {css} from 'styled-components';

export const EmptyListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  width: 343px;
  ${props => props.theme.media.down('xxs')`
    width: auto;
  `}
`;

export const LensContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 156px;
  height: 156px;
  border-radius: 50%;
  background: #c6e1f3;
  margin-bottom: 24px;
`;

export const EmptyTitle = styled.h2`
  text-align: center;
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.heading2};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down('xs')`
        font-size: ${theme.font.size.subtitle1};
    `}
  `}
`;

export const EmptySubTitle = styled.h3`
  color: #4f4f4f;
  text-align: center;
  ${({theme}) => css`
    font-size: ${theme.font.size.subtitle1};
    font-weight: ${theme.font.weight.regular};
    ${theme.media.down('xs')`
        font-size: ${theme.font.size.subtitle2};
    `}
  `}
`;
