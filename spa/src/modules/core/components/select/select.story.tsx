import { FC, useState } from 'react';
import Select from './select';
import Icon from '../icon/icon';

const SelectStory: FC = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        rowGap: '10px',
      }}
    >
      <Select
        value={value}
        onChange={setValue}
        label='Account'
        options={[
          {
            value: 'btc',
            title: '0.00',
            subtitle: 'Bitcoin balance',
            startAdornment: <Icon name='dollarCircle' width={30} height={30} />,
          },
          {
            value: 'eur',
            title: '0.99',
            subtitle: 'Euro balance',
            startAdornment: <Icon name='euro' width={30} height={30} />,
          },
        ]}
      />
      <Select
        value={value}
        onChange={setValue}
        options={[
          {
            value: 'btc',
            title: 'Bitcoin',
          },
          {
            value: 'eur',
            title: 'Euro',
          },
        ]}
      />
    </div>
  );
};

export default SelectStory;
