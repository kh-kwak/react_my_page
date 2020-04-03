import React, { Component } from 'react';
import styles from './DropDownMenu.module.scss';

class DropDownMenu extends Component {
    render() {
        const { data } = this.props;

        const { hidden } = this.props;

        const item = {
            active : [styles.dropdown_item, styles.active].join(' '),
            inactive : styles.dropdown_item,
        }
        return (
            <nav className={styles.dropdown_menu} aria-hidden={hidden}>
                {data.map(items => (
                    <a key={items.id} href="/" className={items.active === true ? item.active : item.inactive}
                    onClick={
                        function(e) {
                            this.props.onPressed(items.id);
                            e.preventDefault();
                        }.bind(this)
                    }>{items.text}</a>
                ))}
            </nav>
        );
    }
}

export default DropDownMenu;
