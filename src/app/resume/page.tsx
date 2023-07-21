import { css } from "../../../styled-system/css";
import { NavBar } from "../components/nav";
import React from "react";
import { IntroSummary } from "../components/intro-summary";
import { fade } from "../recipes/fade";
import { Dropbox, Microsoft } from "../components/icons";

const H2 = (props: { children: React.ReactNode }) => (
    <h2
        className={css({
            fontWeight: "700",
            fontSize: "30px",
            paddingLeft: "5%",
            paddingTop: "12px",
        })}
    >
        {props.children}
    </h2>
);

const H3 = (props: { children: React.ReactNode }) => (
    <h3
        className={css({
            fontWeight: "700",
            fontSize: "22px",
            paddingLeft: "5%",
            paddingTop: "18px",
            paddingBottom: "12px",
        })}
    >
        {props.children}
    </h3>
);

const FlexRow = (props: { children: React.ReactNode }) => (
    <div
        className={css({
            display: "flex",
            alignItems: "center",
            gap: "6px",
        })}
    >
        {props.children}
    </div>
);

const ExperienceHeader = (props: { title: string; icon: React.ReactNode }) => (
    <H3>
        <FlexRow>
            {props.icon}
            {props.title}
        </FlexRow>
    </H3>
);

const ExperienceDetail = (props: {
    dates: string;
    title: string;
    teams: { team: string; description?: string }[];
}) => (
    <div
        className={css({
            borderLeftWidth: "2px",
            borderLeftStyle: "solid",
            borderLeftColor: "border",
            padding: "12px",
            marginLeft: "5%",
            display: "flex",
            flexDir: "column",
            gap: "6px",
        })}
    >
        <span className={css({ color: "text.raised" })}>{props.dates}</span>
        <span className={css({ fontWeight: "700", fontSize: "20px" })}>
            {props.title}
        </span>
        {props.teams.map((team, index) => (
            <div
                key={index}
                className={css({
                    borderLeftWidth: "0px",
                    borderLeftStyle: "solid",
                    borderLeftColor: "border",
                    display: "flex",
                    flexDir: "column",
                    paddingLeft: "12px",
                    gap: "6px",
                })}
            >
                <span className={css({ fontSize: "18px" })}>{team.team}</span>
                <p className={css({ color: "text.raised" })}>
                    {team.description}
                </p>
            </div>
        ))}
    </div>
);

export default function Home() {
    return (
        <>
            <NavBar selected={"resume"} />
            <div
                className={css({
                    display: "grid",
                    gridTemplateColumns: "40% 60%",
                    height: "calc(100vh - 51px)",
                    position: "relative",
                })}
            >
                <IntroSummary />
                <div
                    className={css({
                        position: "relative",
                        overflowX: "hidden",
                        overflowY: "auto",
                    })}
                >
                    <div className={fade({ fill: "bg" })}>
                        <div>
                            <H2>Experience </H2>
                            <ExperienceHeader
                                icon={<Dropbox />}
                                title="Dropbox"
                            />
                            <ExperienceDetail
                                dates="2018 - present"
                                title="Senior Software Engineer"
                                teams={[
                                    {
                                        team: "Design Systems",
                                        description:
                                            "Component level work and distribution infrastructure. Typescript, React, Python.",
                                    },
                                    {
                                        team: "Retrieval (Search and Browse)",
                                        description:
                                            "Features and experiments in the web. Performance optimizations. Typescript, React, Python.",
                                    },
                                ]}
                            />
                            <ExperienceHeader
                                icon={<Microsoft />}
                                title="Microsoft"
                            />
                            <ExperienceDetail
                                dates="2013 - 2018"
                                title="Software Engineer II"
                                teams={[
                                    {
                                        team: "Azure Boards - Front End",
                                        description:
                                            "Worked on the next generation of Azure Boards UI. Typescript, React, C#.",
                                    },
                                    {
                                        team: "PowerApps - Distributed Systems",
                                        description:
                                            "Distributed logging and hosting infrastructure. Created Microsoft Flow Connectors and infrastructure. C#, Kusto.",
                                    },
                                    {
                                        team: "Dynamics - Back End Performance",
                                        description:
                                            "Optimized SQL stored procedures, optimized and fixed memory leaks in our C kernel, created load testing profiles and hooks into the product. C, Javascript, SQL, C#",
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
