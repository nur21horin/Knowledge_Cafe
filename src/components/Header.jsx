import React from 'react' 
import '../App.css'
import profile from '../assets/images/profile (1).png'
const Header = () => {
  return (
    <header className='flex justify-between items-center mx-5 border-b-2 '>
      <h1 className=' text-3xl text-center exo-heading'>Knowledge Cafe</h1>
      <img src={profile} alt=''/>
    </header>
  )
}

export default Header
