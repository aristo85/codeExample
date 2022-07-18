import { format, fromUnixTime } from 'date-fns';
import { FC, useState, useRef } from 'react';
import { CSVProfileData, CSVProps } from './csv.interface';
import { CSVLink } from 'react-csv';
import { getAllProfiles } from 'modules/user/hooks/use-profile-list-query';
import Button from 'modules/core/components/button';

const CSVAsync: FC<CSVProps> = ({ filter, listCount }) => {
  const [listData, setlistData] = useState<CSVProfileData[] | []>([]);
  const csvInstance = useRef<any | null>(null);

  const getData = async () => {
    if (listCount) {
      const profilesList = await getAllProfiles({
        per_page: listCount,
        q: filter,
      });
      const list = profilesList.list;

      if (list) {
        const newList = profilesList.list.map((item) => {
          const { user, kyc, group, fields } = item;

          const user_name = fields.find((field) => field.code === 'first_name')
            ?.value as string;

          const user_surname = fields.find(
            (field) => field.code === 'last_name'
          )?.value as string;

          const user_verification = kyc.verified ? 'Verified' : 'Unverified';
          const user_acc_type = user.is_company ? 'Business' : 'Personal';

          const created = format(
            fromUnixTime(user.created_at),
            'dd MMM yyyy HH:mm'
          );
          const updated = format(
            fromUnixTime(user.updated_at),
            'dd MMM yyyy HH:mm'
          );

          return {
            ...item,
            user_id: user.id,
            user_email: user.email,
            user_name,
            user_surname,
            user_acc_type,
            user_group: group.name,
            user_verification,
            user_status: user.status,
            created_at: created,
            updated_at: updated,
          };
        });

        setlistData(newList);
      }
    }
  };

  const onGetData = () => {
    getData().then(() => {
      csvInstance.current.link.click();
      setlistData([]);
    });
  };

  return (
    <>
      <Button variant='default' onClick={onGetData}>
        Export
      </Button>
      <CSVLink
        target='blanck'
        data={listData}
        headers={[
          { label: 'ID', key: 'user_id' },
          { label: 'Eamil', key: 'user_email' },
          { label: 'First name', key: 'user_name' },
          { label: 'Last naem', key: 'user_surname' },
          { label: 'Is company', key: 'user_acc_type' },
          { label: 'Group', key: 'user_group' },
          { label: 'Verification', key: 'user_verification' },
          { label: 'Account status', key: 'user_status' },
          { label: 'Created', key: 'created_at' },
          { label: 'Updated', key: 'updated_at' },
        ]}
        asyncOnClick
        filename='Profiles.csv'
        style={{ all: 'unset' }}
        ref={csvInstance}
      />
    </>
  );
};

export default CSVAsync;
