import React, { Component } from 'react';
import styles from './Clock.module.scss';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
        }
    }

    tick() {
        this.setState({
          time: new Date().toLocaleTimeString()
        });
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    render() {
        const { time, date } = this.state;
        return (
            <div className={styles.clock}>
                {date}&nbsp;&nbsp;{time}
            </div>
        );
    }
}

export default Clock;
