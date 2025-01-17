import React from 'react';
import CreateGuide from '@/modules/guide/createGuide';
import styled, {css} from 'styled-components';
import {useAppDispatch} from '@/modules/core/hooks';
import useOnRouteChange from '@/modules/core/hooks/useOnRouteChange';
import {setGuideCreateForm} from '@/modules/guide/guideSlice';

const PageContainer = styled.div`
  padding-bottom: 150px;
  max-width: 1700px;

  ${({theme}) => css`
    ${theme.media.down('sm')`
     padding-bottom: 100px;
    `}
  `}
`;

const ExcursionsPage = () => {
  const dispatch = useAppDispatch();

  useOnRouteChange(() => {
    dispatch(setGuideCreateForm({}));
  });

  return (
    <PageContainer>
      <CreateGuide />
    </PageContainer>
  );
};

export default ExcursionsPage;
