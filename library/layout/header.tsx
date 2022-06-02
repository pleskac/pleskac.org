import { Tabs } from "library/components";
import { Input } from "library/components/input";
import styles from "./Header.module.css";

export const enum PageRoute {
    "HOME" = "/",
    "BLOG" = "/blog",
}

interface HeaderProps {
    selected: PageRoute;
}
export const Header: React.FC<HeaderProps> = ({ selected }) => (
    <div className={styles.header}>
        <div>
            <Tabs
                tabs={[
                    { displayName: "Home", slug: "/" },
                    { displayName: "Blog", slug: "/blog" },
                ]}
                selected={selected}
            />
        </div>
        <div className={styles.headerSearch}>
            <Input placeholder="search" />
        </div>
    </div>
);
