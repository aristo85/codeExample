import { FC } from 'react';
import { Transition } from '@headlessui/react';

import type { FilterBoxProps } from './filter-box.interface';

const FilterBox: FC<FilterBoxProps> = ({ isOpen, children }) => {
  return (
    <Transition
      show={isOpen}
      unmount={false}
      enter='transition-all duration-100'
      enterFrom='transform scale-y-0 origin-top opacity-0'
      enterTo='transform scale-y-100 origin-top opacity-1'
    >
      <div className='transition-all relative min-h-0 md:min-h-full mt-6 inset-0 rounded-lg shadow'>
        {children}
      </div>
    </Transition>
  );
};

export default FilterBox;
