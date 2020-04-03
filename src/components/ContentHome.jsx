import React, { Component } from 'react';
import styles from './ContentHome.module.scss';
import ContentTitle from './ContentTitle';
import ContentHomeMediaArea from './ContentHomeMediaArea';

class ContentHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    render() {
        const { title } = this.props;
        const { hidden } = this.props;
        return (
            <section className={styles.section_home} aria-hidden={hidden}>
                <ContentTitle title={title} />
                <ContentHomeMediaArea />
            </section>
        );
    }
}

export default ContentHome;
