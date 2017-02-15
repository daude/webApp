import React from 'react';
import _ from 'lodash';

console.clear()

class Answer extends React.Component {
	constructor(props) {
		super(props);

		// let currentQuestion = 0;

		/*this.state = {
			value: ,
			// currentQuestion: currentQuestion,
		};*/
	}

	/*handleClick(event){
		event.preventDefault();

		console.log(event.target.innerText)

		this.setState({value: event.target.innerText}, function (){
			//console.log('Your answer is ' + this.state.value);
		});

	}*/

	render() {
		return (
			<div id='test_select' >
				{
					_.map(this.props.answers, (answer) => {
						return (
							<button key={Math.random()} className='btn btn-outline-info' type='submit'
								//value={this.state.value}
								onClick={() => this.props.handleClick(this.props.questionId, answer)}
							>
								{answer}
							</button>
						);
					})
				}
				{/*<div>
					{this.state.value ?
						'your answer is ' + this.state.value :
						'You have not chosen an answer yet'
					}
				</div>*/}
			</div>
		)
	}
}

//
export default Answer;
