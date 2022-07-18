import { FC, Fragment, useMemo } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

import type { SelectProps } from './select.interface';
import classNames from 'classnames';

const Select: FC<SelectProps> = ({
  options,
  label,
  value,
  onChange,
  className,
  style,
}) => {
  const activeValue = useMemo(
    () => options.find((option) => option.value === value),
    [options, value]
  );

  return (
    <div className={className} style={style}>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            <Listbox.Label className='block text-sm font-medium text-gray-700'>
              {label}
            </Listbox.Label>
            <div className='mt-1 relative'>
              <Listbox.Button className='relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm'>
                <span className='flex items-center'>
                  <span className='block truncate'>
                    {activeValue?.text ?? '...'}
                  </span>
                </span>
                <span className='ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                  <SelectorIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options
                  static
                  className='absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'
                >
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.value}
                      className='cursor-pointer select-none relative py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-100'
                      value={option.value}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className='flex items-center'>
                            <span
                              className={classNames(
                                selected ? 'font-semibold' : 'font-normal',
                                'ml-3 block truncate'
                              )}
                            >
                              {option.text}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                'absolute inset-y-0 right-0 flex items-center pr-4 text-green-600',
                                { 'text-white': active }
                              )}
                            >
                              <CheckIcon
                                className='h-5 w-5'
                                aria-hidden='true'
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default Select;
