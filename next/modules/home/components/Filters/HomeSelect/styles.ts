import styled, {css} from 'styled-components';

export const Root = styled.div`
  position: relative;
  flex: 1;
`;

export const SelectValue = styled.div<{
  isOpen: boolean;
}>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding: 0 10px;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  text-align: center;
  ${({theme}) => css`
    ${theme.media.down('md')`
      padding: 0 4px;
    `};
  `}
`;

export const SelectValueInfo = styled.div``;

export const Title = styled.p<{active?: boolean}>`
  ${({theme, active}) => css`
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.regular};
    white-space: nowrap;
    color: ${active ? theme.colors.secondary : '#222121'};
  `}
`;

export const PlaceHolder = styled.div`
  ${({theme}) => css`
    font-size: ${theme.font.size.subtitle3};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.default};
  `}
`;

export const OptionsWrapper = styled.div<{isOpen: boolean}>`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 254px;
  max-height: 340px;
  background: #fff;
  transform: scaleY(0);
  transform-origin: top;
  transition: 0.1s;
  z-index: 999;
  border: 3px solid ${props => props.theme.colors.primary};
  border-radius: 16px;
  padding: 16px 0;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    margin: 6px 0;
  }

  ${props =>
    props.isOpen &&
    css`
      transform: scaleY(1);
    `}
`;

export const Option = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  width: 100%;
  padding: 8px 24px;

  font-weight: ${props => props.theme.font.weight.semiBold};

  &:first-child {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 8px;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      right: 0;
      margin: 0 24px;
      border-bottom: 2px solid ${props => props.theme.colors.default};
    }
  }

  &:nth-child(2) {
    margin-top: 18px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.lightBlue};
  }
`;
