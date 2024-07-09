import React from 'react'
import TitleHeader from '../../components/TitleHeader'
import noDelivery from "../../assets/no-delivery.svg";
import Tabs from '../../components/Tabs';
import { Link, useNavigate } from 'react-router-dom';

const Index = () => {
    const tabs = [
        {
            label: 'All'
        }
    ]

    const navigate = useNavigate();
    return (
        <>
            <div className="bg-[#FD1014] !pt-10 md:bg-transparent md:!pt-5">
                <TitleHeader title='My Bookings' goBack={navigate(-1)} />
            </div>

            <div className='mx-auto *:mx-auto md:max-w-[75%] my-5 md:my-10 flex-col flex gap-5 md:gap-10'>
                <div className="text-sm w-full">
                    <Tabs tabs={tabs} activeClass="bg-white text-black" />
                </div>

                <div className='aspect-square !rounded-full max-w-[75%]'>
                    <img
                        src={noDelivery}
                        alt="back"
                        className="aspect-square max-w-[5rem] object-contain"
                    />

                </div>

                <div className='grid gap-5 w-full *:w-full !px-0 text-center'>
                    <p>You’ve no booking history</p>
                    <p>You’ve not book a wash today. place order soon..... </p>
                    <Link to="/bookings/new" className='max-w-[12rem] text-sm p-1 px-2 bg-brand-red rounded mx-auto'>Book Now</Link>
                </div>
            </div>
        </>
    )
}

export default Index