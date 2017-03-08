import React from 'react';
import {Link} from 'react-router-dom'

class NewUser extends React.Component {
	render() {
		return (
			<div>
				<h3 className='text-info'>
					Congratulation you have create your new Account<br/>
					Click on Login page to Login
				</h3>
				<div>
					<button className="btn btn-success">
						<Link to='/login'>Login page</Link>
					</button>
				</div>
			</div>
		)
	}
}

export default NewUser;
