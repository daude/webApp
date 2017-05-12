import React from 'react';
//import _ from 'lodash';
import $ from 'jquery';

class Users extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			users: [],
		}

	}

	componentDidMount() {

		$.ajax({
			type: 'GET',
			url: 'http://localhost:4444/users/',
			dataType: 'json',
			//cache: false,
			success: function(data) {
				this.setState({data: data});
				console.log('data--->', this.state.data)
			}.bind(this),
		});
	}

	render() {
		return (
			<div>
				<h3>UserName</h3>
				<div>
					{

						/*_.map(this.state.data, (users) => {
							<componentDidMount users={users} />
						})*/
					}
				</div>
			</div>
		)
	}
}

export default Users;
