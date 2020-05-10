import React, { Component } from 'react';
import styles from './ContentCardGame.module.scss';
import ContentTitle from './ContentTitle';
import CardGameContainer from './CardGameContainer';

class ContentCardGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        const { title, hidden } = this.props;
        
        return (
            <section className={styles.section_card_game} aria-hidden={hidden}>
                <ContentTitle title={title} />
                <CardGameContainer />
            </section>
        );
    }
}

export default ContentCardGame;
