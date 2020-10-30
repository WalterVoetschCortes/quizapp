import React from 'react';

// Components:
import QuestionCard from "./components/QuestionCard";


//main component in the application
const App = () => {

    // function to start the quiz:
    const startTrivia = async () => {

    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    const nextQuestion = () => {

    }

    return (
        <div className="App">
            <h1>QUIZAPP</h1>
            <button className="start" onClick={startTrivia}>
                Start
            </button>
            <p className="score">Score:</p>
            <p>Loading Questions...</p>
            <QuestionCard />
            <button className="next" onClick={nextQuestion}>
                Next Question
            </button>
        </div>
    );
}

export default App;


