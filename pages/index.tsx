import React, { FunctionComponent, useState, useEffect } from "react";

import Header from "../components/Header";
import DataCard from "../components/DataCard";

import styles from "../styles/index.module.css";

const Index: FunctionComponent = (): JSX.Element => {

    const [data, setData] = useState({});

    function fetchData() {
        fetch("https://covid19.mathdro.id/api")
            .then(res => res.json())
            .then(d => {
                console.log(d);
                setData(d);
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className={styles.indexPage}>
            <Header />
            <div className={styles.infoCardsContainer}>
                <section className={styles.infoCards}>
                <DataCard title="Infected" value={ data !== {} ? data.confirmed.value : "Fetching"} />
                <DataCard title="Recovered" value={ data !== {} ? data.recovered.value : "Fetching"} />
                <DataCard title="Deaths" value={ data !== {} ? data.deaths.value : "Fetching"} />
                <DataCard title="Effective" value={ data !== {} ? data.confirmed.value + data.deaths.value : "Fetching"} />
            </section>
            </div>
        </div>
    )
}

export default Index;