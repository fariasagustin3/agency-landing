import Image from 'next/image';
import React from 'react';
import Clubs from '../assets/clubs-icon.png';
import Membership from '../assets/membership-icon.png';
import National from '../assets/national-icon.png';

const content = [
  {
    id: 1,
    image: Membership,
    title: "Clubs And Groups",
    subtitle: "Our membership management software provides full automation of membership renewals and payments"
  },
  {
    id: 2,
    image: National,
    title: "National Associations",
    subtitle: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 3,
    image: Clubs,
    title: "Clubs And Groups",
    subtitle: "Our membership management software provides full automation of membership renewals and payments"
  },
];

const Community = () => {
  return (
    <section className='flex flex-col justify-center items-center px-32'>
      <h1 className='text-center text-[#4D4D4D] text-3xl font-medium w-1/2'>Manage your entire community in a single system</h1>
      <p className='text-center text-[#717171] text-md'>Who is Nextcent suitable for?</p>
      <div className='flex flex-row justify-between items-center my-10 px-10 w-full'>
        {content.map((e) => (
          <div 
            className='flex flex-col justify-center items-center w-64'
            key={e.id}
          >
            <Image
              src={e.image}
              className="w-16"
              alt=""
            />
            <h2 className='text-center text-[#4D4D4D] text-xl font-medium'>{e.title}</h2>
            <p className='text-center text-[#717171] text-sm mt-4'>{e.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Community;
