import styled, { createGlobalStyle } from "styled-components";

// yellow: #f9a73e
// green: #27b376
// red: #bf212f


export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%
    }
    
    body{
        background-color: #fff;
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
    align-items: center;
    
    > p {
        color: #C0C0C0;
    }
    
    .score {
        color: #C0C0C0;
        font-size: 1rem;
        margin: 0;
    }
    
    h1 {
        color: #f9a73e;
    }
`
