"use client";
import React from "react";
import { css } from "../../../styled-system/css";

export function ClientExample() {
    const [value, setValue] = React.useState(0);
    const update = () => setValue(value + 1);
    return (
        <>
            <span
                className={css({
                    fontWeight: "700",
                })}
            >
                I am on the client!
            </span>
            <button
                className={css({
                    backgroundColor: "background.raised",
                    color: "text",
                    padding: "4px 8px",
                    borderColor: "border",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    minWidth: "160px",
                })}
                onClick={update}
            >
                Client Counter: {value}
            </button>
        </>
    );
}
