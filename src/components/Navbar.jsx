import React from "react";
import { FaTelegram, FaSquareXTwitter } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";

function Navbar() {
  return (
    <nav className='nav_items bg-red mb-20 flex flex-col md:flex-row items-center justify-center md:justify-between py-1 '>
      <div className='flex flex-shrink-0 items-center'>
        <h1 className='title text-4xl'>
          <a className='no-underline' href='/'>
            <span className='text-2xl bg-gradient-to-r from-pink-600 via-blue-400 to-purple-600 bg-clip-text tracking-tight text-transparent md:text-4xl'>
              MapsPC.io
            </span>
          </a>
        </h1>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='#' target='_blank'>
          <FaTelegram />
        </a>
        <a href='https://x.com/Mapsconnection' target='_blank'>
          <FaSquareXTwitter />
        </a>
        <a href='mailto:emilabb13@gmail.com'>
          <FaPhoneSquareAlt />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
