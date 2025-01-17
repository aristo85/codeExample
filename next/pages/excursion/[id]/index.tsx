import {ErrorResponse} from '@/modules/core/hooks/useToast';
import React, {FC} from 'react';
import {wrapper} from '@/modules/core/containers/StoreProvider';
import {getExcursionByIdTourist} from '@/modules/excursion/apiExcursionSlice';
import {DetailExcursion} from '@/modules/excursion/detail';
import {ExcursionData} from '@/modules/core/api/model/excursion/excursionData';
import {withLogging} from '@/modules/core/helpers/withLogging';

export interface ExcursionDetailProps {
  data: ExcursionData;
  errorData: ErrorResponse | null;
}

const ExcursionDetailPage: FC<ExcursionDetailProps> = ({data, errorData}) => {
  return <DetailExcursion data={data} />;
};

export const getServerSideProps = wrapper.getServerSideProps(store =>
  withLogging(async context => {
    const {id} = context.query;
    const {data, error} = await store.dispatch(
      getExcursionByIdTourist.initiate({
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

export default ExcursionDetailPage;
