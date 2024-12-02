import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaEye, FaTrash, FaX } from 'react-icons/fa6';
import { formatDistanceToNowStrict, isFuture } from 'date-fns';
import { toast } from 'react-toastify';
import { FaTrashAlt } from 'react-icons/fa';
import Pagination from '../../../components/Pagination.jsx';
import Loader from '../../../components/Loader.jsx';
import { cn } from '../../../utils/tailwind.js';
import apiClient from '../../../utils/apiClient.js';

const Notification = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(searchParams.get('page') ?? 1);
    const notification_form = useRef()

    const [selected, setSelected] = useState()
    const [batch, setBatch] = useState([])
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();

    const batchSelect = (id) => {
        if (batch.includes(id)) {
            setBatch(batch.filter(b => b !== id))
        } else {
            setBatch([...batch, id])
        }
    }

    const getNotifications = async (p) => {
        setLoading(true);
        try {
            const notifications = await apiClient.get(`message/me/notification?page=${p ?? page ?? data?.page ?? 1}`).json()
            setData(notifications)
        } catch (error) {
            console.error(error);
            toast.error(error.notification);
            toast.error(error.response.json().notification)
        } finally {
            setLoading(false);
            notification_form?.current?.close()
        }
    }

    useEffect(() => {
        getNotifications()
    }, [page])


    return (

        <>
            <section className='overflow-clip shadow rounded-lg max-w-full grid gap-5 py-5 relative'>

                <div className="grid">
                    <div className="flex justify-between gap-x-10 gap-2 font-semibold @container items-baseline mx-3">
                        <h2 className='text-[clamp(1.75rem,_1.5cqi_+_0.25rem,_4rem)]'> Notifications </h2>
                        <div className="flex gap-2">
                            <button
                                className='border-current border rounded-3xl aspect-square p-2 hover:bg-opacity-75 relative text-brand-red h-fit'
                                type='button'
                                popovertarget='notification_form'
                                // onClick={batchResetPassword}
                                title='Delete Selected Notifications'
                            >
                                <FaTrash className='text-lg' />
                            </button>
                        </div>
                    </div>
                </div>
                {
                    loading && <Loader />
                }
                {
                    data?.messages &&
                    <div className="py-2 my-3 overflow-x-auto relative isolate">
                        <table className='min-w-full'>
                            <thead className='text-left bg-slate-200 whitespace-nowrap'>
                                <tr className='*:px-3 *:py-2'>
                                    <th>
                                        <label className='flex gap-2 items-center cursor-pointer'>
                                            <input type="checkbox" value={batch.length} onChange={() => {
                                                if (batch.length === data?.messages?.length) {
                                                    setBatch([])
                                                } else {
                                                    setBatch(data?.messages?.map(msg => msg._id))
                                                }

                                            }} checked={data.messages.length && batch.length === data?.messages?.length} />
                                            Title
                                        </label>
                                    </th>
                                    <th>Message</th>
                                    <th>Date</th>
                                    <th className='text-right max-w-[6rem]'>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    data?.messages?.map((notification, id) => (
                                        <tr key={id}
                                            className={
                                                cn([
                                                    'transition-all duration-500 *:px-3 *:py-2 hover:bg-slate-100 align-top border-b',
                                                ])
                                            }
                                        >
                                            <td>
                                                <label className='cursor-pointer grid gap-2 grid-cols-[auto_1fr] *:h-fit items-center min-w-[15rem]'>
                                                    < input type="checkbox" onChange={() => {
                                                        batchSelect(notification?._id)
                                                    }} checked={batch.includes(notification?._id)} />
                                                    <strong >{notification?.title}</strong>
                                                </label>
                                            </td>
                                            <td className='max-w-[30rem]'><div className="truncate">{notification?.message}</div></td>
                                            <td className="min-w-[10rem]">
                                                {`${formatDistanceToNowStrict(new Date(notification?.createdAt))} ${!isFuture(new Date(notification?.createdAt)) ? 'ago' : ''}`}
                                            </td>
                                            <td className='max-w-[6rem]'>
                                                <div className='flex gap-2 items-center justify-end'>
                                                    <button
                                                        type='button'
                                                        className='bg-slate-400 rounded-full p-1 aspect-square hover:bg-opacity-75 relative text-white size-[1.25rem]'
                                                        onClick={() => {
                                                            setSelected(notification)
                                                            notification_form?.current?.showModal()
                                                        }}
                                                        title='View Notification'
                                                    >
                                                        <FaEye className='size-full' />
                                                    </button>
                                                    <button
                                                        type='button'
                                                        className='bg-brand-red rounded-full p-1 aspect-square hover:bg-opacity-75 relative text-white size-[1.25rem]'
                                                        onClick={() => {
                                                            // deleteNotification(notification._id)
                                                        }}
                                                        title='Delete Notification'
                                                    >
                                                        <FaTrashAlt className='size-full' />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                }

                <Pagination activePage={data?.page ?? page ?? 1} totalPages={data?.total_page} onchange={getNotifications} />
            </section>

            <dialog
                id='notification_form'
                popover={true}
                ref={notification_form}
                className='rounded-xl overflow-clip overflow-y-auto'
            >
                <div
                    className={
                        cn([
                            "py-10 rounded-xl shadow bg-white w-[90dvw] md:max-w-screen-sm relative transition-all duration-500",
                        ])
                    }
                >
                    <button onClick={() => { notification_form?.current?.close() }} className='absolute top-2 right-2 bg-transparent p-2 rounded'>
                        <FaX />
                    </button>
                    <NotificationInfo {...selected} />
                </div>

            </dialog>
        </>
    )
}

const NotificationInfo = ({ title, message, to, receivers, type, isBooking, user, admin, createdAt, }) => (
    <div className="grid gap-2 *:px-10">
        <h3 className="text-2xl font-semibold">
            {title}
        </h3>
        <small className="grid">
            <span className="flex flex-wrap gap-x-2">
                <span className='capitalize'> {type} </span>  ||
                {isBooking &&
                    <>
                        <span> Booking </span> ||
                    </>
                }
                {createdAt && <span> {`${formatDistanceToNowStrict(new Date(createdAt))} ${!isFuture(new Date(createdAt)) ? 'ago' : ''}`} </span>}
            </span>
            <span>
                From: {user ? user.fullName : admin?.name ?? 'Admin'} {admin && <em class="font-semibold">({admin?.type?.replace('_', ' ')})</em>}
            </span>
            <span className='grid capitalize'>
                To: {to?.replace('_', ' ')}
                <span>{receivers?.map(r => r?.user?.fullName ?? r?.admin?.name ?? 'Admin').join(', ')}</span>
            </span>
        </small>
        <div className=' whitespace-pre-wrap max-h-[30rem] overflow-y-auto'>
            {message?.replace(/\n\s+/g, '\n').trim()}
        </div>
    </div>
)

export default Notification