import React, { FunctionComponent } from "react";

import Header from "../components/Header";
import DataCard from "../components/DataCard";

import { GetServerSideProps } from "next";

import styles from "../styles/index.module.css";

const Country: FunctionComponent = ({ data }):JSX.Element => {
    return (
        <div className={styles.indexPage}>
            <Header />
            <h2>Coronavirus Info</h2>
            <div className={styles.infoCardsContainer}>
                <section className={styles.infoCards}>
                <DataCard title="Infected" value={ data !== {} ? data.confirmed?.value : "Fetching"} />
                <DataCard title="Recovered" value={ data !== {} ? data.recovered?.value : "Fetching"} />
                <DataCard title="Deaths" value={ data !== {} ? data.deaths?.value : "Fetching"} />
                <DataCard title="Effective" value={ data !== {} ? data.confirmed?.value + data.deaths?.value : "Fetching"} />
            </section>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async context => {
    console.log(context.query);
    const country = context.query;
    const res = await fetch(`https://covid19.mathdro.id/api/countries/${country}`);
    const data = await res.json();
    return {
        props: { data }
    }
}

export default Country;