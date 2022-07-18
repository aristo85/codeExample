import { FC } from 'react';
import { useHistory } from 'react-router-dom';
// components
import ActionsWrapper from 'modules/core/components/actions-wrapper/actions-wrapper';
import Input from 'modules/core/components/input/input';
import Button from 'modules/core/components/button/button';
// import Toggle from 'modules/core/components/toggle/toggle';

import { NewOperationProps } from './new-operation.interface';

const NewOperation: FC<NewOperationProps> = () => {
  // const [enabled, setEnabled] = useState(false);

  const history = useHistory();

  const handleCancel = () => {
    history.push('/reference-operations');
  };

  return (
    <ActionsWrapper>
      <form className='w-full grid gap-y-4'>
        <div>
          <Input placeholder={'...'} label={'Operation type Name'} />
        </div>
        {/* <div>
          <Input placeholder={'...'} label={'Operation Code'} />
        </div> */}

        {/* <div>
          <Toggle
            label='Operation is active'
            enabled={enabled}
            // @ts-ignore
            onChange={setEnabled}
          />
        </div> */}
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

export default NewOperation;
