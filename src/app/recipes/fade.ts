import { cva } from "../../../styled-system/css";

export const fade = cva({
    base: {
        bg: "background.raised",
        maskImage:
            "linear-gradient(to left, rgba(0,0,0,1), 98%, rgba(0,0,0,0))",
    },
});
