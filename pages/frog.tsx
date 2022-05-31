import styles from "./Index.module.css";
import { Meta } from "./components/meta";

const Frog: React.FC = () => {
    return (
        <div className={styles.container}>
            <Meta />
            What's the difference between a frog?
        </div>
    );
};

export default Frog;
