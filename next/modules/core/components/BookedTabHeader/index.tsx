import React, {useLayoutEffect, useRef, useState} from 'react';
import {BookedTab, BookedTabHeader} from './styles';
import {Category} from './bookedTab.types';

interface BookedTabHeaderComponentProps<T extends string> {
  activeTab: T;
  setActiveTab: (key: T) => void;
  tabs: Record<T, Category>;
}

const BookedTabHeaderComponent = <T extends string>({
  setActiveTab,
  activeTab,
  tabs,
}: BookedTabHeaderComponentProps<T>) => {
  const [fullUnderlineWidth, setFullUnderlineWidth] = useState<number | null>(
    null,
  );
  const bookedItemsRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    if (bookedItemsRef.current) {
      setFullUnderlineWidth(bookedItemsRef.current.scrollWidth);
    }
  }, []);

  return (
    <BookedTabHeader ref={bookedItemsRef} wholeWidth={fullUnderlineWidth}>
      {Object.entries(tabs).map(([key]) => {
        const innerObject = tabs[key as T];
        return (
          <BookedTab
            onClick={() => setActiveTab(key as T)}
            isActive={key === activeTab}
            key={innerObject.title}>
            {innerObject.title}
          </BookedTab>
        );
      })}
    </BookedTabHeader>
  );
};

export default BookedTabHeaderComponent;
