"use client";
import Image from "next/image";
import React from "react";
import { fade } from "../recipes/fade";

const SingleImage = (props: {
    src: string;
    alt: string;
    onClick: () => void;
}) => {
    return (
        <Image
            onClick={props.onClick}
            className={fade({ fill: "image" })}
            src={props.src}
            alt={props.alt}
            fill
        />
    );
};

export const RandomImage = () => {
    const [rand, setRand] = React.useState(Math.floor(Math.random() * 4));

    const clickImage = React.useCallback(() => {
        setRand(Math.floor(Math.random() * 4));
    }, []);

    switch (rand) {
        case 0:
            return (
                <SingleImage
                    src="/reflections.jpeg"
                    alt="Mountains and their reflection in water"
                    onClick={clickImage}
                />
            );
        case 1:
            return (
                <SingleImage
                    src="/boya-lake.jpeg"
                    alt="A bird on a lake"
                    onClick={clickImage}
                />
            );
        case 2:
            return (
                <SingleImage
                    src="/salmon-glacier.jpeg"
                    alt="A glacier in Alaska"
                    onClick={clickImage}
                />
            );
        case 3:
            return (
                <SingleImage
                    src="/jaspar.jpeg"
                    alt="A mountain in Canada"
                    onClick={clickImage}
                />
            );
        default:
            return null;
    }
};
