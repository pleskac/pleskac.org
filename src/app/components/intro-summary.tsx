import Link from "next/link";
import { css } from "../../../styled-system/css";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "./icons";

export function IntroSummary() {
    return (
        <div
            className={css({
                display: "flex",
                flexDir: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "4em",
                textAlign: "center",
            })}
        >
            <h2 className={css({ fontWeight: "200", fontSize: "5em" })}>
                Mark Pleskač
            </h2>
            <span>Software Engineer</span>
            <div
                className={css({
                    display: "flex",
                    gap: "2em",
                    color: "text.raised",
                    paddingTop: "2em",
                })}
            >
                <Link href="https://www.github.com/pleskac/" passHref>
                    <GitHubIcon />
                </Link>
                <Link href="https://www.linkedin.com/in/markpleskac/" passHref>
                    <LinkedInIcon />
                </Link>
                <Link href="https://www.instagram.com/pleskac/" passHref>
                    <InstagramIcon />
                </Link>
            </div>
        </div>
    );
}
