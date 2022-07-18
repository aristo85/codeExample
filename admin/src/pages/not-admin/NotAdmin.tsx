import React from 'react';

const NotAdmin = () => {
  return (
    <div className='min-h-screen flex items-center'>
      <div className='xs:w-1/4 mx-auto px-6 py-12 shadow bg-gray-50'>
        <h2 className='text-center font-semibold text-3xl lg:text-4xl mb-10 text-gray-800'>
          Please re-login with ADMIN account!
        </h2>
      </div>
    </div>
  );
};

export default NotAdmin;
