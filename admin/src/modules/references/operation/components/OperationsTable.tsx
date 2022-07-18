import { FC, useState } from 'react';
// import classNames from 'classnames';
// components
import Table from 'modules/core/components/table';
import SideBar from 'modules/core/components/side-bar/side-bar';
import OperationEditForm from '../containers/operation-edit.form/OperationEditForm';
// types
import { ResourceObject } from 'modules/core/types/resource.types';
import { Operation } from '../types/operation.types';

import { OperationsListProps } from './operations-table.interface';

const OperationsTable: FC<OperationsListProps> = ({ operations }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<undefined | Operation>();

  const cellRenderer = (data: ResourceObject<Operation>, key: string) => {
    if (key === 'name') {
      return `${data}`;
    }

    // @ts-ignore
    if (data === 'Deposit') {
      return (
        <>
          {key === 'direction' && 'IN'}
          {key === 'description' && (
            <>
              Receive crypto from external or internal wallet USING BLOCKCHAIN
              address. This record is used for creation % rules.
              <br />
              ПРОЛУЧЕНИЕ КРИПТЫ ЧЕРЕЗ БЛОКЧЕЙН АДРЕС ( могут быть кошельки как
              внешние, так и между внутренними) Комбинация типа транзакции и
              направление -используется при создании %правил.
            </>
          )}
        </>
      );
    }

    // @ts-ignore
    if (data === 'Transfer') {
      return (
        <>
          {key === 'direction' && 'OUT'}
          {key === 'description' && (
            <>
              Transfer crypto from internal wallet to internal wallet inside
              Fruitin system
              <br />
              ПЕРЕЧИСЛЕНИЕ КРИПТЫ НА ВНУТРЕНИЙ КОШЕЛЕК В СИСТЕМЕ FRUTIN
            </>
          )}
          <br />
          {key === 'direction' && 'IN'}
          {key === 'description' && (
            <>
              <br />
              Receive crypto to internal wallet from internal wallet inside
              Fruitin system
              <br />
              ПОЛУЧЕНИЕ КРИПТЫ НА ВНУТРЕННИЙ КОШЕЛЕК В СИСТЕМЕ FRUITIN
            </>
          )}
        </>
      );
    }

    // @ts-ignore
    if (data === 'Exchange') {
      return (
        <>
          {key === 'direction' && 'OUT'}
          {key === 'description' && (
            <>
              EXCHANGE- WITHDRAWAL crypto to get target amount crypto
              <br />
              ОБМЕНкрипты на крипту - СПИСЫВАЕТСЯ ВАЛЮТА ДЛЯ ОБМЕНА НА ДРУГУЮ
            </>
          )}
          <br />
          {key === 'direction' && 'IN'}
          {key === 'description' && (
            <>
              <br />
              EXCHANGE - RECEIPT crypto as target amount ООБМЕН крипты на крипту
              <br />
              ПОСТУПАЕТ ВАЛЮТА как target amount
            </>
          )}
        </>
      );
    }

    // @ts-ignore
    if (data === 'Withdrawal') {
      return (
        <>
          {key === 'direction' && 'OUT'}
          {key === 'description' && (
            <>
              Transfer cripto from FRUITIN wallet to EXTERNAL OR INTERNAL wallet
              USING BLOCKCHAIN address. This record is used for creation %
              rules.
              <br />
              ПЕРЕЧИСЛЕНИЕ КРИПТЫ ЧЕРЕЗ БЛОКЧЕЙН АДРЕС ( могут быть кошельки как
              внешние, так и между внутренними). Комбинация типа транзакции и
              направление -используется при создании %правил.
            </>
          )}
        </>
      );
    }

    // @ts-ignore
    if (data === 'Buy') {
      return (
        <>
          {key === 'direction' && 'IN'}
          {key === 'description' && (
            <>
              CLIENT SIDE Purchase crypto for fiat. This record is used for
              creation % rules.
              <br />
              КЛИЕНТСКАЯ СТОРОНА ПОКУПКА КРИПТЫ ЗА фиат - комбинация типа
              транзакции и направление - используется при создании %правил.
            </>
          )}
        </>
      );
    }

    // @ts-ignore
    if (data === 'Sell') {
      return (
        <>
          {key === 'direction' && 'OUT'}
          {key === 'description' && (
            <>
              CLIENT SIDE Selling cripto for fiat. This record is used for
              creation % rules.
              <br />
              КЛИЕНТСКАЯ СТОРОНА ПРОДАЖА КРИПТЫ на фиат - комбинация типа
              транзакции и направление -используется при создании %правил.
            </>
          )}
        </>
      );
    }
  };

  return (
    <>
      <div className='px-4 py-6 sm:px-0'>
        <Table
          columns={['name', 'direction', 'description']}
          dataKeys={['name', 'direction', 'description']}
          data={operations}
          cellRenderer={cellRenderer}
        />
      </div>
      <SideBar
        isOpen={!!isSidebarOpen}
        title='Edit Operation Form'
        onClose={() => setIsSidebarOpen(undefined)}
      >
        <OperationEditForm operationId={'1'} />
      </SideBar>
    </>
  );
};

export default OperationsTable;
