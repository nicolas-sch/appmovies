import React, {useEffect, useState} from 'react';
import api, {api_options} from '../../../service/api';
import './search.css';
import Cards from '../../cards/cards';

export default function Search (props) {

    const [movies, setMovies] = useState([])
    const urlAPI = "/search/movie" + props.location.search

    useEffect(()  => {load()}, [props.location.search])


    async function load(){
        try {
            const response = await api.get(urlAPI, api_options())
            setMovies(response.data.results)
            console.log(props.location)
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
