import React from 'react';
import _ from 'lodash';
import $ from 'jquery';

class QuizResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
       $.ajax({
            type: 'GET',
            url: 'http://localhost:4444/answers/',
            //data: JSON,
            success: function( data ) {
                //console.log('data--->', data)
                //console.log('data', JSON.stringify(data));
                this.setState({data: data});
                //console.log('this.state.data---->', this.state.data)
            }.bind(this),
            // dataType: dataType
        });
    }
	render() {
		return (
			<div id='test_select'>
                {
                    _.map(this.state.data, (result) => {
                        //console.log('this.props.questionId---->', this.props.questionId)
                        console.log('this.state.data---->', result)
                        return (
                            <div key={Math.random()}>
                                {this.result}
                            </div>
                        );
                    })
                }
            </div>
		);
	}
}
//console.log('QuizResult---------->', QuizResult)

export default QuizResult;
