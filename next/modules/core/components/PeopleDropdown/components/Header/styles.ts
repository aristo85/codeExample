import styled, {css} from 'styled-components';

export const PeopleHeaderSelectorContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  height: 48px;
  align-items: center;
  border-radius: 16px;
  border: 3px solid var(--main-accent, #1d7abd);
  background: var(--main-white, #fff);
`;

export const PeopleHeaderContent = styled.div`
  ${({theme}) => css`
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 16px;
    justify-content: space-between;
  `};
`;

export const PeopleHeaderTitle = styled.h3`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.default};
    font-family: ${theme.font.family.gothicMedium};
  `};
`;

export const ArrowWrapper = styled.div<{isOpen: boolean}>`
  position: absolute;
  top: 50%;
  right: 0;
  display: block;
  align-items: center;

  transform: translateY(-50%);
  transition: ${props => props.theme.transition.fast};

  ${props =>
    props.isOpen &&
    css`
      transform: translateY(-50%) rotate(180deg);
    `};
`;
