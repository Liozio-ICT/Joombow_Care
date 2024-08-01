import React from 'react'
import { Link } from 'react-router-dom'
import { dashboardPages } from './constants'

const Footer = () => {
    return (
        <footer className='border-gray-300 border-t z-20 sticky bottom-0 bg-white block md:hidden'>
            <div className='container !py-2 gap-5 flex justify-around'>

                {
                    dashboardPages.map(({ label, icon, href }, idx) =>
                        <Link className='grid items-center text-dark-2' to={href} key={idx}>
                            {icon &&
                                <span className='flex justify-center items-center *:size-[1.2rem]'>
                                    {icon}
                                </span>
                            }
                            <small>
                                {label}
                            </small>
                        </Link>
                    )
                }
            </div>

        </footer>
    )
}

export default Footer