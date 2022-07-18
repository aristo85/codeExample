import type { ReactNode } from 'react';

export type Tab = {
  value: string;
  name: ReactNode;
};

export type TabsProps = {
  activeTab: string;
  tabs: Tab[];
  onChange?: (value: string) => void;
};
