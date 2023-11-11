import React from 'react';
import Logo from '../assets/logo-footer.png';
import Logo1 from '../assets/instagram.png';
import Logo2 from '../assets/dribbble.png';
import Logo3 from '../assets/twitter.png';
import Logo4 from '../assets/youtube.png'
import Send from '../assets/send.png'
import Image from 'next/image';

const logos = [Logo1, Logo2, Logo3, Logo4];

const content = {
  copy: "Copyright © 2020 Nexcent ltd.",
  rights: "All rights reserved",
  links: {
    company: {
      title: "Company",
      links: [
        {
          id: 1,
          link: "About us"
        },
        {
          id: 2,
          link: "Blog"
        },
        {
          id: 3,
          link: "Contact us"
        },
        {
          id: 4,
          link: "Pricing"
        },
        {
          id: 5,
          link: "Testimonials"
        },
      ],
    },
    support: {
      title: "Support",
      links: [
        {
          id: 1,
          link: "Help center"
        },
        {
          id: 2,
          link: "Terms of service"
        },
        {
          id: 3,
          link: "Legal"
        },
        {
          id: 4,
          link: "Privacy policy"
        },
        {
          id: 5,
          link: "Satatus"
        },
      ]
    }
  }
}

const Footer = () => {
  return (
    <footer className='flex flex-row items-center justify-around bg-[#263238] py-10'>
      <div className='flex flex-col items-start justify-center gap-5 pl-40 py-10 w-1/3'>
        <Image
          src={Logo}
          alt=""
          className='w-40'
        />
        <div>
          <p className='text-white text-xs font-thin'>{content.copy}</p>
          <p className='text-white text-xs font-thin'>{content.rights}</p>
        </div>
        <div className='flex flex-row items-center justify-between gap-3'>
          {logos.map((logo, index) => (
            <Image src={logo} key={index} alt="" className='w-7' />
          ))}
        </div>
      </div>

      <div className='flex flex-row w-1/2'>
      {/* Company */}
      <div className='flex flex-col items-start justify-center px-10'>
        <h2 className='text-lg text-left text-white font-semibold'>{content.links.company.title}</h2>
        <ul className='mt-2'>
          {content.links.company.links.map((link) => (
            <li key={link.id} className='text-xs text-white font-thin mb-2 cursor-pointer'>{link.link}</li>
          ))}
        </ul>
      </div>

      {/* Support */}
      <div className='flex flex-col items-start justify-center px-10'>
        <h2 className='text-lg text-left text-white font-semibold'>{content.links.support.title}</h2>
        <ul className='mt-2'>
          {content.links.support.links.map((link) => (
            <li key={link.id} className='text-xs text-white font-thin mb-2 cursor-pointer'>{link.link}</li>
          ))}
        </ul>
      </div>

      {/* Email */}
      <div className='flex flex-col gap-3 items-start justify-start px-10'>
        <h2 className='text-lg text-left text-white font-semibold'>Stay up to date</h2>
        <div className='relative'>
          <input type="email" className='bg-[#717171] rounded-md py-2 px-4 text-sm focus:outline-none text-white' placeholder="Your email adress" />
          <Image src={Send} className='w-5 absolute top-0 bottom-0 right-0 m-auto mr-3 cursor-pointer' />
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
