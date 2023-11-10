import React from 'react';
import Logo from '../assets/logo-nav.png';
import Image from 'next/image';

const navItems = ["Home", "Service", "Feature", "Product", "Testimonial", "FAQ"];

const NavBar = () => {
  return (
    <nav className='flex flex-row justify-between h-20 items-center px-10'>
      <div>
        <Image
          src={Logo}
          className='w-32'
        />
      </div>
      <div>
        <ul className='flex flex-row items-center gap-10'>
          {navItems?.map((item, index) => (
            <li key={index} className='hover:underline cursor-pointer'>{item}</li>
          ))}
        </ul>
      </div>
      <div className='flex flex-row items-center'>
        <button className='text-[#4CAF4F] px-4 py-3 font-medium rounded-md'>Login</button>
        <button className='text-white px-4 py-3 font-medium rounded-md bg-[#4CAF4F]'>Sign up</button>
      </div>
    </nav>
  );
}

export default NavBar;
