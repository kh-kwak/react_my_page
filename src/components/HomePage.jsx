import React, { Component } from 'react';
import SkipNav from './SkipNav';
import Header from './Header';
import Footer from './Footer';
import ContentHome from './ContentHome';
import ContentAboutMe from './ContentAboutMe';
import ContentCardGame from './ContentCardGame';
import ContentAvoidGame from './ContentAvoidGame';
import ContentBlockchain from './ContentBlockchain';
import styles from './HomePage.module.scss';
import Gnb from './Gnb';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section_hide: [
                { id: 1, hidden: false },
                { id: 2, hidden: true },
                { id: 3, hidden: true },
                { id: 4, hidden: true },
                { id: 5, hidden: true },
            ]
        }
    }
    render() {
        const section = {
            home: "Home",
            aboutMe: "About Me",
            cardGame: "Card Game",
            avoidGame: "Avoid Game",
            blockchain: "BlockChain",
        }
        const { section_hide } = this.state;
        return (
            <div className={styles.wrap}>
                <SkipNav />
                <Header />
                <Gnb
                    onPressed={
                        function(id) {
                            this.setState({
                                section_hide: section_hide.map(items => items.id === id
                                    ? { id: items.id, hidden: false }
                                    : { id: items.id, hidden: true }
                                )
                            });
                        }.bind(this)
                    }
                />
                <main id="main_container" className="main_container">
                    <ContentHome title={section.home} hidden={section_hide[0].hidden} />
                    <ContentAboutMe title={section.aboutMe} hidden={section_hide[1].hidden} />
                    <ContentCardGame title={section.cardGame} hidden={section_hide[2].hidden} />
                    <ContentAvoidGame title={section.avoidGame} hidden={section_hide[3].hidden} />
                    <ContentBlockchain title={section.blockchain} hidden={section_hide[4].hidden} />
                </main>
                <Footer />
            </div>
        );
    }
}

export default HomePage;
