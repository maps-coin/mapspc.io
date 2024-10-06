import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RoadmapCode from "./components/RoadmapCode";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 flex flex-col gap-10 antialiased'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        {/* <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div> */}
        {/* <div class='absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'></div> */}
        <div class='absolute inset-0 -z-10 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>
      </div>

      <div className='container mx-auto px-8'>
        <img src='./src/assets/sticker_maps.png' class='man' alt='' />

        <Navbar />
        <Hero />
        <RoadmapCode />
        <Footer />
      </div>
    </div>
  );
}

export default App;
