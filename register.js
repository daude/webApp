import React from 'react';
import './styles/register.css'
import $ from 'jquery';
import {Link} from 'react-router-dom'

class Register extends React.Component{

	constructor (props){
		super(props);

		this.state = {
			// usernames: {},
			users: {},
			messege: 'congratulation, you have successfully create your account'
		};
	}

	handleSave() {

		$.ajax({
			type: 'POST',
			url: 'http://localhost:4444/users/',
			data: {
				name: this.state.Name,
				phone: this.state.Phone,
				email: this.state.Email,
				password: this.state.Password
			},
			success: function( data ) {
				//console.log('data---->', data)
				console.log('data', JSON.stringify(data));
			},
			// dataType: dataType
		});
		alert(this.state.messege)
	}


	updateName(event) {
		this.setState({
			Name: event.target.value
		})
	}

	updatePhone(event) {
		this.setState({
			Phone: event.target.value
		})
	}


	updateEmail(event) {
		this.setState({
			Email: event.target.value
		})
	}

	updatePassword(event) {
		this.setState({
			Password: event.target.value
		})
	}

	render() {
		return (
			<div className='register'>
				<form className="form-horizontal" method='POST' action='http://localhost:4444/users/'>
					<fieldset>
						<legend>Register</legend><br/>
							<div className="form-group">
								<label className="col-md-4 control-label">Name</label>
								<div className="col-md-4">
									<input id="name" name="name" type="text" placeholder="Your Name" onChange={this.updateName.bind(this)}
									className="form-control input-md" required="" />
									{/*<span className="help-block">Name of buisness</span>*/}
								</div>
							</div>
							<div className="form-group">
								<label className="col-md-4 control-label">Phone</label>
								<div className="col-md-4">
									<input id="phone" name="phone" type="text" placeholder="Phone Number" onChange={this.updatePhone.bind(this)}
									className="form-control input-md" required="" />
									{/*<span className="help-block">Business Phone</span>*/}
								</div>
							</div>
							<div className="form-group">
								<label className="col-md-4 control-label">Email</label>
								<div className="col-md-4">
									<input id="email" name="email" type="text" placeholder="Email address" onChange={this.updateEmail.bind(this)}
									className="form-control input-md" required="" />
									{/*<span className="help-block">Email will be used for notication messages</span>*/}
								</div>
							</div>

							<div className="form-group">
								<label className="col-md-4 control-label">Password </label>
								<div className="col-md-4">
									<input id="password" name="password" type="password" placeholder="Password"
									onChange={this.updatePassword.bind(this)}
									className="form-control input-md" required=""/>
									{/*<span className="help-block">Admin Password </span>*/}
								</div>
							</div>
							<div className="form-group">
								<label className="col-md-4 control-label"></label>
								<div className="col-md-8">
									<button id="save" name="save"
										onClick={this.handleSave.bind(this)}
										className="btn btn-success"
									>
										Save
									</button>
									<button id="cancel" name="cancel" className="btn btn-danger">
										<Link to='/login'>Back</Link>
									</button>
								</div>
							</div>
					</fieldset>
				</form>
			</div>

		);
	}
}

export default Register;
