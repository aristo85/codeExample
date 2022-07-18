import styled from 'styled-components';
// components
import Paper from 'modules/core/components/paper';
import Icon from 'modules/core/components/icon';

export const Root = styled(Paper)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 0;
  min-height: 200px;
`;

export const AddIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: #f4f6f9;
  transition: ${(props) => props.theme.transition.fast};
  border-radius: ${(props) => props.theme.shape.borderRadius.circle};
`;

export const PlusIcon = styled(Icon).attrs({
  name: 'plus',
  width: 30,
  height: 30,
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const AddContent = styled.button`
  position: absolute;
  display: flex;
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;

  &:hover > ${AddIconWrapper} {
    transform: translate(-50%, -50%) scale(10);
  }
`;

export const Form = styled.form`
  display: grid;
  width: 100%;
  padding: 0 40px;
  row-gap: 10px;
`;
