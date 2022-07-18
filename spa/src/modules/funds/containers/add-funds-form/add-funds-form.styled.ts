import styled from 'styled-components';
// components
import Paper from 'modules/core/components/paper';
import Spinner from 'modules/core/components/spinner';

export const Root = styled(Paper)`
  /* display: flex;
  width: 100%;
  max-width: 840px;
  min-height: 400px;
  padding: 40px 60px 30px 60px;
  min-height: 430px;
  align-items: center; */
  display: grid;
  grid-template-columns: 66% 1fr;
  padding: 40px 60px 30px 60px;
  align-items: center;

  ${(props) => props.theme.media.down('md')`
    grid-template-columns: 1fr;
  `};

  ${(props) => props.theme.media.down('sm')`
    padding: 20px;
  `};

  /* ${(props) => props.theme.media.down('md')`
    flex-direction: column;
    min-height: 550px;
    justify-content: center;
  `}; */
`;

export const SystemRoot = styled(Paper)`
  /* display: flex; */
  align-items: center;
  max-width: 840px;
  width: 100%;
  padding: 40px 60px 30px 60px;
  min-height: 430px;

  ${(props) => props.theme.media.down('sm')`
    padding: 20px;
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* width: 50%; */
  padding-right: 20px;
  justify-content: center;
  ${(props) => props.theme.media.down('md')`
    width: 100%;
    order: 1;
  `}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 50%; */
  height: fit-content;
  padding-left: 20px;
  row-gap: 15px;

  ${(props) => props.theme.media.down('md')`
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
  `}
`;

export const InputSpinner = styled(Spinner)`
  position: relative;
  left: 10px;
`;

export const QrCodeWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 140px;
  height: 140px;
  padding: 20px;
  background-color: #f4f6f9;
  border-radius: ${(props) => props.theme.shape.borderRadius.medium};
`;

export const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  ${(props) => props.theme.media.down('md')`
    justify-content: space-between;
  `}
`;

export const SocialButtonWrapper = styled.div`
  margin-right: 20px;

  ${(props) => props.theme.media.down('md')`
    margin-right: 0;
    margin-top: 10px;
  `}
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 65px;

  ${(props) => props.theme.media.down('md')`
    margin-top: 25px;
  `}
`;

export const InfoCue = styled.div``;
