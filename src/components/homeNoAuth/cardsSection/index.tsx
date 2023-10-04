import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const CardsSection = function () {
    return (
        <>
            <p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
            <Container className='d-flex flex-wrap justify-content-center gap-4 pb-5'>
                <div className={styles.card1}>
                    <p className={styles.cardTitle}>FRONT-END</p>
                    <p className={styles.cardDescription}>
                        Bem-vindo à CineCourse, a plataforma de aprendizado online que oferece acesso a uma vasta gama de cursos de alta qualidade,
                        ministrados por especialistas renomados em todo o mundo. Nosso objetivo é fornecer uma experiência de aprendizado enriquecedora,
                        flexível e acessível para todos, independentemente de onde estejam.
                    </p>
                </div>
                <div className={styles.card2}>
                    <p className={styles.cardTitle}>BACK-END</p>
                    <p className={styles.cardDescription}>
                        Bem-vindo à CineCourse, a plataforma de aprendizado online que oferece acesso a uma vasta gama de cursos de alta qualidade,
                        ministrados por especialistas renomados em todo o mundo. Nosso objetivo é fornecer uma experiência de aprendizado enriquecedora,
                        flexível e acessível para todos, independentemente de onde estejam.
                    </p>
                </div>
                <div className={styles.card3}>
                    <p className={styles.cardTitle}>MOBILE</p>
                    <p className={styles.cardDescription}>
                        Bem-vindo à CineCourse, a plataforma de aprendizado online que oferece acesso a uma vasta gama de cursos de alta qualidade,
                        ministrados por especialistas renomados em todo o mundo. Nosso objetivo é fornecer uma experiência de aprendizado enriquecedora,
                        flexível e acessível para todos, independentemente de onde estejam.
                    </p>
                </div>
                <div className={styles.card4}>
                    <p className={styles.cardTitle}>GIT E GITHUB</p>
                    <p className={styles.cardDescription}>
                        Bem-vindo à CineCourse, a plataforma de aprendizado online que oferece acesso a uma vasta gama de cursos de alta qualidade,
                        ministrados por especialistas renomados em todo o mundo. Nosso objetivo é fornecer uma experiência de aprendizado enriquecedora,
                        flexível e acessível para todos, independentemente de onde estejam.
                    </p>
                </div>
                <div className={styles.card5}>
                    <p className={styles.cardTitle}>FRONT-END</p>
                    <p className={styles.cardDescription}>
                        Bem-vindo à CineCourse, a plataforma de aprendizado online que oferece acesso a uma vasta gama de cursos de alta qualidade,
                        ministrados por especialistas renomados em todo o mundo. Nosso objetivo é fornecer uma experiência de aprendizado enriquecedora,
                        flexível e acessível para todos, independentemente de onde estejam.
                    </p>
                </div>
            </Container>
        </>
    );
};

export default CardsSection;