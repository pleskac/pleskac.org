import classNames from "classnames";
import React from "react";
import styles from "./Input.module.css";

export const Input: React.FC<React.HTMLProps<HTMLInputElement>> = ({
    ...props
}) => {
    return (
        <input {...props} className={classNames("focus_ring", styles.input)} />
    );
};
