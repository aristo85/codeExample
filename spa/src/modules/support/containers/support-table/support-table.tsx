import { FC, useState } from 'react';
// components
import Table from 'modules/core/components/table';
// hooks
import { useSupportTopicListQuery } from 'modules/support/hooks/use-support-topic-list-query';

import { Root } from './support-table.styled';
import { format } from 'date-fns';
import { fromUnixTime } from 'date-fns/esm';
import { ResourceObject } from 'modules/core/types/resource.types';
import { Support } from 'modules/support/types/support-api.types';

const SupportTable: FC = () => {
  const [perPage, setperPage] = useState<string | null>(null);
  const [activePage, setActivePage] = useState(1);

  // queries
  const supportTopics = useSupportTopicListQuery({
    page: activePage,
    per_page: perPage ? +perPage : +'8',
    // q: filter,
  });

  const cellRenderer = (data: ResourceObject<Support>, key: string) => {
    if (key === 'created_at') {
      const date = new Date(data.created_at);

      return format(fromUnixTime(date.getTime()), 'dd MMM yyyy HH:mm');
    }
  };

  return (
    <Root>
      <Table
        columns={[
          'PAGES.CREATE_TOPIC.OPERATION_ID',
          'PAGES.CREATE_TOPIC.REQ.NAME',
          'PAGES.NOTIFICATION.MESSAGE',
          'PAGES.NOTIFICATION.STATUS',
          'PAGES.NOTIFICATION.DATES',
        ]}
        dataKeys={['id', 'name', 'description', 'status', 'created_at']}
        data={supportTopics.data?.list ?? []}
        cellRenderer={cellRenderer}
        isLoading={supportTopics.isLoading}
        paginationProps={{
          maxPages: supportTopics.data?.pageCount ?? 1,
          currentPage: activePage,
          onChange: setActivePage,
        }}
        setperPage={setperPage}
        perPage={perPage}
      />
    </Root>
  );
};

export default SupportTable;
