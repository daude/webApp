import React from 'react';
import _ from 'lodash';
import Answer from './Answer';

class OneQuestion extends React.Component {
	render() {
		//console.log(this)
		//console.log('loading question:', this.props.quiz.id)
		return (
			<form onSubmit={this.props.handleSubmit} key={Math.random()}>
				<div>
					<h3 className="text-info" ref='nam'>{this.props.quiz.name}</h3>
					<p className="text-success" ref='ques'>{this.props.quiz.question}</p>
					<Answer answers={this.props.quiz.answer}
						ref='ans'
						questionId={this.props.quiz._id}
						handleClick={this.props.handleClick}
						//value={this.state.value}
						//onClick={this.props.handleClick}
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
			value: '',
			currentQuestion: currentQuestion,
			button: false,
			answers: {},
		};
	}

	showPrevQuestion() {
		if (this.state.currentQuestion < 1) {
			return
		}
		this.setState({
			currentQuestion: this.state.currentQuestion - 1,
			button: false,
		})
	}

	showNextQuestion() {
		if (this.state.currentQuestion > 9) {
			return
		}
		this.setState({
			currentQuestion: this.state.currentQuestion + 1,
			button: false,
		})
	}

	handleSaveAnswer(id, value) {
		//event.preventDefault();

		console.log('question id:', id)
		console.log('value', value)

		let newAnswers = this.state.answers

		newAnswers[id] = value

		this.setState({
			answers: newAnswers,
			button: true,
			value: value
		})
		console.log('my answer list:', this.state.answers)

	}

	render() {
		//console.log('State:', this.state)

		/*console.log('number:', this.state.currentQuestion)
		console.log('all questions:', this.props.allQuestions.length)
*/
		let question = this.props.allQuestions[this.state.currentQuestion];

		console.log(_.isUndefined(question))

		return (
			<div>
				{_.isUndefined(question) ? <d/> :
					<div className='demo'>
						<OneQuestion
							quiz={question}
							handleClick={this.handleSaveAnswer.bind(this)}
							value={this.state.value}/>
						<div>
							{this.state.button === true ?
								<button type='button'
								//value={this.state.value}
								onClick={this.showPrevQuestion.bind(this)}
								className='btn btn-success'>Prev</button> : null
							}
							{this.state.button === true?
							<button type='button'onClick={this.showNextQuestion.bind(this)}
							className='btn btn-success' >Next</button> : null
							}
						</div>
					</div>
				}
				<div>
					{this.state.value ?
						'your answer is ' + this.state.value :
						'You have not chosen an answer yet'
					}
				</div>
			</div>
		)
	}
}

export default Quiz;
