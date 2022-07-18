import { FC, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { RefrencesBarMenuProps } from './types';
import { useLocation } from 'react-router';

const RefrencesBarMenu: FC<RefrencesBarMenuProps> = ({ mobile, link }) => {
  const location = useLocation().pathname;
  const referenceLinks: NavLinkProps[] = [
    {
      to: '/reference-countries',
      children: 'Countries',
    },
    {
      to: '/reference-currencies',
      children: 'Currencies',
    },
    {
      to: '/reference-operations',
      children: 'Operation types',
    },
    {
      to: '/reference-client-limits',
      children: 'Client limits',
    },
    {
      to: '/reference-client-groups',
      children: 'Client groups',
    },
    // {
    //   to: '/reference-crypto-exchanges',
    //   children: 'Crypto exchanges',
    // },
    {
      to: '/reference-fiat-providers',
      children: 'Fiat providers',
    },
  ];

  return (
    <Menu
      as='div'
      className={classNames(mobile ? '-pl-4' : 'pl-2', 'relative')}
    >
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              className={classNames(
                location.includes('reference') &&
                  'bg-gray-900 text-white rounded-md',
                mobile ? 'ml-4' : '',
                'max-w-xs bg-gray-800 flex items-center text-sm focus:outline-none' &&
                  ''
              )}
            >
              <div
                className={classNames(
                  open ? 'bg-gray-900 text-white' : 'text-gray-300',
                  'flex items-center hover:bg-gray-700 hover:text-white px-3 py-2 rounded-t text-sm font-medium'
                )}
              >
                {link.children}
                <ChevronDownIcon
                  className={classNames(
                    open ? 'text-gray-600' : 'text-gray-400',
                    'h-5 w-5 group-hover:text-gray-500'
                  )}
                  aria-hidden='true'
                />
              </div>
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items
              static
              className={classNames(
                mobile
                  ? 'right-30 mt-1 rounded-md rounded-tl-none ml-4 bg-gray-700'
                  : 'right-30 mt-3 bg-gray-900 rounded-md rounded-tl-none',
                'origin-top-right border-t-2 rounded-t-none absolute w-40 shadow-lg py-3 ring-1 ring-black ring-opacity-5 focus:outline-none z-50'
              )}
            >
              {referenceLinks.map((sublink, i) => (
                <Menu.Item key={i}>
                  {({ active }) => (
                    <NavLink
                      className={classNames(
                        { 'bg-gray-700': active },
                        mobile ? ' text-gray-300' : 'text-gray-300',
                        'block px-4 py-2 text-sm w-full text-left'
                      )}
                      exact
                      {...sublink}
                    />
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default RefrencesBarMenu;
