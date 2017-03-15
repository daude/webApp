import React from 'react';
import {Link, Redirect} from 'react-router-dom';
//import _ from 'lodash';
import $ from 'jquery';
import './styles/login.css'
//import Main from './main'

class Login extends React.Component {
	constructor (props){
		super(props);

		this.state = {
			users: {},
		};
	}

	handleLogin(e) {
		e.preventDefault()

		// get user name from input
		let name = this.state.username //#1
		//console.log('name', this.state.username)
		if (!name) {
			console.error('username is required')
			return
		}

		let password = this.state.password // #2
		//console.log('Password', this.state.password)
		if (!password) {
			console.error('password is required')
			return
		}

		// compare passwords from form and from mongo
		let notFoundUser = (error) => {
			console.error('error:', error)
		}

		let foundUser = (userFromMongo) => {
			console.log('user from mongo:', userFromMongo) // #3
			// console.log('user from mongo:', this.state.users[this.state.name]) // #3

			if (userFromMongo.password === password) {
				console.log('ok to login now')
				this.setState({loginComplete: true})
			} else {   // #4
				console.log('Password must be match')
			}
		}

		// get that user from mongo
		$.ajax({
			type: 'GET',
			url: 'http://localhost:4444/users/' + name,
			//data: JSON,
			success: foundUser,
			error: notFoundUser,
			// dataType: dataType
		});

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

	render() {
		// check state to see if we need to redriect to logged in page (quiz)
		// const {Login}= this.state.users || {Login: {pathname: '/'}}
		// const {redirectToReferrer}= this.state

		if (this.state.loginComplete) {
			return (
				<div>
					<Redirect from='/login' to='/main' />
				</div>
			)
		} /*else {
			<div>
				<p>username or Password doesn't match</p>
				<Redirect to='/main'/>
			</div>
		}*/
		return (
			<div className = "container">
				<div className="wrapper">
					<form onSubmit={this.handleSubmit}
						name="Login_Form" className="form-signin">
						<h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
						<hr className="colorgraph" /><br/>
						<div>
							<input
								type="text"
								className="form-control"
								onChange={this.updateName.bind(this)}
								placeholder="Username"
								required="true"
								autoFocus=""
								id='Username'
							/>
						</div>
						<div>
							<input
								type="password"
								className="form-control"
								onChange={this.updatePassword.bind(this)}
								placeholder="Password"
								required="true"
								autoFocus=""
								id='password'
							/>
						</div>
						<button
							className="btn btn-lg btn-secondary btn-block"
							onClick={this.handleLogin.bind(this)}
						>
							Login
						</button>

						<br/>
						<span className="pull-right">
							<Link to="/register">
								Register
							</Link>
						</span>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
