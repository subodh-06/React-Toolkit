import React from 'react';

function Container({ children }) {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-neutral-100 dark:bg-neutral-900">
      <div className="w-full max-w-md bg-white dark:bg-neutral-800 rounded-md py-6 px-4 shadow-md mx-4">
        {children}
      </div>
    </div>
  );
}

export default Container;
