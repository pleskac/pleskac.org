import { defineConfig } from "@pandacss/dev";

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    include: ["./src/**/*.{js,jsx,ts,tsx}"],
    exclude: [],
    theme: {
        tokens: {
            colors: {
                black: { DEFAULT: { value: "#000" }, 1: { value: "#343434" } },
                white: { DEFAULT: { value: "#fff" }, 1: { value: "#cfcfcf" } },
            },
        },
        semanticTokens: {
            colors: {
                background: {
                    DEFAULT: {
                        value: {
                            base: "{colors.white}",
                            _osDark: "{colors.black}",
                        },
                    },
                    raised: {
                        value: {
                            base: "{colors.white.1}",
                            _osDark: "{colors.black.1}",
                        },
                    },
                },
                border: {
                    DEFAULT: {
                        value: {
                            base: "{colors.black.1}",
                            _osDark: "{colors.white.1}",
                        },
                    },
                    subtle: {
                        value: {
                            base: "{colors.white.1}",
                            _osDark: "{colors.black.1}",
                        },
                    },
                },
                text: {
                    DEFAULT: {
                        value: {
                            base: "{colors.black}",
                            _osDark: "{colors.white}",
                        },
                    },
                    raised: {
                        value: {
                            base: "{colors.black.1}",
                            _osDark: "{colors.white.1}",
                        },
                    },
                },
            },
        },
    },
    outdir: "styled-system",
});
