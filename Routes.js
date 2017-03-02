
import React from 'react';
//import Home from './welcome';
import Quiz from './quiz';
import QuizResult from './quizResult';
import Main from './main';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import Match from 'react-router';
//import _ from 'lodash';

//console.log('Router', Router)
class Routes extends React.Component {
	render() {
		//console.log('_dirname--->', '_dirname')
		return (
			<div>
				<Router>
					<div>
						{/*<h3>What do you want to do?</h3>
						<button className='btn btn-success'>
							<Link to='/quiz'> PlayQuiz </Link>
						</button>
						<button className='btn btn-success'>
							<Link to='/result'> DisplayResult </Link>
						</button>

						<hr/>*/}
						<Route exact path='/' component={Main} />
						<Route path='/quiz' component={Quiz} />
						<Route path='/quizResult' component={QuizResult} />
					</div>
				</Router>
			</div>
		)
	}
}
/*
const Routes = () => (
	<Router>
		<div>
			<Route exact path='/' component={Main} />
			<Route path='/quiz' component={Quiz} />
			<Route path='/result' component={Result} />
		</div>
	</Router>
)
*/
export default Routes;

/*const Routes = () => (
	<Router>
		<div>
			<h3>What do you want to do?</h3>
                <button className='btn btn-success'>
					<Link to='/quiz'> PlayQuiz </Link>
				</button>
				<button className='btn btn-success'>
					<Link to='/quizResult'> DisplayResult </Link>
				</button>

			<Route exact path='/' component={Main}/>
			<Route path='/quiz' component={Quiz}/>
			<Route path='/quizResult' component={QuizResult}/>
		</div>
	</Router>
)

export default Routes;*/

