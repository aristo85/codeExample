import { FC } from 'react';
// components
import Input from 'modules/core/components/input';

const LoginPage: FC = () => (
  <div className='min-h-screen flex items-center'>
    <div className='xs:w-1/4 mx-auto px-6 py-12 shadow bg-gray-50'>
      <h2 className='text-center font-semibold text-3xl lg:text-4xl mb-10 text-gray-800'>
        Login
      </h2>

      <div className='flex flex-col'>
        <Input placeholder={' '} label={'Username'} />
      </div>

      <div className='flex mt-2 flex-col'>
        <Input placeholder={' '} label={'Password'} />
      </div>

      <button className='w-full py-2.5 mt-5 bg-blue-500 rounded text-white transition-all duration-300 shadow md:hover:text-white md:hover:bg-gray-800'>
        Login
      </button>
    </div>
  </div>
);

export default LoginPage;
