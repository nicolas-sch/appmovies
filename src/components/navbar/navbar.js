import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import Logo from '../../assets/logo.png'
import './navbar.css';

function Navbar (props) {

    const [search, setSearch] = useState("");

    function buscar(e) {
        e.preventDefault()
        props.history.push("/search?query=" + search)
    }

    return (
        <div className="navbar">
            
            <a href="/" className="logo"><img src={Logo}/></a>
            <a href="/trendings">Trendings</a>
            
            <form onSubmit={buscar}>
                <input 
                    type="text" 
                    name="query" 
                    id="query" 
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">Procurar</button>
            </form>
        </div>
    )
}

export default withRouter(Navbar);