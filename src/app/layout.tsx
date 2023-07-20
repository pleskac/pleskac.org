import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { css } from "../../styled-system/css";
import { NavBar } from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mark Pleskac",
    description: "pleskac.org",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={css({
                    bg: "background",
                    color: "text",
                })}
            >
                {children}
            </body>
        </html>
    );
}
