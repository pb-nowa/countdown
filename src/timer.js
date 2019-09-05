import React from 'react';
import { directive } from '@babel/types';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 10
        };
    }

    countdown() {
        let { timer } = this.state;
        timer -= 1;
        const that = this;
        window.setTimeout(() => {
            that.setState({ timer });
            if (timer > 0) that.countdown();
        }, 1000);
    }

    componentDidMount() {
        this.countdown();
    }

    render() {
        const { timer } = this.state;
        return(
            <div>
                <h1>{timer}</h1>
            </div>
        )
    }
}

export default Timer;