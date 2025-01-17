import styled, {css} from 'styled-components';
import {Checkbox} from '@mui/material';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Wraper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: nowrap;

  ${({theme}) => css`
    ${theme.media.down('xs')`
     flex-wrap: wrap;
    `}
  `}
`;

export const Label = styled.label`
  display: block;
  line-height: 23px;
  ${({theme}) => css`
    font-size: ${theme.font.size.subtitle2};
    color: ${theme.colors.default};
  `}
`;

export const Box = styled.div<{selected: boolean}>`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 16px;
  border: 2px solid ${props => (props.selected ? '#1d7abd' : '#8daec1')};
  background: #fff;
  flex-basis: 49%;
  cursor: pointer;

  ${({theme}) => css`
    ${theme.media.down('xs')`
  cursor: none;
  flex-basis: 100%;
  `}
  `};
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Title = styled.p`
  color: #222121;
  font-size: 16px;
  line-height: 20px;
`;

export const Subtitle = styled.p`
  color: #8daec1;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  font-family: Segoe UI;
`;

export const CheckIcon = styled(Checkbox)`
  width: 20px;
  height: 20px;
  cursor: auto;
  color: #8daec1;
`;
