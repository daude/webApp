
import React from 'react';
import ReactDOM from 'react-dom';
/*import Quiz from './quiz';
//import Home from './welcome';
import Result from './result';
import Main from './main';*/
//import Quiz from './Routes';
import Routes from './Route';
//import Routes from './Routes';
//import {BrowserRouter as Router, browserHistory, Route} from 'react-router-dom';

//import Home from './startQuiz';
//import $ from 'najax';

ReactDOM.render(
	//<Quiz allQuestions={JSON.parse(data)} />,
	<Routes />,

	document.getElementById('quiz-start')
);
