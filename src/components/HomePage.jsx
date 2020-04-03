import React, { Component } from 'react';
import styles from './HomePage.module.scss';
import SkipNav from './SkipNav';
import Header from './Header';
import ContentHome from './ContentHome';
import ContentAboutMe from './ContentAboutMe';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section: {
                home: {
                    title: 'Hello.',
                    hidden: false,
                },

                aboutMe: {
                    title: 'About Me.',
                    hidden: true,
                },
            },

        }
    }
    render() {
        const { section } = this.state;
        return (
            <div className={styles.wrap}>
                <SkipNav />
                <Header />
                <main id="main_container" className="main_container">
                    <ContentHome title={section.home.title} hidden={section.home.hidden} />
                    <ContentAboutMe title={section.aboutMe.title} hidden={section.aboutMe.hidden} />
                </main>
            </div>
        );
    }
}

export default HomePage;
