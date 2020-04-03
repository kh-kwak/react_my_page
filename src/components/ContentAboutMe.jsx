import React, { Component } from 'react';
import styles from './ContentAboutMe.module.scss';
import ContentTitle from './ContentTitle';

class ContentAboutMe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    render() {
        const { title } = this.props;
        const { hidden } = this.props;
        return (
            <section className={styles.section_aboutMe} aria-hidden={hidden}>
                <ContentTitle title={title} />
            </section>
        );
    }
}

export default ContentAboutMe;
