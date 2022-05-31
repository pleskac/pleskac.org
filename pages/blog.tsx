import { Tabs } from "../library/components";
import styles from "./Page.module.css";
import { Footer, Meta } from "../library/layout";

const Blog: React.FC = () => {
    return (
        <div className={styles.container}>
            <Meta />
            <Tabs
                tabs={[
                    { displayName: "Home", slug: "/" },
                    { displayName: "Blog", slug: "/blog" },
                ]}
                initiallySelected={"/blog"}
            />
            <main className={styles.main}>
                <p>Blog</p>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;
