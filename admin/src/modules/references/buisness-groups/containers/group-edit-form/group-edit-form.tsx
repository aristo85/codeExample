import { FC, useMemo, useCallback } from 'react';
// components
import Input from 'modules/core/components/input';
import Select from 'modules/core/components/select';
import ActionsWrapper from 'modules/core/components/actions-wrapper';
import Button from 'modules/core/components/button';

import { GroupEditProps, UpdateGroupValues } from './group-edit-form-interface';
import { useGroupUpdateMutation } from '../../hooks/use-group-update-mutation';
import * as yup from 'yup';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const GroupEditForm: FC<GroupEditProps> = ({
  group,
  onClose,
  forceRerender,
}) => {
  const groupUpdateMutation = useGroupUpdateMutation(group.id);

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      name: yup.string().required('Group name is required'),
    });
  }, []);
  // form
  const { register, handleSubmit, control } = useForm<UpdateGroupValues>({
    defaultValues: {
      name: group.name,
      description: group.description,
      is_blocked: group.is_blocked.toString(),
    },
    resolver: yupResolver(validationSchema),
  });

  const { errors } = useFormState({ control });

  const handleFormSubmit = useCallback((data: UpdateGroupValues) => {
    groupUpdateMutation
      .mutateAsync({ ...data, is_blocked: JSON.parse(data.is_blocked) })
      .then((res) => {
        forceRerender && forceRerender();
        res && onClose();
      });
  }, []);

  return (
    <div className='grid grid-cols-1 xs:mx-2 gap-y-4 bg-white rounded-lg md:w-full lg:9/12'>
      <Input disabled label={'Group ID'} placeholder={`${group.id}`} />
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className='w-full grid gap-y-4'
      >
        <div>
          <Input
            placeholder={'...'}
            label={'Group name'}
            {...register('name')}
          />
          <span className='text-red-600'>{errors?.name?.message}</span>
        </div>
        <div>
          <Input
            placeholder={'...'}
            label={'Description'}
            {...register('description')}
          />
        </div>

        <Controller
          name='is_blocked'
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onChange={field.onChange}
              label='Is blocked'
              options={[
                {
                  value: 'true',
                  text: 'Blocked',
                },
                {
                  value: 'false',
                  text: 'Active',
                },
              ]}
            />
          )}
        />

        <Input
          placeholder={new Date(group.created_at * +`1000`).toLocaleString()}
          disabled
          label={'Crated date'}
        />
        <br />
        <ActionsWrapper className='absolute left-0 -bottom-6'>
          <Button variant='primary' type='submit'>
            Save
          </Button>
          <Button variant='default'>Discard changes</Button>
        </ActionsWrapper>
      </form>
    </div>
  );
};

export default GroupEditForm;
