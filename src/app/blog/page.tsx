import { css } from "../../../styled-system/css";

export default function Blog() {
    return (
        <div
            className={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "50px",
            })}
        >
            Blog
        </div>
    );
}
