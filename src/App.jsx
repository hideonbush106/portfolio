import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout/Layout";
import Home from "./routes/Home/Home";
import Education from "./routes/Education/Education";
import Project from "./routes/Projects/Project";
import Contact from "./routes/Contact/Contact";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ColorModeContext from "./ColorModeContext";
import getDesignTokens from "./ModeTheme"
const App = () => {

  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
