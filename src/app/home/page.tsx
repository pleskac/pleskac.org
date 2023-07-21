import { css } from "../../../styled-system/css";
import { NavBar } from "../components/nav";
import Link from "next/link";
import React from "react";
import { RandomImage } from "./random-image";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "../components/icons";
import { IntroSummary } from "../components/intro-summary";

export default function Home() {
    return (
        <>
            <NavBar selected={"home"} />
            <div
                className={css({
                    display: "grid",
                    gridTemplateColumns: "40% 60%",
                    height: "calc(100vh - 51px)",
                })}
            >
                <IntroSummary />
                <div
                    className={css({
                        position: "relative",
                        overflow: "hidden",
                    })}
                >
                    <RandomImage />
                </div>
            </div>
        </>
    );
}
