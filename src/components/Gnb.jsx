import React, { Component } from 'react';
import styles from './Gnb.module.scss';

class Gnb extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        const gnb_list = [
            { id: 1, class: "fas fa-home", text: "홈" },
            { id: 2, class: "fas fa-user-tag", text: "소개" },
            { id: 3, class: "fas fa-gamepad", text: "카드게임" },
            { id: 4, class: "fas fa-poo-storm", text: "똥피하기" },
            { id: 5, class: "fas fa-cubes", text: "블록체인" },
        ];

        return (
            <nav className={styles.gnb}>
                {gnb_list.map(items => (
                    <a key={items.id} className={styles.link} href="/"
                    onClick={
                        function(e) {
                            e.preventDefault();
                            this.props.onPressed(items.id);
                        }.bind(this)
                    }>
                        <i className={items.class}>
                            <span className="blind">{items.text}</span>
                        </i>
                    </a>
                ))}
            </nav>
        );
    }
}

export default Gnb;
