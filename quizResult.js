import React from 'react';
import _ from 'lodash';
import $ from 'jquery';

class QuizResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            questions: []
        }
    }

    componentDidMount() {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:4444/answers/',
            //data: JSON,
            success: ( data ) => {
                //console.log('data--->', data)
                //console.log('data', JSON.stringify(data));
                this.setState({data: data});
                //console.log('this.state.data---->', this.state.data)
            },
            // dataType: dataType
        });

        $.ajax({
            type: 'GET',
            url: 'http://localhost:4444/quiz/',
            //data: JSON,
            success: ( data ) => {
                //console.log('data--->', data)
                this.setState({questions: data});
                //console.log('this.state.question---->', this.state.question)
            },
            // dataType: dataType
        });
    }

	render() {
		return (
			<div id='test_select'>
                <h3 className="text-warning">The quiz results are here</h3><br/>
                {
                    _.map(this.state.data, (result) => {
                        //console.log('this.props.questionId---->', this.props.questionId)
                        //console.log('this.state.data---->', result)
                        return (
                            <div key={Math.random()}>
                                {
                                    _.map(result, (answer, questionId) => {

                                        // let niceQuestion = this.state.questions[this.questionId]
                                        let niceQuestion = _.find(this.state.questions, {_id: questionId});
                                        /*console.log('niceQuestion', niceQuestion)

                                        if (!niceQuestion) {
                                            console.log('Bad question id:', questionId)
                                        }*/
                                        //console.log('this.state.questions--->', this.state.questions[this.questionId])

                                                        // <h4 className="text-success"> Question : { niceQuestion === _.find(this.state.questions,
                                                        //     {niceQuestion.questions} : 'your questions is undefined'
                                                        // }
                                                        // </h4>
                                        return (
                                            <div key={Math.random()}>
                                                <div key={Math.random()}>

                                                    {niceQuestion &&
                                                        <h4 className="text-success">
                                                            Question: {niceQuestion.question}
                                                        </h4>
                                                    }

                                                    <div>
                                                        <p className="text-info"> Answer : {answer} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
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
