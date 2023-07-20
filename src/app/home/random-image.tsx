import Image from "next/image";
import React from "react";
import { css } from "../../../styled-system/css";

export const RandomImage = () => {
    const rand = Math.floor(Math.random() * 3);

    switch (rand) {
        case 0:
            return (
                <Image
                    className={css({
                        objectFit: "cover",
                        maskImage:
                            "linear-gradient(to left, rgba(0,0,0,1), 90%, rgba(0,0,0,0))",
                    })}
                    src="/reflections.jpeg"
                    alt="Mountains and their reflection in water"
                    fill
                />
            );
        case 1:
            return (
                <Image
                    className={css({
                        objectFit: "cover",
                        maskImage:
                            "linear-gradient(to left, rgba(0,0,0,1), 90%, rgba(0,0,0,0))",
                    })}
                    src="/boya-lake.jpeg"
                    alt="A bird on a lake"
                    fill
                />
            );
        case 2:
            return (
                <Image
                    className={css({
                        objectFit: "cover",
                        maskImage:
                            "linear-gradient(to left, rgba(0,0,0,1), 90%, rgba(0,0,0,0))",
                    })}
                    src="/salmon-glacier.jpeg"
                    alt="A glacier in Alaska"
                    fill
                />
            );
        default:
            return null;
    }
};
