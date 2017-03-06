import React from 'react';
import {Link} from 'react-router-dom';
//import _ from 'lodash';
import $ from 'jquery';

class Login extends React.Component {
	constructor (props){
		super(props);

		this.state = {
			usernames: {},
		};
	}

	saveData() {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:4444/usernames/',
			data: this.state.answers,
			success: function( data ) {
				//console.log('data---->', data)
				console.log('data', JSON.stringify(data));
			},
			// dataType: dataType
		});
	}

	render (){
		return (
			<div className='btn btn-info'>
				<div>
					username: <input type='text' placeholder='username' /> <br/><br/>
					password: <input type='password' placeholder='password' /><br/>
				</div>
				<div>
					<button className='btn btn-success' onClick={this.saveData.bind(this)}>
						<Link to='/main'>
							Login
						</Link>
					</button>
				</div>
			</div>
		);
	}
}

export default Login;
