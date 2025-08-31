import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profil from '../assests/profil.jpg';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen bg-[#11587c] flex items-center'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-4 sm:px-8 w-full h-full pt-[120px]'>
        <div className='flex flex-col justify-center h-full'>
          <h1 className='text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-4 mt-4'>
            Mahmoud Slama
          </h1>
          <h2 className='text-3xl sm:text-4xl md:text-6xl font-bold text-[#8892b0]'>
            I'm a Software Engineering
          </h2>
          <h2 className='text-3xl sm:text-4xl md:text-6xl font-bold text-[#8892b0] mt-2'>
            Developer
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[720px] text-lg sm:text-xl'>
            Graduate from the National Engineering School of Sousse (ENISo) with a degree in Computer Science Engineering.
          </p>
          <div className="flex justify-center my-6">
            <img 
              src={profil} 
              alt="Mahmoud Slama" 
              className="rounded-full border-4 sm:border-8 w-[150px] sm:w-[200px] md:w-[225px] lg:w-[250px] h-auto shadow-lg" 
            />
          </div>

          <div className="flex justify-center mt-6">
            <Link to='work' smooth={true} duration={500}>
              <button className='text-white group border-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-lg shadow-lg hover:shadow-pink-500/50 transition-all duration-300'>
                View My Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-2 sm:ml-3' />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
