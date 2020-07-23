import React from 'react';
import Choice from './Choice';
import data from '../data/data';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            total: data.length,
            questionAnswered: false,
            showButton: false,
            questionNumber: 0,
            question: '',
            currentAnswer: 0
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    }

    pushData(questionNumber) {
        this.setState({
            question: data[questionNumber].question,
            currentAnswer: data[questionNumber].correct,
            questionNumber: this.state.questionNumber + 1
        });
    }

    componentWillMount() {
        let { questionNumber } = this.state;
        this.pushData(questionNumber);
    }

    nextQuestion() {
        let { questionNumber, total} = this.state;

        if (questionNumber === total) {
            alert("Game over");
        } else {
            this.pushData(questionNumber);
            this.setState({
                questionAnswered: false
            });
        }
    }

    handleShowButton() {
        this.setState({
            showButton: true,
            questionAnswered: true
        })
    }

    handleIncreaseScore() {
        this.setState({
            score: this.state.score + 1
        });
    }

    render() {
        let { question, currentAnswer, questionNumber, score, texts, showButton, total, questionAnswered } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1">
                        <h4>score={score}</h4>
                        <div id="question">
                            <h4>CN or USA?</h4>
                            <p>{question}</p>
                        </div>
                        <Choice texts={texts} currentAnswer={currentAnswer} showButton={this.handleShowButton} isAnswered={questionAnswered} increaseScore={this.handleIncreaseScore}/>
                        <div id="submit">
                            {showButton ? <button className="fancy-btn" onClick={this.nextQuestion} >{questionNumber===total ? 'Finish quiz' : 'Next question'}</button> : null}
                        </div>
                    </div>   
                </div> 
            </div>
        )
    }

};

export default Main