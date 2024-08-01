import React from 'react'
import { cards, extras } from '../../constants/cards'
import Card from '../../components/Card'

const Services = () => {
    return (
        <>
            <h2 className="text-[150%] font-semibold">
                Our Services
            </h2>

            <div className="my-5 grid gap-5 grid-cols-[repeat(auto-fit,_minmax(min(15rem,_100%),_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(min(20rem,_100%),_1fr))]">
                {
                    cards.map((card, idx) => <Card {...card} className="max-h-[15rem]" key={idx} />)
                }
            </div>

            <h2 className="text-[150%] font-semibold">
                Other Services Include
            </h2>

            <div className="my-5 grid gap-5 grid-cols-[repeat(auto-fit,_minmax(min(15rem,_100%),_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(min(20rem,_100%),_1fr))]">
                {
                    extras.map((card, idx) => <Card {...card} className="max-h-[15rem]" key={idx} />)
                }
            </div>

        </>
    )
}

export default Services