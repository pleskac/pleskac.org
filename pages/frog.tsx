import styles from "./Page.module.css";
import { Meta } from "../library/layout";

const Frog: React.FC = () => {
    return (
        <div className={styles.container}>
            <Meta />
            {`What's the difference between a frog?`}
        </div>
    );
};

export default Frog;
