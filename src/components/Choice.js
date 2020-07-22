import React from 'react';

class Choice extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isAnswered: false,
            texts: ['','']
        };
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    checkAnswer(e) {
        let isAnswered = this.state.isAnswered;

        if (!isAnswered) {
            let elem = e.currentTarget;
            let { correct, increaseScore } = this.props;
            
        }
    }
    render() {
        return (
            <div>
                <button>
                    C. HAHAHAHA
                </button>
            </div>
            
        )
    }
}


export default Choice