import styled, {css} from 'styled-components';

export const MenuWithIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1180px;
  width: 100%;
  padding: 20px 0 5px 0;

  &::-webkit-scrollbar {
    display: none;
  }

  ${({theme}) => theme.media.down('md')`
      max-width: unset;
      gap: 4px;
      padding: 8px 0;
  `}

  ${({theme}) => theme.media.down('xs')`
  `}
  ${({theme}) => theme.media.down('xxs')`
  
  `}
`;

export const IconTitle = styled.h3`
  ${({theme}) => css`
    font-size: 24px;
    font-family: ${theme.font.family.gothicMedium};
    margin-bottom: 24px;
    font-weight: 400;
    ${({theme}) => theme.media.down('sm')`
    margin-bottom: 0px;
    width: inherit;
    gap: 0;
    padding: 0;
    font-size: 14px;
    
    &:after {
      padding-top:10px;
      width: 60px;
    };
  `}

    ${({theme}) => theme.media.down('xs')`
    &:first-child{
        margin-left:-10px;
    }
    font-size: 12px;
    font-weight: 400;
  `}

  ${({theme}) => theme.media.down('xxs')`
    font-size: 10px;
  `}
  `}
`;

export const MenuWithIconsButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  color: ${({theme}) => theme.colors.default};
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  border: none;
  background: none;
  padding: 0 10px;

  &:after {
    content: '';
    width: 90px;
    transition: 200ms;
    border-bottom: 2px solid black;
  }

  &:hover {
    &:after {
      content: '';
      width: 70px;
      transition: 200ms;
      border-bottom: 2px solid black;
    }
  }

  ${({theme}) => theme.media.down('sm')`
    svg {
    transform: scale(0.8);
    };
    width: inherit;
    gap: 0;
    padding: 0;
    font-size: 14px;
    
    &:after {
      padding-top:10px;
      width: 60px;
    };
    &:hover {
    &:after {
      width: 60px;
    }
  `}

  ${({theme}) => theme.media.down('xs')`
    &:first-child{
        margin-left:-10px;
    }
    svg {
    transform: scale(0.7);
    };
    font-size: 12px;
    font-weight: 400;
  `}

  ${({theme}) => theme.media.down('xxs')`
    font-size: 10px;
  `}
`;
