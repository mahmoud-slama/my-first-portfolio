import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import mh50 from   "../assests/mh50.jpg"
import { Link } from 'react-scroll';


const Home = () => {
  return (
  
    <div name='home' className='w-full h-screen bg-[#11587c] flex justify-between items-center'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Mahmoud Slama
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a futur  engineering
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a student at eniso
        </p>
        <div className=' ml-80'   >
          <img src={mh50} alt="image" width={200} height={150}  className='rounded-full border-8'   />
        </div>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
            
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Home;