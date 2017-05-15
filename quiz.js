import React from 'react';
//import _ from 'lodash';
//import ReactDOM from 'react-dom'
import Answer from './Answer';
//import Result from './result';
import QuizFinished from './quizFinished';
import $ from 'jquery';
//import {Link} from 'react-router-dom'
//import Routes from './Routes';

class OneQuestion extends React.Component {
	render() {
		//console.log('this.props.quiz.question', this.props.quiz.question)
		//console.log('this.props.questionId------>', this.props.id)
		//console.log('this.props.quiz.answers', this.props.quiz.answers)
		//console.log('this.props.handleClick', this.props.handleClick)
		return (
			<form onSubmit={this.props.handleSubmit} key={Math.random()}>
				<div>
					<h3 className="text-info" ref='nam'>Hello {this.props.quiz.name}</h3>
					<p className="text-success" ref='ques'>{this.props.quiz.question}</p>
					<Answer answers={this.props.quiz.answers}
						ref='ans'
						questionId={this.props._id}
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
			previousAnswer: 'You have not chosen an answer yet',
			messege: 'your data was saved'
		};
		//console.log('currentQuestion----->', currentQuestion)
		//console.log('this.state.data', this.state.data)
	}

	componentDidMount() {
		//console.log('quiz--->', 'http:localhost:4444/quiz/')
		//console.log('this', this)
		$.ajax({
			type: 'GET',
			url: 'http://localhost:4444/quizs/' + this.props.match.params.id,
			dataType: 'json',
			//cache: false,
			success: function(data) {
				this.setState({data: data}); // Notice this
			}.bind(this),
		});
		//console.log('data--->', this.data)
	}

	showPrevQuestion() {
		this.setState({
			//answers: '',
			currentQuestion: this.state.currentQuestion - 1,
		})
		//console.log('this.state.currentQuestion(prev)--->', this.state.currentQuestion)

	}

	showNextQuestion() {
		console.log('this.state.handleSaveAnswer---->', this.state.value)
		this.setState({
			answers: {},
			previousAnswer: 'You have not chosen an answer yet',
			currentQuestion: this.state.currentQuestion + 1,
		})
		//console.log('this.state.currentQuestion(Next)--->', this.state.currentQuestion)
	}

	handleSaveAnswer(id, value) {
		console.log('handleSaveAnswer clicked')
		console.log('id--->', id)
		//console.log('value--->', value)
		//console.log('this.state.answers--->', this.state.answers)

		let newAnswers = this.state.answers

		newAnswers[id] = value

		this.setState({
			answers: newAnswers,
			value: value,
			previousAnswer: 'your answer is ' + value,
		})
		//console.log('this.state.answers', this.state.answers)
	}

	getQuestion(id) {
		//console.log('this.state.data.quiz[id]', this.state.data.quiz[id])
		return this.state.data.quiz[id]
	}

	render() {
		//console.log('questionId', this.state.questionId);
		//console.log('value', this.state.value);
		//console.log('this.state.value:', this.state.value)
		//console.log('this.state.data', this.state.data)
		// console.log(_.find(this.state.data.quiz, {
		// 	this.props.match.params.id
		// })

		if (!this.state.data.quiz) {
			return (
				<div>
					Loading...
				</div>
			)
		}

		let question = this.getQuestion(this.state.currentQuestion)

		console.log('this.state.currentQuestion---->', this.state.currentQuestion)
		console.log('question:', question)

		// {this.state.answers[question._id] ?
		// 	'your answer is ' + this.state.answers[question._id]:
		//console.log('questionId', this.state.questionId)
		//console.log('answers--->', this.state.data.quiz[this.state.answers])
		// console.log('questions1234:', )
		//console.log(this.props)
		//console.log('Checking question:', _.isUndefined(question))
		//console.log(_.isUndefined(question))
		//console.log('this.state.answers', this.props.allQuestions)
		//console.log('this.state.answers', this.getQuestion(this.state.currentQuestion))
		/*if (this.state.data.length > this.state.quiz) {*/
		//console.log('this.state.value--->', this.state.value)
		//console.log('this.state.answers----->', this.state.quiz.answers)
		//console.log('QuizFinished------>', QuizFinished)
		//console.log('this.state.answers[question._id]====>', this.state.answers[question._id])
		return (
			<div>
				<div className='demo'>
					<OneQuestion
						id={question._id}
						// id={this.state.currentQuestiondddd}
						quiz={question}
						// question={ques}
						handleClick={this.handleSaveAnswer.bind(this)}
						value={this.state.value}
						result={this.props.allQuestions}
						//onClick={this.showPrevQuestion.bind(this)}
					/>
					<div>
						{//this.state.answers[question._id] &&
							this.state.currentQuestion > 0 ?
							<button type='button'
								onClick={this.showPrevQuestion.bind(this)}
								className='btn btn-success'
							>
								Prev
							</button> : null
						}

						{//this.state.value &&
							//this.state.previousAnswer &&
							//this.state.handleClick &&
							this.state.answers[question._id] && //? &&
							this.state.currentQuestion < 5 ? //&&

							<button type='button'
								onClick={this.showNextQuestion.bind(this)}
								className='btn btn-success'
							>
								Next
							</button> : null
						}
					</div>
				</div>
				<div>
					{this.state.previousAnswer}
				</div>
				<div>
					{
						this.state.currentQuestion > 1 ?
						<QuizFinished result={QuizFinished} /> : null
					}
				</div>
			</div>
		);
	}
}

export default Quiz;
