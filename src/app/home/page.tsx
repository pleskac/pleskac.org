import { css } from "../../../styled-system/css";
import { NavBar } from "../components/nav";
import React from "react";
import { IntroSummary } from "../components/intro-summary";

export default function Home() {
    return (
        <>
            <NavBar selected={"home"} />
            <div
                className={css({
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center',
                })}
            >
                <IntroSummary />
            </div>
        </>
    );
}
