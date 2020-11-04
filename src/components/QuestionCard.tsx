import React from 'react';

//types:
import {AnswerObject} from "../App";

//styles:
import {ButtonDiv, QuestionCardDiv} from "../styles/QuestionCard.styles";

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

//functional component
const QuestionCard: React.FC<Props> = ({
                                           question,
                                           answers,
                                           callback,
                                           userAnswer,
                                           questionNr,
                                           totalQuestions
}) => (
    <QuestionCardDiv>
        <p dangerouslySetInnerHTML={{ __html:question}} />
        <div>
            {answers.map(answer => (
                <ButtonDiv
                    key={answer}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                >
                    {answers[0]=== answer?(
                        <p>A</p>
                     ):null
                    }
                    {answers[1]=== answer?(
                        <p>B</p>
                    ):null
                    }
                    {answers[2]=== answer?(
                        <p>C</p>
                    ):null
                    }
                    {answers[3]=== answer?(
                        <p>D</p>
                    ):null
                    }
                    <button disabled={!!userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html:answer }}/>
                    </button>
                </ButtonDiv>
            ))}
        </div>
    </QuestionCardDiv>
);

export default QuestionCard;
