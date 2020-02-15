import React from 'react';
import { StyledWelcomeScreen } from './styles/StyledWelcomeScreen';

const WelcomeScreen = ({ callback, gameOver }) => (
  <StyledWelcomeScreen>
  { !gameOver ?
    <>
      <h1>React Tetris</h1>
      <p>
        Welcome to React Tetris
      </p>
      <button onClick={callback}>Start Game</button>
    </>
    :
    <>
      <h1> Game Over</h1>
      <button onClick={callback}>Start New Game</button>
    </>


  }
  </StyledWelcomeScreen>
)

export default WelcomeScreen;