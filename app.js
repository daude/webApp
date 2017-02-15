import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './quiz';
import $ from 'najax';

$.get('http://localhost:4444/quiz/', function( data ) {
	console.log('data', JSON.parse(data));

	ReactDOM.render(
		<Quiz allQuestions={JSON.parse(data)} />,
		document.getElementById('quiz-start')
	);
});

