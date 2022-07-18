import { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
// components
import ActionsWrapper from 'modules/core/components/actions-wrapper/actions-wrapper';
import Input from 'modules/core/components/input/input';
import Button from 'modules/core/components/button/button';
import Toggle from 'modules/core/components/toggle/toggle';

import { CreateNewStatusProps } from './create-new-status.interface';

const CreateNewStatus: FC<CreateNewStatusProps> = () => {
  const [enabled, setEnabled] = useState(false);

  const history = useHistory();

  const handleCancel = () => {
    history.push('/reference-client-statuses');
  };

  return (
    <ActionsWrapper>
      <form className='w-full grid gap-y-4'>
        <div>
          <Input placeholder={'...'} label={'Status type'} />
        </div>
        {/* <div>
          <Input placeholder={'...'} label={'Status Code'} />
        </div> */}

        <div>
          <Toggle
            label='Status is active'
            enabled={enabled}
            // @ts-ignore
            onChange={setEnabled}
          />
        </div>
        <div className='mt-4'>
          <Button variant='primary'>Create</Button>
          <Button onClick={handleCancel} className='ml-4'>
            Cancel
          </Button>
        </div>
      </form>
    </ActionsWrapper>
  );
};

export default CreateNewStatus;
