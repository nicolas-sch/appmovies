import React, {useEffect, useState} from 'react';
import api, {api_options} from '../../../service/api';
import './movie.css'

export default function Movie (props) {
    const {movieId} = props.match.params
    const [movie, setMovie] = useState([])
    const [genres, setGenres] = useState([])
    const imgBaseUrl = "https://image.tmdb.org/t/p/w300/"
    const imgBgBaseUrl = "https://image.tmdb.org/t/p/original/"

    useEffect(()  => load(), [])


    async function load(){

        try {
            const response = await api.get(`/movie/${movieId}`, api_options())
            setMovie(response.data)
            setGenres(response.data.genres)
            console.log(response.data)
        }catch(error){
            console.log(error)
        }
    }


    return(
            <>
                <div className="hero">
                    <div 
                        className="bg"
                        style={{backgroundImage: `url(${imgBgBaseUrl}${movie.backdrop_path})`}}
                    >
                    </div>
                    <button className="btn-back" onClick={props.history.goBack}>
                        <span className="material-icons">navigate_before</span>
                        voltar
                    </button>
                    <img src={`${imgBaseUrl}${movie.poster_path}`} alt="poster"/>
                    <div className="movie-info">
                    <h1>{movie.original_title}</h1>
                    <div className="score">
                        <span className="material-icons">grade</span>
                        {movie.vote_average}
                    </div>
                    <p className="genres">
                        {genres.map(genero=>{return genero.name + ' '})}
                    </p>
                    <p>{movie.overview}</p>
                </div>
                </div>
                
            </>

    );
}
