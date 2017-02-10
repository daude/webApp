import React from 'react';
import _ from 'lodash';
import $ from 'jquery';
// global.jQuery = require('jquery');
import bootstrap from 'bootstrap';
// // const $ = require('jquery')


// console.log($)

class Answer extends React.Component {
	render() {
		return (
			<div id='test_select' onChange={this.props.handleChange}>
				{
					_.map(this.props.answers, (answer) => {
						return (
							<button key={Math.random()} className='btn btn-primary'>
								{answer}
							</button>
						);
					})
				}
			</div>
		)
	}
}

//
export default Answer;
