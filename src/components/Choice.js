import React from 'react';

class Choice extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isAnswered: false,
            texts: ['CN','USA']
        };
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    checkAnswer(e) {
        let { isAnswered } = this.props;

        if (!isAnswered) {
            let elem = e.currentTarget;
            let { currentAnswer, increaseScore } = this.props;
            let answer = Number(elem.dataset.id);
            
            if (answer === currentAnswer){
                increaseScore();
            }

            this.props.showButton();
        }
    }
    render() {
        return (
            <div id="answers">
                <ul>
                    <li onClick={this.checkAnswer} data-id="0"><span>CN</span></li>
                    <li onClick={this.checkAnswer} data-id="1"><span>USA</span></li>
                </ul>
            </div>
            
        )
    }
}


export default Choice