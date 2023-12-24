import React from 'react'
import Background from '../assets/images/barrel.jpg'

const Home = () => {
  return (
    <div style={{backgroundImage:`url(${ Background })`}}
    className='flex flex-row justify-center mx-auto-bg-fixed bg-cover'>
      <div className='flex place-items-center h-screen'>
        <h2 className='p-5 bg-black-800 bg-opacity-70 text-amber-300 rounded-md font-serif'>Welcome to the Barrel Room</h2>
      </div>
    </div>
  )
}

export default Home
