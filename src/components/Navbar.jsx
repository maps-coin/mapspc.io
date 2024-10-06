import React from "react";
import { FaTelegram, FaSquareXTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className='navbar bg-red mb-20 flex items-center justify-between py-1'>
      <div className='flex flex-shring-0 items-center'>
        <h1 className='title text-4xl'>
          <a className='no-underline' href='/'>
            <span className='bg-gradient-to-r from-pink-600 via-blue-400 to-purple-600 bg-clip-text tracking-tight text-transparent'>
              MapsPC.io
            </span>
          </a>
        </h1>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='#telegram' target='_blank'>
          <FaTelegram />
        </a>
        <a href='#twitter' target='_blank'>
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
