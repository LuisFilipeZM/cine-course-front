import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss";
import HeaderNoAuth from '../src/components/homeNoAuth/headerNoAuth';

const HomeNoAuth = () => {
    return (
        <>
            <Head>
                <title>CineCourse</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image x-icon" />
                <meta property="og:title" content="CineCourse" key="title" />
                <meta name="description" content="Obtenha acesso aos melhores cursos de uma forma simples e fácil!"/>
            </Head>
            <main>
                <HeaderNoAuth/>
            </main>
        </>
    );
};

export default HomeNoAuth;