import styled, { createGlobalStyle } from "styled-components";

// yellow: #f9a73e
// green: #27b376
// red: #bf212f


export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%
    }
    
    body{
        background-color: #1F2740;
        background-size: cover;
        margin: 0;
        padding 0 20px;
        display: flex;
        justify-content: center
    }
    
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
    align-items: left;
    
    > p {
        color: #708090;
        font-family: 'Poppins', sans-serif;
    }
    
    .score {
        color: #C1D2D9;
        font-size: 1.25rem;
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }
    .score span{
        color: #f9a73e;
        font-family: 'Poppins', sans-serif;
    }
    
    h1 {
        color: #f9a73e;
        font-family: 'Staatliches', regular;
        font-size: 3.5rem;
    }
`;

export const QuestionNumberDiv = styled.div`
    width: 700px;
    
    .split-para { 
        display:block;
        color: #708090;
        font-size: 1.25rem;
        font-family: 'Poppins', sans-serif;
    }

    .split-para span { 
        display:block;
        float:right;
        color:#C1D2D9;
        font-family: 'Poppins', sans-serif;
    }
`;
