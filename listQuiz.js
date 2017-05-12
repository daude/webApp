import React from 'react'
//import Users from './users'
import $ from 'jquery';
import {Link} from 'react-router-dom';
import _ from 'lodash';

/*console.log('Loading main')
*/
class Main extends React.Component{
	constructor (props) {
		super(props);

		let currentList = 0;

		this.state = {
			//data: [],
			//value: '',
			currentList: currentList,
			//answers: {},
			//messege: 'your data was saved'
		};

	}

	componentDidMount() {
		//console.log('quiz--->', 'http:localhost:4444/quiz/')
		// console.log('quiz._id--->', this.state.quiz.quiz._id)

		$.ajax({
			type: 'GET',
			url: 'http://localhost:4444/quizs/',
			dataType: 'json',
			//cache: false,
			success: function(data) {
				this.setState({allQuizs: data}); // Notice this
				//console.log('data---->', data)
			}.bind(this),
		});
	}


	render(){
		//console.log('Rendering main')

		return (
			<div>
				{
					_.map(this.state.allQuizs, (quiz) => {
						//console.log('quiz----->', quiz)
						// console.log('quiz.quiz--->', quiz.quiz)
						return (
							<div key={Math.random()}>
								<button className='btn btn-success'>
									<Link to={'/quiz/' + quiz._id}>{quiz.about}</Link>
								</button>
							</div>
                        );
					})
				}
			</div>
		);
	}
}
export default Main;

/*ReactDOM.render(
	//<Quiz allQuestions={JSON.parse(data)} />,
	<Quiz />,
	document.getElementById('quiz-start')
);
                            <div key={Math.random()}>
                                Quiz:{quiz.quiz}
                                <div>
                                    Answer:{this.props.answers[quiz._id]}
                                </div>
                            </div>
*/
/*
	<div>
		<h3>What do you want to do?</h3>
        <button className='btn btn-warning'>
			<Link to='/quiz/0'> PlayQuiz 1</Link>
		</button><br/><br/>
		<button className='btn btn-success'>
			<Link to='/quiz/1'> PlayQuiz 2</Link>
		</button><br/><br/>
		<button className='btn btn-info'>
			<Link to='/quiz'> PlayQuiz 3</Link>
		</button><br/><br/>
		<button className='btn btn-warning'>
			<Link to='/quiz'> PlayQuiz 4</Link>
		</button><br/><br/>
		<button className='btn btn-danger'>
			<Link to='/quiz'> PlayQuiz 5</Link>
		</button><br/><br/>
		<button className='btn btn-success'>
			<Link to='/quiz'> PlayQuiz 6</Link>
		</button><br/><br/>
		<button className='btn btn-secondary btn-lg'>
			<Link to='/users'> DisplayResult </Link>
		</button>
    </div>*/
