import {ErrorResponse} from '@/modules/core/hooks/useToast';
import React, {FC} from 'react';
import {wrapper} from '@/modules/core/containers/StoreProvider';
import {DetailGuideComponent} from '@/modules/guide/detail';
import {getGuideByIdTourist} from '@/modules/guide/apiGuideSlice';
import {GuideData} from '@/modules/core/api/model/guide/guideData';
import {withLogging} from '@/modules/core/helpers/withLogging';

export interface ExcursionDetailProps {
  data: GuideData;
  errorData: ErrorResponse | null;
}

const GuideDetailPage: FC<ExcursionDetailProps> = ({data, errorData}) => {
  return <DetailGuideComponent data={data} />;
};

export const getServerSideProps = wrapper.getServerSideProps(store =>
  withLogging(async context => {
    const {id} = context.query;
    const {data, error} = await store.dispatch(
      getGuideByIdTourist.initiate({
        id: Number(id),
      }),
    );

    return {
      props: {
        data: data?.data || null,
        errorData: error || null,
      },
    };
  }),
);

export default GuideDetailPage;
