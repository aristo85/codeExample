import styled from 'styled-components';
import Button from 'modules/core/components/button';

export const Root = styled.div`
  display: flex;
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.theme.palette.common.lightGray};
  border-radius: ${(props) => props.theme.shape.borderRadius.circle};
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.25));
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const PhotoButton = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.palette.common.primary};
  z-index: 1;
  border: none;
  border-radius: ${(props) => props.theme.shape.borderRadius.circle};
  cursor: pointer;
`;

export const FileInput = styled.input.attrs({
  type: 'file',
  accept: 'image/*',
})`
  width: 0;
  height: 0;
  overflow: hidden;
`;

export const SavePhotoButton = styled(Button)`
  margin: 20px auto 0 auto;
  width: 100px;
  height: 35px;
`;
