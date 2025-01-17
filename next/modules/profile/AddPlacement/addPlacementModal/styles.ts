import styled, {css} from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  padding-right: 5px;
  margin-right: -10px;
`;

export const TipsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const ModalSubTitle = styled.h4`
  ${({theme}) => css`
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicBook};
    ${theme.media.down('xs')`
      font-size: ${theme.font.size.body3}
    `};
  `}
`;

export const ImageCover = styled.div`
  position: relative;
  height: 126px;
  width: 100%;
`;
