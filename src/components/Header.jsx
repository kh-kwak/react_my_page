import React, { Component } from 'react';
import styles from './Header.module.scss';
import Clock from './Clock';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <header className={styles.header}>
                <h1 className={styles.logo_title}>
                    <a href="/" className={styles.logo_link}>
                        <i className={styles.icon_logo} />
                        <span className="blind">kyuhyeon Kwak</span>
                    </a>
                </h1>
                <Clock />
            </header>
        );
    }
}

export default Header;
