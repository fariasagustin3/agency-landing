import React from 'react';
import MemberIcon from '../assets/members-icon.png';
import Clubs from '../assets/club-icon.png';
import Event from '../assets/event-icon.png'
import Payment from '../assets/payment-icon.png';
import Image from 'next/image';



const Archievements = () => {
  const content = {
    id: 1,
    title: "Helping a local",
    extratitle: "business reinvent itself",
    subtitle: "We reached here with our hard work and dedication",
    archieve: [
      {
        id: 1,
        image: MemberIcon,
        number: "2,245,341",
        title: "Members"
      },
      {
        id: 2,
        image: Clubs,
        number: "46,328",
        title: "Clubs"
      },
      {
        id: 3,
        image: Event,
        number: "828,867",
        title: "Event Bookings"
      },
      {
        id: 4,
        image: Payment,
        number: "1,926,436",
        title: "Payments"
      },
    ]
  }

  return (
    <section className='flex flex-row justify-between items-center px-40 py-20 bg-[#F5F7FA]'>
      <div className='flex flex-col flex-1'>
        <h1 className='font-semibold text-5xl text-[#4D4D4D]'>{content.title}</h1>
        <p className='font-semibold text-5xl text-[#4CAF4F]'>{content.extratitle}</p>
        <p className='font-normal text-sm text-[#717171] mt-5'>{content.subtitle}</p>
      </div>
      <div className='flex flex-wrap flex-1 gap-20 justify-center items-center'>
        {content.archieve.map((e) => (
          <div
            key={e.id}
            className='flex flex-row gap-5'
          >
            <Image
              src={e.image}
              className='w-10'
              alt=""
            />
            <div className='flex flex-col items-start justify-center'>
              <p className='text-[#4D4D4D] text-xl font-bold text-left'>{e.number}</p>
              <p className='text-start text-[#717171] text-sm'>{e.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Archievements;
