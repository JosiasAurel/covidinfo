import React, { FunctionComponent } from "react";

import styles from "../styles/index.module.css";

interface HeaderProps {
    country?: string
}

const Header: FunctionComponent<HeaderProps> = ({ country }): JSX.Element => {
    return (
        <header className={styles.header}>
            <h2>{ country ? country : "World" }</h2>
            <form>
                <input type="text" placeholder="Enter country name" />
            </form>
        </header>
    )
}

export default Header;