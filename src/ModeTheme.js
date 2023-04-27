import { amber, blue, grey } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
            ...amber,
            ...(mode === "dark" && {
                main: amber[500],
            }),
        },
        ...(mode === "dark" && {
            background: {
                default: '#0a1929',
                paper: '#0a1929',
            },
        }),
        text: {
            ...(mode === "light"
                ? {
                    primary: grey[900],
                    secondary: grey[800],
                }
                : {
                    primary: "#fff",
                    secondary: grey[500],
                }),
        },
    },
});

export default getDesignTokens