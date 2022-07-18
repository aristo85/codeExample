import React, { FC, useCallback } from 'react';

import type { TabsProps } from './tabs.interface';
import { Root, Tab } from './tabs.styled';

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
    <Root>
      {tabs.map((tab, i) => (
        <Tab
          isActive={activeTab === tab.value}
          onClick={handleTabClick(tab.value)}
          key={i}
        >
          {tab.name}
        </Tab>
      ))}
    </Root>
  );
};

export default Tabs;
