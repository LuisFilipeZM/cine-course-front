import Link from "next/link";
import styles from "./styles.module.scss";
import { Button, Container } from "react-bootstrap";

const HeaderNoAuth = () => {
    return (
        <>
            <div className={styles.ctaSection}>
                <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />
                <p>Se cadastre para ter acesso aos cursos</p>
                <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />
            </div>
            <Container className={styles.nav}>
                <img src="/logoOnebitflix.svg" alt="logoOnebitflix" className={styles.imgLogoNav} />
                <div>
                    <Link href="/login">
                        <Button className={styles.navBtn} variant="outline-primary">Entrar</Button>
                    </Link>
                    <Link href="/register">
                        <Button className={styles.navBtn} variant="outline-primary">Quero fazer parte</Button>
                    </Link>
                </div>
            </Container>
        </>
    );
};

export default HeaderNoAuth;