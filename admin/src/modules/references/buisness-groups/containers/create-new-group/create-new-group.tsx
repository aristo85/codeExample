import { FC, useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
// components
import ActionsWrapper from 'modules/core/components/actions-wrapper/actions-wrapper';
import Input from 'modules/core/components/input/input';
import Button from 'modules/core/components/button/button';
import { useGroupCreateMutation } from '../../hooks/use-group-create-mutation';
import * as yup from 'yup';
import { useForm, useFormState } from 'react-hook-form';
import { NewGroupValues } from './create-new-grpup.interface';
import { yupResolver } from '@hookform/resolvers/yup';
// import Toggle from 'modules/core/components/toggle/toggle';

const CreateNewGroup: FC = () => {
  // const [enabled, setEnabled] = useState(false);
  const groupCreateMutation = useGroupCreateMutation();

  const history = useHistory();
  const validationSchema = useMemo(() => {
    return yup.object().shape({
      name: yup.string().required('Group name is required'),
    });
  }, []);
  // form
  const { register, handleSubmit, control } = useForm<NewGroupValues>({
    defaultValues: {
      name: '',
      description: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const { errors } = useFormState({ control });

  const handleFormSubmit = useCallback((data: NewGroupValues) => {
    groupCreateMutation.mutateAsync(data).then((res) => {
      res && history.goBack();
    });
  }, []);

  const handleCancel = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    // <ActionsWrapper>
    //   <form
    //     onSubmit={handleSubmit(handleFormSubmit)}
    //     className='w-full grid gap-y-4'
    //   >
    //     <div>
    //       <Input placeholder={'...'} label={'Group type'} />
    //     </div>
    //     {/* <div>
    //       <Input placeholder={'...'} label={'Group Code'} />
    //     </div> */}
    //     {/*
    //     <div>
    //       <Toggle
    //         label='Group is active'
    //         enabled={enabled}
    //         // @ts-ignore
    //         onChange={setEnabled}
    //       />
    //     </div> */}
    //     <div className='mt-4'>
    //       <Button variant='primary'>Create</Button>
    //       <Button onClick={handleCancel} className='ml-4'>
    //         Cancel
    //       </Button>
    //     </div>
    //   </form>
    // </ActionsWrapper>
    <ActionsWrapper>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='w-full grid gap-y-4'
      >
        <div className='md:grid grid-cols-2 grid-rows-1 gap-4'>
          <div>
            <Input
              placeholder={'...'}
              label={'Group name'}
              {...register('name')}
            />
            <span className='text-red-600'>{errors?.name?.message}</span>
            <br />
            <Input
              placeholder={'...'}
              label={'Descrioption'}
              {...register('description')}
            />
          </div>
        </div>
        <div className='mt-3'>
          <Button variant='primary' type='submit'>
            Create
          </Button>
          <Button onClick={(e) => handleCancel(e)} className='ml-4'>
            Cancel
          </Button>
        </div>
      </form>
    </ActionsWrapper>
  );
};

export default CreateNewGroup;
