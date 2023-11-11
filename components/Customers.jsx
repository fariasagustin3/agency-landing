import Image from 'next/image';
import React from 'react';
import Logo from '../assets/tesla_logo.png';
import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/logo2.png';
import Logo3 from '../assets/logo3.png';
import Logo4 from '../assets/logo4.png';
import Logo5 from '../assets/logo5.png';
import Logo6 from '../assets/logo6.png';
import Logo7 from '../assets/logo7.png';

const content = {
  description: "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.",
  name: "Tim Smith",
  author: "British Dragon Boat Racing Association",
  logos: [
    {
      id: 1,
      image: Logo1,
    },
    {
      id: 2,
      image: Logo2,
    },
    {
      id: 3,
      image: Logo3,
    },
    {
      id: 4,
      image: Logo4,
    },
    {
      id: 5,
      image: Logo5,
    },
    {
      id: 6,
      image: Logo6,
    },
  ]
}

const Customers = () => {
  return (
    <section className='flex flex-row justify-between items-center px-10 py-20'>
      <div className='flex w-1/3 justify-end'>
        <Image
          src={Logo}
          className='w-72'
          alt=""
        />
      </div>
      <div className='flex w-2/3 pl-20 flex-col justify-center items-start gap-2'>
        <p className='text-sm text-[#717171]'>{content.description}</p>
        <p className='text-lg text-[#4CAF4F]'>{content.name}</p>
        <p className='text-sm text-[#89939E]'>{content.author}</p>
        <div className='flex flex-row items-center gap-14'>
          {content.logos.map((logo) => (
            <Image
              src={logo.image}
              className='w-10'
              key={logo.id}
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Customers;
