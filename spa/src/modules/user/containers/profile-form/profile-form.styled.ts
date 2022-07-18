import styled from 'styled-components';
import Paper from 'modules/core/components/paper';

export const Root = styled(Paper)`
  position: relative;
  width: 100%;
  max-width: 670px;
  min-height: 400px;
  padding: 45px 60px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .PhoneInputCountry {
    position: absolute;
    display: flex;
    height: 30px;
    width: 30px;
    margin-right: 0;
    z-index: 50;
  }

  .PhoneInputInput input {
    padding-left: 35px;
  }

  .PhoneInputCountryIcon--border {
    box-shadow: none;
  }
`;

export const InputFieldsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  row-gap: 10px;
  margin-bottom: 10px;
  margin-top: 35px;

  ${(props) => props.theme.media.down('md')`
    grid-template-columns: auto;
  `}
`;
