import React, { useState } from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const questions = [
  {
    id: 1,
    word: 'Bonjour',
    options: ['Hello', 'Goodbye', 'Thank you'],
    correctAnswer: 'Hello'
  },
  {
    id: 2,
    word: 'Merci',
    options: ['Hello', 'Goodbye', 'Thank you'],
    correctAnswer: 'Thank you'
  },
  {
    id: 3,
    word: 'Oui',
    options: ['Yes', 'No', 'Maybe'],
    correctAnswer: 'Yes'
  },
  {
    id: 4,
    word: 'Chat',
    options: ['Dog', 'Cat', 'Bird'],
    correctAnswer: 'Cat'
  },
  {
    id: 5,
    word: 'Bleu',
    options: ['Red', 'Green', 'Blue'],
    correctAnswer: 'Blue'
  },
];

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const navigate = useNavigate();


  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setSelectedAnswer('');
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Congratulations! You have completed the quiz. Your score is ${score}/${questions.length}.`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-950">
      <Card variant="outlined" className="max-w-md w-full rounded-lg shadow-lg bg-white"
      
      >
        <CardContent>
          <Typography variant="h5" component="h2" className="mb-4 text-gray-800">
            Question {currentQuestion + 1}
          </Typography>
          <Typography variant="h4" component="h1" className="mb-8 text-gray-900">
            {questions[currentQuestion].word}
          </Typography>
          <div className="grid grid-cols-1 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswer === option ? 'contained' : 'outlined'}
                onClick={() => handleOptionClick(option)}
                className="w-full hover:bg-blue-600 hover:text-white"
              >
                {option}
              </Button>
            ))}
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            className="mt-8 w-full"
          >
            Next
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizPage;
