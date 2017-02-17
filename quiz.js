import React from 'react';
import _ from 'lodash';
import Answer from './Answer';
import result from './result';

class OneQuestion extends React.Component {
	render() {
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
			value: '',
			currentQuestion: currentQuestion,
			answers: {},
		};
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

	render() {
		/*console.log('State:', this.state)

		console.log('number:', this.state.currentQuestion)
		console.log('all questions:', this.props.allQuestions.length)*/

		let question = this.props.allQuestions[this.state.currentQuestion];

		//console.log('Checking question:', _.isUndefined(question))
		//console.log(_.isUndefined(question))
		/*console.log('this.state.answers', this.state.answers)
		console.log('this.state.currentQuestion', this.state.currentQuestion)*/


		return (
			<div>
				{_.isUndefined(question) ? <d/> :
					<div className='demo'>
						<OneQuestion
							id={this.state.currentQuestion}
							quiz={question}
							handleClick={this.handleSaveAnswer.bind(this)}
							value={this.state.value}
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
							{this.state.currentQuestion >= 0 && this.state.answers[this.state.currentQuestion] ?
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
					{this.state.answers[this.state.currentQuestion] ?
						'your answer is ' + this.state.value:
						'You have not chosen an answer yet'
					}
				</div>
			</div>
		)
	}
}

export default Quiz;
