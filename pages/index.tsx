import React, { FunctionComponent, useState, useEffect } from "react";

import Header from "../components/Header";
import DataCard from "../components/DataCard";

import styles from "../styles/index.module.css";

import { GetStaticProps } from "next";

import Head from "next/head";

// charting
// import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

interface IndexPageProps {
    data: any
}

const Index: FunctionComponent<IndexPageProps> = ({ data }): JSX.Element => {

    // const [data, setData] = useState({});

    /* function fetchData() {
        fetch("https://covid19.mathdro.id/api")
            .then(res => res.json())
            .then(d => {
                console.log(d);
                setData(d);
            })
    } */

    /* useEffect(() => {
        fetchData();
    }, []) */

    return (
        <div className={styles.indexPage}>
            <Head>
                <title>Coronavirus info</title>
                <meta name="title" content="Coronavirus info" />
                <meta name="description" content="Get some information about coronavirus"></meta>
            </Head>
            <Header />
            <h2>Coronavirus Info</h2>
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

export const getStaticProps: GetStaticProps = async ctx  => {
    const res = await fetch("https://covid19.mathdro.id/api");
    const data = await res.json();
    
    return {
        props: { data }
    }
}

export default Index;