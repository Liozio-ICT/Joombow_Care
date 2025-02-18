import { ScrollRestoration } from "react-router-dom";
import { useAuth } from "../../provders/AuthProvider";
import { BsMegaphoneFill } from "react-icons/bs";
import SummaryCard from "../../components/SummaryCard";
import { FaCoins, FaTableList, FaTrash, FaWrench } from "react-icons/fa6";
import { useState, useEffect } from "react";
import apiClient from "../../utils/apiClient";
import Pagination from "../../components/Pagination";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { user } = useAuth();
  const [summary, setSummary] = useState({
    all: 0,
    pending: 0,
    completed: 0,
    cancelled: 0,
  })
  const [transactions, setTransactions] = useState()
  const [messages, setMessages] = useState()
  const [announcements, setAnnouncements] = useState()

  const getTrxs = async () => {
    try {
      const [trx, msg, ann] = await Promise.all([
        apiClient.get('booking/mine').json(),
        apiClient.get('message/me/message').json(),
        apiClient.get('message/me/broadcast').json(),
      ])

      const all = trx?.bookings;
      const pending = trx?.bookings.filter(({ status }) => status.toLowerCase().includes('pending'));
      const completed = trx?.bookings.filter(({ status }) => status.toLowerCase().includes('completed'));
      const cancelled = trx?.bookings.filter(({ status }) => status.toLowerCase().includes('cancelled'));

      setSummary({
        all: all.length,
        pending: pending.length,
        cancelled: cancelled.length,
        completed: completed.length,
      })

      setTransactions(trx)
      setMessages(msg)
      setAnnouncements(ann)
    } catch (error) {
      toast.error(error.message)
      toast.error(error.response.json().message)
    }
  }

  useEffect(() => {
    getTrxs()
  }, [])

  return (
    <>
      <ScrollRestoration />
      <h1>
        Hi, Welcome, {user?.firstName ?? user?.username ?? 'User'} <span className="wave">👋</span>
      </h1>
      <div className="grid grid-cols-[1.5rem_1fr] gap-2 mt-5 mb-10" >
        <BsMegaphoneFill className="text-brand-red size-full" />
        <marquee>
          {
            announcements?.messages?.length > 0 ?
              announcements?.messages?.map(({ message }, i) => <span key={i} className="px-10" >{message}</span>) :
              <>
                <span className="px-10" >🚗 Get your car sparkling clean without leaving your home! Book our online car care service now and enjoy a 20% discount on your first care! 🚗</span>
                <span className="px-10" >🌟 Convenient, fast, and professional car care services at your fingertips! Visit our website to book your appointment today! 🌟</span>
                <span className="px-10" >📅 Schedule your car care online and choose a time that fits your busy schedule. We come to you! 📅</span>
                <span className="px-10" >💧 Our eco-friendly car care ensures a clean vehicle and a cleaner environment. Book now and support sustainability! 💧</span>
                <span className="px-10" >🔧 Need more than just a care? Explore our detailing services for a thorough cleaning inside and out! 🔧</span>
                <span className="px-10" >🏠 Serving your neighborhood with reliable car care services. Join hundreds of satisfied customers today! 🏠</span>
              </>}
        </marquee>
      </div>

      <section className="text-white max-w-full grid grid-cols-2 gap-5 md:grid-cols-[repeat(auto-fit,_minmax(min(15rem,_100%),_1fr))] my-5 *:md:min-h-[12rem]">
        <SummaryCard className="hover:scale-105 rounded-2xl transition-all duration-200" href={'/user/bookings?tab=all'} caption="Total Bookings" icon={<FaCoins />} value={summary.all} />
        <SummaryCard className="bg-green-500 hover:scale-105 rounded-2xl transition-all duration-200" href={'/user/bookings?tab=completed'} caption="Total Bookings Completed" icon={<FaWrench />} value={summary.completed} />
        <SummaryCard className="bg-blue-700 hover:scale-105 rounded-2xl transition-all duration-200" href={'/user/bookings?tab=pending'} caption="Total Bookings Pending" icon={<FaTableList />} value={summary.pending} />
        <SummaryCard className="bg-brand-red hover:scale-105 rounded-2xl transition-all duration-200" href={'/user/bookings?tab=cancelled'} caption="Total Bookings Cancelled" icon={<FaTrash />} value={summary.cancelled} />
      </section>

      <h2 className="font-semibold text-[150%]">Transactions</h2>
      <section className="my-5 shadow-md overflow-clip  rounded max-w-full grid gap-5">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="capitalize text-left whitespace-nowrap bg-slate-950/5">
              <tr className="*:p-2 px-3 *:border">
                <th>Car Type</th>
                <th>Location</th>
                <th>Payment Method</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {
                transactions?.bookings?.map(({ carType, _id, location, paymentMethod, status, amount, date }, idx) =>
                  <tr className="*:p-2 px-3 *:border" key={idx}>
                    <td>{carType} </td>
                    <td>{typeof location === 'string' ? location : location?.name ?? "Drive In"} </td>
                    <td className="capitalize">{paymentMethod} </td>
                    <td>₦ {amount ? new Intl.NumberFormat('en', {
                      style: 'decimal',
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    }).format(amount ?? 0) : 'N/A'} </td>
                    <td className="whitespace-nowrap">{status} </td>
                    <td>{new Intl.DateTimeFormat('en', {

                    }).format(new Date(date))} </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>

        {!!transactions?.total_items && <Pagination
          className='my-5'
          activeClass="border-b border-current rounded-none text-brand-red"
          totalPages={transactions?.total_page ?? 0}
        />}
      </section>
    </>
  );
};

export default Dashboard;
