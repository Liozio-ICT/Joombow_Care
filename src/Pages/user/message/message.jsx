import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Tabs from '../../../components/Tabs.jsx';
import { FaEye, FaPlus, FaTrash, FaX } from 'react-icons/fa6';
import { formatDistanceToNowStrict, isFuture } from 'date-fns';
import Input from '../../../components/Input.jsx';
import TextInput from '../../../components/TextInput.jsx';
import Select from '../../../components/Select.jsx';
import SelectMultiple from '../../../components/SelectMultiple.jsx';
import apiClient from '../../../utils/apiClient.js';
import { cn } from '../../../utils/tailwind.js';
import { toast } from 'react-toastify';
import { FaTrashAlt } from 'react-icons/fa';
import Pagination from '../../../components/Pagination.jsx';
import Loader from '../../../components/Loader.jsx';
import { useAuth } from '../../../provders/AuthProvider.jsx';

const Message = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [tab, setTab] = useState(searchParams.get('tab') ?? 'message');
    const [page, setPage] = useState(searchParams.get('page') ?? 1);
    const prevTab = useRef(tab)
    const prevPage = useRef(page)
    const message_form = useRef()

    const [selected, setSelected] = useState()
    const [batch, setBatch] = useState([])
    const [viewMode, setViewMode] = useState()
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();


    const batchSelect = (id) => {
        if (batch.includes(id)) {
            setBatch(batch.filter(b => b !== id))
        } else {
            setBatch([...batch, id])
        }
    }

    const getMessages = async (p) => {
        setLoading(true);
        try {
            let mType = searchParams.get('tab') === 'announcement' ? 'broadcast' : 'message';
            const messages = await apiClient.get(`message/me/${mType}?page=${p ?? page ?? data?.page ?? 1}`).json()
            setData(messages)
        } catch (error) {
            console.error(error);
            toast.error(error.message);
            toast.error(error.response.json().message)
        } finally {
            setLoading(false);
            setViewMode();
            message_form?.current?.close()
        }
    }

    const tabs = [
        {
            label: "Message",
            href: "/user/messages?tab=message",
            name: "message",
        },
        {
            label: "Announcement",
            href: "/user/messages?tab=announcement",
            name: "announcement",
        },
    ];

    useEffect(() => {

        if (prevTab.current !== tab) {
            getMessages(1)
            setSelected()
        } else {
            getMessages()
            setSelected()
        }

        const t = searchParams.get('tab') ?? 'message'
        const p = searchParams.get('page') ?? 1

        console.log({ t, p })
        setTab(t)
        setPage(p)

        prevTab.current = t
        prevPage.current = p
    }, [searchParams])


    return (

        <>
            <section className='overflow-clip shadow rounded-lg max-w-full grid gap-5 py-5 relative'>

                <div className="grid">
                    <div className="flex justify-between gap-x-10 gap-2 font-semibold @container items-baseline mx-3">
                        <h2 className='text-[clamp(1.75rem,_1.5cqi_+_0.25rem,_4rem)]'> Messages </h2>
                        <div className="flex gap-2">
                            <button
                                className='bg-brand-red rounded-3xl aspect-square p-2 hover:bg-opacity-75 relative text-white h-fit'
                                type='button'
                                popovertarget='admin_form'
                                onClick={() => {
                                    setSelected();
                                    message_form?.current?.showModal()
                                }}
                                title='New Message'
                            >
                                <FaPlus className='text-lg' />
                            </button>
                            <button
                                className='border-current border rounded-3xl aspect-square p-2 hover:bg-opacity-75 relative text-brand-red h-fit'
                                type='button'
                                popovertarget='message_form'
                                // onClick={batchResetPassword}
                                title='Delete Selected Messages'
                            >
                                <FaTrash className='text-lg' />
                            </button>
                        </div>
                    </div>

                    <small className='mx-2 overflow-x-auto whitespace-nowrap'>
                        <Tabs
                            activeTab={tabs.find(t => t.name === tab) ?? tabs[0]}
                            tabs={tabs}
                            activeClass="border-b border-current rounded-none text-brand-red"
                        />
                    </small>
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
                                                    <strong className='truncate' >{notification?.title}</strong>
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
                                                            setViewMode(true)
                                                            message_form?.current?.showModal()
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

                <Pagination activePage={data?.page ?? page ?? 1} totalPages={data?.total_page} onchange={getMessages} />
            </section>

            <dialog
                id='message_form'
                popover={true}
                ref={message_form}
                className='rounded-xl overflow-clip overflow-y-auto'
            >
                <div
                    className={
                        cn([
                            "py-10 rounded-xl shadow bg-white w-[90dvw] md:max-w-screen-sm relative transition-all duration-500",
                            { 'px-10': !viewMode }
                        ])
                    }
                >
                    <button onClick={() => { message_form?.current?.close() }} className='absolute top-2 right-2 bg-transparent p-2 rounded'>
                        <FaX />
                    </button>
                    {!viewMode ?
                        <MessageForm data={selected} done={getMessages} message_form={message_form} /> :
                        <MessageInfo {...selected} />
                    }
                </div>

            </dialog>
        </>
    )
}

const MessageForm = ({ data, done, message_form }) => {

    const [loading, setLoading] = useState(false);
    const { useUser } = useAuth();

    const [title, setTitle] = useState(data?.title ?? '');
    const [message, setMessage] = useState(data?.message ?? '');
    const [to, setTo] = useState(data?.to ?? '');
    const [receivers, setReceivers] = useState(data?.receivers ?? []);
    const [type, setType] = useState(data?.type ?? '');
    const [isBooking, setIsBooking] = useState(data?.isBooking);
    const [user, setUser] = useState(data?.user ?? useUser()?._id);
    const [posReceivers, setPosReceivers] = useState([]);

    const getRecievers = async () => {
        try {
            const admins = to.endsWith('admins')
            let data = admins ? await apiClient.get(`admin`).json() : await apiClient.get(`user`).json()
            if (admins) {
                if (to === 'super_admins') {
                    data = data.filter(d => d.type === 'super_admin' || d.type === 'owner')
                }
                if (to === 'owner') {
                    data = data.filter(d => d.type === 'owner')
                }

                setPosReceivers(data.map(d => ({
                    label: d.name,
                    value: d._id
                })))
            } else {
                setPosReceivers(data.map(d => ({
                    label: d.firstName + ' ' + d.lastName,
                    value: d._id
                })))
            }
        } catch (error) {
            toast.error(error.response.json().message)
        } finally {
            setLoading(false)
        }
    }


    const possibleRecievers = [
        "all",
        "users",
        "admins",
        "user",
        "admin",
        "all_admins",
        "all_users",
        "super_admins",
        "owner",
    ]

    const submit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const data = {
            type,
            user,
            to,
            receivers,
            isBooking,
            message,
            title
        }

        console.log({ data })

        try {
            const [send] = await Promise.all([
                apiClient.post(`message`, {
                    json: data
                }).json()
            ])
            toast.success(send.message)
            message_form?.current?.close()
            done()

        } catch (error) {
            toast.error(error.response.json().message)

        } finally {
            setLoading(false)
            done
        }


    }

    useEffect(() => {
        getRecievers()
    }, [to])

    return (
        <form onSubmit={submit} className="grid gap-5">
            <Input
                label='Title'
                name='title'
                value={title}
                setValue={setTitle}
            />
            <div className="flex flex-wrap md:flex-nowrap gap-x-2 gap-y-5">
                <Select label='Type' name='type' value={type} setValue={setType} options={[
                    {
                        label: 'announcement',
                        value: 'broadcast'
                    },
                    {
                        label: 'message',
                        value: 'message'
                    }
                ]} />
                <Select label='To' name='to' value={to} setValue={setTo} options={
                    type === 'message' ? possibleRecievers.map(r => ({
                        label: r.replace('_', ' '),
                        value: r
                    })) :
                        possibleRecievers.filter(e => e.startsWith('all')).map(r => ({
                            label: r.replace('_', ' '),
                            value: r
                        }))
                } />
            </div>
            {
                type === 'message' && !to.startsWith('all') &&
                <SelectMultiple
                    label='Receivers'
                    name='receivers'
                    value={receivers}
                    setValue={setReceivers}
                    // multiple={to.endsWith('s')}
                    options={posReceivers} />
            }
            <TextInput label='Message' name='message' value={message} setValue={setMessage} />

            <div className="my-5 w-full gap-5 !px-0 text-center">
                <button type="submit" disabled={loading} className="mx-auto rounded hover:scale-105 transition-all duration-200 hover:bg-opacity-75 bg-brand-red p-2 px-4 text-white w-full max-w-[15rem]">
                    Send
                </button>
            </div>
        </form>
    )

}

const MessageInfo = ({ title, message, to, receivers, type, isBooking, user, admin, createdAt, }) => (
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
                From: {user ? user.firstName : admin?.name ?? 'Admin'} {admin && <em class="font-semibold">({admin?.type?.replace('_', ' ')})</em>}
            </span>
            <span className='grid capitalize'>
                To: {to?.replace('_', ' ')}
                <span>{receivers?.map(r => r?.user?.firstName ?? r?.admin?.name ?? 'Admin').join(', ')}</span>
            </span>
        </small>
        <div className=' whitespace-pre-wrap max-h-[30rem] overflow-y-auto'>
            {message?.replace(/\n\s+/g, '\n').trim()}
        </div>
    </div>
)

export default Message