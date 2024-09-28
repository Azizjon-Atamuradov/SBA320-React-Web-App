import React from 'react'
import { useState, useEffect } from 'react'
import Form from './Form'









function Movies({}) {
    //////
    const  [apiKey, setApiKey]=useState('8eefaf63') 
    const [movie, setMovie]=useState('null')
    //////



    const getMovie = async(searchTerm) => { 
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
         
        ) 
        const data = await response.json()
        console.log(data);
        setMovie(data)
        } 
        
        useEffect(() => {
          getMovie("Superbad")
        }, []) 
        ////



  return (
    <> 
    
    <Form movieSearch={getMovie}/> 
    <div className="title">{movie.Title}</div>


   <div className="flexer">      
   <div className="poster"><img src={movie.Poster} alt="" /></div>

     <div className="info">Genre: {movie.Genre} <hr />
    Year: {movie.Year} <hr />
    Country: {movie.Country} <hr />
    Description: {movie.Plot} <hr />

     </div>
    </div>   
    </>
  )
}

export default Movies