import React from "react";
import { css } from "../../../styled-system/css";
import { Dropbox, Microsoft } from "../components/icons";
import { IntroSummary } from "../components/intro-summary";
import { NavBar } from "../components/nav";

const H2 = (props: { children: React.ReactNode }) => (
    <h2
        className={css({
            fontWeight: "600",
            fontSize: "2.5em",
            paddingLeft: "5%",
            paddingTop: "1.5em",
        })}
    >
        {props.children}
    </h2>
);

const H3 = (props: { children: React.ReactNode }) => (
    <h3
        className={css({
            fontWeight: "400",
            fontSize: "2em",
            paddingLeft: "5%",
            paddingTop: "1em",
            paddingBottom: "0.5em",
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
            gap: "0.5em",
        })}
    >
        {props.children}
    </div>
);

const ResumeHeader = (props: { title: string; icon: React.ReactNode }) => (
    <H3>
        <FlexRow>
            {props.icon}
            {props.title}
        </FlexRow>
    </H3>
);

const ResumeDetail = (props: {
    dates: string;
    title: string;
    subdetails: { title: string; description?: string }[];
}) => (
    <div
        className={css({
            borderLeftWidth: "2px",
            borderLeftStyle: "solid",
            borderLeftColor: "border",
            paddingLeft: "1em",
            marginLeft: "5%",
            display: "flex",
            flexDir: "column",
            gap: "0.5em",
        })}
    >
        <span className={css({ color: "text.raised" })}>{props.dates}</span>
        <span className={css({ fontWeight: "700", fontSize: "20px" })}>
            {props.title}
        </span>
        {props.subdetails && (
            <ul>
                {props.subdetails.map((team, index) => (
                    <li
                        key={index}
                        className={css({
                            borderLeftWidth: "0",
                            borderLeftStyle: "solid",
                            borderLeftColor: "border",
                            display: "flex",
                            flexDir: "column",
                            paddingLeft: "1em",
                            gap: "0.5em",
                        })}
                    >
                        <span className={css({ fontSize: "1.25em" })}>{team.title}</span>
                        <p className={css({ color: "text.raised" })}>
                            {team.description}
                        </p>
                    </li>
                ))}</ul>)}
    </div>
);

export default function Home() {
    return (
        <div className={css({
            height: "100dvh",
            overflow: 'hidden'
        })}>
            <NavBar selected={"resume"} />
            <div
                className={css({
                    minHeight: 0,
                    display: "grid",
                    gridTemplateColumns: "1",
                    height: "100%",
                    position: "relative",
                    overflowY: 'auto',
                    paddingBottom: '1em',
                    lg: {
                        overflow: 'hidden',
                        gridTemplateColumns: "40% 60%",
                    }
                })}
            >
                <IntroSummary />
                <main className={css({ background: "background.raised", paddingBottom: '3em', lg: { overflowY: 'auto' } })}>
                    <div>
                        <H2>Experience</H2>
                        <ResumeHeader icon={<Dropbox />} title="Dropbox" />
                        <ResumeDetail
                            dates="2018 - present"
                            title="Senior Software Engineer"
                            subdetails={[
                                {
                                    title: "Design Systems - Front End",
                                    description:
                                        "Component level work and distribution infrastructure with an eye for the integration. Design tokens, theming, packages, accessibility, migrations, and more. Typescript, React, Python.",
                                },
                                {
                                    title: "Search and Browse - Full Stack",
                                    description:
                                        "Features and experiments in the web. Performance optimizations. Typescript, React, Python.",
                                },
                            ]}
                        />
                        <ResumeHeader
                            icon={<Microsoft />}
                            title="Microsoft"
                        />
                        <ResumeDetail
                            dates="2013 - 2018"
                            title="Software Engineer II"
                            subdetails={[
                                {
                                    title: "Azure Boards - Full Stack",
                                    description:
                                        "Worked on the next generation of Azure Boards UI. Typescript, React, C#, MSSQL.",
                                },
                                {
                                    title: "PowerApps - Back End (Distributed Systems)",
                                    description:
                                        "Distributed logging and hosting infrastructure. Created Microsoft Flow Connectors and infrastructure. C#, Docker, Kusto.",
                                },
                                {
                                    title: "Dynamics - Back End (Performance)",
                                    description:
                                        "Optimized SQL stored procedures, optimized and fixed memory leaks in our C kernel, created load testing profiles and hooks into the product. C++, Javascript, MSSQL, C#",
                                },
                                {
                                    title: "Intern (Summer 2012)",
                                },
                                {
                                    title: "Intern (Summer 2011)",
                                },
                            ]}
                        />
                    </div>
                    <div>
                        <H2>Education</H2>
                        <ResumeHeader icon={<></>} title="University of Nebraska" />
                        <ResumeDetail
                            dates="Graduation: 2012"
                            title="Bachelors of Science in Computer Engineering"
                            subdetails={[
                                {
                                    title: "Raikes School of Computer Science and Mangement"
                                },
                                {
                                    title: "Business Minor"
                                }
                            ]}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}
