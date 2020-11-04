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
                    <button disabled={!!userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html:answer }}/>
                    </button>
                </ButtonDiv>
            ))}
        </div>
    </QuestionCardDiv>
);

export default QuestionCard;
