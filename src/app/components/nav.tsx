import Link from "next/link";
import { css } from "../../../styled-system/css";

export function NavBar() {
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
                    })}
                    href="/home"
                >
                    Home
                </Link>
                <Link
                    className={css({
                        bg: { _hover: "background.raised" },
                        padding: "12px",
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
