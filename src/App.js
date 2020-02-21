import React from 'react';
import Tetris from './components/Tetris';
import './components/styles/animations.css';
import './App.css';
import Helmet from 'react-helmet';

const App = () => (
  <div className="App">
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="A React.js tetris app designed by Tonye Brown. Designed to be fun and extensible." />
        <meta name="keywords" cpntent="react tetris game,tonye brown portfolio,react example game" />
        <title>React Tetris - By Tonye Brown</title>
    </Helmet>
    <Tetris />
  </div>
);

export default App;