import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import questions from "./Components/QuestionBank.json";
import Score from "./Components/Score";
import './App.css';

function App() {
    const [questionBank] = useState(questions);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);
    const [quizEnd, setQuizEnd] = useState(false);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        checkAnswer();
        handleNextQuestion();
    };

    const checkAnswer = () => {
        if (selectedOption === questionBank[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion + 1 < questionBank.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption("");
        } else {
            setQuizEnd(true);
        }
    };

    return (
        <div className="App d-flex flex-column align-items-center justify-content-center">
            <h1 className="app-title">QUIZ APP</h1>
            {!quizEnd ? (
                <Question
                    question={questionBank[currentQuestion]}
                    selectedOption={selectedOption}
                    onOptionChange={handleOptionChange}
                    onSubmit={handleFormSubmit}
                />
            ) : (
                <Score
                    score={score}
                    onNextQuestion={handleNextQuestion}
                    className="score"
                />
            )}
        </div>
    );
}

export default App;
