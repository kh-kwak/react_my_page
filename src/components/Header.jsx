import React, { Component } from 'react';
import styles from './Header.module.scss';
import DropDownMenu from './DropDownMenu';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
           dropdown_list: [
               { id: 1, text: "Home", active: true },
               { id: 2, text: "About Me", active: false },
               { id: 3, text: "Card Game", active: false },
               { id: 4, text: "Avoid Game", active: false },
               { id: 5, text: "BlockChain", active: false },
           ],

           dropdownMenu_hidden: true,
        }
    }
    render() {
        const { dropdown_list } = this.state;
        const { dropdownMenu_hidden } = this.state;
        return (
            <header className={styles.header}>
                <h1 className={styles.logo_title}>
                    <a href="/" className={styles.logo_link}>
                        <i className={styles.icon_logo} />
                        <span className="blind">kyuhyeon Kwak</span>
                    </a>
                </h1>
                <button className={styles.ham_menu} onClick={
                    function() {
                        this.setState({
                            dropdownMenu_hidden: dropdownMenu_hidden === true ? false : true
                        });
                    }.bind(this)
                }>
                    <i className={styles.icon_ham} />
                    <span className="blind">메뉴</span>
                </button>
                <DropDownMenu hidden={dropdownMenu_hidden} data={dropdown_list} onPressed={
                    function(id) {
                        this.setState({
                            dropdown_list: dropdown_list.map(items => items.id === id ?
                                { id: items.id, text: items.text, active: true }
                            : { id: items.id, text: items.text, active: false })
                        });
                    }.bind(this)
                } />
            </header>
        );
    }
}

export default Header;
