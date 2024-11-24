import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profil from '../assests/profil.jpg';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#11587c] flex justify-between items-center'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Mahmoud Slama
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a futur engineering
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[720px]'>
          I am a third-year Computer Science student at the National Engineering School of Sousse (ENISo).
        </p>
        <div className="flex justify-center">
  <img 
    src={profil} 
    alt="Mahmoud Slama" 
    className="rounded-full border-8 w-[200px] h-auto sm:w-[150px] md:w-[200px] lg:w-[250px]" 
  />
</div>

        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded'>
            <Link to='work' smooth={true} duration={500}>
              Work
            </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
