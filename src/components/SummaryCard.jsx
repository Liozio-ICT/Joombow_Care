import React from 'react'
import { cn } from '../utils/tailwind'
import { Link } from 'react-router-dom'

const SummaryCard = ({ className = '', icon = <></>, value = '', caption = '', href }) => {
    return (
        <div className={cn(['shadow-lg p-3 md:p-5 bg-slate-950 rounded-lg grid relative text-white @container', className])}>
            <div className="flex gap-2 justify-between">
                {icon}
                {
                    caption && <small className='font-semibold'>{caption}</small>
                }
            </div>
            <strong className='text-[clamp(2rem,_3cqi_+_100%,_300%)]'>
                {value}
            </strong>
            {href && <Link to={href} className='absolute inset-0' />}
        </div>
    )
}

export default SummaryCard