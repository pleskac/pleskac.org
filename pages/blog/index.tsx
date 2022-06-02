import styles from "pages/Page.module.css";
import { Footer, Meta } from "library/layout";
import { Header, PageRoute } from "library/layout/header";

const Blog: React.FC = () => {
    return (
        <div className={styles.container}>
            <Meta />
            <Header selected={PageRoute.BLOG} />
            <main className={styles.main}>
                <p>Blog</p>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;
