import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#11587c] text-gray-300 py-16'>
      <div className='flex flex-col justify-center items-center w-full h-full px-4'>
        <div className='max-w-[1000px] w-full flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-8 mb-8'>
          <div className='text-center sm:text-right pb-4 sm:pb-8'>
            <p className='text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full flex flex-col sm:grid sm:grid-cols-2 gap-6 sm:gap-8 px-4'>
          <div className='text-center sm:text-right text-2xl sm:text-3xl md:text-4xl font-bold'>
            <p>Hi. I'm Mahmoud Slama nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className='text-base sm:text-lg'>As a recently graduated junior developer specializing in applied computer science, I am passionate about web development and have gained solid experience in creating software solutions. Through my academic projects and internships, including my final year project (PFE), I have developed strong technical skills in modern web technologies. Driven by innovation, I aim to leverage my expertise to contribute to ambitious projects while continuing to grow professionally in the technology sector.</p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;