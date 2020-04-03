import React, { Component } from 'react';
import styles from './Footer.module.scss';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        }
    }
    render() {
        return (
            <footer className={styles.footer}>
                <small className={styles.copy_right}>Copyright ⓒ KyuHyeon Kwak All Rights Reserved.</small>
            </footer>
        );
    }
}

export default Footer;
