import classnames from "classnames";
import Link from "next/link";
import React from "react";
import styles from "./Tabs.module.css";

type TabTitle = {
    displayName: string;
    slug: string;
};

const Title: React.FC<{ title: string; slug: string; selected: boolean }> = ({
    title,
    slug,
    selected,
}) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const onEnter = () => {
        setIsHovered(true);
    };

    const onLeave = () => {
        setIsHovered(false);
    };

    return (
        <Link href={slug}>
            <a
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                className={classnames(styles.title, "focus_ring", {
                    [`${styles.hoveredTitle}`]: isHovered,
                    [`${styles.selectedTitle}`]: selected,
                })}
            >
                {title}
            </a>
        </Link>
    );
};

export const Tabs: React.FC<{ tabs: TabTitle[]; selected: string }> = ({
    tabs,
    selected,
}) => {
    return (
        <nav className={styles.container}>
            {tabs.map((t) => {
                return (
                    <Title
                        key={t.slug}
                        title={t.displayName}
                        selected={selected === t.slug}
                        slug={t.slug}
                    />
                );
            })}
        </nav>
    );
};
