import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom'
import Result from './result'

class QuizFinished extends React.Component {
	constructor(props) {
		super(props);


		this.state = {
			data: [],
			value: '',
		};
		console.log('data', this.state.data)
	}

	saveData() {

		let data = {
			user: this.state.user,
			quizid: this.state.quizid,
			quiz: this.state.answers,
		}

		console.log('data----->', data)

		//alert(this.state.messege);

		$.ajax({
			type: 'POST',
			url: 'http://localhost:4444/answers/',
			data: {
				user: this.state.user,
				quizid: this.state.quizid,
				quiz: this.state.answers,
			},

			success: function( data ) {
				//console.log('data---->', data)
				console.log('data', JSON.stringify(data));
			},
			// dataType: dataType
		});
	}

	render () {
		//console.log('this.state.quiz-->', this.state.quiz)
		//console.log('this.state.answers-->', this.state.answers)
		console.log('this.state.data', this.state.data)

		return (
			<div className='btn btn-success'>
				<p className='btn btn-info'>Quiz finished,your result are here</p>
				<Result
					result={Result}
					//allQuestions={this.state.data}
					//answers={this.state.answers}
				/>
				<br/>
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

export default QuizFinished;
