import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'


function App() {
   const [bookmarks,setBookmarks]=useState([]);
   const handleAddtoBookmark= blog =>{
    const newBookMarks=[...bookmarks,blog];
    setBookmarks(newBookMarks);
   }
    
  return (
    <>
    <Header/>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddtoBookmark={handleAddtoBookmark} />
    <Bookmarks className='border-2 ' bookmarks={bookmarks}/>
    </div>
    
      
    </>
  )
}

export default App
