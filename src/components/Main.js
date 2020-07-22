import React from 'react';
import Choice from './Choice';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        }
    }

    render() {
        return (
            <div className="container">
            Hello World
            </div>
        )
    }

};

export default Main