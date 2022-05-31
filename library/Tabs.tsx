import classnames from "classnames";
import Link from "next/link";
import React from "react";
import styles from "./tabs.module.css";

type TabTitle = {
    displayName: string;
    slug: string;
};

interface TabProps {
    initiallySelected?: string;
    tabs: TabTitle[];
}

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
                className={classnames(styles.title, {
                    [`${styles.hoveredTitle}`]: isHovered,
                    [`${styles.selectedTitle}`]: selected,
                })}
            >
                {title}
            </a>
        </Link>
    );
};

const TitleContainer: React.FC<{ tabs: TabTitle[]; selected: string }> = ({
    tabs,
    selected,
}) => {
    return (
        <nav className={styles.container}>
            {tabs.map((t) => {
                return (
                    <Title
                        title={t.displayName}
                        selected={selected === t.slug}
                        slug={t.slug}
                    />
                );
            })}
        </nav>
    );
};

export const Tabs: React.FC<TabProps> = ({ tabs, initiallySelected }) => {
    const [selected, setSelected] = React.useState(
        initiallySelected || tabs[0].slug
    );

    return (
        <div>
            <TitleContainer tabs={tabs} selected={selected} />
        </div>
    );
};
