"use client";
import { css } from "../../../styled-system/css";

export function ClientExample() {
    return (
        <span
            className={css({
                fontWeight: "700",
            })}
        >
            I am on the client!
        </span>
    );
}
