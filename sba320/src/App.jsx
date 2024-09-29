import { useState, useEffect } from 'react'
import {Route, Routes} from "react-router-dom" 
import './App.css'
import DigitalClock from './components/DigitalClock' 
import Nav from './components/Nav'
import Home from './components/Home'
import Movies from "./components/Movies"
import Cartoons from "./components/Cartoons"
 





function App() {
  
///const  [apiKey, setApiKey]=useState('8eefaf63') 
const [movie, setMovie]=useState('null')

 








  return (
    <>

    <DigitalClock/>
    <Nav/>
    

     <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/movies' element={<Movies movie={movie} />}/>
      <Route path='/cartoons' element={<Cartoons/>} />
     
      
     </Routes>
    </>
  )
}

export default App
