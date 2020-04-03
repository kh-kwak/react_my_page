import React, { Component } from 'react';
import styles from './ContentHome.module.scss';
import ContentTitle from './ContentTitle';

class ContentHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    render() {
        const { title } = this.props;
        return (
            <section className={styles.section_home}>
                <ContentTitle title={title} />
            </section>
        );
    }
}

export default ContentHome;
