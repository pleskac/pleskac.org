import styles from "./Page.module.css";
import { Footer, Meta } from "../library/layout";
import { Header, PageRoute } from "library/layout/header";

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <Meta />
            <Header selected={PageRoute.HOME} />
            <main className={styles.main}>
                <p>Hello world</p>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
