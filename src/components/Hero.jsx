import React from 'react'
import Cards from './Cards.jsx'
function Hero() {
  return (
    <>
      <section className='flex flex-col bg-slate-900 text-white font-mono'>
        <div className='flex justify-evenly items-center m-7'>
          <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-4xl font-bold m-2'>Image</h1>
          </div>
          <div>
            <p className='text-lg'>A Designer who</p>
            <h1 className='text-4xl font-bold'>Judges a Book by</h1>
            <span className='text-red-500 text-4xl font-bold'>its Cover</span>
            <p className='text-lg'>Because if the cover does not impress you what else can?</p>
          </div>
        </div>

        <div className='flex flex-col items-center m-7 mt-10'>
          <div className='flex-col w-3/4 '>
            <h1>
              <h1 className='text-4xl font-bold'>I am a Software Engineer.|</h1>
            </h1>
            <p className='text-lg'>Currently, I'm a Software Engineer at Facebook,</p>

            <p className='text-lg mt-10 md:w-[500px]'>A self-taught UI/UX designer, functioning in the industry for 3+ years now.
              I make meaningful and delightful digital products that create an equilibrium
              between user needs and business goals.</p>
          </div>
        </div>

        <div className='flex mt-10 mx-7 justify-center'>
          <div className='flex  w-3/4 items-center justify-start'>
            <h1 className='text-4xl font-bold'>Work Experience</h1>
          </div>
        </div>

        <div className='flex flex-col justify-center sm:flex-row w-full'>
          <div className='flex items-center flex-col w-full sm:flex-row sm:w-3/4'>
            <Cards />
            <Cards />
          </div>
        </div>
        <div className='flex flex-col justify-center sm:flex-row w-full'>
          <div className='flex items-center flex-col w-full sm:flex-row sm:w-3/4'>
            <Cards />
            <Cards />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero