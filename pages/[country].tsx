import React, { FunctionComponent,useState, useEffect } from "react";

import Header from "../components/Header";
import DataCard from "../components/DataCard";

import { GetServerSideProps } from "next";
import Head from "next/head";

import styles from "../styles/index.module.css";

interface CountryPageProps {
    data: any,
    country: any
}

const Country: FunctionComponent<CountryPageProps> = ({ data, country }):JSX.Element => {
    // const [info, setInfo] = useState({});

    /* async function fetchInfo(): Promise<void> {
        const res = await fetch(`https://covid19.mathdro.id/api/countries/${country.country}`);
        const data = await res.json();
        setInfo(data);
    }

    useEffect(() => {
        fetchInfo();
        console.log(country);
    }, [info]) */
    useEffect(() => {
        console.log(data);
        //console.log(country)
    })

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
                    <DataCard title="Infected" value={ data !== {} ? (data.confirmed.value).toLocaleString() : "Fetching"} />
                    <DataCard title="Recovered" value={ data !== {} ? (data.recovered.value).toLocaleString() : "Fetching"} />
                    <DataCard title="Deaths" value={ data !== {} ? (data.deaths.value).toLocaleString() : "Fetching"} />
                    <DataCard title="Effective" value={ data !== {} ? (data.confirmed.value + data.deaths.value).toLocaleString() : "Fetching"} />
                </section> 
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async context => {
    console.log(context.query);
    const country = context.query;
    const res = await fetch(`https://covid19.mathdro.id/api/countries/${country.country}`);
    const data = await res.json(); 
    console.log(data);
    return {
        props: { data, country }
    }
}

export default Country;