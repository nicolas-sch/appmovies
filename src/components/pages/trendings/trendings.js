import React, {useEffect, useState} from 'react';
import api, {api_options} from '../../../service/api';
import './trendings.css';
import Cards from '../../cards/cards';

export default function Trendings () {

    const [movies, setMovies] = useState([])

    useEffect(()  => load(), [])


    async function load(){

        try {
            const response = await api.get("/trending/movie/week", api_options())
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
