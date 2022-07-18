import type { ReactNode } from 'react';

export type DataListRow = {
  title: string;
  value: ReactNode;
};

export type DataListProps = {
  rows: DataListRow[];
};
