import React, { Component } from 'react';
import styles from './CardGameContainer.module.scss';

class CardGameContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            level: 1,
        }
    }

    makeCardList = (level) => {
        let length = (level + 1) * 4;
        let card_list = [];

        for(let i = 0; i < 2; i++) {
            let temp = [];
            while(temp.length < length / 2) {
                let randomNum = Math.floor(Math.random() * (length / 2)) + 1;
                if(temp.indexOf(randomNum) < 0) {
                    temp.push(randomNum);
                }
            }
            card_list.push(temp);
        }
        
        return card_list[0].concat(card_list[1]);
    }

    render() {
        const { level } = this.state;
        
        return (
            <div className={styles.card_game_container}>
                <div className={styles.card_game_board}>
                    {this.makeCardList(level).map((items, idx) => (
                        <div key={idx} className={styles.card}>
                            {items}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default CardGameContainer;
