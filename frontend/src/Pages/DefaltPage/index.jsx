import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./DefaltPage.module.css"; // Importe seu arquivo CSS aqui

export default function DefaltPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </div>
  );
}
