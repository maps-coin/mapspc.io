import React from "react";

function Footer() {
  return (
    <footer className='footer p-2'>
      <div className='container flex items-center flex-col rounded-lg'>
        <div className='text-4xl font-bold '>
          <a href='/'>
            <span className='footer-logo text-2xl bg-gradient-to-r from-pink-600 via-blue-400 to-purple-600 bg-clip-text tracking-tight text-transparent md:text-4xl'>
              MapsPC.io
            </span>
          </a>
        </div>
        <div className='flex info_footer items-center'>
          <div className='text-sm text-neutral-500'>
            Attention! It is not an investment advice.
          </div>
          <div className='text-sm text-neutral-500'>
            Enjoy the game. Good Luck!
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
