import { FC, useState } from 'react';

import AutocompleteInput from './autocomplete-input';

const AutocompleteInputStory: FC = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <AutocompleteInput
      value={value}
      onChange={setValue}
      name='test'
      options={[
        {
          key: 'option1',
          name: 'Option1',
        },
        {
          key: 'option2',
          name: 'Option2',
        },
        {
          key: 'option3',
          name: 'Option3',
        },
      ]}
    />
  );
};

export default AutocompleteInputStory;
