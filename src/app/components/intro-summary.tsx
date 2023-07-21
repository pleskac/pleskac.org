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
                padding: "50px",
                textAlign: "center",
            })}
        >
            <span className={css({ fontWeight: "700", fontSize: "30px" })}>
                Mark Pleskač
            </span>
            <span>Software Engineer</span>
            <div
                className={css({
                    display: "flex",
                    gap: "12px",
                    color: "text.raised",
                    paddingTop: "12px",
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
