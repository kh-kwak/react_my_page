import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './CardGameContainer.module.scss';

let flipped_list = [];

class CardGameContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            level: 1,
            // score: 4000,
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

        for(let i = 0; i < card_list[1].length; i++) {
            card_list[0].splice(2*i + 1, 0, card_list[1][i]);
        }

        return card_list[0];
    }

    flipCard = (idx, score) => {
        const ele = document.getElementsByClassName(styles.card)[idx];
        ele.classList.add(styles.back);

        flipped_list.push(ele);

        const end_game = document.getElementsByClassName(styles.victory_pop_up)[0];

        if(flipped_list.length === (this.state.level + 1) * 4) {
            end_game.classList.add(styles.active);
        }
        else {
            if(flipped_list.length !== 0 && flipped_list.length % 2 === 0) {
                let el1 = flipped_list[flipped_list.length - 1].childNodes[1].childNodes[0].innerHTML;
                let el2 = flipped_list[flipped_list.length - 2].childNodes[1].childNodes[0].innerHTML;

                if(el1 !== el2) {
                    // this.updateScore(score);
                    setTimeout(function() {
                        flipped_list[flipped_list.length - 1].classList.remove(styles.back);
                        flipped_list[flipped_list.length - 2].classList.remove(styles.back);
                        flipped_list.pop();
                        flipped_list.pop();
                    }, 800);
                }
            }
        }
    }

    updateScore = score => {
        this.setState({ score: score - 500 });
    }

    reload = () => {
        document.getElementsByClassName(styles.victory_pop_up)[0].classList.remove(styles.active);

        for(let items of flipped_list) {
            items.classList.remove(styles.back);
        }

        flipped_list = [];
    }

    levelUpdate = level => {
        this.setState({ level: level, score: level * 4000 });
    }

    chageLevel = level => {
        const ele = document.getElementsByClassName(styles.level_btn);

        for(let item of ele) {
            item.setAttribute('aria-selected', 'false');
        }

        ele[level - 1].setAttribute('aria-selected', 'true');

        this.reload();

        setTimeout(() => { this.levelUpdate(level); }, 400);
    }

    render() {
        const { level, score } = this.state;

        return (
            <div className={styles.card_game_container}>
                <div className={styles.level_info} role="tablist">
                    <button type="button"
                            className={styles.level_btn}
                            role="tab"
                            aria-selected="true"
                            onClick={() => {
                                this.chageLevel(1);
                            }
                    }>
                                Level 1
                    </button>
                    <button type="button"
                            className={styles.level_btn}
                            role="tab"
                            aria-selected="false"
                            onClick={() => {
                                this.chageLevel(2);
                            }
                    }>
                                Level 2
                    </button>
                    <button type="button"
                            className={styles.level_btn}
                            role="tab"
                            aria-selected="false"
                            onClick={() => {
                                this.chageLevel(3);
                            }
                    }>
                                Level 3
                    </button>
                </div>
                <div className={styles.score}>
                    Your Score: {score}
                </div>
                <div className={styles.card_game_board} role="tabpanel">
                    {this.makeCardList(level).map((items, idx) => (
                        <button type="button"
                           key={idx}
                           className={styles.card}
                           onClick={() => { this.flipCard(idx, this.state.score); }}>
                            <div className={classnames(styles.card_content, styles.card_front)} />
                            <div className={classnames(styles.card_content, styles.card_back)}>
                                <div className={styles.num}>
                                    {items}
                                </div>
                                <div className={styles.star}>
                                    {new Array(items).fill(0).map((item, index) => (
                                        <span key={index} className={styles.icon_star}>
                                            <i className="far fa-star" />
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
                <div className={styles.victory_pop_up}>
                    <div className={styles.text}>
                        Congratulations!!
                    </div>
                    <div className={styles.area_btn}>
                        <button type="button" className={styles.control_btn} onClick={() => { this.reload(); this.levelUpdate(this.state.level); }}>
                            New Game
                        </button>
                        <button type="button" className={styles.control_btn} onClick={() => { document.getElementsByClassName(styles.victory_pop_up)[0].classList.remove(styles.active); }}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardGameContainer;
