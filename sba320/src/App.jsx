import { useState } from 'react'
import {Route, Routes} from "react-router-dom" 
import './App.css'

function App() {
  

  return (
    <>
     <Routes>

      <Route path='/movies' element={<Movies/>}/>
      <Route path='/cartoons' element={<Cartoons/>} />
      <Route path='/news' element={<News/>} />
      
     </Routes>
    </>
  )
}

export default App
