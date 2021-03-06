import React from 'react'
//import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom';

class Main extends React.Component{
	render(){
		return (
			<div>
				<h3>What do you want to do?</h3>
				{/*<button className='btn btn-success'>
					<Link to='/'> Home </Link>
				</button>*/}
                <button className='btn btn-success'>
					<Link to='/quiz'> PlayQuiz </Link>
				</button>
				<button className='btn btn-success'>
					<Link to='/quizResult'> DisplayResult </Link>
				</button>
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
*/
