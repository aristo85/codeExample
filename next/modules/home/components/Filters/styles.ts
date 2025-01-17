import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import styled, {css} from 'styled-components';
import HomeSelect from './HomeSelect';
import HomeNumberInput from './HomeNumberInput';

export const FilterWrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  position: relative;
  margin-bottom: -11px;
  top: -16px;
  ${props => props.theme.media.down('md')`
    margin-bottom: 80px;
  `}
  ${props => props.theme.media.down('sm')`
    margin-bottom: 0;
  `}
`;

export const FilterForm = styled.form<{isDesktop: boolean}>`
  display: flex;
  flex-wrap: wrap;

  border: 3px solid ${({theme}) => theme.colors.primary};
  border-radius: 16px;
  background: #ffffff;
  width: 100%;
  ${({theme, isDesktop}) =>
    isDesktop &&
    css`
      position: absolute;
      top: -51px;
    `}
`;

export const HomeCitySelect = styled(HomeSelect)`
  border-radius: 12px 0 0 12px;
  height: 64px;
  background: ${({theme}) => theme.colors.lightBlue};
  border-right: 3px solid ${({theme}) => theme.colors.primary};
  ${props => props.theme.media.between('md', 'screen1200')`
    max-width: 265px;
  `}
  ${props => props.theme.media.down('md')`
    border-radius: 12px 0 0 0;
  `}

  ${props => props.theme.media.down('sm')`
    border-radius: 12px 12px 0 0;
    flex: 100%;
    border-bottom: 3px solid ${props.theme.colors.primary};
    border-right: 0;
  `}
`;

export const HomeAdultsNumberInput = styled(HomeNumberInput)`
  width: 171px;
`;

export const FilterSelectorContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  gap: 10px;
  min-height: 64px;
  height: 64px;
  border-left: 3px solid ${({theme}) => theme.colors.primary};

  ${props => props.theme.media.between('md', 'screen1200')`
    width: 317px;
  `}
  ${props => props.theme.media.down('md')`
    flex: 66.66%;
    border-top: 3px solid ${({theme}) => theme.colors.primary};
    border-left: 0;
  `}

  ${props => props.theme.media.down('sm')`
    flex: 100%;
  `}

  ${props => props.theme.media.down('xs')`
    height: unset;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 24px;
    gap: 16px;
  `}

  ${props => props.theme.media.down('xxs')`
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 4px;
  `}
`;

export const FilterPeopleSelectWrapper = styled.div`
  min-width: 292px !important;
  width: 292px !important;
`;

export const FilterBTn = styled(ButtonBasic)`
  width: fit-content;
  height: 64px;
  border-radius: 0 12px 12px 0;
  border: 0;
  font-size: ${({theme}) => theme.font.size.subtitle1};

  ${props => props.theme.media.down('md')`
    flex: 33.33%;
    border-radius: 0 0 12px 0;
  `}

  ${props => props.theme.media.down('sm')`
    flex: 100%;
    border-radius: 0 0 12px 12px;
  `}
`;
