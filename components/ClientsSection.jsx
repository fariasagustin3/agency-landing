import React from 'react';
import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/logo2.png';
import Logo3 from '../assets/logo3.png';
import Logo4 from '../assets/logo4.png';
import Logo5 from '../assets/logo5.png';
import Logo6 from '../assets/logo6.png';
import Logo7 from '../assets/logo7.png';
import Image from 'next/image';

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

const ClientsSection = () => {
  return (
    <section className='w-screen bg-white py-10 px-40'>
      <h1 className='text-center text-[#4D4D4D] text-3xl font-medium'>Our Clients</h1>
      <p className='text-center text-[#717171] text-md'>We have been worked with some Fortune 500+ clients</p>
      <div className='mt-10 flex flex-row justify-between items-center'>
        {logos.map((logo, index) => (
          <Image
            src={logo}
            key={index}
            className='w-10'
            alt=""
          />
        ))}
      </div>
    </section>
  );
}

export default ClientsSection;
