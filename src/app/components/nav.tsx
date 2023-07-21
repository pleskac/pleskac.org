"use client";

import Link from "next/link";
import { css } from "../../../styled-system/css";

export type NavItem = "home" | "blog" | "resume";

function NavItemComponent(props: {
    selected: boolean;
    title: string;
    href: string;
}) {
    const { title, href, selected } = props;
    return (
        <Link
            className={css({
                bg: { _hover: "background.raised" },
                borderBottomStyle: "solid",
                borderBottomColor: "border",
                borderBottomWidth: selected ? "2px" : 0,
                marginBottom: selected ? 0 : "2px",
                padding: "12px",
                fontWeight: selected ? 700 : undefined,
                minWidth: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            })}
            href={href}
        >
            {title}
        </Link>
    );
}

export function NavBar(props: { selected: NavItem }) {
    return (
        <div
            className={css({
                position: "sticky",
                display: "flex",
                top: 0,
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: "border.subtle",
                backgroundColor: "background",
            })}
        >
            <nav
                className={css({
                    display: "flex",
                    gap: "2px",
                })}
            >
                <NavItemComponent
                    href="/home"
                    selected={props.selected === "home"}
                    title="Home"
                />
                <NavItemComponent
                    href="/resume"
                    selected={props.selected === "resume"}
                    title="Resume"
                />
                <NavItemComponent
                    href="/experimental"
                    selected={props.selected === "blog"}
                    title="Experimental"
                />
            </nav>
        </div>
    );
}
