import styled from "styled-components";
import bgImage from '../../images/bg.png';

export const StyledTetrisWrapper = styled.div`
  width: 400px;
  height: 100vh;
  margin: 0 auto;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
  outline: none;

  @media (max-width: 480px) {
    width: 300px;

    
  }  
`

export const StyledTetris = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding: 10px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 100vw;
    display: block;
    padding: 0 20px;
  }
`