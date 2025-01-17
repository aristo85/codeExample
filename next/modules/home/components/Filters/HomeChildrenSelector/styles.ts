import InputSelect from '@/modules/core/components/inputs/Select';
import styled, {css} from 'styled-components';

export const HomeChildrenSelectorWrapper = styled.div`
  position: relative;
  width: 158px;
`;

export const HomeChildrenNumberInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HomeChildrenNumberInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  border-radius: 4px;
  border: 1px solid ${({theme}) => theme.colors.default};
`;

export const HomeChildrenNumberInputButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeChildrenNumberInputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  cursor: pointer;
  padding: 4px 5px;
  border: 0;
  border-right: 1px solid ${({theme}) => theme.colors.default};

  &:first-child {
    border-bottom: 1px solid ${({theme}) => theme.colors.default};
  }
`;

export const HomeChildrenNumberInputValue = styled.div`
  ${({theme}) => css`
    padding: 0 8px;
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.subtitle2};
  `}
`;

export const DropdownMenuContainer = styled.div<{
  isMobile: boolean;
  isHomePage?: boolean;
}>`
  ${({theme, isMobile, isHomePage}) => css`
    margin: 0;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border-radius: 16px;
    border: 3px solid ${theme.colors.primary};
    background: #fff;
    transition: ${theme.transition.fast};
    z-index: 2;

    ${isHomePage &&
    css`
      width: 210px;
      right: 0;
    `}

    ${isMobile
      ? css`
          bottom: 0;
          left: 0;
          margin: 8px;
          width: calc(100% - 16px);
          position: fixed;
        `
      : css`
          top: 46px;
          ${theme.media.down('xs')`
            top: 40px;
          `}
        `}
  `};
`;

export const ChildAgesSelect = styled(InputSelect)`
  flex: 1;
  min-width: 100px;

  & .selector {
    height: 40px !important;
  }
  & .optionsMenu {
    height: 160px;
    overflow: scroll;
    z-index: 10;
  }
`;

export const ChildAgesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
`;
