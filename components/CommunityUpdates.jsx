import React from 'react';
import Image1 from '../assets/community_updates_image1.png'
import Image2 from '../assets/community_updates_image2.png'
import Image3 from '../assets/community_updates_image3.png'
import Image from 'next/image';
import ArrowRight from '../assets/arrow-right.png';

const content = {
  title: "Caring is the new marketing",
  subtitle: "The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​",
  cards: [
    {
      id: 1,
      image: Image1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      link: "Readmore"
    },
    {
      id: 2,
      image: Image2,
      title: "What are your safeguarding responsibilities and how can you manage them?",
      link: "Readmore"
    },
    {
      id: 3,
      image: Image3,
      title: "Revamping the Membership Model with Triathlon Australia",
      link: "Readmore"
    },
  ]
}

const CommunityUpdates = () => {
  return (
    <section className='flex flex-col py-10 px-40'>
      <div className='flex flex-col items-center gap-3'>
        <h1 className='text-[#4D4D4D] text-4xl text-center font-semibold'>{content.title}</h1>
        <p className='text-[#717171] text-sm w-1/2 text-center mb-10'>{content.subtitle}</p>
      </div>
      <div className='flex flex-rowitems-center justify-center gap-5'>
        {content.cards.map((card) => (
          <div className='relative w-56 h-60' key={card.id}>
            <Image 
              src={card.image}
              className='w-56 h-40'
              alt="" 
            />
            <div className='absolute left-0 right-0 bottom-5 m-auto bg-[#F5F7FA] rounded-xl w-48 h-28 px-3 py-3'>
              <p className='text-[#717171] text-xs text-center font-bold mb-3'>{card.title}</p>
              <div className='flex flex-row items-center justify-center gap-1 cursor-pointer'>
                <p className='text-[#4CAF4F] text-xs text-center font-bold'>{card.link}</p>
                <Image src={ArrowRight} className='w-4 ' alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CommunityUpdates;
