import { css } from "../../../styled-system/css";
import { NavBar } from "../components/nav";
import { ClientExample } from "./clientexample";

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
                <span>Blog. I am on the server!</span>
                <br />
                <ClientExample />
            </div>
        </>
    );
}
