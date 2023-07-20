"use client";

import Link from "next/link";
import { css } from "../../../styled-system/css";

export type NavItem = "home" | "blog";

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
                    gap: "12px",
                })}
            >
                <Link
                    className={css({
                        bg: { _hover: "background.raised" },
                        padding: "12px",
                        fontWeight: props.selected === "home" ? 700 : undefined,
                    })}
                    href="/home"
                >
                    Home
                </Link>
                <Link
                    className={css({
                        bg: { _hover: "background.raised" },
                        padding: "12px",
                        fontWeight: props.selected === "blog" ? 700 : undefined,
                    })}
                    href="/blog"
                >
                    Blog
                </Link>
            </nav>
            <input
                placeholder="search"
                className={css({
                    bg: "background.raised",
                    color: "text.raised",
                    padding: "2px",
                    margin: "3px",
                })}
            />
        </div>
    );
}
