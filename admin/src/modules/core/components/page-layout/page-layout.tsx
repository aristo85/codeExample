import { FC, useState } from 'react';

import type { PageLayoutProps } from './page-layout.interface';
import SideBar from '../side-bar';

const PageLayout: FC<PageLayoutProps> = ({ children, title }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <header className='bg-white shadow'>
        <div className='max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          {typeof title === 'string' ? (
            <h1 className='text-3xl font-bold text-gray-900'>{title}</h1>
          ) : (
            <>{title}</>
          )}
        </div>
      </header>
      <main>
        <div className='max-w-8xl mx-auto py-6 sm:px-6 lg:px-8'>{children}</div>
      </main>

      <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
};

export default PageLayout;
