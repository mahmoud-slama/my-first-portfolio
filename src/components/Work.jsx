import React from 'react'
import realEstate from '../assests/image.png'
import car from '../assests/car.jpeg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#11587c] pb-20' >
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>

            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>work</p>
            <p className='py-6'>{'// check out some of my recent work'}</p>
            </div>
        {/*container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

{/* Grid Item*/}
           
            
            
{/* Grid Item*/}
<div style={{backgroundImage:`url(${realEstate})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
               
                {/*hover effects*/}
                <div className='pt-8 text-center'>
                    
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Credit APP frontend Application
                        </span>
                    
                    
                <div className='pt-8 text-center'>
                
                    <a href="https://github.com/nadiajazi/CreditApplicationFrontend">
                        <button   className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">code</button>
                    </a>
                    </div>
                    </div>
            </div>
            <div style={{backgroundImage:`url(${realEstate})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
               
                {/*hover effects*/}
                <div className='pt-8 text-center'>
                    
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Credit App backend  Application
                        </span>
                    
                    
                <div className='pt-8 text-center'>
                
                    <a href="https://github.com/mahmoud-slama/Creditappbackend">
                        <button   className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">code</button>
                    </a>
                    </div>
                    </div>
            </div>
            
{/* Grid Item*/}
<div style={{backgroundImage:`url(${car})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               
               
                {/*hover effects*/}
                <div className='pt-8 text-center'>
                    
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Rentweels Application
                        </span>
                    
                    
                <div className='pt-8 text-center'>
                
                    <a href="https://github.com/mahmoud-slama/NEW-Rentweels">
                        <button   className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">code</button>
                    </a>
                    </div>
                    </div>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Work
