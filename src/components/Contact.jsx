import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#11587c] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/baba9d63-39b7-4d49-9fe8-cb47b4666ee1" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                    Contact
                </p>
                <p className='text-gray-300 py-4'>
                    / Submit the form below or shoot me an email<br />
                    <a href="mailto:mahmoud.slama@eniso.u-sousse.tn" className='underline'>mahmoud.slama@eniso.u-sousse.tn</a>
                </p>
            </div>
            <input
                className='bg-[#ccd6f6] p-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600'
                type="text" placeholder='Name' name='name' />
            <input
                className='my-4 p-2 bg-[#ccd6f6] rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600'
                type="email" placeholder='Email' name='email' />
            <textarea
                className='bg-[#ccd6f6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600'
                name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 border-pink-600 hover:bg-pink-600 hover:border-pink-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md'>
                Let's Collaborate
            </button>
        </form>
    </div>
  )
}

export default Contact;
