import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 256px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #232222;
  font-size: 34px;
  text-align: center;

  ${({theme}) => theme.media.down('sm')`
    font-size: 32px;
    ${theme.media.down('xs')`
    font-size: 32px;
    `}
  `}
`;

export const SubTitle = styled.h2`
  color: #4f4f4f;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  max-width: 467px;
  white-space: pre-wrap;
  a,
  p {
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
    font-weight: 400;
    cursor: pointer;
  }
`;
