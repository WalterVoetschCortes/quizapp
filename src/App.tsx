import React, {useState} from 'react';
// Types:
import {Difficulty, fetschQuizQuestions} from "./API";
// Components:

const TOTAL_QUESTIONS = 10;

//main component in the application
const App = () => {

    //loading state:
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [userAnswer, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(fetschQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))


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
            {/*<QuestionCard
                questionNr = {number + 1}
                totalQuestions = {TOTAL_QUESTIONS}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer={userAnswer ? userAnswer[number] : undefined}
                callback={checkAnswer}
            />*/}
            <button className="next" onClick={nextQuestion}>
                Next Question
            </button>
        </div>
    );
}

export default App;


