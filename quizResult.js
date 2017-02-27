import React from 'react';
import _ from 'lodash';
//import $ from 'najax';

class QuizResult extends React.Component {
	render() {
		return (
			<div id='test_questions'>
				{
                    _.map(this.props.allQuestions, (question) => {
                        return (
                            <div key={Math.random()}>
                                Question:{question.question}
                                <div>
                                    Answer:{this.props.answers[question._id]}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
		);
	}
}
console.log('QuizResult---------->', QuizResult)

export default QuizResult;
