import React from 'react';
import { StyledWelcomeScreen } from './styles/StyledWelcomeScreen';

const WelcomeScreen = ({ callback, gameOver, score }) => (
  <StyledWelcomeScreen>
  { !gameOver ?
    <>
      <div className="fade-in">
        <h1>React Tetris</h1>
        <p>
          <h2>Welcome to React Tetris</h2>
          <span>Choose a game mode to begin</span>
        </p>
        <div className="game-modes">  
          <button onClick={callback}>Easy Mode</button>
          <button onClick={callback}>Advanced</button>
          <button onClick={callback}>Highscores</button>
        </div>

        <div className="credits">
          <button onClick={callback}>Credits</button>
        </div>
      </div>
    </>
    :
    <>
      <div className="fade-in">
        <h1> Game Over</h1>

        <div className="game-modes">  
          <button onClick={callback}>Start New Game</button>
          <button onClick={callback}>Go Home</button>
        </div>
        <div>
          <h2>Highscores</h2>

        </div>
      </div>
    </>


  }
  </StyledWelcomeScreen>
)

export default WelcomeScreen;