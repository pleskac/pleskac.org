import styles from "./Page.module.css";
import { Footer, Meta } from "../library/layout";
import { Tabs } from "../library/components";

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
