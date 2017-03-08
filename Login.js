import React from 'react';
import {Link, Redirect} from 'react-router-dom';
//import _ from 'lodash';
import $ from 'jquery';
import './styles/login.css'

class Login extends React.Component {
	constructor (props){
		super(props);

		this.state = {
			users: {},
		};
	}

	handleLogin() {

		// get user name from input
		let name = 'name from input'
		let password = 'password from input'

		// get that user from mongo
		$.ajax({
            type: 'GET',
            url: 'http://localhost:4444/users/' + name,
            //data: JSON,
            success: foundUser,
            // dataType: dataType
        });

		// compare passwords from form and from mongo
		let foundUser = (user) => {
			console.log('user from mongo:', user)

			user.password === password
		}
	}

		// if passwords same -> goto next page

		// if different, show error

		//console.log('username', this.state.username)
		//console.log('password', this.state.password)

		// $.ajax({
		// 	type: 'POST',
		// 	url: 'http://localhost:4444/usernames/',
		// 	data: this.state.usernames,
		// 	success: function( data ) {
		// 		//console.log('data---->', data)
		// 		console.log('data', JSON.stringify(data));
		// 	},
		// 	// dataType: dataType
		// });


	updateName(event) {
		this.setState({
			username: event.target.value
		})
	}

	updatePassword(event) {
		this.setState({
			password: event.target.value
		})
	}

	render (){
		// check state to see if we need to redriect to logged in page (quiz)
		const {from}= this.props.location.state || {from: {pathname: '/'}}
		const {redirectToReferrer}= this.state

		if (redirectToReferrer) {
		return (
			<Redirect to={from}/>
		)
    }

		return (
			<div className = "container">
				<div className="wrapper">
					<form action="http://localhost:4444/users/" method="post" name="Login_Form" className="form-signin">
						<h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
						<hr className="colorgraph" /><br/>

						<input
							type="text"
							className="form-control"
							onChange={this.updateName.bind(this)}
							placeholder="Username"
							required=""
							autoFocus=""
							/*id='name'*/
						/>

						<input type="password" className="form-control" /*id='password'*/ onChange={this.updatePassword.bind(this)}
							placeholder="Password" required=""
						/>

						<button className="btn btn-lg btn-secondary btn-block" onClick={this.handleLogin.bind(this)}>
							Login
						</button>

						<br/>
						<span className="pull-right"><Link to="/register">Register</Link></span>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
