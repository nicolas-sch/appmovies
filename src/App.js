import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import Trendings from '../src/components/pages/trendings/trendings';
import Navbar from './components/navbar/navbar';
import Movie from './components/pages/movie/movie';
import Search from './components/pages/search/search';
import Home from './components/pages/home/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/trendings" component={Trendings} />
          <Route path="/movie/:movieId" component={Movie} />
          <Route path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
