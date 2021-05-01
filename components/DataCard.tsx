import React,  { FunctionComponent } from "react";

import styles from "../styles/index.module.css";

interface DataCardProps {
    title: string,
    value: string
}

const DataCard: FunctionComponent<DataCardProps> = ({ title, value }): JSX.Element => {
    return (
        <div className={styles.infoCard}>
            <h2> {title} </h2>

            <p> {value} </p>
        </div>
    )
}

export default DataCard;