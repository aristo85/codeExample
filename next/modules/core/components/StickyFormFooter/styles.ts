import styled, {css} from 'styled-components';
import ButtonBasic from '../Buttons/ButtonBasic';

export const FormFooter = styled.div<{sticky?: boolean}>`
  border-top: 2px solid #1d7abd;
  padding-top: 32px;
  background: #fff;
  display: flex;
  direction: rtl;
  gap: 16px;
  max-width: 1440px;

  ${({sticky, theme}) =>
    sticky &&
    css`
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      max-width: 1180px;
      padding: 32px;
      z-index: 1001;

      ${theme.media.down('md')`
        margin: 0 ${theme.layouts.paddingMd};
      `}
    `}
  ${({theme, sticky}) => css`
    ${theme.media.down('sm')`
    margin: 0 ${theme.layouts.paddingSm};
    border:none;
    padding: 16px 0 16px 0;
    
    &.step3 {
      flex-direction: column;
    }
    `}
  `}
`;

export const FooterBtn = styled(ButtonBasic)<{hidden?: boolean}>`
  width: 256px;
  min-width: fit-content;

  ${({theme, hidden}) => css`
    display: ${hidden ? 'none' : 'unset'};
    ${theme.media.down('sm')`
      width: 100%;
      font-size: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
    ${theme.media.down('xxs')`
        min-width: auto;
        padding: 8px;
        font-size: 16px;
    `}
  `}
`;
