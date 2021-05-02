import React, { FunctionComponent, useState } from "react";

import styles from "../styles/index.module.css";

import { useRouter } from "next/router";

interface HeaderProps {
    country?: string
}

const Header: FunctionComponent<HeaderProps> = ({ country }): JSX.Element => {

    const [Country, setCountry] = useState();

    const router = useRouter();

    function handleFormSubmit(event) {
        event.preventDefault();
        router.replace(`/${Country}`);
    }

    function handleChange(event, handler) {
        handler(event.target.value);
    }

    return (
        <header className={styles.header}>
            <h2>{ country ? country : "World" }</h2>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <input value={Country}  onChange={(event) => handleChange(event, setCountry)} type="text" placeholder="Enter country name" />
            </form>
        </header>
    )
}

export default Header;