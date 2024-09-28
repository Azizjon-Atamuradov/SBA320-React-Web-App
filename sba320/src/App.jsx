import { useState, useEffect } from 'react'
import {Route, Routes} from "react-router-dom" 
import Movies from "./components/Movies"
 
import Cartoons from "./components/Cartoons"
import News from "./components/News"
import './App.css'
import Nav from './components/Nav'
function App() {
  
///const  [apiKey, setApiKey]=useState('8eefaf63') 
const [movie, setMovie]=useState('null')

///////////////////////////////////
// const getMovie = async(searchTerm) => { 
// const response = await fetch(
//   `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
 
// ) 
// const data = await response.json()
// console.log(data);
// setMovie(data)
// } 

// useEffect(() => {
//   getMovie("Superbad")
// }, []) 
/////////////////////////////////////








  return (
    <>
    <Nav/>
    

     <Routes>
     
      <Route path='/movies' element={<Movies movie={movie} />}/>
      <Route path='/cartoons' element={<Cartoons/>} />
      <Route path='/news' element={<News/>} />
      
     </Routes>
    </>
  )
}

export default App
