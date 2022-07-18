import { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
// components
import ActionsWrapper from 'modules/core/components/actions-wrapper/actions-wrapper';
import Input from 'modules/core/components/input/input';
import Button from 'modules/core/components/button/button';
import Toggle from 'modules/core/components/toggle/toggle';

import { CreateNewBurseProps } from './create-new-burse.interface';

const CreateNewBurse: FC<CreateNewBurseProps> = () => {
  const [enabled, setEnabled] = useState(false);

  const history = useHistory();

  const handleCancel = () => {
    history.push('/reference-crypto-exchanges');
  };

  return (
    <ActionsWrapper>
      <form className='w-full grid gap-y-4'>
        <div>
          <Input placeholder={'...'} label={'Burse Name'} />
        </div>
        <div>
          <Toggle
            label='Burse is active'
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

export default CreateNewBurse;
