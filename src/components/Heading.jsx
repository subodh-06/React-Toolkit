import React from 'react'

function Heading({ children }) {
  return (
    <h1 className='text-3xl text-center font-semibold text-neutral-900 dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200'>
      {children}
    </h1>
  )
}

export default Heading