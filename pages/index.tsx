import { Tabs } from "library/Tabs";
import styles from "./Index.module.css";
import { Footer } from "./components/footer";
import { Meta } from "./components/meta";

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <Meta />
            <Tabs
                tabs={[
                    { displayName: "Home", slug: "/" },
                    { displayName: "Blog", slug: "/blog" },
                ]}
            />
            <main className={styles.main}>
                <p>Hello world</p>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
