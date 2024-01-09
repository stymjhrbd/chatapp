// Navbar.jsx
import React from 'react';
import { Navlogin } from './buttons';
import Image from 'next/image';
// import PersonIcon from '@mui/icons-material/Person';
// import ChatIcon from '@mui/icons-material/Chat';
// import HomeIcon from '@mui/icons-material/Home';
// import SettingsIcon from '@mui/icons-material/Settings';


const Navbar = () => {
  return (
    // <div className='flex flex-col p-30 pl-10 bg-slate-500 justify-items-start'>
    //   <div className='HomeIcon p-3'><HomeIcon /></div>
    //   <div className='ChatIcon p-3'><ChatIcon /></div>
    //   <div className='personIcon p-3'><PersonIcon /></div>
    //   <div className='SettingsIcon p-3'><SettingsIcon /></div>
    // </div>
    <div className='flex px-10 py-5 justify-between fixed top-0 left-0 w-full bg-white sticky'>
      <h1 className='text-black text-3xl font-bold'>Chit<span className='text-teal-500'>Chat</span> </h1>
      {/* <div>
        <Image
          src="/image.jpg"
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
