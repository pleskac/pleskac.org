import { css } from "../../../styled-system/css";
import { NavBar } from "../components/nav";

export default function Blog() {
    return (
        <>
            <NavBar selected={"blog"} />
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
        </>
    );
}
