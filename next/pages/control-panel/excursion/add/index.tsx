import React from 'react';
import CreateExcursionForm from '@/modules/excursion/CreateExcursionForm';
import styled, {css} from 'styled-components';
import {useAppDispatch} from '@/modules/core/hooks';
import useOnRouteChange from '@/modules/core/hooks/useOnRouteChange';
import {setExcursionCreateForm} from '@/modules/excursion/excursionSlice';
import {ExcursionType} from '@/modules/excursion/types';

const PageContainer = styled.div`
  max-width: 1700px;
  padding-bottom: 16px;

  ${({theme}) => css`
    ${theme.media.down('sm')`
    `}
  `}
`;

const ExcursionsPage = () => {
  const dispatch = useAppDispatch();

  useOnRouteChange(() => {
    dispatch(setExcursionCreateForm({type: ExcursionType.INDIVIDUAL}));
  });

  return (
    <PageContainer>
      <CreateExcursionForm />
    </PageContainer>
  );
};

export default ExcursionsPage;
