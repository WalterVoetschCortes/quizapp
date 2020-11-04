import styled from "styled-components";

export const QuestionCardDiv = styled.div`
    border: 2px solid #C1D2D9;
    border-radius: 1rem;
    padding: 1rem;
    margin-top: 1rem;
    background: #C1D2D9;
    
    p {
        color: #1F2740;
        font-family: 'Poppins', sans-serif;
    }
`;

type ButtonDivProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonDiv = styled.div<ButtonDivProps>`
    transition: all 0.3 ease;
    
    :hover {
        opacity: 0.8;
    }
    
    button{
        cursor: pointer;
        user-select: none;
        margin: 5px 0;
        font-family: 'Poppins', sans-serif;
        background: ${({ correct, userClicked }) => 
            correct
                ? '#27b376'   
                : !correct && userClicked
                ? '#bf212f'
                    : '#1F2740'};
        border-radius: 1rem;
        color: #C1D2D9;
        border:none;
        outline:none;
        text-decoration: none;
        width:100%;
        height: 40px;
        font-size: 1rem;
    }
    
`;
