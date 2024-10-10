import React from "react";

function Footer() {
  return (
    <footer className='footer p-2'>
      <div className='container flex items-center flex-col rounded-lg'>
        <div className='text-4xl font-bold '>
          <a href='/'>
            <span className='text-2xl bg-gradient-to-r from-pink-600 via-blue-400 to-purple-600 bg-clip-text tracking-tight text-transparent md:text-4xl'>
              MapsPC.io
            </span>
          </a>
        </div>
        <div className='flex info_footer items-center'>
          <div className='text-sm text-neutral-500'>
            Created by{" "}
            <a
              className='bg-gradient-to-br from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent tracking-tight'
              href='https://github.com/emilabbasov06/'
            >
              Emil Abbasov
            </a>{" "}
            and organized by MAPS.io
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
