import React from 'react';
import './styles/register.css'
import $ from 'jquery';

class Register extends React.Component{

	constructor (props){
		super(props);

		this.state = {
			usernames: {},
		};
	}

	storeRegistration() {

		// get user name from input

		// get that user from mongo

		// compare passwords from form and from mongo

		// if passwords same -> goto next page

		// if different, show error

		/*console.log('username', this.state.username)
		console.log('password', this.state.password)*/

		$.ajax({
			type: 'POST',
			url: 'http://localhost:4444/registration/',
			data: this.state.registration,
			success: function( data ) {
				//console.log('data---->', data)
				console.log('data', JSON.stringify(data));
			},
			// dataType: dataType
		});
	}

	render() {
		return (
			<div className='register'>
				<form className="form-horizontal">
					<fieldset>
						<legend>Register</legend><br/>
							<div className="form-group">
								<label className="col-md-4 control-label">Name</label>
								<div className="col-md-4">
									<input id="name" name="name" type="text" placeholder="Your Name"
									className="form-control input-md" required="" />
									{/*<span className="help-block">Name of buisness</span>*/}
								</div>
							</div>
							<div className="form-group">
								<label className="col-md-4 control-label">Phone</label>
								<div className="col-md-4">
									<input id="phone" name="phone" type="text" placeholder="Phone Number"
									className="form-control input-md" required="" />
									{/*<span className="help-block">Business Phone</span>*/}
								</div>
							</div>
							<div className="form-group">
								<label className="col-md-4 control-label">Email</label>
								<div className="col-md-4">
									<input id="email" name="email" type="text" placeholder="Email address"
									className="form-control input-md" required="" />
									{/*<span className="help-block">Email will be used for notication messages</span>*/}
								</div>
							</div>

							<div className="form-group">
								<label className="col-md-4 control-label">Password </label>
								<div className="col-md-4">
									<input id="password" name="password" type="password" placeholder="Password"
									className="form-control input-md" required=""/>
									{/*<span className="help-block">Admin Password </span>*/}
								</div>
							</div>

							{/*<div className="form-group">
								<label className="col-md-4 control-label"> Re-type Password</label>
								<div className="col-md-4">
									<input id="rpassword" name="rpassword" type="password" placeholder="Re-type Password"
									className="form-control input-md" required="" />
									{/*<span className="help-block">Retype password</span>*/}
								{/*</div>*/}
							{/*</div>*/}

							{/*<div className="form-group">*/}
							{/*	<label className="col-md-4 control-label">Address</label>
								<div className="col-md-4">
									<input id="address1" name="address1" type="text" placeholder="Address "
									className="form-control input-md" required=""/>
								</div>
							</div>

							<div className="form-group">
								<label className="col-md-4 control-label">Address 2</label>
								<div className="col-md-4">
									<input id="address1" name="address2" type="text" placeholder="Address2"
									className="form-control input-md"/>
								</div>
							</div>

							<div className="form-group">
								<label className="col-md-4 control-label">City</label>
								<div className="col-md-4">
									<input id="city" name="city" type="text" placeholder="City"
									className="form-control input-md" required=""/>
								</div>
							</div>

							<div className="form-group">
								<label className="col-md-4 control-label">Select Country</label>
									<div className="col-md-4">
										<select id="selectbasic" name="selectbasic" className="form-control">
											<option value="">Choose State:</option>
											<option value="AL">Alabama</option>
											<option value="AK">Alaska</option>
											<option value="AZ">Arizona</option>
											<option value="AR">Arkansas</option>
											<option value="CA">California</option>
											<option value="CO">Colorado</option>
											<option value="CT">Connecticut</option>
											<option value="DE">Delaware</option>
											<option value="FL">Florida</option>
											<option value="GA">Georgia</option>
											<option value="HI">Hawaii</option>
											<option value="ID">Idaho</option>
											<option value="IL">Illinois</option>
											<option value="IN">Indiana</option>
											<option value="IA">Iowa</option>
											<option value="KS">Kansas</option>
											<option value="KY">Kentucky</option>
											<option value="LA">Louisiana</option>
											<option value="ME">Maine</option>
											<option value="MD">Maryland</option>
											<option value="MA">Massachusetts</option>
											<option value="MI">Michigan</option>
											<option value="MN">Minnesota</option>
											<option value="MS">Mississippi</option>
											<option value="MO">Missouri</option>
											<option value="MT">Montana</option>
											<option value="NE">Nebraska</option>
											<option value="NE">Nepal</option>
											<option value="NV">Nevada</option>
											<option value="NH">New Hampshire</option>
											<option value="NJ">New Jersey</option>
											<option value="NM">New Mexico</option>
											<option value="NY">New York</option>
											<option value="NC">North Carolina</option>
											<option value="ND">North Dakota</option>
											<option value="OH">Ohio</option>
											<option value="OK">Oklahoma</option>
											<option value="OR">Oregon</option>
											<option value="PA">Pennsylvania</option>
											<option value="RI">Rhode Island</option>
											<option value="SC">South Carolina</option>
											<option value="SD">South Dakota</option>
											<option value="TN">Tennessee</option>
											<option value="TX">Texas</option>
											<option value="UT">Utah</option>
											<option value="VT">Vermont</option>
											<option value="VA">Virginia</option>
											<option value="WA">Washington</option>
											<option value="WV">West Virginia</option>
											<option value="WI">Wisconsin</option>
											<option value="WY">Wyoming</option>
										</select>
									</div>
							</div>
*/}
							{/*<div className="form-group">
								<label className="col-md-4 control-label">Zip Code</label>
								<div className="col-md-4">
									<input id="zip" name="zip" type="text" placeholder="Zip Code"
									className="form-control input-md" required=""/>
								</div>
							</div>*/}

							{/*<div className="form-group">
								<label className="col-md-4 control-label">Contact Name</label>
								<div className="col-md-4">
									<input id="contactname" name="contactname" type="text" placeholder="Full Name"
									className="form-control input-md" required=""/>
								</div>
							</div>

							<div className="form-group">
								<label className="col-md-4 control-label">Contact Phone</label>
								<div className="col-md-4">
									<input id="contactphone" name="contactphone" type="text" placeholder="Phone Number"
									className="form-control input-md" required=""/>
								</div>
							</div>

							<div className="form-group">
								<label className="col-md-4 control-label">Email</label>
								<div className="col-md-4">
									<input id="contactemail" name="contactemail" type="text" placeholder="Email Address"
									className="form-control input-md" required=""/>
								</div>
							</div>*/}

							<div className="form-group">
								<label className="col-md-4 control-label"></label>
								<div className="col-md-8">
									<button id="save" name="save" className="btn btn-success">Save</button>
									<button id="cancel" name="cancel" className="btn btn-danger">Cancel</button>
								</div>
							</div>
					</fieldset>
				</form>
			</div>

		);
	}
}

export default Register;
