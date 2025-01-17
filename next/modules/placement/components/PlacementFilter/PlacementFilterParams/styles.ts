import styled, {css} from 'styled-components';
import Checkbox from '@/modules/core/components/Checkbox';

export const FilterParamsWrapper = styled.div<{
  isCollapsed?: boolean;
  $isTablet?: boolean;
}>`
  width: 100%;
  border-radius: 24px;
  margin-bottom: 2rem;
  ${({theme, isCollapsed, $isTablet}) => {
    const isBorder = !isCollapsed || $isTablet;
    return css`
      padding: ${isCollapsed ? 0 : '16px 0'};
      border: ${isCollapsed ? 0 : '1px solid #bdbdbd'};
      color: ${theme.colors.default};

      ${theme.media.down('md')`
      padding: ${!isBorder ? 0 : '16px'};
      border: ${!isBorder ? 0 : '1px solid #bdbdbd'};
      `}
      ${theme.media.down('xs')`
      padding: 0 5px;
      `}
    `;
  }}
`;

export const FilterParamsTitle = styled.div`
  font-size: 24px;
  border-bottom: 1px solid #bdbdbd;
  padding: 0 16px;
  padding-bottom: 16px;
`;

export const FilterParamsTitleButton = styled.a`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  font-size: 20px;
  padding: 6px 0;
`;

export const ArrowWrapper = styled.div<{isOpen: boolean}>`
  transition: ${props => props.theme.transition.fast};

  ${props =>
    props.isOpen &&
    css`
      transform: rotate(180deg);
    `};
`;

export const FilterParamsItemsContainer = styled.div<{isCollapsed?: boolean}>`
  display: flex;
  flex-direction: column;
  gap: ${props => (props.isCollapsed ? 0 : '16px')};
  padding: ${props => (props.isCollapsed ? 0 : '0 16px 0 20px')};
  padding-top: ${props => (props.isCollapsed ? '8px' : '24px')};
  ${props => props.theme.media.up('md')`
    overflow-y: auto;
    max-height: 320px;
  `}
`;

export const FilterParamsItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  ${props => props.theme.media.down('md')`
    padding: 8px 0;
  `}
`;

export const FilterParamsCheckboxContainer = styled.div``;

export const FilterParamsCheckboxSubtitle = styled.p`
  color: #4f4f4f;
  font-family: ${({theme}) => theme.font.family.gothicBook};
  padding-left: 30px;
`;

export const FilterParamsCount = styled.p`
  line-height: 24px;
  color: #4f4f4f;
  font-family: ${({theme}) => theme.font.family.gothicBook};
`;

export const FilterParamsCheckbox = styled(Checkbox)<{isCollapsed?: boolean}>`
  .Mui-checked {
    border-radius: 0px;
    background: #fff;
    border-radius: 4px;
  }

  ${props =>
    props.value
      ? css`
          input {
            background: #fff;
          }
          svg {
            fill: ${props.theme.colors.primary};
            width: 26px;
            height: 26px;
          }
        `
      : css`
          svg {
            fill: #fff;
            background: white;
            border: ${props.isCollapsed ? '0' : '2px solid #8daec1'};
            width: 20px;
            height: 20px;
            border-radius: 4px;
          }

          ${props => props.theme.media.down('md')`
            svg {
              border: 2px solid #8daec1;
            }
          `}
        `}
`;

export const Divider = styled.div`
  height: 1px;
  background: #bdbdbd;
  margin: 10px -16px 0 -16px;
`;
