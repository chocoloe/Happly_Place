import React, { useState } from 'react';

export default function Questionnaire() {
    const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York' },
				{ answerText: 'London' },
				{ answerText: 'Paris' },
				{ answerText: 'Dublin' },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos' },
				{ answerText: 'Elon Musk' },
				{ answerText: 'Bill Gates' },
				{ answerText: 'Tony Stark' },
			],
		},
		{
			questionText: '',
			answerOptions: [
				{ answerText: '' },
				{ answerText: '' },
				{ answerText: '' },
				{ answerText: '' },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1' },
				{ answerText: '4' },
				{ answerText: '6' },
				{ answerText: '7' },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	

	const handleAnswerOptionClick = () => {

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			alert('please go to the journaling section')
		}
	};
    return (
		<div className='quiz'>
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
		</div>
	);
}