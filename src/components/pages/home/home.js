import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './home.css';
import Cards from '../../cards/cards';

export default function Home () {

    const [movies, setMovies] = useState([])

    useEffect(()  => load(), [])


    async function load(){

        try {
            const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=b94ebf4276b768167df1aa1ae8b74d06&language=pt-BR&page=1")
            setMovies(response.data.results)
            console.log(response.data.results)
        }catch(error){
            console.log(error)
        }
    }


    return(
        <div className="content">
            {movies.map((movie) =>  <Cards key={movie.id} movie={movie}/>)}
        </div>

    );
}
