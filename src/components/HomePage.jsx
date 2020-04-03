import React, { Component } from 'react';
import styles from './HomePage.module.scss';
import SkipNav from './SkipNav';
import Header from './Header';
import Footer from './Footer';
import ContentHome from './ContentHome';
import ContentAboutMe from './ContentAboutMe';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section: [
                { id: 1, title: 'Hello.', hidden: false },
                { id: 2, title: 'About Me.', hidden: true },
                { id: 3, title: 'Card Game.', hidden: true },
                { id: 4, title: 'Avoid Game.', hidden: true },
                { id: 5, title: 'BlockChain.', hidden: true },
            ]
        }
    }
    render() {
        const { section } = this.state;
        return (
            <div className={styles.wrap}>
                <SkipNav />
                <Header onChange={
                    function(id) {
                        this.setState({
                            section: section.map(items => items.id === id ?
                                { id: items.id, title: items.title, hidden: false } :
                                { id: items.id, title: items.title, hidden: true }
                            )
                        });
                    }.bind(this)
                } />
                <main id="main_container" className="main_container">
                    <ContentHome title={section[0].title} hidden={section[0].hidden} />
                    <ContentAboutMe title={section[1].title} hidden={section[1].hidden} />
                </main>
                <Footer />
            </div>
        );
    }
}

export default HomePage;