import { useState } from 'react'
import {Route, Routes} from "react-router-dom" 
import Movies from "./components/Movies"
 
import Cartoons from "./components/Cartoons"
import News from "./components/News"
import './App.css'
import Nav from './components/Nav'
function App() {
  
const  [apiKey, setApiKey]=useState('8eefaf63') 
const [movie, setMovie]=useState('')
  return (
    <>
    <Nav/>
    

     <Routes>
     
      <Route path='/movies' element={<Movies />}/>
      <Route path='/cartoons' element={<Cartoons/>} />
      <Route path='/news' element={<News/>} />
      
     </Routes>
    </>
  )
}

export default App
