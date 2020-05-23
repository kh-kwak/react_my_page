import React, { Component } from 'react';
import styles from './ContentBlockchain.module.scss';
import ContentTitle from './ContentTitle';

class ContentBlockchain extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        const { title } = this.props;
        const { hidden } = this.props;
        return (
            <section className={styles.section_blockchain} aria-hidden={hidden}>
                <ContentTitle title={title} />
                <strong className={styles.title}>My Article</strong>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a href="https://brunch.co.kr/@curg/25" target="_blank">하이퍼레저 패브릭이란? -입문</a>
                    </li>
                </ul>
            </section>
        );
    }
}

export default ContentBlockchain;
