import styled, {css} from 'styled-components';
import InputSelect from '@/modules/core/components/inputs/Select';

export const DropdownMenuContainer = styled.div<{isMobile: boolean}>`
  ${({theme, isMobile}) => css`
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

    ${isMobile
      ? css`
          bottom: 0;
          left: 0;
          margin: 8px;
          width: calc(100% - 16px);
          position: fixed;
        `
      : css`
          top: 64px;
        `}
  `};
`;

export const CountersBlock = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  `};
`;

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const CounterField = styled.h3`
  ${({theme}) => css`
    font-size: ${theme.font.size.body3};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.default};
    font-family: ${theme.font.family.gothicMedium};
  `};
`;

export const CounterBlock = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    border: 3px solid ${theme.colors.primary};
    height: 42px;
    width: 126px;
    padding: 11px 6px;
  `};
`;

export const CounterButton = styled.button`
  border-radius: 50%;
  align-items: center;
  display: flex;
  padding: 6px;
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
  &:disabled {
    border: none;
    cursor: not-allowed;
    background: none;

    &:hover {
      background: none;
    }
  }
  &:active,
  &:hover {
    background: ${props => props.theme.colors.lightDefault};
  }
`;

export const CounterNumber = styled.span`
  ${({theme}) => css`
    font-size: ${theme.font.size.body3};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.default};
    font-family: ${theme.font.family.gothicMedium};
  `};
`;

export const ChildAgesSelect = styled(InputSelect)`
  flex: 1;
  min-width: 108px;

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
  gap: 14px;
  width: 100%;
`;
