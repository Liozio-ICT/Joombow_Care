import React from 'react'

const Loader = () => {
    return (

        <div className='absolute inset-0 flex items-center justify-center bg-brand-red/10 z-50'>
            <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-brand-red'></div>
        </div>
    )
}

export default Loader