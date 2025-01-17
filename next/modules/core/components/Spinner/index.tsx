import React, {FC} from 'react';
import {Box, CircularProgress, Modal} from '@mui/material';
import styled from 'styled-components';

const SpinnerContainer = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 50vh 0;
`;

type SpinnerProps = {
  showSpinner: boolean;
};

const Spinner: FC<SpinnerProps> = ({showSpinner}) => {
  return (
    <Modal
      open={showSpinner}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <SpinnerContainer>
        <CircularProgress />
      </SpinnerContainer>
    </Modal>
  );
};

export default Spinner;
