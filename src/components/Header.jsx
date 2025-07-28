import React from 'react' 
import '../App.css'
import profile from '../assets/images/profile (1).png'
const Header = () => {
  return (
    <header className='flex justify-between items-center p-4  border-b-2 max-w-7xl mx-auto'>
      <h1 className=' text-3xl text-center exo-heading'>Knowledge Cafe</h1>
      <img src={profile} alt=''/>
    </header>
  )
}

export default Header
