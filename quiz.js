import React from 'react';
import _ from 'lodash';
import Answer from './Answer';

class OneQuestion extends React.Component {
	render() {
		console.log(this)
		return (
			<form onSubmit={this.props.handleSubmit} key={Math.random()}>
				<div key={this.props.quiz.id}>
					<h3>{this.props.quiz.name}</h3>
					<p>{this.props.quiz.question}</p>
					<Answer answers={this.props.quiz.answer} handleChange={this.props.handleChange} />
				</div>
			</form>
		)
	}
}

/*const d = () => (
		<h3> No questions left </h3>
	)*/

class Quiz extends React.Component {
	constructor(props) {
		super(props);

		let currentQuestion = 0;

		this.state = {
			value: '',
			currentQuestion: currentQuestion,

		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	/*handleSubmit(event) {
		event.preventDefault();
		console.log(this.state)
		alert('Your answer is ' + this.state.value);
	}*/

	showPrevQuestion() {
		if (this.state.currentQuestion < 1) {
			return
		}
		this.setState({
			currentQuestion: this.state.currentQuestion - 1
		})
	}

	showNextQuestion() {
		// console.log('Current state:', this.state.currentQuestion)
		//(this.props.allQuestions.length -1)
		if (this.state.currentQuestion > 9) {
			return
		}
		this.setState({
			currentQuestion: this.state.currentQuestion + 1
		})
	}

	render() {
		console.log('State:', this.state)

		console.log('number:', this.state.currentQuestion)
		console.log('all questions:', this.props.allQuestions.length)

		let question = this.props.allQuestions[this.state.currentQuestion];
		//console.log(question)

		console.log(_.isUndefined(question))

		return (
			<div>
				{_.isUndefined(question) ? <d/> :
					<div className='demo'>
						<OneQuestion quiz={question} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
						<div>
							{this.state.currentQuestion !== 0 ?
								<button onClick={this.showPrevQuestion.bind(this)}>Prev</button> : null
							}

							<button onClick={this.showNextQuestion.bind(this)}>Next</button>
						</div>
					</div>
				}
			</div>
		)
	}
}

export default Quiz;
