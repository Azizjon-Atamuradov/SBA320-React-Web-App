  import React from 'react'
import { Link } from 'react-router-dom'




function Nav() {
  return (
   <>
   <div className="navbar"> 


   <Link to="/home" >
   Home
   </Link> 

   <Link to="/movies" >
   Movies
   </Link> 

   <Link to="/cartoons">
    Cartoons
   </Link> 

   <Link to="/news" >
    News
   </Link> 
   
   </div>
   
   </>
  )
}

export default Nav