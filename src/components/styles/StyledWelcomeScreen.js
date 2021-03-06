import styled from "styled-components";

export const StyledWelcomeScreen = styled.div `
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
  min-height: 30px;
  width: 100%;
  height: 100vh;
  border: none;
  color: white;
  background: #333333c9;
  font-family: Pixel,Arial,sans-serif;
  font-size: 1rem;
  outline: none;
  text-align: center;

  .game-modes, .credits {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
`