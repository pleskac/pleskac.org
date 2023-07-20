import { css } from "../../../styled-system/css";

export default function Home() {
    return (
        <div
            className={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "50px",
            })}
        >
            Home
        </div>
    );
}
