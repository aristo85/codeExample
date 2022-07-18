import { FC, Fragment, useCallback } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import { NavLink, NavLinkProps } from 'react-router-dom';
// components
import Icon from 'modules/core/components/icon';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../auth/auth.actions';
import RefrencesBarMenu from './RefrencesBarMenu';
// import { selectIsAdmin } from 'modules/auth/auth.selectors';
import { useProfileQuery } from 'modules/myProfile/hooks/use-profile-query';

const profile = ['Your Profile', 'Settings', 'Sign out'];
const navigationLinks: NavLinkProps[] = [
  {
    to: '/',
    children: 'Transactions',
  },
  {
    to: '/users',
    children: 'Client Profiles & Account Preferences',
  },
  {
    to: '/clients-wallets',
    children: "Client's wallets",
  },
  {
    to: '/commission-settings',
    children: 'Commission rules',
  },
  {
    to: '/references',
    children: 'References',
  },
  {
    to: '/support',
    children: 'Support',
  },
  {
    to: '/admin-settings',
    children: 'Admin Settings',
  },
];

const AppLayout: FC = ({ children }) => {
  // hooks
  const dispatch = useDispatch();

  const MyAva = useProfileQuery().data?.avatar?.url;
  const profileAva =
    MyAva ||
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

  const handleSignOutClick = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <div>
      <Disclosure as='nav' className='sticky top-0 z-50 bg-gray-800'>
        {({ open: isMobileMenuOpen }) => (
          <>
            <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                  <div className='flex-shrink-0'>
                    <Icon className='h-8 w-8' name='kwalletLogo' />
                  </div>
                  <div className='hidden lg:block'>
                    <div className='ml-10 flex items-baseline '>
                      {navigationLinks.map((link, index) => {
                        return link.children === 'References' ? (
                          <RefrencesBarMenu
                            key={index}
                            mobile={false}
                            link={link}
                          />
                        ) : (
                          <NavLink
                            key={index}
                            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 mx-1 rounded-md text-sm font-medium'
                            activeClassName='bg-gray-900 text-white px-3 py-2 mx-1 rounded-md text-sm font-medium'
                            exact
                            {...link}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className='hidden lg:block'>
                  <div className='ml-4 flex items-center md:ml-6'>
                    <button className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      <span className='sr-only'>View notifications</span>
                      <BellIcon className='h-6 w-6' aria-hidden='true' />
                    </button>

                    <Menu as='div' className='ml-3 relative'>
                      {({ open }) => (
                        <>
                          <div>
                            <Menu.Button className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                              <span className='sr-only'>Open user menu</span>
                              <img
                                className='h-8 w-8 rounded-full'
                                src={profileAva}
                                alt=''
                              />
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
                              className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                            >
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    onClick={handleSignOutClick}
                                    className={classNames(
                                      { 'bg-gray-100': active },
                                      'block px-4 py-2 text-sm text-gray-700 w-full text-left'
                                    )}
                                  >
                                    Sign out
                                  </button>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>
                </div>
                <div className='-mr-2 flex lg:hidden'>
                  <Disclosure.Button className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {isMobileMenuOpen ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='lg:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                {navigationLinks.map((link, index) => {
                  return link.children === 'References' ? (
                    <RefrencesBarMenu key={index} link={link} mobile />
                  ) : (
                    <NavLink
                      key={index}
                      className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                      activeClassName='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                      exact
                      {...link}
                    />
                  );
                })}
                <div className='flex items-center' />
              </div>
              <div className='pt-4 pb-3 border-t border-gray-700'>
                <div className='flex items-center px-5'>
                  <div className='flex-shrink-0'>
                    <img
                      className='h-10 w-10 rounded-full'
                      src={profileAva}
                      alt=''
                    />
                  </div>
                  <div className='ml-3'>
                    <div className='text-base font-medium leading-none text-white'>
                      Tom Cook
                    </div>
                    <div className='text-sm font-medium leading-none text-gray-400'>
                      tom@example.com
                    </div>
                  </div>
                  <button className='ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                    <span className='sr-only'>View notifications</span>
                    <BellIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
                <div className='mt-3 px-2 space-y-1'>
                  {profile.map((item) => (
                    <a
                      key={item}
                      href='#'
                      className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {children}
    </div>
  );
};

export default AppLayout;
