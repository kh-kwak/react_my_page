import React, { Component } from 'react';
import styles from './ContentAvoidGame.module.scss';
import ContentTitle from './ContentTitle';

class ContentAvoidGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    render() {
        const { title } = this.props;
        const { hidden } = this.props;
        return (
            <section className={styles.section_avoid_game} aria-hidden={hidden}>
                <ContentTitle title={title} />
            </section>
        );
    }
}

export default ContentAvoidGame;
