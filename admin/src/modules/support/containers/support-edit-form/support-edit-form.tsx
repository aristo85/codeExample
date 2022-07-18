import { FC, useState } from 'react';
// components
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select';
import ActionsWrapper from 'modules/core/components/actions-wrapper';
import Button from 'modules/core/components/button';
// containers
// import UserBlockField from 'modules/user/containers/user-block-field';
import Spinner from 'modules/core/components/spinner';

import { SupportProps } from './support-edit-form-interface';
import { useSupportUpdateMutation } from '../../hooks/use-support-update-mutation';
// import classNames from 'classnames';

const SupportEditForm: FC<SupportProps> = ({
  support,
  onClose,
  forceRerender,
}) => {
  const [isBlocked, setisBlocked] = useState(support.status);
  // queries
  const supportUpdateMutation = useSupportUpdateMutation(support.id);

  const onUpdate = () => {
    if (support) {
      supportUpdateMutation.mutateAsync({ status: isBlocked }).then((res) => {
        forceRerender && forceRerender();
        res && onClose();
      });
    }
  };

  return (
    <div className='grid grid-cols-1 xs:mx-2 gap-y-4 bg-white rounded-lg md:w-full lg:9/12'>
      <Spinner isLoading={supportUpdateMutation.isLoading} size='8'>
        <Input placeholder={support.name} disabled label={'Name'} />
        <Input placeholder={support.id} disabled label={'Code'} />
        <Select
          value={isBlocked ? 'Blocked' : 'Active'}
          onChange={(data) => setisBlocked(data)}
          label={'Is active'}
          options={[
            {
              value: 'Active',
              text: 'Active',
            },
            {
              value: 'Blocked',
              text: 'Blocked',
            },
          ]}
        />
        <Input placeholder={'31 Jun 2021'} disabled label={'Crated date'} />

        <ActionsWrapper className='absolute left-0 -bottom-6'>
          <Button
            // variant='primary'
            onClick={() => onUpdate()}
            variant={support.status === isBlocked ? 'disabled' : 'primary'}
            disabled={support.status === isBlocked}
          >
            Save
          </Button>
          {/* <Button variant='default'>Discard changes</Button> */}
        </ActionsWrapper>
      </Spinner>
    </div>
  );
};

export default SupportEditForm;
