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
            </section>
        );
    }
}

export default ContentBlockchain;
