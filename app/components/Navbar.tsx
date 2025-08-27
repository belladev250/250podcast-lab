import React from 'react';
import Image from 'next/image';

// bg-black/30 backdrop-blur-sm
const Navbar: React.FC = () => {
  return (
	<nav className='top-0 left-0 w-full absolute flex items-center justify-between px-20 py-8  cursor-pointer'>
        <Image src="/logo.svg" alt="250podcast Logo" width={60} height={60} />

        <ul className='flex gap-10 text-white  text-lg'>
            <li>Home</li>
            <li>About Us </li>
            <li>Program</li>
            <li>Blogs</li>
            <li>Contact Us</li>
        </ul>
	</nav>
  );
};

export default Navbar;