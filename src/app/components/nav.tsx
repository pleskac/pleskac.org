"use client";

import Link from "next/link";
import { css } from "../../../styled-system/css";

export type NavItem = "home" | "blog";

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
                width: "100px",
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
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: "border.subtle",
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
                    href="/blog"
                    selected={props.selected === "blog"}
                    title="Blog"
                />
            </nav>
        </div>
    );
}
