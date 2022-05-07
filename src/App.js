import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { orange, red } from "@mui/material/colors";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      secondary: {
        main: "#ffebcd",
      },
    },
    typography: {
      fontFamily: "wancore",
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
