import React from 'react'

function Container({children}) {
  return (
    <div className='bg-neutral-900 w-full h-screen flex justify-center items-center'>
      <div className="w-full max-w-md bg-neutral-800 rounded-md py-6 mx-0.5">
        {children}
    </div>
    </div>
  )
}

export default Container