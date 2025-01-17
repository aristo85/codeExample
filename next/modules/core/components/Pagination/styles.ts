import styled from 'styled-components';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import RewindIcon from '@/modules/core/components/icons/RewindIcon';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
`;

interface PaginationButtonProps {
  active?: boolean;
}

export const PaginationButton = styled.button<PaginationButtonProps>`
  background: #ffffff;
  border: 2px solid #8daec1;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;

  ${({active, theme}) =>
    active
      ? `
        background-color: ${theme.colors.primary};
        border: 2px solid ${theme.colors.primary};
        color: ${theme.colors.white};
      `
      : `
        background-color: transparent;
        border: 2px solid ${theme.colors.secondary};
      `};

  ${({disabled}) =>
    disabled
      ? `
        opacity: 0.5;
        cursor: not-allowed;
      `
      : `
        opacity: 1;
      `};

  ${({theme}) =>
    theme.media.down('md')`
      height: 36px;
      width: 36px;
    `};
`;

export const ButtonsPaginationBlock = styled.div`
  display: flex;
  gap: 4px;
`;

interface StyledArrowProps {
  disabled?: boolean;
}

export const StyledArrowLeftIcon = styled(ArrowLeftIcon)<StyledArrowProps>`
  color: ${({theme}) => theme.colors.primary};
  font-size: 36px;
  margin-right: 4px;
`;

export const RewindRightIcon = styled(RewindIcon)`
  font-size: 36px;
`;
export const RewindLeftIcon = styled(RewindIcon)`
  transform: rotate(180deg);
  font-size: 36px;
`;

export const StyledArrowRightIcon = styled(ArrowRightIcon)<StyledArrowProps>`
  color: ${({theme}) => theme.colors.primary};
  font-size: 36px;
`;

export const PaginationItemsBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;
