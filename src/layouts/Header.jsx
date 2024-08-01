import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../components/Dropdown'
import { useAuth } from '../provders/AuthProvider'
import { dashboardPages, profileDrops } from './constants'
import { FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { cn } from '../utils/tailwind'
import { FaX } from 'react-icons/fa6'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Header = () => {
    const { logout } = useAuth();
    const [modalShown, setModalShown] = useState(false)

    const navigate = useNavigate();
    const handleLogout = async () => {
        // api handleLogout call
        const { done, message } = await logout();
        return navigate("/");

    };
    return (
        <>
            <header className='shadow sticky top-0 z-20 bg-white'>
                <div className='container !py-[.5rem] flex justify-between gap-5 items-center'>
                    {/* logo */}
                    <Link to={'/'} className='text-brand-red font-bold text-[1.5rem]'>
                        JOOMBOW
                    </Link>
                    <div className='flex justify-end grow gap-10'>
                        {/* navs */}
                        <div className='gap-5 hidden md:flex'>

                            {
                                dashboardPages.map(({ label, icon, href }, idx) =>
                                    <Link className='flex gap-1 items-center text-dark-2' to={href} key={idx}>
                                        {icon &&
                                            <span className='flex justify-center items-center *:size-[1.2rem]'>
                                                {icon}
                                            </span>
                                        }
                                        <span>
                                            {label}
                                        </span>
                                    </Link>
                                )
                            }
                        </div>
                        {/* profile */}
                        <Dropdown justify='right' label={<div className='rounded-full aspect-square w-[2.5rem] overflow-clip border-2 border-brand-red/25 relative'>
                            <img src={useAuth().user?.photo ??
                                `https://ui-avatars.com/api/?name=${useAuth().user?.firstName?.replaceAll(" ", "+") ?? "Joombow"}+${useAuth().user?.lastName?.replaceAll(" ", "+") ?? "User"}`
                            } alt={`${useAuth().user?.firstName?.replaceAll(" ", "+") ?? "Joombow"}+${useAuth().user?.lastName?.replaceAll(" ", "+") ?? "User"}`} className='size-full object-cover' />
                        </div>}
                            childrenClass="*:p-2 *:px-3 *:md:px-5 *:gap-2"
                        >
                            <div className=' hover:bg-brand-red/5 grid grid-cols-[2.5rem_1fr] items-center min-w-[10rem] md:min-w-[15rem]'>
                                <span className='rounded-full aspect-square min-w-[2.5rem] overflow-clip border-2 border-brand-red/25 relative'>
                                    <img src={useAuth().user?.photo ??
                                        `https://ui-avatars.com/api/?name=${useAuth().user?.firstName?.replaceAll(" ", "+") ?? "Joombow"}+${useAuth().user?.lastName?.replaceAll(" ", "+") ?? "User"}`
                                    } alt={`${useAuth().user?.firstName?.replaceAll(" ", "+") ?? "Joombow"}+${useAuth().user?.lastName?.replaceAll(" ", "+") ?? "User"}`} className='absolute inset-0' />
                                </span>
                                <span className="truncate">
                                    <strong>{useAuth().user?.lastName ?? "User"}</strong> <br />
                                    {useAuth().user?.firstName ?? "Joombow"}
                                    {' '}
                                    {useAuth().user?.lastName ?? "User"}
                                </span>
                            </div>
                            {
                                profileDrops.map(({ icon, href, label }, idx) =>
                                    <Link className='grid grid-cols-[1.2rem_1fr] items-center hover:bg-brand-red/5 text-sm min-w-max' to={href} key={idx} >
                                        {icon}
                                        <span>{label} </span>
                                    </Link>
                                )
                            }
                            <button type='button' className='grid grid-cols-[1.2rem_1fr] items-center hover:bg-brand-red/5 text-sm min-w-max text-left' onClick={() => setModalShown(true)}>
                                <FaSignOutAlt />
                                <span>Logout </span>
                            </button>
                        </Dropdown>
                    </div>
                </div>
            </header>


            {/* modal */}

            <div
                className={cn(
                    "fixed inset-0 -z-[99999] opacity-0 flex items-center justify-center bg-slate-950/25 transition-all p-3",
                    { "z-[999999] opacity-100": modalShown },
                )}
            >
                <div
                    className={cn(
                        "relative grid gap-5 rounded-xl bg-white p-4 transition-all duration-500",
                        {
                            "scale-0": !modalShown,
                        },
                    )}
                >
                    <button
                        className="ms-auto border-none p-2 outline-none"
                        onClick={() => {
                            setModalShown();
                        }}
                    >
                        <FaX size={16} />
                    </button>

                    <div className="grid gap-5 px-10 text-center">
                        <>
                            <p className="">
                                Are you sure you want to Logout?
                            </p>
                            <div className="flex flex-wrap items-center justify-between gap-x-5 *:grow">
                                <button
                                    className="rounded-lg bg-brand-red text-white p-2 px-3 outline-none"
                                    onClick={() => handleLogout()}
                                >
                                    Yes
                                </button>
                                <button
                                    className="rounded-lg border border-brand-red bg-transparent p-2 px-3 outline-none"
                                    onClick={() => setModalShown()}
                                >
                                    No
                                </button>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header