import React from 'react';
import { NavLink } from 'react-router-dom';
import {Badge} from '@material-ui/core';
import './cards.css';

export default function CardMovie ({movie}) {
    const imgUrl = "url(https://www.themoviedb.org/t/p/w200/";
    const date = new Date(movie.release_date)
    const date_release = date.toLocaleDateString()

    return (
        <div className="card-movie">
            <Badge 
                badgeContent={movie.vote_average} 
                anchorOrigin={{vertical: 'top',horizontal: 'left',}} 
                color={movie.vote_average>6?'primary' : 'secondary'}
            />
            <div 
            className="poster-image" 
            style={ {backgroundImage: `${imgUrl}${movie.poster_path})`} }
            >
            </div>
            <h1 className="title">{movie.title}</h1>
            <h2 className="subTitle">{date_release}</h2>
            <NavLink to={`/movie/${movie.id}`} className="btn-detail">
                <span className="material-icons">add_circle_outline</span>
                <span>Detalhes</span>
            </NavLink>
        </div>
    );
}

