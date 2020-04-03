import React, { Component } from 'react';
import styles from './ContentHomeMediaArea.module.scss';

class ContentHomeMediaArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    render() {
        return (
            <div className={styles.media_area}>
                <strong className={styles.text}>About<br />KyuHyeon Kwak.</strong>
            </div>
        );
    }
}

export default ContentHomeMediaArea;
