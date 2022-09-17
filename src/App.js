import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { orange, red } from "@mui/material/colors";
import About from "./pages/About";
import EnterpriseBusinessSol from "./pages/solutions/enterprise-business-solutions";
import EnterpriseNetwoekInf from "./pages/solutions/enterprise-network-infrastructure";
import FiberToTheHome from "./pages/solutions/fiber-to-the-home";
import AdvancedBusinessTelephone from "./pages/solutions/advanced-business-telephone";

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
      h1: {
        fontFamily: "wancore-header",
      },
      h2: {
        fontFamily: "wancore-header",
      },
      h3: {
        fontFamily: "wancore-header",
      },
      h4: {
        fontFamily: "wancore-header",
      },
      h5: {
        fontSize: "30px",
      },
      h6: {
        fontSize: "25px",
      },
      body1: {
        fontSize: "15px",
      },
      body2: {
        fontSize: "20px",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/enterprise-business-solutions"
              element={<EnterpriseBusinessSol />}
            />
            <Route
              path="/enterprise-network-infrastructure"
              element={<EnterpriseNetwoekInf />}
            />
            <Route path="/fiber-to-the-home" element={<FiberToTheHome />} />
            <Route
              path="/advanced-business-telephone"
              element={<AdvancedBusinessTelephone />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
