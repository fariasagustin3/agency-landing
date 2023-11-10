import React from 'react';
import UnlockImage from '../assets/unlock-image.png';
import Image from 'next/image';

const content = {
  title: "The unseen of spending three years at Pixelgrade",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
  buttonText: "Learn More",
  image: UnlockImage,
};

const Unlock = () => {
  return (
    <section className='w-full flex flex-row justify-center items-center px-20 py-20'>
      <div className='flex w-3/4 justify-center items-center'>
        <Image
          src={content.image}
          className=""
          alt=""
        />
      </div>
      <div className='flex flex-col w-full pl-10'>
        <h1 className='font-semibold text-4xl text-[#4D4D4D]'>{content.title}</h1>
        <p className='font-normal text-sm text-[#717171]'>{content.subtitle}</p>
        <button className='text-white text-sm bg-[#4CAF4F] px-8 py-3 mt-4 self-start rounded-sm'>{content.buttonText}</button>
      </div>
    </section>
  );
}

export default Unlock;
