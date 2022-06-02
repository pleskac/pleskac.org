import { Link } from "library/components";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => (
    <footer className={styles.footer}>
        <Link href="https://github.com/pleskac/pleskac.org">Code</Link>
    </footer>
);
