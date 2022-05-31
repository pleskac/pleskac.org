import { Tabs } from "../library/tabs";
import styles from "./Page.module.css";
import { Footer } from "../library/components/footer";
import { Meta } from "../library/components/meta";

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
