import Image from 'next/image';
import {PatternFormat} from 'react-number-format';
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 300px;
  border-radius: 32px;
  background: #c6e1f3;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const CardPhoto = styled(Image)<{isRectangle: boolean}>`
  border-radius: ${props => (props.isRectangle ? '16px' : '50%')};
  object-fit: cover;
`;

export const Names = styled.p`
  font-size: 24px;
  color: #222121;
  text-align: center;
`;

export const Age = styled.p`
  font-size: 24px;
  color: #6c7a89;
`;

export const JobTitle = styled.p`
  font-size: 20px;
  color: #1d7abd;
`;

export const Phone = styled(PatternFormat)`
  font-size: 20px;
  color: #4f4f4f;
  border: none;
  background: none;
  text-align: center;
`;
