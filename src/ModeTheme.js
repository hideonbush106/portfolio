import { amber, grey } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
            ...amber,
            ...(mode === "dark" && {
                main: amber[300],
            }),
        },
        ...(mode === "dark" && {
            background: {
                default: '#060e17',
                paper: '#060e17',
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