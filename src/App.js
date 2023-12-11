import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './components/routes/About'
import Home from './components/routes/Home'
import Navigation from './components/Navigation';
import Detail from './components/routes/Detail';

function App() {

  return (
    <HashRouter>
      <Navigation />
      <Route path="/about" component={About} />
      <Route path="/" exact={true} component={Home} />
      <Route pass="movie-detail" component={Detail}/>
    </HashRouter>
  );
}

export default App;
