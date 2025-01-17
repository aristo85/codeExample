import styled, {css} from 'styled-components';
import ArrowSelectUp from '../icons/ArrowSelectUp';

export const AccordionTitle = styled.h2<{underlined: boolean}>`
  ${({theme, underlined}) => css`
    position: relative;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.subtitle4};
    font-family: ${theme.font.family.gothicDemi};
    &::after {
      cursor: default;
      content: '';
      position: absolute;
      left: 0;
      bottom: -12px;
      width: 100%;
      border-bottom: ${underlined
        ? `2px solid ${theme.colors.primary}`
        : 'none'};
    }

    ${theme.media.down('xs')`
        
    `}
  `};
`;
export const AccordionTitleBlock = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const AccordionBody = styled.div`
  margin-top: 24px;
`;

export const ArrowSelect = styled(ArrowSelectUp)<{isOpen?: boolean}>`
  ${({theme, isOpen}) => css`
    transform: ${isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  `};
`;
