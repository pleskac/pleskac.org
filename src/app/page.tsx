import { css } from "../../styled-system/css";
import Home from "./home/page";

export default function Root() {
    // default to home
    return <>{Home()}</>;
}
