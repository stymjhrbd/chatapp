// Navbar.jsx
import React from 'react';
import { Navlogin } from './buttons';
import Image from 'next/image';



const Navbar = () => {
  return (
    
    <div className='flex px-10 py-5 justify-between fixed top-0 left-0 w-full bg-white mb-1'>
      <h1 className='text-black text-3xl font-bold'>Chit<span className='text-teal-500'>Chat</span> </h1>
      {/* <div>
        <Image
          src="../../../image.jpg"
          alt="image"
          width={40}
          height={50}
        />
      </div> */}
      <Navlogin />
    </div>

  );
};

export default Navbar;
