import React from 'react';

const Header = () => {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-6xl font-bold">ABOUT US</h1>
        <h3 className='text-white text-3xl font-bold'>Empowering Futures, Enriching Communities</h3>
      </div>
      <img src='/hands.png' className='w-screen h-screen object-cover' alt="Hands" />
    </div>
  );
};

export default Header;
