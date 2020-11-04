import React, {useState} from 'react';
// Types:

import {Difficulty, fetchQuizQuestions, QuestionState} from "./API";
// Components:
import QuestionCard from "./components/QuestionCard";

// Styles;
import {AlignRight, QuestionNumberDiv, Wrapper, GlobalStyle} from "./styles/App.styles";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

//main component in the application
const App = () => {

    //states:
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);


    // function to start the quiz:
    const startTrivia = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        );

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(!gameOver){
            //answer of user
            const answer = e.currentTarget.value;

            //check answer
            const correct = questions[number].correct_answer === answer;

            //increment score if answer is correct
            if(correct) setScore(prev => prev + 1);

            //save answer
            const answerObject = {
                question: questions[number].question,
                answer: answer,
                correct: correct,
                correctAnswer: questions[number].correct_answer
            };
            setUserAnswers(prev => [...prev, answerObject])
        }
    }

    const nextQuestion = () => {
        // go to the next question if it not is the last:
        const nextQuestion = number+1;

        if(nextQuestion ===TOTAL_QUESTIONS){
            setGameOver(true);
        }else {
            setNumber(nextQuestion)
        }
    }

    return (
        <>
            <GlobalStyle />
        <Wrapper>

            <h1>QuizApp</h1>

            <QuestionNumberDiv>
                <p className="split-para">Questions<span>{number + 1} of {TOTAL_QUESTIONS}</span></p>
            </QuestionNumberDiv>

            {!gameOver ? <p className="score">Score: <span>{score}</span></p> : null}

            {loading && <p>Loading Questions...</p>}
            {!loading && !gameOver && (
                <QuestionCard
                    questionNr = {number + 1}
                    totalQuestions = {TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                />
            )}
            {!gameOver && !loading && userAnswers.length === number+1 && number !== TOTAL_QUESTIONS - 1 ? (
                <AlignRight>
                    <button className="next" onClick={nextQuestion}>
                        <p>next</p>
                    </button>
                </AlignRight>
            ): null}

            {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && !loading  ? (
                <button className="start" onClick={startTrivia}>
                    <p>New Game</p>
                </button>
            ): null}

        </Wrapper>
        </>
    );
}

export default App;


