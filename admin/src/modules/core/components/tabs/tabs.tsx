import { FC, useCallback } from 'react';
import classNames from 'classnames';

import type { TabsProps } from './tabs.interface';

const Tabs: FC<TabsProps> = ({ activeTab, tabs, onChange }) => {
  const handleTabClick = useCallback(
    (tab: string) => () => {
      if (onChange) {
        onChange(tab);
      }
    },
    [onChange]
  );

  return (
    <div className='bg-white'>
      <nav id='tabs' className='flex flex-row'>
        {tabs.map((tab, i) => (
          <button
            className={classNames(
              'uppercase text-xs text-gray-600 py-3 px-3 mr-5 block hover:text-blue-500 focus:outline-none',
              {
                'text-gray-600 bg-gray-300 bg-opacity-60 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500':
                  activeTab === tab.value,
              }
            )}
            onClick={handleTabClick(tab.value)}
            key={i}
          >
            {tab.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;
