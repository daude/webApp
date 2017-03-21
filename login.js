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
			errorusername: '',
			errorpassword: '',
		};
	}

	handleLogin(e) {
		e.preventDefault();

		// get user name from input
		let name = this.state.username //#1
		//console.log('name', this.state.username)
		if (!name) {
			this.setState({
				errorusername: '*username is required'
			})
			console.error('username is required')
			//console.log('username is required')
		}

		let password = this.state.password // #2
		//console.log('Password', this.state.password)
		if (!password) {
			this.setState({
				errorpassword: '*password is required'
			})
			console.error('password is required')
			//console.log('password is required')
		}

		// compare passwords from form and from mongo
		let notFoundUser = (error) => {
			console.error('error:', error)
		}
		/*if (!notFoundUser) {
			console.log('user not found')
		}*/

		let foundUser = (userFromMongo) => {
			if (!userFromMongo) {
				//console.error('User not found')
				this.setState({
					invalidUser: 'Invalid username and password'
				})
				return
			}

			console.log('user from mongo:', userFromMongo) // #3
			// console.log('user from mongo:', this.state.users[this.state.name]) // #3

			if (userFromMongo.password === password) {
				//console.log('ok to login now')
				this.setState({loginComplete: true})
			} else {   // #4
				/*this.setState({
					invalidPassword: 'Password must be match'
				})
				return*/
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
			errorusername: '',
			username: event.target.value
		});
		/*if (!name) {
			return ('username is required');
		}*/
	}

	updatePassword(event) {
		this.setState({
			errorpassword: '',
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
		}/* else {
			<div>
				<Redirect to='/main'/>
				<p>username or Password doesn't match</p>
			</div>
		}*/
		return (
			<div className = "container">
				<div className="wrapper">
					<form onSubmit={this.handleLogin}
						name="Login_Form" className="form-signin">
						<h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
						<hr className="colorgraph" /><br/>
						<p className="text-danger">
							{this.state.invalidUser}
						</p>
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
							<p className="text-danger">
								{this.state.errorusername}
							</p>
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
							<p className="text-danger">
								{this.state.errorpassword}
{/*								{this.state.invalidUser}
*/}							</p>
						</div>
						<button
							className="btn btn-lg btn-secondary btn-block"
							onClick={this.handleLogin.bind(this)}
						>
							Login
						</button>
						{
							/*!this.state.loginComplete ? (
							) : (
								<p className="text-danger">
									{this.state.erroruser}
								</p>
							)*/
						}

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
	/*} else {
		return (
			<div>
				<p>invalid username and Password</p>
			</div>
		);
	}*/
	}
}

export default Login;
