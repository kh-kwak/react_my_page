import React, { Component } from 'react';
import styles from './ContentTitle.module.scss';

class ContentTitle extends Component {
    render() {
        const { title } = this.props;
        return (
            <h2 className={styles.title}>{title}</h2>
        );
    }
}

export default ContentTitle;
