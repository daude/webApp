import React from 'react';
import _ from 'lodash';
//import ReactDOM from 'react-dom'
import Answer from './Answer';
import Result from './result';
import $ from 'jquery';
import {Link} from 'react-router-dom'
//import Routes from './Routes';

class OneQuestion extends React.Component {
	render() {
		//console.log('questionId------>', this.props.id)
		return (
			<form onSubmit={this.props.handleSubmit} key={Math.random()}>
				<div>
					<h3 className="text-info" ref='nam'>Hello {this.props.quiz.name}</h3>
					<p className="text-success" ref='ques'>{this.props.quiz.question}</p>
					<Answer answers={this.props.quiz.answer}
						ref='ans'
						questionId={this.props.id}
						handleClick={this.props.handleClick}
					/>
				</div>
			</form>
		)
	}
}


class Quiz extends React.Component {
	constructor(props) {
		super(props);

		let currentQuestion = 0;

		this.state = {
			data: [],
			value: '',
			currentQuestion: currentQuestion,
			answers: {},
		};
	}

	componentDidMount() {
		//console.log('quiz--->', 'http:localhost:4444/quiz/')

		$.ajax({
			type: 'GET',
			url: 'http://localhost:4444/quiz/',
			dataType: 'json',
			//cache: false,
			success: function(data) {
				this.setState({data: data}); // Notice this
			}.bind(this),
		});
	}

	showPrevQuestion() {
		this.setState({
			currentQuestion: this.state.currentQuestion - 1,
		})

	}

	showNextQuestion() {
		this.setState({
			currentQuestion: this.state.currentQuestion + 1,
		})
	}

	handleSaveAnswer(id, value) {

		let newAnswers = this.state.answers

		newAnswers[id] = value

		this.setState({
			answers: newAnswers,
			value: value
		})
	}

	saveData() {

		/*var o = {}

		_.each(this.state.answers, (i, j) => {
			// o[i] = j
			// o._id = i
		})*/

		/*console.log('answers', this.state.answers)
		console.log('o', o)*/

		$.ajax({
			type: 'POST',
			url: 'http://localhost:4444/answers/',
			data: this.state.answers,
			success: function( data ) {
				//console.log('data---->', data)
				console.log('data', JSON.stringify(data));
			},
			// dataType: dataType
		});
	}

	render() {
		//console.log('questionId', this.state.questionId);
		//console.log('value', this.state.value);
		/*console.log('State:', this.state)
		console.log('currentQuestion:', this.state.currentQuestion)
		console.log('all questions:', this.state.data)*/

		let question = this.state.data[this.state.currentQuestion];
		//console.log(this.props)
		//console.log('Checking question:', _.isUndefined(question))
		//console.log(_.isUndefined(question))
		//console.log('this.state.answers', this.props.allQuestions)
		//console.log('this.state.answers', this.state.answers)

		if (this.state.data.length > this.state.currentQuestion) {
			return (
				<div>
					{_.isUndefined(question) ? <d/> :
						<div className='demo'>
							<OneQuestion
								id={question._id}
								// id={this.state.currentQuestiondddd}
								quiz={question}
								handleClick={this.handleSaveAnswer.bind(this)}
								value={this.state.value}
								//result={this.props.allQuestions}
								//onClick={this.showPrevQuestion.bind(this)}
								/>
							<div>
								{this.state.currentQuestion > 0 ?
									<button type='button'
										onClick={this.showPrevQuestion.bind(this)}
										className='btn btn-success'
									>
										Prev
									</button> : null

								}
								{this.state.currentQuestion >= 0 && this.state.answers[question._id] ?
									<button type='button'
										onClick={this.showNextQuestion.bind(this)}
										className='btn btn-success'
									>
										Next
									</button> : null
								}
							</div>
						</div>
					}
					<div>
						{this.state.answers[question._id] ?
							'your answer is ' + this.state.value:
							'You have not chosen an answer yet'
						}
					</div>
				</div>
			);
		} else {
			//console.log('this.state.answers', this.state.answers)
			return (
				<div className='btn btn-success'>
					<p className='btn btn-info'>Quiz finished,your result are here</p>
					<Result allQuestions={this.state.data}
					answers={this.state.answers}
					/><br/>
					<div>
						<button type='button' className='btn btn-info'
							onClick={this.saveData.bind(this)}>
							saveData
						</button><br/><br/>
						<div>
							<button className='btn btn-info'>
								<Link to="/main">Back to Quiz</Link>
							</button>
						</div>
					</div>
				</div>
			);
		}
	}

}

export default Quiz;

/*ReactDOM.render(
	//<Quiz allQuestions={JSON.parse(data)} />,
	<Routes />,
	document.getElementById('quiz-start')
);*/

