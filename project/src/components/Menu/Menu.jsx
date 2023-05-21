import React from 'react';
import classes from "./Menu.module.css";
import MenuForm from "./MenuForm/MenuForm";

const Menu = () => {
    return (
        <div>
            <div className={classes.wrapperHeader}>
                <span className={classes.headerTitle}>Личный кабинет кандидата</span>
                <span className={classes.headerText}>выход</span>
            </div>
            <MenuForm/>
        </div>
    );
};

export default Menu;