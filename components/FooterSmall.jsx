import Image from 'next/image';
import React from 'react';
import Arrow from '../assets/arrow-rigth-white.png';

const content = {
  title: "Pellentesque suscipit fringilla libero eu.",
  buttonText: "Get a Demo"
}

const FooterSmall = () => {
  return (
    <section className='flex flex-col py-10 justify-center items-center bg-[#F5F7FA]'>
      <h1 className='text-5xl font-semibold text-[#263238] text-center w-1/2'>{content.title}</h1>
      <button className='flex flex-row items-center justify-center gap-2 bg-[#4CAF4F] px-5 py-4 rounded-md text-white text-xs'>
        {content.buttonText}
        <Image src={Arrow} alt="" className='w-4' />
      </button>
    </section>
  );
}

export default FooterSmall;
