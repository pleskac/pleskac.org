import { css } from "../../../styled-system/css";
import { NavBar } from "../components/nav";
import React from "react";
import { IntroSummary } from "../components/intro-summary";

export default function Home() {
    return (
        <>
            <NavBar selected={"resume"} />
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
                    <div
                        className={css({
                            bg: "background.raised",
                            maskImage:
                                "linear-gradient(to left, rgba(0,0,0,1), 95%, rgba(0,0,0,0))",
                            paddingLeft: "10%",
                            height: "100%",
                        })}
                    >
                        <h2
                            className={css({
                                fontWeight: "700",
                                fontSize: "30px",
                            })}
                        >
                            Experience
                        </h2>
                        <ul>
                            <li>Dropbox</li>
                            <li>Microsoft</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
