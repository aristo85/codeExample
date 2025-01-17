import styled, {css} from 'styled-components';

export const HomeNumberInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HomeNumberInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  border-radius: 4px;
  border: 1px solid ${({theme}) => theme.colors.default};
`;

export const HomeNumberInputButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeNumberInputButton = styled.button<{disabled: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  padding: 4px 5px;
  border: 0;
  cursor: ${({disabled}) => `${disabled ? 'not-allowed' : 'pointer'}`};
  border-right: 1px solid ${({theme}) => theme.colors.default};

  &:first-child {
    border-bottom: 1px solid ${({theme}) => theme.colors.default};
  }
`;

export const HomeNumberInputValue = styled.div`
  ${({theme}) => css`
    padding: 0 8px;
    font-family: ${theme.font.family.gothicMedium};
    font-size: ${theme.font.size.subtitle2};
  `}
`;
