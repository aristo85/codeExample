import { FC } from 'react';

import Icon, { icons } from './icon';
import type { IconName } from './icon.interface';

const IconStory: FC = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.keys(icons).map((iconName) => (
        <div
          key={iconName}
          style={{
            width: 60,
            border: '1px solid gray',
            margin: 5,
            padding: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name={iconName as IconName} width={24} height={24} />
          <span
            style={{
              fontSize: 10,
              marginTop: 5,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              width: '100%',
              textAlign: 'center',
            }}
          >
            {iconName}
          </span>
        </div>
      ))}
    </div>
  );
};

export default IconStory;
