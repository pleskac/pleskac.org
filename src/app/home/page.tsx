import { css } from "../../../styled-system/css";
import { NavBar } from "../components/nav";

export default function Home() {
    return (
        <>
            <NavBar selected={"home"} />
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
        </>
    );
}
