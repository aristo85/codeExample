import styled, {css} from 'styled-components';

export const MobileButtonStyle = styled.button<{isActive: boolean}>`
  ${({isActive}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: transparent;
    width: 48px;
    height: 40px;
    border: 2px solid ${isActive ? '#1D7ABD' : '#22212152'};
    border-radius: 16px;
  `}
`;
