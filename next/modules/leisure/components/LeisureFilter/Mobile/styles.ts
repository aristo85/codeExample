import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import styled, {css} from 'styled-components';
import Checkbox from '@/modules/core/components/Checkbox';

export const MobileFilterWrapper = styled.div`
  width: 100%;
  background: #fff;
`;

export const MobileFilterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MobileFilterButton = styled(ButtonBasic)`
  height: 56px;
  font-size: 20px;
`;

export const FilterCheckbox = styled(Checkbox)`
  ${props =>
    props.value
      ? css`
          svg {
            fill: ${props.theme.colors.primary};
          }
        `
      : css`
          svg {
            fill: ${props.theme.colors.secondary};
          }
        `}
  border-radius: 4px;
`;
