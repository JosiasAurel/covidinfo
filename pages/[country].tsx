import React, { FunctionComponent,useState, useEffect } from "react";

import Header from "../components/Header";
import DataCard from "../components/DataCard";

import { GetServerSideProps } from "next";
import Head from "next/head";

import styles from "../styles/index.module.css";

interface CountryPageProps {
    country: any
}

const Country: FunctionComponent<CountryPageProps> = ({ country }):JSX.Element => {
    const [info, setInfo] = useState({});

    async function fetchInfo(): Promise<void> {
        const res = await fetch(`https://covid19.mathdro.id/api/countries/${country.country}`);
        const data = await res.json();
        setInfo(data);
    }

    useEffect(() => {
        fetchInfo();
        console.log(country);
    }, [info])

    return (
        <div className={styles.indexPage}>
            <Head>
                <title>Coronavirus info - {country.country} </title>
                <meta name="title" content="Coronavirus info" />
                <meta name="description" content="Get some information about coronavirus"></meta>
            </Head>
            <Header country={country.country} />
            <h2>Coronavirus Info</h2>
            <div className={styles.infoCardsContainer}>
                <section className={styles.infoCards}>
                <DataCard title="Infected" value={ info !== {} ? info.confirmed.value : "Fetching"} />
                <DataCard title="Recovered" value={ info !== {} ? info.recovered.value : "Fetching"} />
                <DataCard title="Deaths" value={ info !== {} ? info.deaths.value : "Fetching"} />
                <DataCard title="Effective" value={ info !== {} ? info.confirmed.value + info.deaths.value : "Fetching"} />
            </section>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async context => {
    console.log(context.query);
    const country = context.query;
    /* const res = await fetch(`https://covid19.mathdro.id/api/countries/${country}`);
    const data = await res.json(); */
    return {
        props: { country }
    }
}

export default Country;