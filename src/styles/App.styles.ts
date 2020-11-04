import styled, { createGlobalStyle } from "styled-components";

// yellow: #f9a73e
// green: #27b376
// red: #bf212f


export const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
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
    width: 800px;
    align-items: left;
    margin:0;
    
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
        margin-top:1rem;
        margin-bottom: 1rem;
    }
    
    
    .start, .next{
        cursor: pointer;
        background: #1F2740;
        color: #C1D2D9;
        outline:none;
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
        border:none;
        display: inline-block;
        text-align: right;
    }
    
    .start{
        text-align: center;
    }
    
    .start, .next p{
        font-family: 'Poppins', sans-serif;
        font-size: 1.25rem;
    }
    .start p{
        font-size: 2rem;
        color: #f9a73e;
    }
    
    .next:hover{
        color: #708090;
    }
`;

export const QuestionNumberDiv = styled.div`
    width: 800px;
    margin-top:0;
 
    .split-para { 
        display:block;
        color: #708090;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
    }

    .split-para span { 
        display:block;
        float:right;
        color:#C1D2D9;
        font-family: 'Poppins', sans-serif;
    }
`;

export const AlignRight = styled.div`
    width: 800px;
    text-align: right;
`;
