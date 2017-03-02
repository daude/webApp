import React from 'react';
import _ from 'lodash';

class Result extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        //console.log('this.props.allQuestions', this.props.allQuestions);
        //console.log('this.props.answers', this.props.answers)

        return (
            <div id='test_questions'>
                {
                    _.map(this.props.allQuestions, (question) => {
                        //console.log('question', question)
                        //console.log('Answer', answers)
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
        )
    }
}

export default Result;
